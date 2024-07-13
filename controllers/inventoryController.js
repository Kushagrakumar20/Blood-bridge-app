import { User } from "../models/userModel.js";
import { Inventory } from "../models/inventoryModel.js"

const createInventoryController = async (req, res) => {
    try {
        const {email, inventoryType} = req.body 
        // validation
        const user = await User.findOne({email})
        if(!user){
            throw new Error('User Not found')
        } 
        if(inventoryType === 'in' && user.role !== 'donar'){
            throw new Error('Not a donar account')
        }   
        if(inventoryType === 'out' && user.role !== 'hosptal'){
            throw new Error('Not a hosptal account')
        }

        // save record
        const inventory = new Inventory(req.body)
        await inventory.save()
        return res.status(201).send({
            success: true,
            message: 'New Blood Record Added'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error in create inventory API",
            error
        })
    }
};


// GET ALL BLOOD RECORDS
const getInventoryController = async (req, res) => {
    try {
        const inventory = await Inventory.find({organisation: req.body.userId})
        .populate('donar').populate('hospital').sort({createdAt: -1});
        return res.status(200).send({
            success: true,
            message: 'get all records successfully',
            inventory
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'Error in get all inventory',
            error
        })
    }
}

export { createInventoryController, getInventoryController };