 // Form validation
 const form = document.getElementById('contact-form');

 form.addEventListener('submit', (e) => {
     e.preventDefault();

     const name = document.getElementById('name').value;
     const email = document.getElementById('email').value;
     const message = document.getElementById('message').value;

     if (name === '' || email === '' || message === '') {
         alert('Please fill in all fields.');
         return;
     }

     if (!validateEmail(email)) {
         alert('Invalid email address.');
         return;
     }

     // Send the form data to the server or perform other actions
     console.log('Form submitted successfully.');
 });

 function validateEmail(email) {
     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
     return emailRegex.test(email);
 }

 // Dynamic quote update
 const quoteButton = document.getElementById('quote-button');
 const quoteElement = document.getElementById('quote');

 let quotes = [
     'Believe you can and you\'re halfway there. - Theodore Roosevelt',
     'The only way to do great work is to love what you do. - Steve Jobs',
     'Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill',
     // Add more quotes to the array
 ];

 quoteButton.addEventListener('click', () => {
     const randomIndex = Math.floor(Math.random() * quotes.length);
     quoteElement.textContent = quotes[randomIndex];
 });