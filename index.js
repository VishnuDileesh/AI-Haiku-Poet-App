
import bodyParser from 'body-parser';
import 'dotenv/config';
import express from 'express';
import fetch from 'node-fetch';
import path from 'path';


const __dirname = path.resolve();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});


app.post('/get-haiku', async (req, res) => {
    await fetch(`https://ai-haiku-poet-zt6iuojbma-uc.a.run.app/haiku?theme=${req.body.theme}`)
        .then(res => res.json())
        .then(data => res.send(`
            <article>
                <h3 style="white-space: pre-line;">${data['Haiku']}</h3>
            </article>
        `))
        .catch(err => console.log(err));
});

const port = parseInt(process.env.PORT) || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});