const UserService = require('../services/user-services');

const userService = new UserService();
const create = async (req, res) => {
    try {
        const response = await userService.create({
            email: req.body.email,
            password: req.body.password
        });
        return res.status(201).json({
            message: "Successfully created a new user",
            data: response,
            success: true,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Something went wrong in controller layer",
            data: {},
            success: false,
            err: error
        });
    }
}

const destroy = async (req, res) => {
    try {
        const response = await userService.destroy(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Succesfully deleted a user',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Something went wrong in controller layer",
            data: {},
            success: false,
            err: error
        }); 
    }
}

module.exports = {
    create, destroy
}