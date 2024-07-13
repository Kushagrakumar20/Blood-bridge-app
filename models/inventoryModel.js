import mongoose from "mongoose";


const inventorySchema = new mongoose.Schema({
    inventoryType: {
        type: String,
        required: [true, 'Inventory type required'],
        enum: ['in', 'out']
    },
    bloodGroup: {
        type: String,
        required: [true, 'Blood group is required'],
        enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']
    },
    quantity: {
        type: Number,
        required: [true, 'Blood Quantity is required']
    },
    organisation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        reqiured: [true, "organisation is require"]
    },
    hospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        reqiured: function(){
            return this.inventoryType == "out"
        }
    },
    donar: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        reqiured: function(){
            return this.inventoryType === "in"
        }
    }
}, {timestamps: true});



export const Inventory = mongoose.model("Inventory", inventorySchema);