const image = require('../model/image');

class ImageModule {

    getAll = async (category) => {
        let data = await image.find();
        if (data)
            return data;
    }
    getById = async (id) => {
        let data = await image.findOne({ _id: id });
        if (data) {
            return data;
        }
    }
    createImage = async (data) => {
        const res = new image(data);
        let response = await res.save();
        if (response.id) {
            let result = image.findOne({ _id: response.id });
            return result;
        }
    }

    updateImage = async (data, imageId) => {
        let { title, image:updateImage } = data;
        const filter = { _id: imageId };
        const update = { title: title, image: updateImage };
        const result = await image.findOneAndUpdate(filter, update, { new: true });
        return result;
    }

    deleteImage = async (id) => {
        const result = await image.deleteOne({ _id: id });
        return result;
    }

}

module.exports = new ImageModule;