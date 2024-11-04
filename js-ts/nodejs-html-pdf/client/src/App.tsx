import axios from "axios"
import { saveAs } from "file-saver"
import { useState } from "react"

function App() {
  const [state, setState] = useState({name: "", receiptId: 0, price1: 0, price2: 0})

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  }
  
  const createAndDownloadPdf = () => {
    axios.post("/create-pdf", state)
      .then(() => axios.get("fetch-pdf", { responseType: "blob" })) // blob - Binary Large Object
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });
        saveAs(pdfBlob, "newPdf.pdf");
      })
  }

  return (
    <div 
        style={{
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          height: "100vh", 
          flexDirection: "column", 
          gap: "8px"
        }} 
        className="App"
    >
        <input style={{height: "24px", width: "400px"}} type="text" placeholder="Name" name="name" onChange={handleChange} />
        <input style={{height: "24px", width: "400px"}}  type="number" placeholder="Receipt ID" name="receiptId" onChange={handleChange} />
        <input style={{height: "24px", width: "400px"}}  type="number" placeholder="Price 1" name="price1" onChange={handleChange} />
        <input style={{height: "24px", width: "400px"}}  type="number" placeholder="Price 2" name="price2" onChange={handleChange} />
        <button onClick={createAndDownloadPdf}>
          Download PDF
        </button>
    </div>
  )
}

export default App
