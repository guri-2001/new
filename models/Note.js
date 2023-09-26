import mongoose, { Schema } from "mongoose";

const noteSchema = new Schema({
    PcityName: {
        type: String,
    },
    Pdate: {
        type: String,
    },
    PTimeOne: {
        type: String,
    },
    PTimeTwo: {
        type: String,
    },
    DcityName: {
        type: String,
    },
    Ddate: {
        type: String,
    },
    DTimeOne: {
        type: String,
    },
    DTimeTwo: {
        type: String,
    },
    price: {
        type: String,
    },
    equipment: {
        type: String,
    },
    weight: {
        type: String,
    },
    distance: {
        type: String,
    },
    commodity: {
        type: String,
    },
    loadInfo: {
        type: String,
    },
},
    {
        timestamps: true,
    })


mongoose.models = {}
module.exports = mongoose.model("Note", noteSchema);
