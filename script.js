
function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const message = document.getElementById('message').value;
    const alertMessage = document.getElementById('alert-message');

    // Basic validation
    if (!name) {
        showError('name', 'Please enter a name.');
        return;
    } else {
        hideError('name');
    }

    if (!email && !number) {
        alertMessage.textContent = 'Either email or mobile number is required';
        alertMessage.classList.remove('hidden');
        return;
    }

    if (email && !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)) {
        showError('email', 'Please enter a valid email.');
        return;
    } else {
        hideError('email');
    }

  
    if (number && !/^[0-9]{10}$/.test(number)) {
        showError('number', 'Please enter a valid mobile number.');
        return;
    } else {
        hideError('number');
    }

    alertMessage.classList.add('hidden');
    alert('Form submitted successfully!');

    // You can now send the form data to your server if needed
}

function showError(inputId, message) {
    const inputElement = document.getElementById(inputId);
    const errorElement = inputElement.nextElementSibling;
    inputElement.classList.add('is-invalid');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    alertMessage.innerHTML.style.color = 'red';
}

function hideError(inputId) {
    const inputElement = document.getElementById(inputId);
    const errorElement = inputElement.nextElementSibling;
    inputElement.classList.remove('is-invalid');
    errorElement.style.display = 'none';
}
