var script = document.createElement('script');

//Start openWhatsApp function to the script
script.innerHTML =
function openWhatsApp() {
        var whatsappNumber = '+94742889921';
        var text = 'Hello, I am contacting you from the website.';
        var url = 'https://api.whatsapp.com/send?phone=' + whatsappNumber + '&text=' + encodeURIComponent(text);
        window.open(url, '_blank');
    }
;
//End openWhatsApp function to the script

// Append the script to the head of the document
document.head.appendChild(script);

// Create a new div element for the WhatsApp logo
var whatsappLogo = document.createElement('div');

// Add the CSS to the div
whatsappLogo.style.width = '50px';
whatsappLogo.style.height = '50px';
whatsappLogo.style.backgroundImage = "url('img/whatsapp1.png')";
whatsappLogo.style.backgroundSize = 'cover';
whatsappLogo.style.position = 'fixed';
whatsappLogo.style.bottom = '28px';
whatsappLogo.style.right = '95px';
whatsappLogo.style.zIndex = '100';

// Add the onclick event to the div
whatsappLogo.onclick = openWhatsApp;

// Append the div to the body of the document
document.body.appendChild(whatsappLogo);