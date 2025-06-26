function login() {
  const login = document.getElementById('login').value;
  const password = document.getElementById('password').value;
  const status = document.getElementById('status');

  if (login === 'admin' && password === 'rally2025') {
    status.innerText = 'Zalogowano pomyślnie';
    status.style.color = 'green';
  } else {
    status.innerText = 'Błędne dane logowania';
    status.style.color = 'red';
  }
}
