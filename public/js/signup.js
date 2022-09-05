const signupFormHandler = async (event) => {
	event.preventDefault();

	//Collect values form the sign up form
	const name = document.querySelector('#email-signup-name').value.trim();
	const email = document.querySelector('#email-signup').value.trim();
	const password = document.querySelector('#password-signup').value.trim();

	if (name && email && password) {
		// Send a POST request to the API endpoint
		const response = await fetch('/api/users', {
			method: 'POST',
			body: JSON.stringify({ name, email, password }),
			headers: { 'Content-Type': 'application/json' },
		});

		if (response.ok) {
			// If successful, redirect the browser to the blog homepage
			document.location.replace('/');
		} else {
			alert(response.statusText);
		}
	}
};

const goToLogin = () => {
	document.location.replace('/login');
};

document.querySelector('#loginBtn').addEventListener('click', goToLogin);

document
	.querySelector('.signup-form')
	.addEventListener('click', signupFormHandler);
