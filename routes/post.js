var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }))

//url/api/blogs
router.route('/')

/* GET All Blogs */
 .get(function(req, res) {
   mongoose.model('post').find({}, function(err, blogs){
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

   mongoose.model('post').create({
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
       mongoose.model('post').findById({
           _id: req.params.id
       }, function(err, blog) {
           if (err)
               res.send(err);

           res.json(blog);
       });
   })

   // update the bear with this id (accessed at PUT http://localhost:8080/api/bears/:id)
   // .put(function(req, res) {

   //     mongoose.model('Blog').findById({
   //         _id: req.params.id
   //     }, function(err, blog) {
   //       blog.title = req.body.title;
   //       blog.body = req.body.body;
   //         if (err)
   //             res.send(err);

   //         blog.save();
   //         res.json(blog)
   //     });
   // })
   // delete the bear with this id (accessed at DELETE http://localhost:8080/api/blogs/:id)

   .delete(function(req, res) {
       mongoose.model('post').remove({
           _id: req.params.id
       }, function(err, blog) {
           if (err)
               res.send(err);

           res.json({ message: 'Successfully deleted' });
       });
   });

module.exports = router;