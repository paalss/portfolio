const footer = document.querySelector('footer')

footer.innerHTML = `
  <div class="container">
    <b>Du finner meg på:</b>
    <ul>
      <li>
        <a href="https://github.com/paalss" target="_blank" rel="noopener noreferrer">
          <span class="icon fa fa-github"></span><span class="text">Github (paalss)</span>
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/pal.stakvik" target="_blank" rel="noopener noreferrer">
          <span class="icon fa fa-facebook"></span><span class="text">Facebook</span>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/pal-stakvik/" target="_blank" rel="noopener noreferrer">
          <span class="icon fa fa-linkedin"></span><span class="text">Linkedin</span>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/gassosaman/" target="_blank" rel="noopener noreferrer">
          <span class="icon fa fa-instagram"></span><span class="text">Instagram (gassosaman)</span>
        </a>
      </li>
      <li>
        <a href="https://scratch.mit.edu/users/pa0110/" target="_blank" rel="noopener noreferrer">
          <span class="icon fa"><img src="images/scratchlogo-transparent-white.png" alt="Scratch logo"></span><span class="text">Scratch (pa0110)</span>
        </a>
      </li>
    </ul>
    
    <b>Mail:</b>
    <ul>
      <li>
        <a href="mailto:paalss94@gmail.com">
          <span class="icon fa fa-envelope"></span><span class="text">paalss94@gmail.com</span>
        </a>
      </li>
      <li>
        <span class="icon fa"></span><button id="copyMailButton"><i class="fa fa-clipboard" aria-hidden="true"></i> Kopier mailadresse</button>
      </li>
    </ul>
  </div>
`

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
      feedback.outerHTML = '<span id="feedback">Kopiering feilet<br><span class="icon fa"></span></span>'
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