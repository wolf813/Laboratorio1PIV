const{Router} = require('express')
const {
    getseguimiento,
    postseguimiento,
    putseguimiento,
    deleteseguimiento

} = require('../controllers/seguimiento')

const router = Router();

router.get('/', getseguimiento)
router.post('/', postseguimiento)
router.put('/', putseguimiento)
router.delete('/', deleteseguimiento)

module.exports = router