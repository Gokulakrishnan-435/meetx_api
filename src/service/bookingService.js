import { bookingModel,getbookingModel } from "../model/bookingModel.js"


export const bookingService =async(params)=>{
    try {
        let response=await bookingModel(params);
        return response;
    } catch (error) {
        console.log(error)
    }
}


export const getbookingService =async(params)=>{
    try {
        let response=await getbookingModel(params);
        return response;
    } catch (error) {
        console.log(error)
    }
}