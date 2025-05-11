document.addEventListener('DOMContentLoaded', function () {
    showLogin(); // Mostrar login por defecto

    // Obtener usuarios del localStorage o cargar los predeterminados
    let users = JSON.parse(localStorage.getItem('users')) || [
        { email: "Yuranytamara@gmail.com", password: "Tamara123" },
        { email: "jairovalencia100K19@gmail.com", password: "100K1718" },
        { email: "isagoz1708@gmail.com", password: "Isa123" },
    ];

    function saveUsers() {
        localStorage.setItem('users', JSON.stringify(users));
    }

    function authenticate(email, password) {
        return users.some(user => user.email === email && user.password === password);
    }

    function isEmailRegistered(email) {
        return users.some(user => user.email === email);
    }

    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const email = document.getElementById('loginEmail').value.trim();
            const password = document.getElementById('loginPassword').value.trim();

            if (authenticate(email, password)) {
                // Guardar sesión (opcional)
                localStorage.setItem('currentUser', email);
                window.location.href = 'form.html';
            } else {
                alert('Correo o contraseña incorrectos');
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const email = document.getElementById('registerEmail').value.trim();
            const password = document.getElementById('registerPassword').value.trim();
            const confirmPassword = document.getElementById('confirmPassword').value.trim();

            if (password !== confirmPassword) {
                alert('Las contraseñas no coinciden');
                return;
            }

            if (isEmailRegistered(email)) {
                alert('Este correo ya está registrado');
                return;
            }

            users.push({ email, password });
            saveUsers();

            alert('Registro exitoso, ahora puedes iniciar sesión');
            showLogin();
        });
    }
});

function showLogin() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    if (loginForm && registerForm) {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    }
}

function showRegister() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    if (loginForm && registerForm) {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    }
}

// Mostrar/ocultar contraseña
function togglePassword(fieldId) {
    const input = document.getElementById(fieldId);
    input.type = input.type === 'password' ? 'text' : 'password';
}

// Verificación en tiempo real de contraseñas coincidentes
document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('registerPassword');
    const confirmInput = document.getElementById('confirmPassword');
    const mismatchText = document.getElementById('passwordMismatch');

    function checkMatch() {
        if (confirmInput.value && passwordInput.value !== confirmInput.value) {
            mismatchText.style.display = 'block';
        } else {
            mismatchText.style.display = 'none';
        }
    }

    passwordInput.addEventListener('input', checkMatch);
    confirmInput.addEventListener('input', checkMatch);
});