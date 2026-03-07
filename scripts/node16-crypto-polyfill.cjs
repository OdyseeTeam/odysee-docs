// Polyfill Web Crypto global for Node 16 where globalThis.crypto may be undefined.
if (typeof globalThis.crypto === "undefined") {
  const crypto = require("crypto");
  if (crypto && crypto.webcrypto) {
    globalThis.crypto = crypto.webcrypto;
  }
}
