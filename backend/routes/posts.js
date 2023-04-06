const express = require('express');
const router = express.Router();
const Post = require('../models/post');

// Get all posts
router.get('/', function(req, res){
  Post.find({}, function(err, posts){
    if(err){
      console.log(err);
    } else {
      res.render('posts/index', { posts: posts });
    }
  });
});

// New post form
router.get('/new', function(req, res){
  res.render('posts/new');
});

// Create new post
router.post('/', function(req, res){
  const newPost = new Post({
    title: req.body.title,
    body: req.body.body,
    author: req.user._id
  });
  newPost.save(function(err){
    if(err){
      console.log(err);
    } else {
      req.flash('success', 'Post created successfully!');
      res.redirect('/posts');
    }
  });
});

// Show single post
router.get('/:id', function(req, res){
  Post.findById(req.params.id).populate('author').exec(function(err, post){
    if(err){
      console.log(err);
    } else {
      res.render('posts/show', { post: post });
    }
  });
});

// Edit post form
router.get('/:id/edit', function(req, res){
  Post.findById(req.params.id, function(err, post){
    if(err){
      console.log(err);
    } else {
      res.render('posts/edit', { post: post });
    }
  });
});

// Update post
router.put('/:id', function(req, res){
  Post.findByIdAndUpdate(req.params.id, req.body.post, function(err, post){
    if(err){
      console.log(err);
    } else {
      req.flash('success', 'Post updated successfully!');
      res.redirect('/posts/' + req.params.id);
    }
  });
});

// Delete post
router.delete('/:id', function(req, res){
  Post.findByIdAndRemove(req.params.id, function(err){
    if(err){
      console.log(err);
    } else {
      req.flash('success', 'Post deleted successfully!');
      res.redirect('/posts');
    }
  });
});

module.exports = router;
