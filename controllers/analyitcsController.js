import { Inventory } from "../models/inventoryModel.js";
import mongoose from "mongoose";

// GET BLOOD DATA
const bloodGroupDetailsController = async (req,res) => {
    try {
        const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];
        const bloodGroupData = []
        const organisation = new mongoose.Types.ObjectId(req.body.userId);
        // get single blood group
        await Promise.all(bloodGroups.map (async (bloodGroup) => {
            // COUNT TOTAL IN
            const totalIn = await Inventory.aggregate([
                {$match: {
                    bloodGroup: bloodGroup,
                    inventoryType: 'in', 
                    organisation
                }},
                {
                    $group: {
                        _id:null,total : {$sum: '$quantity'}
                    }
                }
            ]);
            // COUNT TOTAL OUT
            const totalOut = await Inventory.aggregate([
                {$match: {
                    bloodGroup: bloodGroup,
                    inventoryType: 'out', 
                    organisation
                }},
                {
                    $group: {
                        _id:null,total : {$sum: '$quantity'}
                    }
                }
            ]);
            // CALCULATE TOTAL
            const availableBlood = (totalIn[0]?.total || 0) - (totalOut[0]?.total || 0)

            // PUSH DATA
            bloodGroupData.push({
                bloodGroup,
                totalIn: totalIn[0]?.total || 0,
                totalOut: totalOut[0]?.total || 0,
                availableBlood
            })
        }))
        return res.status(200).send({
            success:true,
            message: 'Blood Group Details Retrieved successfully',
            bloodGroupData
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success:false, 
            message: "Error in blood group data analytics API",
            error
        })
    }
}

export {bloodGroupDetailsController};