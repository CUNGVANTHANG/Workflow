const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const fs = require('fs'); // file system
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(fileUpload());

// Directories
const chunkDir = path.join(__dirname, 'chunks');
const mergedDir = path.join(__dirname, 'merged');

// Ensure directories exist
if (!fs.existsSync(chunkDir)) fs.mkdirSync(chunkDir);
if (!fs.existsSync(mergedDir)) fs.mkdirSync(mergedDir);

// Endpoint to handle chunk upload
app.post('/upload', async (req, res) => {
  const { chunkIndex, fileName, totalChunks } = req.body;

  if (!req.files || !req.files.chunk) {
    return res.status(400).send("No chunk uploaded");
  }

  const chunk = req.files.chunk;
  const fileChunkDir = path.join(chunkDir, fileName);

  // Ensure chunk directory exists for this file
  if (!fs.existsSync(fileChunkDir)) fs.mkdirSync(fileChunkDir);

  const chunkPath = path.join(fileChunkDir, `${chunkIndex}`);
  
  // Save chunk
  await chunk.mv(chunkPath);
  console.log(`Chunk ${chunkIndex} of ${totalChunks} saved`);

  // Check if all chunks are uploaded
  const uploadedChunks = fs.readdirSync(fileChunkDir).length;

  if (uploadedChunks == totalChunks) {
    const finalPath = path.join(mergedDir, fileName);
    const writeStream = fs.createWriteStream(finalPath);

    for (let i = 0; i < totalChunks; i++) {
      const partPath = path.join(fileChunkDir, `${i}`);
      const data = fs.readFileSync(partPath);
      writeStream.write(data);
      fs.unlinkSync(partPath); // Remove chunk after merging
    }

    writeStream.end();
    fs.rmdirSync(fileChunkDir); // Remove empty chunk directory
    console.log(`File ${fileName} has been merged successfully.`);
  }

  res.send("Chunk uploaded successfully");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
