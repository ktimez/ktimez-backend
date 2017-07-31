var express = require ('express');
var bodyParser = require ('body-parser');
const cors = require('cors');
var path = require ('path');
var fs = require('fs');
var slug = require ('mongoose-slug-generator');
var mongoose = require('mongoose');
const passport = require('passport');
const bcrypt = require('bcryptjs');
var config = require('./config/database');
const users = require('./routes/users'); 


// Requires multiparty 
multiparty = require('connect-multiparty'),
multipartyMiddleware = multiparty(), 

// Requires controller
FileUploadController = require('./config/FileUploadController');

mongoose.connect(config.database);
mongoose.connection.on('connected',function(){
  console.log('connected on '+ config.database);
});
mongoose.connection.on('error',(err)=>{
  console.log('database error '+err);
});


mongoose.plugin(slug);

const Message = mongoose.model('Message',mongoose.Schema({
   fname: String,
   email: String,
   phone: String,
   message:String,
   created_at:{type:Date, default:Date}
}));



var Post = mongoose.model('Post',mongoose.Schema({
  title: String,
  slug: {type: String, slug:"title"},
  featured: String,
  body: String,
  created_at: {type:Date,default:Date},
  posted_by: String,
  views: {type:Number, default:0},
  category:[],
  comments: [{
    user: String,
    content: String,
    date: {type:Date,default:Date}
  }]
}));

var app = express();
var port = process.env.PORT || 3000;

//cors middleware
app.use(cors());

//body parser middleware
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.static(path.join(__dirname,'public')));



//passport middleware ( to provide jwt authentication protected routes)
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

//users route group (from const users = require('./routes/users');)
app.use('/users',users);


app.post('/post',function(req,res){
  Post.create(req.body,function(err,posts){
      if(err)
        res.send(err);
      res.json(posts);
  });
});

app.post('/messages',function(req,res){
  Message.create(req.body,function(err,messages){
      if(err)
        res.send(err);
      res.json(messages);
  });
});

app.get('/messages',function(req,res){
  Message.find().sort({"created_at":-1}).exec(function(err,messages){
      if(err)
        res.send(err);
      res.json(messages);
  });
});

app.put('/comment/:id',function(req,res){
  let comment = {
    user:req.body.user,
    content:req.body.content
  }
   var query={$push: {comments:{user:req.body.user,content:req.body.content} }};
   var condition={slug:req.params.id};
  Post.findOneAndUpdate(condition,query,function(err,post){
     if(err)
       res.send(err);
     res.json(post);
  });
})

app.get('/posts/popular',function(req,res){

  Post.find({},{'title':true,'slug':true,'featured':true,'created_at':true,'posted_by':true}).limit(3).sort({"views":-1}).exec(function(err,posts){
      if(err)
        res.send(err);
      res.json(posts);
  });
});

app.get('/posts/latest',function(req,res){

  Post.find({},{'title':true,'slug':true,'featured':true,'created_at':true}).limit(3).sort({"created_at":-1}).exec(function(err,posts){
      if(err)
        res.send(err);
      res.json(posts);
  });
});

app.get('/posts/slider',function(req,res){
  Post.find({},{'title':true,'slug':true,'featured':true}).limit(5).sort({"created_at":-1,"views":1}).exec(function(err,posts){
      if(err)
        res.send(err);
      res.json(posts);
  });
});

app.get('/posts',function(req,res){
  Post.find().limit(10).sort({"created_at":-1}).exec(function(err,posts){
      if(err)
        res.send(err);
      res.json(posts);
  });
});

app.delete('/posts/:id',(req,res)=>{
  Post.findOneAndRemove({_id:req.params.id},function(err,post){
      if(err)
        res.send(err);
      res.json(post);
  });
});


app.get('/posts/page/:page',function(req,res){
  var page = parseInt(req.params.page,10);
  var limit=10;
  Post.find().skip(page > 0 ?  ((page-1)*limit) : 0).limit(limit).sort({"created_at":-1}).exec(function(err,posts){
      if(err)
        res.send(err);
      res.json(posts);
  });
})

app.get('/posts/:id',function(req,res){
  Post.findOne({slug:req.params.id},function(err,post){
      if(err)
        res.send(err);
      res.json(post);
  });
});

app.get('/cats/:name',function(req,res){
  Post.find({category:req.params.name}).limit(8).sort({"created_at":1}).exec(function(err,posts){
      if(err)
        res.send(err);
      res.json(posts);
  });
});

app.get('/cats/:name/:page',function(req,res){
  var page = parseInt(req.params.page,10);
  var limit=10;
  Post.find({category:req.params.name}).skip(page > 0 ?  ((page-1)*limit) : 0).limit(limit).sort({"created_at":1}).exec(function(err,posts){
      if(err)
        res.send(err);
      res.json(posts);
  });
})

app.put('/posts/:id',function(req,res){
   var query={$inc: {views:1}};
   var condition={slug:req.params.id};
  Post.findOneAndUpdate(condition,query,function(err,post){
     if(err)
       res.send(err);
     res.json(post);
  });
})

app.get('/postscount',function(req,res){
  Post.count(function(err,user){
     if(err)
       res.send(err);
     res.json(user);
  });
})

app.get('/postscountcat/:name',function(req,res){
  Post.count({category:req.params.name},function(err,user){
     if(err)
       res.send(err);
     res.json(user);
  });
});

/*
app.get('/users',function(req,res){
  User.find(function(err,users){
      if(err)
        res.send(err);
      res.json(users);
  });
});

app.get('/users/:username',function(req,res){
  User.findOne({username:req.params.username},function(err,user){
      if(err)
        res.send(err);
      res.json(user);
  });
});

app.post('/users',function(req,res){
  
  User.create(req.body,function(err,users){
      if(err)
        res.send(err);
      res.json(users);
  });
});

app.post('/api/upload',function(req,res){
   var path = '';
     upload(req, res, function (err) {
        if (err) {
          // An error occurred when uploading
          console.log(err);
          return res.status(422).send("an Error occured")
        }  
       // No error occured.
        console.log(req.file.path);
        path = req.file.path;
        
        return res.send("Upload Completed for "+path); 
  });     
});*/

app.post('/api/upload', multipartyMiddleware, function(req,res){
  fs.readFile(req.files.file.path, function (err,data) {

    // set the correct path for the file not the temporary one from the API:
    var newpath = "public/uploads/featured/" + req.files.file.name;
 // copy the data from the req.files.file.path and paste it to file.path
    fs.writeFile(newpath, data,function (err) {
      if (err) {
        return console.warn(err);
      }
      console.log("The file: " + req.files.file.name + " was saved to " + newpath);
    });
    
    
  });
});

/*
app.put('/users/:id',function(req,res){
   var query={
      first_name:req.body.fname,
      last_name:req.body.lname,
      email:req.body.email,
      username:req.body.username,
      password:req.body.pwd,
      avatar:req.body.avatar,
      description:req.body.description
   };
  User.findOneAndUpdate({_id:req.params.id},query,function(err,user){
     if(err)
       res.send(err);
     res.json(user);
  });
})*/

/*app.get('/*',function(req,res){
res.sendFile(__dirname +'/public/index.html');
});*/

app.listen(port,function(){
console.log('NodeJS Server Started on '+port+' ...')
})
