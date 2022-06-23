import React, { useState } from "react";
import QRCode from "qrcode.react";
import "./App.css";

function App() {
  const [qrValue, setQrValue] = useState("qr_code_generated");
  const handleOnChange = event => {
    const { value } = event.target;
    setQrValue(value);
  };

  const downloadQR = () => {
    // Generate download with use canvas and stream
    const canvas = document.getElementById("qr-code");
    const pngQRCode = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let linkQR = document.createElement("a");
    linkQR.href = pngQRCode;
    linkQR.download = `${qrValue}.png`;
    document.body.appendChild(linkQR);
    linkQR.click();
    document.body.removeChild(linkQR);
  };

  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <input
      onChange={handleOnChange}
      placeholder="Input value here"
      />
      <br /><br />
      <QRCode
        id="qr-code"
        value={qrValue}
        size={300}
        bgColor="#8C383A"
        fgColor="#DCA349"
        level={"H"}
        includeMargin={true}
        />
      <p>
        <button
        type="button"
        onClick={downloadQR}
        >
          Download QR Code
        </button>
      </p>
    </div>
  );
}

export default App;