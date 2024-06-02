import { Router } from 'express'
import * as controller from '../controllers/likes.js'


const router = Router()
router.route('/posts').get(controller.getPosts).post(controller.postPost)
// router.route('/posts/:id').put(controller.postPost).delete(controller.postPost)

export default router
