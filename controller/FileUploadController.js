const path = require('path');
const multer = require('multer');
const FileUpload = require('../schema/FileUploadSchema');

const storage = multer.diskStorage({
    destination: "./uploads/",
    filename: function(req, file, cb){
        cb(null,file.originalname);
    }
})

const upload = multer(
    {
        storage: storage,
        limits: {
            fileSize: 9000000
        },
    }
).single('file');

const uploadFile = (req, res) => {

    console.log(req.file);
    upload(req,res,(err)=>{
        if(err){
            res.status(500).json({
                error: err,
                message: 'Error uploading file'
                
            })
        }
        else{
            console.log(req.file.originalname);
            //size
            console.log(req.file.size);
            //abs path
            console.log(req.file.path);
            var p= path.join(__dirname, '../uploads/'+req.file.originalname);
            console.log(p);

            //type
            

            if(req.file ==undefined){
                res.status(400).json({
                    message: 'No file selected'
                })
            }
            else{

                const fileUpload = new FileUpload({
                    name: req.file.originalname,
                    size: req.file.size,
                    url:p,
                    type: req.file.mimetype,
                    userName: req.body.userName
                })
                fileUpload.save((err,data)=>{
                    if(err){
                        res.status(500).json({
                            error: err,
                            message: 'Error uploading file to db'
                        })
                    }
                    else{
                        res.status(200).json({
                            message: 'File uploaded successfully',
                            file: req.file.originalname
                        })
                    }
                })



                // res.status(200).json({
                //     message: 'File uploaded successfully',
                //     file: req.file.originalname
                // })
            }
        }

    })

}
module.exports = {
    uploadFile
}

