import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);

  const CHUNK_SIZE = 1024 * 1024; // 1MB

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const uploadFile = async () => {
    if (!file) {
      alert("Please select a file first!");
      return; 
    }

    const totalChunks = Math.ceil(file.size / CHUNK_SIZE);
    let uploadedChunks = 0;

    for (let i = 0; i < totalChunks; i++) {
      const start = i * CHUNK_SIZE;
      const end = Math.min(start + CHUNK_SIZE, file.size);
      const chunk = file.slice(start, end);

      const formData = new FormData();
      formData.append("chunk", chunk);
      formData.append("fileName", file.name);
      formData.append("chunkIndex", i.toString());
      formData.append("totalChunks", totalChunks.toString());

      try {
        await axios.post("http://localhost:5000/upload", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        uploadedChunks += 1;
        setProgress(Math.round((uploadedChunks / totalChunks) * 100));
      } catch (error) {
        console.error(`Error uploading chunk ${i + 1}:`, error);
        return;
      }
    }

    // Wait for progress bar to reach 100%
    setTimeout(() => {
      alert("File uploaded successfully!");
    }, 100);
  };

  return (
    <div>
      <h1>Chunk File Upload with Progress Bar</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={uploadFile} disabled={!file}>Upload</button>
      <div style={{ width: "100%", background: "#ccc", margin: "10px 0" }}>
        <div
          style={{
            width: `${progress}%`,
            background: "green",
            color: "white",
            textAlign: "center",
          }}
        >
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default App;
