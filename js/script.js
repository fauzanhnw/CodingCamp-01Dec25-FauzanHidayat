welcomeMessage();

function welcomeMessage() {  
    let userResponse = prompt("Welcome to Our Website! Input your name:");    
    if (userResponse === null || userResponse.trim() === "") {
        userResponse = "Guest";
    }  
    document.getElementById("welcome-speech").innerHTML = "Hello, " + userResponse + "! Welcome to PT Asalkan Bahagia";
}
function validateForm() { }

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const submitButton = document.querySelector('button[type="button"]');
    const currentTimeSpan = document.getElementById('currentTime');

    function updateCurrentTime() {
        const now = new Date();
        const options = { weekday: 'short', year: 'numeric', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'shortOffset' };
        const timeString = now.toLocaleString('en-US', options).replace(/,/g, '');
        currentTimeSpan.textContent = timeString;
    }

    updateCurrentTime();

    submitButton.addEventListener('click', function(event) {

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !phone || !message) {
            alert('Please complete all input fields.');
            return;
        }

        document.getElementById('resultName').textContent = `Name : ${name}`;
        document.getElementById('resultEmail').textContent = `Email : ${email}`;
        document.getElementById('resultPhone').textContent = `Phone Number : ${phone}`;
        document.getElementById('resultMessage').textContent = `Message : ${message}`;

        updateCurrentTime();
        
        console.log('Form data captured and displayed.');
        
    });
});