


<<<<<<< HEAD
var express = require('express')
var app=express.Router();
var multer  = require('multer')
var profile = require('../models/profile')

/*var upload = multer({
  dest: 'ashu/'
})

app.post('/abc', upload.any(), (req,res)=>{
  if(req.files){
      res.json({
          success: true,
          msg: 'product save '

          
      })
  }else{
      res.json({
          success: false
      })
  }
})
*/
var multerConf={
  storage:multer.diskStorage({
    destination:function(req,file,next){
      next(null,'/home/amit/Desktop/feb8/ashu')
=======

/*var express = require('express')
var app=express.Router();
var multer  = require('multer')

var multerConf={
  storage:multer.diskStorage({
    destination:function(req,file,next){
      next(null,'/home/amit/Desktop/ashu/26Dec-master/ashish')
>>>>>>> da88dc66777a0a490051e7bc23a363b818539abe
    },
    filename:function(req,file,next){
      console.log(file);
    }
  })
}

app.get('/',function(req,res){

})
app.post('/abc',multer(multerConf).single('photo') ,function(req,res){
  res.send('this post')
})

<<<<<<< HEAD
=======
module.exports = app;*/
>>>>>>> da88dc66777a0a490051e7bc23a363b818539abe

var express = require('express')
var app = express.Router()


<<<<<<< HEAD



=======
var profile = require('../models/profile')


var multer = require('multer')
>>>>>>> da88dc66777a0a490051e7bc23a363b818539abe

var multerConf = {
  storage: multer.diskStorage({
    destination: function (req, file, next) {
<<<<<<< HEAD
      next(null, './ashu')
=======
      next(null, '/home/amit/Desktop/ashu/26Dec-master/ashish')
>>>>>>> da88dc66777a0a490051e7bc23a363b818539abe
    },
    filename: function (req, file, next) {
      var ext = file.mimetype.split("/")[1];
      next(null, file.fieldname + '-' + Date.now() + '-' + ext)
    }
  }),
  fileFilter: function (req, file, next) {
    if (!file) {
      next();
    }
    var image = file.mimetype.startsWith('image/');
    if (image) {
      next(null, true)

    } else {
      next({ message: "file type " }, false)
    }

  }

}

<<<<<<< HEAD
app.post('/abc', multer(multerConf).single("photo"), (req, res, ) => {
=======
app.post('/', multer(multerConf).single("photo"), (req, res, ) => {
>>>>>>> da88dc66777a0a490051e7bc23a363b818539abe

  if (req.file) {
    console.log(req.file)
    req.body.photo = req.file.filename






    var profileSave = new profile({
      photo: req.body.photo

    })


    profileSave.save(function (err, data) {
      if (err) {
        res.json({
          success: false
        })
      }

      res.json({
        success: true,
<<<<<<< HEAD
        msg: 'Product save ',
        photo:req.body.photo
        
=======
        msg: 'Product save '
>>>>>>> da88dc66777a0a490051e7bc23a363b818539abe
      })
    })
  } else {
    res.json({
<<<<<<< HEAD
     
      success:false,
      msg: 'NO data save '
      
=======
      sucess: false,
      msg: 'No Data Sent'
>>>>>>> da88dc66777a0a490051e7bc23a363b818539abe
    })
  }


})

app.get('/getphoto', function (req, res) {
  
  
  
      profile.find(function (err, data) {
          if(data){
              console.log(data);
              res.json({
                 success: true,
<<<<<<< HEAD
                  photo :this.photo,
                  data:data
=======
                  photo :req.file.filename
>>>>>>> da88dc66777a0a490051e7bc23a363b818539abe
                  
                 
              });
         }
          else{
              res.json({
                  success: false,
                  
                
              });
              
          }
          
  
  
<<<<<<< HEAD

=======
  
>>>>>>> da88dc66777a0a490051e7bc23a363b818539abe
  
      })
      console.log("get api call");
  
  });
  
module.exports = app;