const express = require('express');
const router = express.Router();
const FileUploadController = require('../controller/FileUploadController');

router.post('/upload', FileUploadController.uploadFile);
router.get('/getall', FileUploadController.getFilesFromGoogle);
router.get('/getFileFromdb', FileUploadController.getFilesFromDb);
module.exports = router;