const form = document.getElementById('register-form');
const message = document.getElementById('message');
const btn = document.getElementById('submit-btn');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirm = document.getElementById('confirm-password').value;

  if (password !== confirm) {
    message.className = 'error';
    message.textContent = 'Passwords do not match.';
    return;
  }

//   Disable users multiple clicking 
  btn.disabled = true;
  btn.textContent = 'Creating...';

  const res = await fetch('/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, email, password })
  });

  const result = await res.json();

  if (result.error) {
    message.className = 'error';
    message.textContent = result.error;
    btn.disabled = false;
    btn.textContent = 'Create Account';
  } else {
    message.className = 'success';
    message.textContent = 'Account created! Redirecting...';
    setTimeout(() => window.location.href = '/login', 1500);
  }
});