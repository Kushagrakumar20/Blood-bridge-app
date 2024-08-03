import { User } from "../models/userModel.js";

const adminmiddleware = async (req,res,next) => {
    try {
        const user = await User.findById(req.body.userId)
        // check admin
        if(user?.role !== 'admin'){
            return res.status(401).send({
                success: false,
                message:"Auth Failed"
            })
        }
        else{
            next();
        }
    } catch (error) {
        console.log(error);
        return res.status(401).send({
            success:false,
            message: "Auth failed, admin API",
            error
        })
        
    }
}


export {adminmiddleware};