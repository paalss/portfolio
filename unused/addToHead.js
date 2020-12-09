const head = document.querySelector('head')

// Add CSS
const cssLink = document.createElement('link')
head.appendChild(cssLink)
cssLink.setAttribute('rel', 'stylesheet')
cssLink.setAttribute('href', 'style.css')

// Add fonts
const fontLink = document.createElement('link')
head.appendChild(fontLink)
fontLink.setAttribute('rel', 'stylesheet')
fontLink.setAttribute('href', 'https://fonts.googleapis.com/css?family=Raleway:300,600,900&display=swap')

// Add font icons (github, facebook, linkedin etc. icons)
const fontIconsLink = document.createElement('link')
head.appendChild(fontIconsLink)
fontIconsLink.setAttribute('rel', 'stylesheet')
fontIconsLink.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css')