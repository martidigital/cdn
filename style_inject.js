/**
 * Injects custom CSS with default !important into an iframe of choice, overriding their styles.
 * Helpful when companies hide customization for elements behind a paywall. :)
 * @param {string} iframeId id of the iframe to be injected into
 * @param {string} styleElementId id of the stylesheet to be injected
 */
function customizeIframe(iframeId, styleElementId) {
  // Observer used since Iframe load listener is unpredictable, easier to just wait for statechange and then inject.
  const observer = new MutationObserver(() => {
    const iframe = document.getElementById(iframeId);
    if (iframe) {
      observer.disconnect();

      if (iframe.contentDocument?.readyState === 'complete') {
        customizeForm();
      } else {
        iframe.addEventListener('load', customizeForm, { once: true });
      }

      function customizeForm() {
        const sheet = document.getElementById(styleElementId);
        const style = document.createElement("style");
        style.textContent = sheet.textContent.replaceAll(/;/g, ' !important;'); // auto-!important; necessary to override hubspot defaults
        iframe.contentDocument.head.appendChild(style);
      }
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
}