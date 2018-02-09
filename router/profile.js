



/*var express = require('express')
var app=express.Router();
var multer  = require('multer')

var multerConf={
  storage:multer.diskStorage({
    destination:function(req,file,next){
      next(null,'/home/amit/Desktop/ashu/26Dec-master/ashish')
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

module.exports = app;*/

var express = require('express')
var app = express.Router()


var profile = require('../models/profile')


var multer = require('multer')

var multerConf = {
  storage: multer.diskStorage({
    destination: function (req, file, next) {
      next(null, '/home/amit/Desktop/ashu/26Dec-master/ashish')
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

app.post('/', multer(multerConf).single("photo"), (req, res, ) => {

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
        msg: 'Product save '
      })
    })
  } else {
    res.json({
      sucess: false,
      msg: 'No Data Sent'
    })
  }


})

app.get('/getphoto', function (req, res) {
  
  
  
      profile.find(function (err, data) {
          if(data){
              console.log(data);
              res.json({
                 success: true,
                  photo :req.file.filename
                  
                 
              });
         }
          else{
              res.json({
                  success: false,
                  
                
              });
              
          }
          
  
  
  
  
      })
      console.log("get api call");
  
  });
  
module.exports = app;