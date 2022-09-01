const signupFormHandler = async (event) => {
	event.preventDefault();

	//Collect values form the sign up form
	const email = document.querySelector('#email-signup').value.trim();
	const password = document.querySelector('#password-signup').value.trim();

	if (email && password) {
		// Send a POST request to the API endpoint
		const response = await fetch('/api/users', {
			method: 'POST',
			body: JSON.stringify({ email, password }),
			headers: { 'Content-Type': 'application/json' },
		});

		if (response.ok) {
			// If successful, redirect the browser to the blog homepage
			document.location.replace('/homepage');
		} else {
			alert(response.statusText);
		}
	}
};

document
	.querySelector('.signup-form')
	.addEventListener('click', signupFormHandler);
