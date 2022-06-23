# QR Code Generator
<img src='public\logo-192x192.png'>

> <b>Author: Nicola De Nicolais</b>

This code represents a simple QR Code Generator app based on React with the integration of React Router

## 💻 Technologies used

[<img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="70">](https://reactjs.org/)

React.js is a JavaScript library for creating user interfaces specific to single-page applications. It allows developers to create large web applications that can modify data without having to reload the page every time.

[<img src="https://seeklogo.com/images/R/react-router-logo-AB5BFB638F-seeklogo.com.png" width="80">](https://reactrouter.com/)

React Router is a complete JavaScript routing library that allows you to manage paths within a web application using so-called dynamic routing. It allows navigation between sections of various components in React applications and allows you to change the URL of the browser while keeping the user interface synchronized with the URL.
### Installation
```
npm install react-router-dom
yarn add react-router-dom
```

[<img src="https://i.pinimg.com/originals/32/35/bc/3235bc44e8c211feff005a043e1e2d0f.png" width="80">](https://www.npmjs.com/package/qrcode.react)

A React component to generate QR codes for rendering to the DOM.

### Installation
```
npm install qrcode.react
yarn add qrcode.react
```

## 🛠️ Installation Steps
1) Clone this repository from GitHub
```
git clone https://github.com/ndenicolais/qr-code-generator
```

2) Change the working directory
```
cd qr-code-generator-main
```

3) Install dependencies
```
npm install
yarn
```

4) Run the application in developer mode
```
npm start
yarn start
```

5) Open [http://localhost:3000](http://localhost:3000) to view the application in the browser

## ⚙️ Customization

Customize the QR code's aspect according to your preferences by editing these parameters:

📄 App.js in 📁 src

|Parameter|Description|
|-|-|
|value		    |type of value to input|
|size		    |size of QR code's image|
|bgColor	    |color of QR code's background|
|fgColor	    |color of QR code's symbol|
|level      	|level of error correction: (L\M\Q\H)|
|includeMargine |to include QR code's margin|