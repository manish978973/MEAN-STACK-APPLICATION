const multer = require("multer");

const MIME_TYPE = {
    'image/png':'png',
    'image/jpg':'jpg',
    'image/jpeg':'jpg'
  }
  
  const storage = multer.diskStorage({
  
    destination:(req,file,cb)=>{
      const idValid = MIME_TYPE[file.mimetype];
      let error = new Error("Invalid file type")
      if(idValid){
        error = null;        // backend validation in the server side
      }
          cb(null,"./images");
    },
    filename:(req,file,cb)=>{
      const name = file.originalname.toLowerCase().split(' ').join('-');
      const ext = MIME_TYPE[file.mimetype];
      cb(null,name+'-'+Date.now()+'.'+ext);
  
  
    }
  })

 module.exports = multer({storage:storage}).single("image")