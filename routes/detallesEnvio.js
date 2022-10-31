const{Router} = require('express')
const {
    getdetallesEnvios,
    postdetallesEnvio,
    putdetallesEnvio,
    deletedetallesEnvio

} = require('../controllers/detallesEnvio')

const router = Router();

router.get('/', getdetallesEnvios)
router.post('/', postdetallesEnvios)
router.put('/', putdetallesEnvios)
router.delete('/', deletedetallesEnvios)

module.exports = router