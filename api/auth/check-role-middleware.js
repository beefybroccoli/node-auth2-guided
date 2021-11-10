module.exports = function (role){
    return function (req, res, next){
        //check if the role is admin
        if(req.decodedJwt.role !== role){
            next({status:403, message:'unauthorized request'});
        }else{
            next();
        }
    }
}