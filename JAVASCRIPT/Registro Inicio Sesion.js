function showLogin() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
}

function showRegister() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    showLogin(); // Mostrar formulario de inicio de sesión por defecto

    let users = [
        { email: "sergiioriivera7@gmail.com", password: "Sergio123" },
        { email: "Yuranytamara@gmail.com", password: "Tamara123" },
        { email: "jairovalencia100K19@gmail.com", password: "100K1718" },
        { email: "isagoz1708@gmail.com", password: "Isa123" },
    ];

    function authenticate(email, password) {
        return users.some(user => user.email === email && user.password === password);
    }

    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            if (authenticate(email, password)) {
                alert('Inicio de sesión exitoso');
                window.location.href = 'COMINGSOON.html';
            } else {
                alert('Correo o contraseña incorrectos');
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            if (password === confirmPassword) {
                users.push({ email: email, password: password });
                alert('Registro exitoso');
                showLogin();
            } else {
                alert('Las contraseñas no coinciden');
            }
        });
    }
});