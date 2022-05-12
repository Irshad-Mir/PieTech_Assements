const userModel = require("../model/userModel");
const validator = require("../utils/validator");



const createUser = async function (req, res) {
  try {
    const requestBody = req.body;

    if (!validator.isValidRequestBody(requestBody)) {
      return res.status(400).send({
        status: false,
        message: "Invalid request parameter, please provide user Details",
      });
    }

    //Extract Body
    let {name, age } = requestBody;
    console.log(requestBody);

    if (!validator.isValid(name)) {
      return res.status(400).send({
        status: false,
        message: "Invalid request parameter, please provide your Name",
      });
    }

    if (age) {
      if (!validator.isValid(age)) {
        return res.status(400).send({
          status: false,
          message: "Invalid request parameter, please provide age",
        });
      }
    }

    const signedUpdata = await userModel.create(requestBody);
    return res.status(201).send({
      status: true,
      message: "Successfully register",
      data: signedUpdata,
    });
  } catch (err) {
    return res.status(500).send({ status: false, Error: err.message });
  }
};



const getUser = async function (req, res) {
    try {
        

        let saveQuery = req.query;
        let {  name, age } = saveQuery;
        if ( name || age) {
             let body = {  };
           
            if (name) {
               body.name = { $in: name }; 
            }

           

            if (age) {
                body.age = { $gte: age };
            }

            
            let userGet = await userModel.find(body).sort({ age: 1 })
            if (!(userGet.length > 0)) {
              return res
                .status(404)
                .send({
                  status: false,
                  message: " There is no such user, please valid query ",
                });
            }
            return res.status(200).send({
              status: true,
              message: " user list",
              data: userGet,
             
            });
        } else {
            const limitValue = req.query.limit || 2;
            const skipValue = req.query.skip || 0;
            let userData = await userModel
              .find()
              .limit(limitValue)
              .skip(skipValue);
            let userFound = await userModel.find()
            return res.status(200).send({
              status: true,
              message: "All user List",
              data: userData,
            });
        }
    } catch (err) {
        return res.status(500).send({ status: false, msg: err.message });

    }
}

module.exports={createUser, getUser}