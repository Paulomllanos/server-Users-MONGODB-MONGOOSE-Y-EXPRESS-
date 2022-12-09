import UserModel from "../Models/userModel.js";

//todo: GET --> Users

export const getUsers = async(req, res) => {
    try {
        const users = await UserModel.find()

        if(users){
            res.status(200).json(users)
        } else {
            res.status(404).json("No susch user exists")
        }
    } catch (error) {
        res.status(500).json(error)
    }
}