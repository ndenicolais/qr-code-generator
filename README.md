# QR Code Generator
<img src='public\logo-192x192.png'>

> <b>Author: Nicola De Nicolais</b>

This code represents a simple QR Code Generator app based on React with the integration of React Router

## 🚀 Technologies used

💠 [React](https://reactjs.org/)

React.js is a JavaScript library for creating user interfaces specific to single-page applications. It allows developers to create large web applications that can modify data without having to reload the page every time.

📍 [React Router](https://reactrouter.com/)

React Router is a complete JavaScript routing library that allows you to manage paths within a web application using so-called dynamic routing. It allows navigation between sections of various components in React applications and allows you to change the URL of the browser while keeping the user interface synchronized with the URL.

🔴 [qrcode.react](https://www.npmjs.com/package/qrcode.react)

A React component to generate QR codes for rendering to the DOM. To install it open the terminal and run: `yarn add qrcode.react` or `npm install qrcode.react`

## 📦 Local development
In the project folder we can perform several actions:

1) Clone this repository from GitHub. Open the terminal and run `git clone https://github.com/ndenicolais/qr-code-generator`

2) In the terminal run `cd qr-code-generator-main` to enter the project folder.

3) Install the required dependencies for the application:
- Run `yarn` 
- Run `npm install`

4) Start the application in developer mode.
Open http://localhost:3000 to view the application in the browser.
- Run `yarn start` 
- Run `npm run dev`

## ⚙️ Customize the code

Customize the QR code's aspect according to your preferences by editing these parameters:

📁 index.js file

- value -> type of value to input
- size -> size of QR code's image
- bgColor -> color of QR code's background
- fgColor -> color of QR code's symbol
- level -> level of error correction:
    - L (Low) -> 7% of data bytes can be restored.
    - M (Medium) -> 15% of data bytes can be restored.
    - Q (Quartile) -> 25% of data bytes can be restored.
    - H (High) -> 30% of data bytes can be restored.
- includeMargin -> to include QR code's margin