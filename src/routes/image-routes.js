const ImageController = require('../controller/image-controller');
const MulterHelper = require('../helper/multer-helper');
const router = require('express').Router();
let uploadFiles = MulterHelper('image').fields([{ name: 'image', maxCount: 1 }]);

router.get('/', ImageController.getAllImages);
router.get('/:id', ImageController.getById);
router.post('/', uploadFiles, ImageController.createImage);
router.put('/:id', uploadFiles, ImageController.updateImage);
router.delete('/:id', ImageController.deleteImage);

module.exports = router;