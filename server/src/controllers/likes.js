import * as sql from '../models/posts.js'

// GET /todos
export const getPosts = (req, res) => sql.findAll()
.then((result) => res.status(200).json({posts: result}))
.catch ((error) => res.status(500).json({status: false, code: 500, message: error})
)

export const postPost = (req, res) => sql
.createPost(req.body.titulo, req.body.url, req.body.descripcion)
.then((result) => res.status(200).json({status: true, code: 200, message: result}))
.catch ((error) => res.status(500).json({status: false, code: 500, message: error})
)

