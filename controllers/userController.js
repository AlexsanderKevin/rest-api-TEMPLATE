import User from "../models/user.js"

const UserController = {

  async getAll ( req, res ) {
    const users = await User.findAll()
    res.json( users )
  },

  async createUser ( req, res ) {
    try {
      const { name } = req.body
      const user = await User.create({ name })

      return res.status( 201 ).json( user )

    } catch ( error ) {
      console.log( error )
      return res.status( 500 ).json({
        message: 'Internal server error'
      })
    }
  },

  async getUser ( req, res ) {
    try {
      const { id } = req.params
      const user = await User.findAll({
        where: { id }
      })

      res.json( user )

    } catch ( error ) {
      console.log( error )
      return res.status( 500 ).json({
        message: 'Internal server error'
      })
    }
  }
}

export default UserController
