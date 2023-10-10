import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// get the current module's directory path
const __filename = fileURLToPath(import.meta.url);
const PATH = dirname(__filename);

const requestHandler = (req, res) => {
    const { url, method } = req;
    if (url == '/') {
        // set response header
        res.setHeader('Content-Type', 'text/html');

        // set response content
        res.write(
            `<html>
                <head></head>
                <body>
                    <form action="/message" method="POST">
                        <input name='message' type="text">
                        <button type="submit">Send</button>
                    </form>
                </body>
            </html>`
        );
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        // ed event to the req

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(message);
            fs.writeFile(path.join(PATH, 'message.txt'), message, (err) => {
                if (err) {
                    console.log(err);
                }
                //redirect
                res.statusCode = 302;
                res.setHeader = ('Location', '/');
                return res.end();
            });
        });
    }
};
export default requestHandler;
