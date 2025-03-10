
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Pobieramy wartości wprowadzonych danych
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Sprawdzamy, czy wszystkie pola są wypełnione
    if (name === '' || email === '' || message === '') {
        alert('Proszę wypełnić wszystkie pola formularza.');
    } else {
        // Jeśli wszystko jest OK, wyświetlamy komunikat i resetujemy formularz
        document.getElementById('responseMessage').style.display = 'block'; // Wyświetlamy wiadomość
        document.getElementById('contactForm').reset(); // Opcjonalnie: czyścimy formularz
    }
});