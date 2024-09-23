const { User } = require('../models/index');

class UserRepository {
    async create(data){
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong on repository level");
            throw error;
        }
    }

    async destroy(userId){
        try {
            await user.destroy({
                where:{
                    id: userId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong on repository level");
            throw error;
        }
    }

    async getById(userId){
        try {
            const user = await User.findByPk(userId);
            return user;
        } catch (error) {
            console.log("Something went wrong on repository level");
            throw error;
        }
    }
}

module.exports = UserRepository;