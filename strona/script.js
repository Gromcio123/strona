
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

   
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

   
    if (name === '' || email === '' || message === '') {
        alert('Proszę wypełnić wszystkie pola formularza.');
    } else {
        
        document.getElementById('responseMessage').style.display = 'block'; 
        document.getElementById('contactForm').reset(); 
    }
});
