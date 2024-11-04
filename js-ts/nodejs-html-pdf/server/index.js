import express from "express";
import bodyParser from "body-parser";
import pdf from "html-pdf";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import pdfTemplate from "./documents/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Post - PDF generation and fetching of data
app.post("/create-pdf", (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile("result.pdf", (err) => {
        if(err) {
            res.send(Promise.reject());
        }
        res.send(Promise.resolve());
    })
})

// Get - Send the generated PDF to the client
app.get("/fetch-pdf", (_, res) => {
    res.sendFile(path.join(__dirname, "result.pdf"));
})


app.listen(port, () => { console.log(`Server is running on port ${port}`) });