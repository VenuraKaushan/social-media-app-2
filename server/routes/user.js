import  express  from "express";
import{
    getUser,
    getUseFriends,
    addReomeFriend,
}from "../controllers/users.js"
import {verifyToken} from "../middleware/auth"

const router = express.Router();

//READ 
router.get("/:id",verifyToken,getUser);
router.get("/:id",verifyToken,getUseFriends);

//UPDATE
router.patch("/:id:friendId",verifyToken,addReomeFriend);

export default router;