const Hospital = require('../models/Hospital');
const VacCenter = require('../models/VacCenter') ;


//@desc  Get all hospitals
//@route GeT /api/v1/hospitals
//@access Public
exports.getHospitals  = async (req , res , next)=>{
    let query ; 
    //copy req.query
    const reqQuery = {...req.query};
    //Fields to exclude
    const removeFields= ['select' , 'sort' , 'page' , 'limit'] ;

    //Loop over remove  frelds and delete them from req Query
    removeFields.forEach(param=> delete reqQuery[param]);
    console.log(reqQuery) ;


    //Create query String
    let queryStr = JSON.stringify(reqQuery) ;
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g , match=> `$${match}`);

    query = Hospital.find(JSON.parse(queryStr)).populate('appointments');

    //Select Fields
    if(req.query.select){
        const fields = req.query.select.split(',').join(' ');
        query = query.select(fields) ;
    }
    //Sort
    if(req.query.sort){
        const sortBy = req.query.select.split(',').join(' ');
        query = query.sort(sortBy);
    }
    else{
        query = query.sort('name') ;
    }

    //Pagination
    const page = parseInt(req.query.page,10) || 1 ;
    const limit = parseInt(req.query.limit , 10)|| 25 ;
    const startIndex = (page -1 )*limit ; 
    const endIndex = (page)*limit ;
   

    try{
        const total = await Hospital.countDocuments() ;

        query = query.skip(startIndex).limit(limit) ;

        //Excuting query
        const hospitals  = await query;
        // console.log(req.query) ;
        
        //Pagination result
        const pagination = {} ;

        if(endIndex < total){
            pagination.next= {page:page+1 ,limit};
        }
        if(startIndex > 0){
            pagination.prev= {page:page-1 ,limit};
        }

    
    res.status(200).json({success:true,count: hospitals.length , pagination, data:hospitals});
    }
    catch(err){
        res.status(400).json({success: false}) ;
    }

};

//@desc  Get single hospital
//@route GeT /api/v1/hospital/:id
//@access Public

exports.getHospital =async( req , res , next)=>{
    try{
        const hospital  = await Hospital.findById(req.params.id);
    
    if(!hospital){
        return res.status(400).json({success: false}) ;
    }

    res.status(200).json({success: true ,data:hospital});}
    catch(err){
        res.status(400).json({success: false}) ;
    }
};

//@desc  Creaet a  hospital
//@route Post /api/v1/hospitals
//@access Private

exports.createHospital = async (req , res , next)=>{
    const hospital = await Hospital.create(req.body);
    res.status(200).json({success:true, data:hospital});
};


//@desc  update single hospital
//@route put /api/v1/hospital/:id
//@access Private

exports.updateHospital =async (req , res , next)=>{
    try{
        const hospital  = await Hospital.findByIdAndUpdate(req.params.id , req.body ,{
            new: true ,
            runValidators: true

        });
    
    if(!hospital){
        return res.status(400).json({success: false}) ;
    }

    res.status(200).json({success: true ,data:hospital});}
    catch(err){
        res.status(400).json({success: false}) ;
    }
};


//@desc  delete single hospital
//@route delete /api/v1/hospital/:id
//@access Private

exports.deleteHospital =async (req , res , next)=>{
    try{
        const hospital  = await Hospital.findById(req.params.id);
    
    if(!hospital){
        return res.status(400).json({success: false}) ;
    }

    await hospital.deleteOne() ;
    res.status(200).json({success: true ,data:{}});
}
    catch(err){
        res.status(400).json({success: false}) ;
    }
};

//@desc   get vaccine centers
//@route get /api/v1/hospital/vacCenters/
//@access public
exports.getVacCenters = (req , res , next )=> {
    VacCenter.getAll((err , data) => {
        if(err)
        res.status(500).send({
            message : err.message || "Some error occurred while retrieving Vaccine Centers."
        });
        else{res.send(data);}
    });
};