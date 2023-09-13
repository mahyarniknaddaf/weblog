
var messagebox;
var messageboxmessage;


messagebox = document.getElementById('messagebox');
setInterval(timemessageboxclose, 5000);
function timemessageboxclose() {
    messagebox = document.getElementById('messagebox');
    messagebox.style.display = "none";
}


function messageboxclosefunction() {
    messagebox = document.getElementById('messagebox');
    messagebox.style.display = "none";
}
window.addEventListener('load', loadfunction);
window.addEventListener('online', onlinefunction);
window.addEventListener('offline', offlinefunction);

function loadfunction() {
    messagebox = document.getElementById('messagebox');
    messageboxmessage = document.getElementById('messagebox-message');

    messagebox.style.display = "block";
    messagebox.style.backgroundColor = "green";
    messageboxmessage.innerHTML = "Page loaded successfully";
}

function onlinefunction() {
    messagebox = document.getElementById('messagebox');
    messageboxmessage = document.getElementById('messagebox-message');

    messagebox.style.display = "block";
    messagebox.style.backgroundColor = "yellow";
    messageboxmessage.innerHTML = "The system is connected to the Internet";
}

function offlinefunction() {
    messagebox = document.getElementById('messagebox');
    messageboxmessage = document.getElementById('messagebox-message');

    messagebox.style.display = "block";
    messagebox.style.backgroundColor = "red";
    messageboxmessage.innerHTML = "The system access to the Internet was interrupted";
}