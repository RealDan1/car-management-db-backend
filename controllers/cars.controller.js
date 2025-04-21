const Car = require('../models/car.model');

//CREATE a new car
exports.create = async (req, res) => {
    try {
        // Create a new car
        const carModel = new Car({
            make: req.body.make,
            model: req.body.model,
            year: req.body.year,
            owner: req.body.owner,
            registration: req.body.registration,
        });

        // Save the new car
        const savedCar = await carModel.save();

        // Success response and send car as json
        res.status(201).json(savedCar);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// READ all cars
exports.getAllCars = async (req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// DELETE a car
exports.deleteCar = async (req, res) => {
    try {
        await Car.findByIdAndDelete(req.params.id);
        res.json({ message: 'Car deleted!' });
    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle errors.
    }
};

//UPDATE a car
exports.updateCar = async (req, res) => {
    try {
        const updatedCar = await Car.findByIdAndUpdate(
            req.params.id, // ID of the car to update.
            req.body, // New data to update.
            { new: true } // Return the updated car.
        );
        res.json(updatedCar);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//UPDATE MANY cars - specifically the owner field only - for demonstrative purposes
exports.updateManyCars = async (req, res) => {
    try {
        console.log(req.body.oldOwner, req.body.newOwner);
        const result = await Car.updateMany(
            { owner: req.body.oldOwner }, // find cars owned by the inputted owner.
            { $set: { owner: req.body.newOwner } } //update the owner by the inputted new owner.
        );

        console.log(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
