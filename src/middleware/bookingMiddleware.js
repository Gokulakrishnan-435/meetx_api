import jwt from 'jsonwebtoken'
import { JWT_SECRET } from "../config/config.js"; 

export const verifyToken = (req, res, next) => {
    const Bearer = req.headers['authorization'];
    console.log('gk1',Bearer)
   
    if (!Bearer) {
      return res.status(401).json({ message: 'Authorization token missing' });
    }

    const token = Bearer.split(' ')[1];
    console.log('gk2',token)
  
    if (!token) {
      return res.status(401).json({ message: 'Token not provided' });
    }
  
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      console.log('gkk',decoded)
    {req.body?req.body.email = decoded?.email:req.query.email= decoded?.email}
      
      next(); 
    } catch (err) {
      return res.status(403).json({ message: 'Invalid or expired token' });
    }
}