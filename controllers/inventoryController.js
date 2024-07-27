import { User } from "../models/userModel.js";
import { Inventory } from "../models/inventoryModel.js"
import mongoose from "mongoose";

const createInventoryController = async (req, res) => {
    try {
        const {email, inventoryType} = req.body 
        // validation
        const user = await User.findOne({email})
        if(!user){
            throw new Error('User Not found');
        } 
        // if(inventoryType === 'in' && user.role !== 'donar'){
        //     throw new Error('Not a donar account')
        // }   
        // if(inventoryType === 'out' && user.role !== 'hosptal'){
        //     throw new Error('Not a hosptal account')
        // }

        if(inventoryType == 'out'){
            const requestedBloodGroup = req.body.bloodGroup;
            const requestedQuantityOfBlood = req.body.quantity;
            const organisation = new mongoose.Types.ObjectId(req.body.userId);
            // calculate Blood Quantity
            const totalInOfRequestedBlood = await Inventory.aggregate([
                {$match:{
                    organisation,
                    inventoryType:'in',
                    bloodGroup:requestedBloodGroup
                }},{
                    $group:{
                        _id:'$bloodGroup',
                        total:{$sum : '$quantity'}
                    }
                }
            ])
            // console.log('Total in', totalInOfRequestedBlood);
            let totalIn=0;
            totalIn = totalInOfRequestedBlood[0]?.total;
            // total out
            const totalOutOfRequestedBloodGroup = await Inventory.aggregate([
                {$match:{
                    organisation,
                    inventoryType:'out',
                    bloodGroup:requestedBloodGroup
                }},{
                    $group:{
                        _id:'$bloodGroup',
                        total:{$sum : '$quantity'}
                    }
                }
            ])
            const totalOut = totalOutOfRequestedBloodGroup[0]?.total || 0;
        
        

        // in and out calc
            const availableQuantityOfBloodGroup = totalIn-totalOut;

            if(availableQuantityOfBloodGroup < requestedQuantityOfBlood){
                return res.status(500).send({
                    success:false,
                    message:`Only ${availableQuantityOfBloodGroup} mL of ${requestedBloodGroup.toUpperCase()} is available`
                })
            }
        
        req.body.hospital = user?._id;
        }
        else{
            req.body.donar = user?._id;
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
            message: "Error in create inventory API ghj",
            error
        })
    }
};


// GET ALL BLOOD RECORDS
const getInventoryController = async (req, res) => {
    try {
        const inventory = await Inventory.find({organisation:req.body.userId})
        console.log(req.body.userId);
        // .populate('donar').populate('hospital').sort({createdAt: -1});
        return res.status(200).send({
            success: true,
            message: 'get all records successfully',
            inventory,
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



// GET DONAR RECORDS
const getDonarsControllers = async (req,res) => {
    try {
       const organisation = req.body.userId
        // find donar
        const donorId = await Inventory.distinct("donar",{
            organisation
        });
        // console.log(donorId);
        const donars = await User.find({_id: {$in: donorId}})
        return res.status(200).send({
            success: true,
            message: 'Donar Record Fetched successfully',
            donars
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success:false,
            message: 'Error in donar records',
            error
        })
    }
}


const getHospitalController = async (req,res) => {
    try {
        const organisation = req.body.userId;
        // GET HOSPITAL ID
        const hospitalId = await Inventory.distinct("hospital",{organisation})
        //  FIND HOSPITAL
        const hospitals = await User.find({_id: {$in: hospitalId}})
        return res.status(200).send({
            success: true,
            message: 'Hospital Record Fetched successfully',
            hospitals
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'Error in get Hospital API',
            error
        })
    }
};


// GET ORG PROFILES
const getOrganisationController = async (req, res) => {
    try {
        const donar = req.body.userId;
        // const orgId = await Inventory.distinct("organisation",{donar})
        // // find org
        // const organisations = await User.find({
        //     _id: {$in: orgId}
            
        // })
        if(!donar)throw new Error("Error h bhai");
        const curruser=await User.findOne({
            _id:donar
        })
        let organisations;
        if(curruser.role=="donar"){
            organisations = await User.find({
                role:"organisation"
           })
        }
        
        console.log(organisations);
        return res.status(200).send({
            success: true,
            message : "org data fetched successfully",
            organisations
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success:false,
            message: 'Error in get Org API',
            error
        })
    }
};


// GET ORG FOR HOSPITAL
const getOrganisationForHospitalController = async (req, res) => {
    try {
        const hospital = req.body.userId;
        // const orgId = await Inventory.distinct("organisation",{donar})
        // // find org
        // const organisations = await User.find({
        //     _id: {$in: orgId}
            
        // })
        if(!hospital)throw new Error("Error h bhai");
        const curruser=await User.findOne({
            _id:hospital
        })
        let organisations;
        if(curruser.role=="hospital"){
            organisations = await User.find({
                role:"organisation"
           })
        }
        
        console.log(organisations);
        return res.status(200).send({
            success: true,
            message : "org data fetched successfully",
            organisations
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success:false,
            message: 'Error in get Org API',
            error
        })
    }
};


export { createInventoryController, getInventoryController, getDonarsControllers, getHospitalController, getOrganisationController, getOrganisationForHospitalController };