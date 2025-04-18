# 🍰 Product List with Card - React

> Add desserts to your cart, increase/decrease quantities, confirm your order. A mobile-friendly and user-centric shopping cart application.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5)

## 🔍 Project Overview

I previously developed this project using Vanilla JavaScript, but in this version, I rebuilt it with React to make it more **modular**, **dynamic**, and **user-focused**.  
Users can add dessert items to their cart, adjust quantities, and confirm their orders to start a new shopping session.

![image](https://github.com/user-attachments/assets/a582c5be-0c96-48a4-8d94-c3e8f92c3016)

## 🧩 Features

### 🛒 Add to Cart & Quantity Management
- When the same item is added again, its quantity is automatically increased.
- If the quantity is reduced to zero, the item is automatically removed from the cart.

### 💵 Dynamic Total Price & Item Count
- The total price of all items in the cart is **automatically calculated**.
- Both the item count and the total price update in real-time as the user interacts with the cart.

![image](https://github.com/user-attachments/assets/624e9589-f041-49b5-ba4f-9c1366822e35)

### ♻️ Item Removal & Clear All
- Users can remove items individually or use the “Clear All” button to empty the entire cart.
- Upon clearing, the cart resets and the user is notified.

### ✅ Order Confirmation & New Order Flow
- When the order is confirmed, a modal window is displayed:  
  “Order Confirmed – We hope you enjoy your food!”  
- Clicking the “Start New Order” button resets the cart and begins a new session.

![image](https://github.com/user-attachments/assets/2918479a-1f21-4aa6-95b6-de0cd28b000e)

## 🖼️ Design & User Experience

- Built with a **mobile-first** approach.
- Fully responsive across both mobile and desktop devices.
- Hover animations, modal transitions, and per-letter animated titles were added to enhance user experience.

## 🌐 Live Demo

You can view the live application here:

🔗 https://product-list-with-card.vercel.app

## 🧠 What I Learned

- State management with React (`useState`)
- Component communication via props
- Rendering lists dynamically using `map`
- Applying CSS animations (fade-in, scale-in-out, underline hover effects)
- Implementing modals, toast notifications, and responsive layout techniques in React

## ⚙️ Project Structure

```bash
📦 public
 ┗ 📂 img                   # All images used in the project

📦 src
 ┣ 📂 assets
 ┃ ┗ 📂 css
 ┃   ┣ 📄 main.css          # Global stylesheet
 ┃   ┗ 📄 reset.css         # Resets default browser styles
 ┣ 📂 components
 ┃ ┣ 📄 Basket.jsx          # Shopping cart component
 ┃ ┣ 📄 ModalPage.jsx       # Order confirmation modal
 ┃ ┗ 📄 Products.jsx        # Component displaying product list
 ┣ 📂 data
 ┃ ┗ 📄 product.jsx         # Contains product data
 ┣ 📄 App.jsx               # Main application component
 ┣ 📄 main.jsx              # Entry point for React rendering
┗ 📄 index.html             # Application HTML template
