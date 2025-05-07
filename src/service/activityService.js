import {activityModel  } from "../model/activityModel.js"


export const activityService =async()=>{
    try {
        let response=await activityModel();
        return response;
    } catch (error) {
        console.log(error)
    }
}