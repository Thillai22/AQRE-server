const mongoose = require('mongoose');

const connection = async () =>{
    try{

        const res = await mongoose.connect(
          "mongodb://mongo:5gHzW4W4PQTmbCYsIwOT@containers-us-west-83.railway.app:6115",
          // "mongodb+srv://admin:admin@onlineshopping.z6bz2.mongodb.net/?retryWrites=true&w=majority",
          {
            useNewUrlParser: true,
            useUnifiedTopology: true
          
          }
        );
        if(res){
            console.log("success in connection to db");
        }
    }
    catch(err){
        console.log(err);
    }
}
module.exports = connection;