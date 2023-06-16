const uploader = require("../../utility/productImageUploader");

function attachmentProductUpload(req, res, next) {
  const upload = uploader(
    "products",
    ["image/jpeg", "image/jpg", "image/png"],
    1000000,
    2,
    "Only .jpg, jpeg or .png format allowed!"
  );

  // call the middleware function
  upload.any()(req, res, (err) => {
    if (err) {
      res.status(500).json({
        errors: {
          avatar: {
            msg: err.message,
          },
        },
      });
    } else {
      next();
    }
  });
}

module.exports = attachmentProductUpload;
