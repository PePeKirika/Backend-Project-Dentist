const express = require('express') ;
const {getHospitals ,getHospital ,createHospital ,updateHospital ,deleteHospital , } = require('../controllers/dentists');
const router = express.Router();

//Include other resource routers 
const AppointmentRounter = require('./appointments') ;

const { protect , authorize } = require('../middleware/auth');
const swaggerJSDoc = require('swagger-jsdoc');

//Re-route into other resource routers
router.use('/:hospitalId/appointments/' , AppointmentRounter) ;

router.route('/').get(getHospitals).post(protect , authorize('admin'), createHospital) ;
router.route('/:id').get( getHospital).put(protect , authorize('admin'), updateHospital).delete(protect, authorize('admin') ,deleteHospital);

module.exports=router ;