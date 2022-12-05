const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

app.use(express.json());// to parse json data

// POST API with URL Query ,Body & Header Properties
app.post('/', (req, res) => {
    // query
    const email = req.query.email;

    // request header 
    const firstName = req.header('firstName');
    const lastName = req.header('lastName');

    // request body
    const data = req.body;

    const responseData = {
        firstName,
        lastName,
        email,
        address: data.address
    }

    res.json(responseData);
});

// b. Make a file upload API support PNG,JPG file only 
const storage = multer.diskStorage({
    destination: function (req, file, callBack) {
        callBack(null, './uploads')
    },
    filename: function (req, file, callBack) {
        const fileExt = path.extname(file.originalname);
        const fileName = file.originalname.replace(fileExt, '').toLowerCase().split(' ').join('-') + '-' + Date.now();
        callBack(null, fileName + fileExt);
    }
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, callBack) => {
        if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
            callBack(null, true);
        } else {
            //callBack(null, false); // To reject this file pass `false`, like so:
            callBack(new Error('You can just upload PNG and JPG'))
        }
    }
}).single('myFile');

app.post('/imageupload', (req, res) => {
    upload(req, res, (err) => {
        if (!err) {
            console.log(err instanceof multer.MulterError)
            res.send('File is uploaded successfully');
        } else {
            res.send(err.message);
        }
    })
})

//file Download API, that can download file from application directory
app.get('/download', (req, res) => {
    res.download('./uploads/anamul-logo.png');
})

app.listen(3000, () => {
    console.log('Server is listing on port 3000');
});

/* Assignment: 
a. Make a POST API with URL Query ,Body & Header Properties. 
b. Make a file upload API support PNG,JPG file only 
c. Make a file Download API, that can download file from application directory 
*/