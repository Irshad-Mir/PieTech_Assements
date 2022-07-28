const axios = require("axios");
const postModel = require("../models/postModel.js");




const getPost = async function (_req, res) {
  try {
    let options = {
      method: "get",
      
    
      url: `https://jsonplaceholder.typicode.com/posts`,

      //console.log(url)
      HEADERS: {
        //"Content-Type": "application/json",
        'Content-type': 'application/json; charset=UTF-8',
      },
    };

    
    let response = await axios(options);

     let x = response.data;

   
const i =await postModel.create(x);
    
      
    

    res.status(200).send({ status: true, data: i});
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: false, msg: "server error" });
  }
};

module.exports.getPost = getPost;