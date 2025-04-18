# 🍰 Product List with Card - React

> Tatlı ürünlerini sepete ekle, miktarını artır/azalt, siparişini onayla. Mobil uyumlu ve kullanıcı dostu bir sipariş sepeti uygulaması.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5)

## 🔍 Proje Özeti

Bu projeyi daha önce Vanilla JavaScript ile geliştirmiştim ancak bu sürümde React kullanarak uygulamayı daha **modüler**, **dinamik** ve **kullanıcı odaklı** hale getirdim.  
Kullanıcılar tatlı ürünlerini sepetlerine ekleyebilir, miktarlarını ayarlayabilir ve siparişlerini onaylayarak yeni siparişler başlatabilir.

![image](https://github.com/user-attachments/assets/a582c5be-0c96-48a4-8d94-c3e8f92c3016)

## 🧩 Uygulama Özellikleri

### 🛒 Sepete Ürün Ekleme & Miktar Yönetimi
- Aynı ürün tekrar eklendiğinde miktar artırılır.
- Miktar sıfıra düşerse ürün otomatik olarak sepetten kaldırılır.

### 💵 Toplam Fiyat ve Ürün Sayısı
- Sepetteki tüm ürünlerin fiyatları **otomatik olarak hesaplanır**.
- Toplam tutar ve ürün sayısı gerçek zamanlı olarak güncellenir.

![image](https://github.com/user-attachments/assets/367764be-9014-4f33-93c4-5dd5beee2a76)

### ♻️ Ürün Silme & Clear All
- Tek tek ürün çıkarabilir veya “Clear All” butonuyla sepeti tamamen temizleyebilirsiniz.
- Temizleme işlemiyle birlikte sepet sıfırlanır, kullanıcı bilgilendirilir.

### ✅ Sipariş Onayı & Yeni Sipariş
- Sipariş onaylandığında modal pencere görünür:  
  “Order Confirmed – We hope you enjoy your food!”  
- “Start New Order” butonuyla sepet sıfırlanır, yeni sipariş başlatılır.

![image](https://github.com/user-attachments/assets/2918479a-1f21-4aa6-95b6-de0cd28b000e)

## 🖼️ Tasarım ve Deneyim

- **Mobil öncelikli (mobile-first)** yaklaşımla geliştirildi.
- Hem mobil hem masaüstünde kusursuz görünüm.
- Hover animasyonları, modal geçişleri ve harf harf açılan başlık animasyonu ile kullanıcı deneyimi artırıldı.

## 🌐 Canlı Demo
Uygulamayı canlı olarak görüntülemek için:

🔗 https://product-list-with-card.vercel.app

## 🧠 Öğrendiklerim
- React’te state yönetimi (useState)
- Props ile component iletişimi
- Liste üzerinden map ile dinamik render
- CSS animasyonlar (fade-in, scale-in-out, underline hover vs.)
- React içinde modal, toast, ve responsive layout uygulamaları

## ⚙️ Proje Yapısı

```bash
📦 public
 ┗ 📂 img                   # Projede kullanılan tüm görseller

📦 src
 ┣ 📂 assets
 ┃ ┗ 📂 css
 ┃   ┣ 📄 main.css          # Uygulama genel stil dosyası
 ┃   ┗ 📄 reset.css         # Varsayılan tarayıcı stillerini sıfırlayan dosya
 ┣ 📂 components
 ┃ ┣ 📄 Basket.jsx          # Sepet bileşeni
 ┃ ┣ 📄 ModalPage.jsx       # Sipariş onay modalı
 ┃ ┗ 📄 Products.jsx        # Ürünlerin listelendiği bileşen
 ┣ 📂 data
 ┃ ┗ 📄 product.jsx         # Ürün verilerinin tutulduğu dosya
 ┣ 📄 App.jsx               # Ana uygulama bileşeni
 ┣ 📄 main.jsx              # React uygulamasının giriş noktası
┗ 📄 index.html             # Uygulama HTML şablonu
