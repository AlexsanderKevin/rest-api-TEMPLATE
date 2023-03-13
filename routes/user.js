import { Router } from "express";
import UserController from "../controllers/userController.js"

const router = Router()

router.get( '/user', UserController.getAll )

export default router
