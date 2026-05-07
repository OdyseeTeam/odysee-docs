// Provide a Web Crypto global for runtimes where dependencies expect `crypto`
// to exist on the global object during module evaluation.
if (typeof globalThis.crypto === 'undefined' || typeof global.crypto === 'undefined') {
  const nodeCrypto = require('crypto');
  const webCrypto = nodeCrypto && nodeCrypto.webcrypto;

  if (webCrypto) {
    if (typeof globalThis.crypto === 'undefined') {
      globalThis.crypto = webCrypto;
    }
    if (typeof global.crypto === 'undefined') {
      global.crypto = webCrypto;
    }
  }
}
