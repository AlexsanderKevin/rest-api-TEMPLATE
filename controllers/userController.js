import User from "../models/user.js"

const UserController = {

  async getAll ( req, res ) {
    const users = await User.findAll()
    res.json( users )
  },

  getUser ( req, res ) {

  }
}

export default UserController
