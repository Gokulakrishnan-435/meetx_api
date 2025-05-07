import { authLoginService,authSignUpService } from "../service/authService.js";

export const authLoginController =async(req,res)=>{
    try {
        console.log(req?.query)
        let {email,password}=req?.query
        let result=await authLoginService({email,password});
        return res.status(200).json({ success: true, data: result });
    } catch (error) {
        return res.status(500).json({ success: false, message: error });
    }
};

export const authSignUpController =async(req,res)=>{
    try {
        let params=req.body
        let result=await authSignUpService(params);
        return res.status(201).json({ success: true, data: result });
    } catch (error) {
        return res.status(500).json({ success: false, message: error });
    }
};