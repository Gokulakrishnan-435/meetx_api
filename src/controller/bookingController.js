import { bookingService ,getbookingService} from "../service/bookingService.js";

export const bookingController =async(req,res)=>{
    try {
        let params=req?.body
        let result=await bookingService(params);
        return res.status(200).json({ success: true, data: result });
    } catch (error) {
        return res.status(500).json({ success: false, message: error });
    }
};

export const getbookingController =async(req,res)=>{
    try {
        let {email}=req?.query
        let result=await getbookingService({email});
        return res.status(200).json({ success: true, data: result });
    } catch (error) {
        return res.status(500).json({ success: false, message: error });
    }
};