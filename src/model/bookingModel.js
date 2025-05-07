import promisePool from "../config/db.js"
import {booking} from '../config/storeProcetures.js'

export const bookingModel = async(params)=>{
    console.log(params)
    try {
        let response= await promisePool.query(booking.post,[params?.email,params?.activityid])
        console.log(response[0][0][0])
        return response[0][0][0]
    } catch (error) {
        console.log(error)
    }
}

export const getbookingModel = async(params)=>{
    console.log(params)
    try {
        let response= await promisePool.query(booking.get,[params?.email])
        console.log(response[0][0])
        return response[0][0]
    } catch (error) {
        console.log(error)
    }
}