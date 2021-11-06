import express from "express";
import config from "config";
import connect from "./utils/connectdb";
import logger from "./utils/logger";
import routes from "./routes";

const port = config.get('port')
const app = express();

app.listen(port, async () => {
    logger.info('sushub-api is running');
    logger.info(`at http://localhost:${port}`);
    await connect();
});
