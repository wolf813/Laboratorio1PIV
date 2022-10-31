const{Router} = require('express')
const {
    getpaquetes,
    postpaquetes,
    putpaquetes,
    deletepaquetes

} = require('../controllers/paquetes')

const router = Router();

router.get('/', getpaquetes)
router.post('/', postpaquetes)
router.put('/', putpaquetes)
router.delete('/', deletepaquetes)

module.exports = router