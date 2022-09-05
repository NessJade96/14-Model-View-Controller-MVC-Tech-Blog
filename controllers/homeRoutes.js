const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

//render dashboard page
router.get('/dashboard', withAuth, async (req, res) => {
	try {
		const userData = await User.findByPk(req.session.user_id, {
			attributes: { exclude: ['password'] },
			include: [{ model: Post }],
		});

		const user = userData.get({ plain: true });
		res.render('dashboard', {
			...user,
			logged_in: true,
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

//render the newPost page
router.get('/newPost', withAuth, async (req, res) => {
	try {
		const userData = await User.findByPk(req.session.user_id, {
			attributes: { exclude: ['password'] },
		});

		const user = userData.get({ plain: true });
		res.render('newPost', {
			...user,
			logged_in: true,
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

//render the updatePost page
router.get('/updatePost/:id', withAuth, async (req, res) => {
	try {
		const userData = await User.findByPk(req.session.user_id, {
			attributes: { exclude: ['password'] },
		});
		const postData = await Post.findByPk(req.params.id, {
			attributes: { exclude: ['password'] },
			include: [{ model: User }, { model: Comment, include: [User] }],
		});
		const post = postData.get({ plain: true });
		const user = userData.get({ plain: true });
		res.render('updatePost', {
			...user,
			...post,
			logged_in: true,
		});
	} catch (err) {
		res.status(500).json(err);
		console.log(err);
	}
});

//render the list of blog posts -- homepage loads but no posts?
router.get('/homepage', async (req, res) => {
	let user = null;
	let posts = null;
	try {
		const userData = await User.findByPk(req.session.user_id, {
			attributes: { exclude: ['password'] },
		});

		const postData = await Post.findAll({
			include: [{ model: User }, { model: Comment }],
		});
		posts = postData.map((item) => item.get({ plain: true }));
		user = userData.get({ plain: true });
	} catch (err) {
		console.log(err);
	}
	res.render('homepage', {
		...user,
		posts,
		logged_in: !!req.session.logged_in,
	});
});

//render individual posts page commentBlog.handlebars
router.get('/commentblog/:id', withAuth, async (req, res) => {
	try {
		const postData = await Post.findByPk(req.params.id, {
			attributes: { exclude: ['password'] },
			include: [
				{ model: User },
				{
					model: Comment,
					include: [User],
				},
			],
		});
		const post = postData.get({ plain: true });

		res.render('commentblog', {
			...post,
			logged_in: req.session.logged_in,
		});
	} catch (err) {
		res.status(500).json(err);
		console.log(err);
	}
});

//render signup page
router.get('/signup', (req, res) => {
	// If the user is already logged in, redirect the request to another route
	if (req.session.logged_in) {
		res.redirect('/homepage');
		return;
	}
	res.render('signup');
});

//render login page
router.get('/login', (req, res) => {
	// If the user is already logged in, redirect the request to another route
	if (req.session.logged_in) {
		res.redirect('/homepage');
		return;
	}
	res.render('login');
});

module.exports = router;
