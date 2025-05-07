import promisePool from "../config/db.js"
import {activity} from '../config/storeProcetures.js'

export const activityModel = async()=>{
    console.log()
    try {
        let response= await promisePool.query(activity.get)
        console.log(response[0][0])
        return response[0][0]
    } catch (error) {
        console.log(error)
    }
}