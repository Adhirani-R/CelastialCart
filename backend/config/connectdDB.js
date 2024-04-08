const mongoose=require("mongoose")

const connectdDB = () => {
   mongoose.connect(process.env.DB_URL).then((con)=>
   {
      console.log("Database Connected to host:" +con.connection.host);
   }) 
};
module.exports= connectdDB