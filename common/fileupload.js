const multer  = require('multer')
const fs = require('fs')


var storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'uploads/products');
    },
    filename: function(req, file, cb) {
      const ext = file.mimetype.split("/")[1];
      cb(null, `${file.fieldname}-${Date.now()}.${ext}`);
      req.fileName = file.filename;
    },
});


  var user = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'uploads/users');
    },
    filename: function(req, file, cb) {
      const ext = file.mimetype.split("/")[1];
      cb(null, `${file.fieldname}-${Date.now()}.${ext}`);
      req.fileName = file.filename;
    },
});
  var uploadProduct = multer({ storage: storage });
  var uploadUser = multer({ storage: user });

  module.exports = {uploadProduct, uploadUser}
  