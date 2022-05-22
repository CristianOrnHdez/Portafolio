const { Router } = require('express')
const { principalGet, principalPost } = require('../controllers/principal')
const router = Router()

router.get('/', principalGet)

router.post('/', principalPost)

module.exports = router