const ImageModule = require('../module/image-module');
class ImageController {
    getAllImages = async (req, res) => {
        const result = await ImageModule.getAll();
        if (result) {
            res.status(200).send({ msg: "Data fetched successfully!", data: result });
        } else {
            res.status(400).send({ msg: "Could not fetch data!" });
        }
    }

    getById = async (req, res) => {
        let id = req.params.id;
        const result = await ImageModule.getById(id);
        if (result) {
            res.status(200).send({ msg: "Data fetched successfully!", data: result });
        } else {
            res.status(400).send({ msg: "Could not fetch data!" });
        }
    }

    createImage = async (req, res) => {
        let image = null;
        if (Object.values(req.files).length > 0) {
            image = req.files.image[0].filename;
        }
        if (image) {
            req.body.image = image
            const result = await ImageModule.createImage(req.body);
            if (result) {
                res.status(201).send({ msg: "Image created successfully.", data: result });
            } else {
                res.status(400).send({ msg: "Something went wrong! Could not create image. Please try again." });
            }
        } else {
            res.status(400).send({ msg: "Image Required. Please try again." });
        }
    }

    updateImage = async (req, res) => {
        let imageId = req.params.id
        let image = null;
        if (Object.values(req.files).length > 0) {
            image = req.files.image[0].filename;
        } else {
            image = req.body.image
        }
        if (image) {
            req.body.image = image
            const result = await ImageModule.updateImage(req.body, imageId);
            if (result) {
                res.status(201).send({ msg: "Image Updated successfully.", data: result });
            } else {
                res.status(400).send({ msg: "Something went wrong! Could not update. Please try again." });
            }
        } else {
            res.status(400).send({ msg: "Image Required. Please try again." });
        }

    }

    deleteImage = async (req, res) => {
        let imageId = req.params.id;
        let result = await ImageModule.deleteImage(imageId);
        if (result) {
            res.status(200).send({ msg: "Data Deleted successfully!!" });
        } else {
            res.status(400).send({ msg: "Could not delete data!" });

        }
    }
}
module.exports = new ImageController;