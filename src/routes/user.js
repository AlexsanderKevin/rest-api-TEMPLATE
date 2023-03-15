import { Router } from "express";
import UserController from "../controllers/userController.js"

const { getAll, getUser, createUser, updateUser, deleteUser } = UserController

const router = Router()

router.get( '/users', getAll )
router.get( '/users/:id', getUser )
router.post( '/users', createUser )
router.put( '/users/:id', updateUser )
router.delete( '/users/:id', deleteUser )

export default router
