import { activityService } from "../service/activityService.js";

export const activityController =async(req,res)=>{
    try {
        let result=await activityService();
        return res.status(200).json({ success: true, data: result });
    } catch (error) {
        return res.status(500).json({ success: false, message: error });
    }
};