const { Router } = require("express")
const { validarJWT } = require('../middlewares/validarJWT')
const { actualizarEvento, crearEvento, eliminarEvento, getEventos } = require('../controllers/events');
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validarCampos");
const { isDate } = require("../helpers/isDate");

const router = Router();

// todas tienen que pasar por la validacion del JWT
router.use( validarJWT );

// Obtener eventos
router.get( '/', getEventos )

//Crear un nuevo evento
router.post(
    '/',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'La fecha de inicio es obligatoria').custom( isDate ),
        check('end', 'La fecha de finalización es obligatoria').custom( isDate ),
        validarCampos
    ],
    crearEvento
);

//actualizar un evento
router.put( '/:id', actualizarEvento )

//eliminar un evento
router.delete( '/:id', eliminarEvento )


module.exports =  router;