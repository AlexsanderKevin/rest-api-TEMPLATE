import { Router } from "express";
import UserController from "../controllers/userController.js"

const router = Router()

router.get( '/users', UserController.getAll )
router.get( '/users/:id', UserController.getUser )
router.post( '/users', UserController.createUser )
router.put( '/users/:id', UserController.updateUser )
router.delete( '/users/:id', UserController.deleteUser )

export default router
