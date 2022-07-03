const SlideModel = require("../models/slide.model");

//we can use await and async or we can use promises and callback function for below functions.

//saving a new slide data
const addSlide = (req, res, next) => {
    const {image, title, subTitle} = req.body;
    const newSlideData = new SlideModel({image, title, subTitle});

    newSlideData.save()
        .then((result) => {
            res.status(201).send({result, message: "New slide added successfully!"});
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};

//saving new slide data using async and await
// const addSlide = async (req, res, next) => {
//     const {image, title, subTitle} = req.body;
//     const newSlideData = new SlideModel({image, title, subTitle});
//
//     try {
//         const savedNewSlide = await newSlideData.save();
//         res.status(201).send({ savedNewSlide, message: "New slide added successfully!" });
//     } catch (error) {
//         res.status(500).send(error);
//     }
// };

//function to get required slides
const getSlides = (req, res, next) => {

    //retrieving _id also for a document to use that in carousel in frontend as the key for mapping elements
    SlideModel.find().limit(parseInt(req.query.slides))
        .select({"createdAt": 0, "updatedAt": 0, "__v": 0,})
        .then((slides) => {
            res.status(200).send({slides});
        })
        .catch((err) => {
            res.status(500).send(err);
        });

};

module.exports = {addSlide, getSlides};
