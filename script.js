document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' }
    });

    const data = await response.json();

    if (response.status === 200) {
        document.getElementById('message').textContent = data.message;
        document.getElementById('message').style.color = "green";
    } else {
        document.getElementById('message').textContent = data.message;
        document.getElementById('message').style.color = "red";
    }
});
