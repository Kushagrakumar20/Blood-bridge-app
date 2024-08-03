import { User } from "../models/userModel.js";
import mongoose from "mongoose";

// GET DONAR LIST
const getDonarsListController = async (req,res) => {
    try {
        const donarData = await User.find({role:'donar'}).sort({createdAt:-1});
        // console.log('Donar Data:', donarData);
        return res.status(200).send({
            success: true,
            TotalCount: donarData.length,
            message: "Get information donar successfully",
            donarData
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success:false,
            message: "Error in donar list API",
            error
        })
        
    }
};


// GET HOSPITAL LIST
const getHospitalsListController = async (req,res) => {
    try {
        const hospitalData = await User.find({role:'hospital'}).sort({createdAt:-1});
        // console.log('Donar Data:', donarData);
        return res.status(200).send({
            success: true,
            TotalCount: hospitalData.length,
            message: "Get information of hospital successfully",
            hospitalData
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success:false,
            message: "Error in hospital list API",
            error
        })
        
    }
};


// GET ORGANISATION LIST
const getOrgListController = async (req,res) => {
    try {
        const orgData = await User.find({role:'organisation'}).sort({createdAt:-1});
        // console.log('Donar Data:', donarData);
        return res.status(200).send({
            success: true,
            TotalCount: orgData.length,
            message: "Get information of organisation successfully",
            orgData
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success:false,
            message: "Error in organisation list API",
            error
        })
        
    }
};



// =========================================================
// DELETE DONAR
const deleteDonarController = async (req,res) => {
    try {
        // console.log(req.params.id);
        
        await User.findByIdAndDelete(req.params.id);


        return res.status(200).send({
            success: true,
            message: "Record deleted successfully",
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success:false,
            message: "while deleting error occurs",
            error
        })
        
    }
}



export {getDonarsListController, getHospitalsListController, getOrgListController, deleteDonarController};