var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }))

//url/api/blogs
router.route('/')

/* GET All Blogs */
 .get(function(req, res) {
   mongoose.model('Post').find({})
   .populate('comments')
   .exec(function(err, blogs){
     if(err){
       return console.log(err);
     } else {
      res.send(blogs)
     }
   });
 })

 .post(function(req, res){
   var title = req.body.title;
   var body = req.body.body;
   var name = req.body.name;

   mongoose.model('Post').create({
     title: title,
     body: body,
     name: name
   }, function(err, blogPost){
     if(err){
       res.send("houston we have a problem")
     } else{
       console.log("New blog named " + blogPost + "created!");
       res.send(blogPost);
       
     }
   });
 });

//url/api/blogs/4353453634
 router.route('/:id')
   .get(function(req, res) {
       mongoose.model('Post').findById({
           _id: req.params.id
       }, function(err, blog) {
           if (err)
               res.send(err);

           res.json(blog);
       });
   })

   .delete(function(req, res) {
       mongoose.model('Post').remove({
           _id: req.params.id
       }, function(err, blog) {
           if (err)
               res.send(err);

           res.json({ message: 'Successfully deleted' });
       });
   });

router.route('/:id/comments')
  .post(function(req, res){

    mongoose.model('Comment').create({
      body: req.body.body,
      user: req.user

    }, function(err, comment){
      if(err)
          res.send(err)
      mongoose.model('Post').findById({
          _id: req.params.id

        }, function(err, blog){
          if(err)
            res.send(err)
          blog.comments.push(comment._id);
          blog.save();
          res.send(comment);
        });
    });
  })

router.route('/:id/comments')
  .get(function(req, res){
    mongoose.model('Post').findById({ _id: req.params.id})
      .populate('comments').exec(function(err, comments){
        if(err)
          res.send(err)
        res.send(comments)
      })
  })

module.exports = router;