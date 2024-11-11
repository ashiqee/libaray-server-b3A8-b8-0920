import express from "express";
import { memberControllers } from "./member.controller";




const router = express.Router();



router.post('/',memberControllers.createMember)
router.get('/',memberControllers.getAllMembers)
router.get('/:memberId',memberControllers.getAMember)
router.patch('/:memberId',memberControllers.updateMemberData)
router.delete('/:memberId',memberControllers.deleteMemberData)


export const MemberRoutes = router;