const newBlogPost = async (event) => {
	event.preventDefault();

	// const button = event.target;
	const postTitle = document.querySelector('#postTitle').value.trim();

	const blogPost = document.querySelector('#blog_post').value.trim();

	const response = await fetch(`/api/posts/`, {
		method: 'POST',
		body: JSON.stringify({
			title: postTitle,
			blog_post: blogPost,
		}),
		headers: { 'Content-Type': 'application/json' },
	});

	if (response.ok) {
		document.location.replace('/dashboard');
	} else {
		alert('Failed to create post.');
	}
};

document.querySelector('#send').addEventListener('click', newBlogPost);
