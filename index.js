
import 'dotenv/config';
import express from 'express';
import path from 'path';


const __dirname = path.resolve();

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});


const port = parseInt(process.env.PORT) || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});