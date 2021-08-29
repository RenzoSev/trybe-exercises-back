const express = require('express');
const multer = require('multer');

const app = express();

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads');
  },
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

app.use(express.json());

app.use(express.static(__dirname + '/uploads'));

app.post('/upload', upload.single('file'), (req, res) => {
  res.status(200).send(req.file);
});

app.listen(3000, () => console.log('Server is running!'));
