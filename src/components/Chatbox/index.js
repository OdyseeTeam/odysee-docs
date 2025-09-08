import React, { useState, useEffect, useRef } from 'react';
import styles from './styles.module.css';
import { LoadingDots, SimpleMarkdown } from './Markdown';


async function askStream(question, onToken, onDone, onError) {
  const ctrl = new AbortController();

  (async () => {
    try {
      const res = await fetch("https://chatapi.help.odysee.tv/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: question, stream: true, rewrite_query: true, max_num_results: 8 }),
        signal: ctrl.signal
      });
      if (!res.ok || !res.body) throw new Error("Stream failed");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split(/\r?\n/);
        buffer = lines.pop() ?? "";
        for (const line of lines) {
          if (!line.startsWith("data:")) continue;
          const payload = line.slice(5).trim();
          if (!payload) continue;
          try {
            const obj = JSON.parse(payload);
            const chunk =
              typeof obj.response === "string" ? obj.response :
              typeof obj.delta === "string"    ? obj.delta    :
              typeof obj.content === "string"  ? obj.content  : "";
            if (chunk) onToken(chunk);
          } catch {}
        }
      }
      onDone?.();
    } catch (e) {
      onError?.(e);
    }
  })();

  // return a cancel function for a “Stop” button
  return () => ctrl.abort();
}


const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const chatBodyRef = useRef(null);
  const inputRef = useRef(null);

  const initialMessage = "Hey! Welcome to the Odysee Help Hub. Let me know if you have any questions or if there is anything I can help with!";

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  
  useEffect(() => {
    let index = 0;
    let streamedMessage = '';
    setMessages([{ sender: 'bot', text: '' }]);
    const interval = setInterval(() => {
      if (index < initialMessage.length) {
        streamedMessage += initialMessage[index];
        setMessages([{ sender: 'bot', text: streamedMessage }]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 15);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === '' || isStreaming) return;

    const userMessage = { sender: 'user', text: inputValue };
    setMessages(prev => [...prev, userMessage, { sender: 'bot', text: '' }]);
    setInputValue('');
    setIsStreaming(true);
    inputRef.current?.focus();

    askStream(
      inputValue,
      (token) => {
        setMessages(prev => {
          const lastMessage = prev[prev.length - 1];
          const updatedLastMessage = { ...lastMessage, text: lastMessage.text + token };
          return [...prev.slice(0, -1), updatedLastMessage];
        });
      },
      () => {
        setIsStreaming(false);
        inputRef.current?.focus();
      },
      (error) => {
        console.error("Streaming error:", error);
        setMessages(prev => {
            const lastMessage = prev[prev.length - 1];
            const updatedLastMessage = { ...lastMessage, text: "Sorry, something went wrong." };
            return [...prev.slice(0, -1), updatedLastMessage];
        });
        setIsStreaming(false);
        inputRef.current?.focus();
      }
    );
  };

  return (
    <div className={styles.chatbox}>
      <div className={styles.chatHeader}>
        <img src="https://help.odysee.tv/img/g_64x64p_RGB_LadyFungus.png" alt="Lady Fungus" className={styles.avatar} />
        <div className={styles.chatTitle}>Lady Fungus</div>
      </div>
      <div className={styles.chatBody} ref={chatBodyRef}>
        {messages.map((msg, index) => {
          const isLoading = msg.sender === 'bot' && isStreaming && msg.text === '';
          return (
            <div key={index} className={`${styles.message} ${styles[msg.sender]} ${isLoading ? styles.loading : ''}`}>
              {isLoading ? (
                <LoadingDots />
              ) : (
                <SimpleMarkdown text={msg.text} />
              )}
            </div>
          );
        })}
      </div>
      <div className={styles.chatInput}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Type your message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button onClick={handleSendMessage} disabled={isStreaming}>
          {isStreaming ? '...' : 'Send'}
        </button>
      </div>
    </div>
  );
};

export default Chatbox;
