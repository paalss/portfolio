prepareCopyButton()

function prepareCopyButton() {
  const button = document.getElementById('copyMailButton')
  const mailAddress = document.querySelector('footer .fa-envelope').nextElementSibling.innerHTML

  button.addEventListener('click', () => {
    var feedback = document.getElementById('feedback')
    if (feedback == null) {
      feedback = document.createElement('span')
    }
    button.parentNode.insertBefore(feedback, button)
    if (copyToClipboard(mailAddress)) {
      feedback.outerHTML = '<span id="feedback">Kopiert til utklippstavlen<br><span class="icon fa"></span></span>'
    } else {
      feedback.outerHTML = '<span id="feedback">Kopiering feilet<br><span class="icon far fa-clipboard"></span></span>'
    }
  })
}

// How do I copy to the clipboard in JavaScript?
// Løsningen til Greg Lowe
// https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript/33928558#33928558

// Copies a string to the clipboard. Must be called from within an
// event handler such as click. May return false if it failed, but
// this is not always possible. Browser support for Chrome 43+,
// Firefox 42+, Safari 10+, Edge and Internet Explorer 10+.
// Internet Explorer: The clipboard feature may be disabled by
// an administrator. By default a prompt is shown the first
// time the clipboard is used (per session).
function copyToClipboard(text) {
  if (window.clipboardData && window.clipboardData.setData) {
    // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
    return clipboardData.setData("Text", text);

  }
  else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
    var textarea = document.createElement("textarea");
    textarea.textContent = text;
    textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in Microsoft Edge.
    document.body.appendChild(textarea);
    textarea.select();
    try {
      return document.execCommand("copy");  // Security exception may be thrown by some browsers.
    }
    catch (ex) {
      console.warn("Copy to clipboard failed.", ex);
      return false;
    }
    finally {
      document.body.removeChild(textarea);
    }
  }
}