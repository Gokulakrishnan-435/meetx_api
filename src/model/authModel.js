import promisePool from "../config/db.js"
import {users} from '../config/storeProcetures.js'
import {JWT_SECRET} from '../config/config.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt';

export const authLoginModel = async(params)=>{
    console.log(params)
    try {
        let response= await promisePool.query(users.login,[params?.email])
        const isMatch = await bcrypt.compare(params.password, response[0][0][0].password);

        if (!isMatch) {
          return { message: 'Invalid  password' };
        }
        console.log(response[0][0][0])
        const token = jwt.sign(
            { id: response[0][0][0].id, email: response[0][0][0].email }, 
            JWT_SECRET,
            { expiresIn: '1h' }
          );
        return token
    } catch (error) {
        console.log(error)
    }
}

export const authSignUpModel = async(params)=>{
    try {
        const hashedPassword = await bcrypt.hash(params.password, 8);
        let response= await promisePool.query(users.post,[params?.name,params?.phone,params?.email,hashedPassword])
        console.log(response[0][0])
        return response[0][0][0]
    } catch (error) {
        console.log(error)
    }
}