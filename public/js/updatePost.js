const updateFormHandler = async (event) => {
	event.preventDefault();

	const title = document.querySelector('#blog-title').value.trim();
	const blog_post = document.querySelector('#blog-content').value.trim();
	const postID = document.querySelector('#post-id').value;

	if (title && blog_post) {
		const response = await fetch(`/api/posts/${postID}`, {
			method: 'PUT',
			body: JSON.stringify({ title, blog_post }),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (response.ok) {
			document.location.replace('/dashboard');
		} else {
			alert('Failed to update post');
		}
	}
};

const delButtonHandler = async (event) => {
	console.log(
		"🚀 ~ file: updatePost.js ~ line 27 ~ delButtonHandler ~ event.target.hasAttribute('value')",
		event.target.hasAttribute('value')
	);
	if (event.target.hasAttribute('value')) {
		const id = event.target.getAttribute('value');
		console.log(
			'🚀 ~ file: updatePost.js ~ line 28 ~ delButtonHandler ~ id',
			id
		);

		const response = await fetch(`/api/posts/${id}`, {
			method: 'DELETE',
		});

		if (response.ok) {
			document.location.replace('/dashboard');
		} else {
			alert('Failed to delete post');
		}
	}
};

document
	.querySelector('#update-post')
	.addEventListener('click', updateFormHandler);

document
	.querySelector('#delete-post')
	.addEventListener('click', delButtonHandler);
