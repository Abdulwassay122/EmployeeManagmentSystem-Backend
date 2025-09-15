import mongoose from 'mongoose'

const organizationSchema = new mongoose.Schema({
    org_name:{
        type:String,
        required: true
    },
    address:{
        type:String,
    }
}, {timestamps: true})

export const organization = mongoose.model('organization', organizationSchema)