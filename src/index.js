import React, { useState } from "react";
import { createRoot } from 'react-dom/client';
import QRCode from "qrcode.react";
import "./index.css";

function App() {
  const [qrValue, setQrValue] = useState("qr_code_generated");
  const handleOnChange = event => {
    const { value } = event.target;
    setQrValue(value);
  };
  const downloadQRCode = () => {
    // Generate download with use canvas and stream
    const canvas = document.getElementById("qr-gen");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `${qrValue}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <input onChange={handleOnChange} placeholder="Insert here" />
      <br />
      <QRCode
        id="qr-gen"
        value={qrValue}
        size={290}
        level={"H"}
        includeMargin={true}
      />
      <p>
        <button type="button" onClick={downloadQRCode}>
          Download QR Code
        </button>
      </p>
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
