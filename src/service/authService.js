import { authLoginModel,authSignUpModel } from "../model/authModel.js"


export const authLoginService =async(params)=>{
    try {
        let response=await authLoginModel(params);
        return response;
    } catch (error) {
        console.log(error)
    }
}

export const authSignUpService =(params)=>{
    try {
        let response= authSignUpModel(params);
        return response;
    } catch (error) {
        console.log(error)
    }
}