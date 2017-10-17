var User = require("../model/user");
var bcrypt=require('bcrypt');
var nodemailer=require('nodemailer');
var rides=require('../model/rides');
var salt=bcrypt.genSaltSync(10);

exports.registerUser = function (req, res) {
    console.log(req.body);
    
    var username=req.body.username;
    var email = req.body.email;
    var password = bcrypt.hashSync(req.body.password,salt);
    var mobile = req.body.mobile;
    
    var newUser = new User({
        
        username:username,
        email: email,
        password: password,
        mobile: mobile
    });
    User.findOne({ email: email }, function (err, event) {
        if (err) {
            res.send({status : false, message:"Error occured while finding if email exists", err});
            console.error(err);
        }
        else {
            if (event == null) {
                newUser.save(function (err1, result) {
                    if (err1) {
                        res.send({ status: false, message: "Registration failed", err1 });
                        console.error(err1);
                    } else {
                        res.send({ status: true, message: "Registration successful", result });
                        console.log(result);
                    }
                });
            } else {
                res.send({ status: false, message: "Email already exists", event });
                console.log("email already exists:" + event);
            }
        }
    });
}
// exports.loginUser = function(req, res){
//     var email = req.body.email;
//     var password = req.body.password;
//     User.findOne({email : email}, function(err,obj){
//        if(err){
//            res.send({status : false, message : "error occured while procesing login request"});
//            console.log(err);
//        } else {
//            if(obj == null){
//                res.send({status : false, message : "User not registered"});
//            } else {
//                if(obj.password == password){
//                    res.send({status : true, message : "login successful", obj});
//                    console.log(obj);
//                } else {
//                    res.send({status : false, message : "Incorrect password"});
//                    console.log(obj);
//                }
//            }
//        }
//     });
// }

exports.loginUser=function(req,res){
    
     console.log(req.body);
     var email=req.body.email;
    var password=req.body.password;

    
      User.findOne({email : email}, function(err,obj){
    
   if(err){
       res.send({status : false, message : "error occured while procesing login request"});
       console.log(err);
   } else {
       if(obj == null){
           res.send({status : false, message : "User not registered"});
       } else {


          
        
        
        bcrypt.compare(password, obj.password, (err, result)=>{
       if(result)
        {
           
        res.send({status : true, message : "login successful", obj: obj});
       }
    else
    {
        res.send({status : false, message : "Incorrect password"});
       }
})


       }

   }
});


//node mailer

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: 'sireesha555551@gmail.com',
        pass: 'sireesharenu12345'
    }
 });
 
 let mailOptions = {
    from: 'sireesha555551@gmail.com',
    to: 'krupavarma1995@gmail.com',
    subject: 'Test',
    text: 'potti'
 };
 
 transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error.message);
    }
    console.log('success');
 });

    
}

//console values for getting rides
exports.rideNow=function(req,res){


    var location=req.body.location;
    var destination=req.body.destination;
    var uid=req.body.uid;

    console.log(location);
    console.log(destination);
    console.log(uid);


var newride = new rides({
    
    location:location,
    destination:destination,
    uid:uid
});

newride.save(function(err,result){
    if(err){
        return console.log(err);
    }
    else{
        console.log("ride saved");
    }
});

}



//show values in rides

exports.rideValues=function(req,res){
     var uid=req.params.id;
    
    
     rides.find({uid:uid},function(err,event){
        if(err){
            res.send({status:false,message:"error occured while finding ride",err});
            console.log(err);
        }
        else{
            if(event==null){
                res.send({status:false,message:"No rides Avalable"});
            }
            else{
                res.send({status:true,message:"Rides Available:",event});
                console.log('Rides List'+event);
            }
        }
    })


}