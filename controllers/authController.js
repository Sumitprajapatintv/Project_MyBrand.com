import { comparePassword, hashPassword} from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import  JWT from "jsonwebtoken";

export const registerController=async (req,res)=>{
    try{
           const {name,email,password,phone,address}=req.body;
           console.log(req.body);
           if(!name)
           {
            return res.send({error:'Namejh is required'});
           }
           if(!email)
           {
            return res.send({error:'email is required'});
           }
           if(!password)
           {
            return res.send({error:'password is required'});
           }
           if(!phone)
           {
            return res.send({error:'phone is required'});
           }
           if(!address)
           {
            return res.send({error:'address is required'});
           }


           //check User
           const existingUser=await userModel.findOne({email});

           if(existingUser)
           {
               return res.status(200).send({
                    success:true,
                    message:'Already Register Plaese Login'
               })
           }


           //register user
           const hashedPasseord=await hashPassword(password);
           //save
           const user=await new userModel({name,email,phone,address,password:hashedPasseord}).save();

           res.status(201).send({
            success:true,
            message:'User Register Successfully',
            user
           })

    } catch(error)
    {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'error in Registration',
            error,
        });
    }



};

// Login

//POST LOGIN
export const loginController = async (req, res) => {
    try {
      const { email, password } = req.body;
      //validation
      if (!email || !password) {
        return res.status(404).send({
          success: false,
          message: "Invalid email or password",
        });
      }
      //check user
      const user = await userModel.findOne({ email });
      if (!user) {
        return res.status(404).send({
          success: false,
          message: "Email is not registerd",
        });
      }
      const match = await comparePassword(password, user.password);
      if (!match) {
        return res.status(200).send({
          success: false,
          message: "Invalid Password",
        });
      }
      //token
      const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      res.status(200).send({
        success: true,
        message: "login successfully",
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          address: user.address,
          role: user.role,
        },
        token,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in login",
        error,
      });
    }
  };
  

  //test

  export const testController = (req, res) => {
    try {
      res.send("Protected Routes");
    } catch (error) {
      console.log(error);
      res.send({ error });
    }
  };