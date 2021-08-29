const express = require('express');
const multer = require('multer');
const fs = require('fs/promises');

const app = express();

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => {
    callback(null, 'uploads');
  },
  filename: (_req, file, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`);
  },
});

const multipleStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads');
  },
});

const fileIsInvalid = (file) => file.mimetype !== 'image/png';

const fileAlreadyExists = async (file) => {
  const files = await fs.readdir(`${__dirname}/uploads`);

  return files.some((f) => f.split('-')[1] === file.originalname);
};

const fileFilter = async (req, file, cb) => {
  if (fileIsInvalid(file)) {
    req.fileValidationError = true;

    return cb(null, false);
  }

  if (await fileAlreadyExists(file)) {
    req.fileDuplicated = true;

    return cb(null, false);
  }

  return cb(null, true);
};

const upload = multer({ storage, fileFilter });

const uploads = multer({ storage: multipleStorage });

app.use(express.json());

app.use(express.static(__dirname + '/uploads'));

app.post('/upload', upload.single('file'), (req, res) => {
  if (req.fileValidationError) {
    const err = {
      error: {
        message: 'Extension must be png',
      },
    };

    return res.status(403).json(err);
  }

  if (req.fileDuplicated) {
    const err = { error: { message: 'File already exists' } };

    return res.status(409).json(err);
  }

  return res.status(200).send(req.file);
});

app.post('/multiple', uploads.array('files'), (req, res) => {
  console.log(req.files[0]);

  const uploadedFiles = req.files.map((file) => ({
    file: file.originalname,
    url: `http://localhost:3000/${file.filename}`,
  }));

  return res.status(200).json(uploadedFiles);
});

app.listen(3000, () => console.log('Server is running!'));
