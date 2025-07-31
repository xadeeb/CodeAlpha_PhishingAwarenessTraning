document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Do you want to continue.');
  window.location.href = 'warning.html';
});
