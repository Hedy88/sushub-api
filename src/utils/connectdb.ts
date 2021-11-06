import mongoose from "mongoose";
import config from "config";

function connect() {
    const dbUri = config.get<string>("dbUri")

    return mongoose.connect(dbUri)
    .then(() =>{
       console.log('connected to mongoDB!')
    }).catch((error) => {
        console.error("can't connect to the DB, please check the config file (at /config/default.ts).");
        process.exit(1);
    })
       
}

export default connect