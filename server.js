import dotenv from 'dotenv';
import requestHandler from './routes.js';
import http from 'http';

dotenv.config();

const PORT = process.env.PORT || 3005;

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}...`);
});
