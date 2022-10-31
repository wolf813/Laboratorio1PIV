const{Router} = require('express')
const {
    getprecios,
    postprecios,
    putprecios,
    deleteprecios

} = require('../controllers/precios')

const router = Router();

router.get('/', getprecios)
router.post('/', postprecios)
router.put('/', putprecios)
router.delete('/', deleteprecios)

module.exports = router