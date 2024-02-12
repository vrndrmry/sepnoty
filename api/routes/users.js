import express from 'express'
import { deleteUser, getAllUser, getUser, updateUser } from '../controllers/user.js'
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js'



const router = express.Router()

// router.get('/checkauthentication',verifyToken,(req,res,next)=>{
//     res.send("hello user, you ")
// })

// router.get('/checkuser/:id',verifyUser,(req,res,next)=>{
//     res.send("You are logged in and you can delete the account ")
// })

// router.get('/checkauthentication',verifyToken,(req,res,next)=>{
//     res.send("hello user, you ")
// })

// router.get('/checkadmin/:id',verifyAdmin,(req,res,next)=>{
//     res.send("Hello admin, You are logged in and you can delete the account ")
// })

// update
router.put('/:id',verifyUser,updateUser)


// delete
router.delete("/:id", verifyUser,deleteUser);
// get
router.get("/:id",verifyUser, getUser);
// get all
router.get("/", verifyAdmin,getAllUser);

export default router