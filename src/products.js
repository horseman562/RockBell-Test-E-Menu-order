import product1 from "./assets/products/1.png";
import product2 from "./assets/products/2.png";
import product3 from "./assets/products/3.png";
import product4 from "./assets/products/4.png";
import product5 from "./assets/products/5.png";
import product6 from "./assets/products/6.webp";
import product7 from "./assets/products/7.webp";
import product8 from "./assets/products/8.webp";
import product9 from "./assets/products/nsl_biasa.jpg";
import product10 from "./assets/products/kb.jpg";
import product11 from "./assets/products/gcc.jpg";
import product12 from "./assets/products/kopio.png";
import product13 from "./assets/products/teh-c.jpg";
import product14 from "./assets/products/aj.jpg";

export const PRODUCTS = [
  {
    id: 1,
    productName: "IPhone",
    price: 999.0,
    productImage: product1,
  },
  {
    id: 2,
    productName: "Macbook Pro 2022 (M1)",
    price: 1999.0,
    productImage: product2,
  },
  {
    id: 3,
    productName: "Cannon M50 Camera",
    price: 699.0,
    productImage: product3,
  },
];

// Food Group
export const FOOD_PRODUCT = [
  {
    id: 1,
    group: "local",
    groupName: "Nasi Lemak",
    variantItem: [
      { name: "Nasi Lemak Telur", price: 4.00 },
      { name: "Nasi Lemak Ayam Goreng", price: 6.00 },
      { name: "Nasi Lemak Ayam Rendang", price: 7.00 }
    ],
    modifier: [
      { name: "Tambah Nasi", price: 1.00},
      { name: "Tambah Ayam Goreng", price: 3.00},
      { name: "Tambah Ayam Rendang", price: 4.00},
      { name: "Take Away", price: 0.50},
    ],
    productImage: product9,
  },
  {
    id: 2,
    group: "local",
    groupName: "Kaya Butter Toast (2pcs)",
    variantItem: [
      { name: "White toast", price: 5.5 },
      { name: "Wholemeal", price: 6.5 },
    ],
    modifier: [
      { name: "Take Away", price: 0.50},
    ],
    productImage: product10,
  },
  {
    id: 3,
    group: "western",
    groupName: "Golden Chicken Chop",
    variantItem: [
      { name: "Black Pepper Source", price: 14.90 },
      { name: "Mushroom Source", price: 14.90 },
    ],
    modifier: [
      { name: "Extra Source", price: 0.00},
      { name: "Take Away", price: 0.50},
    ],
    productImage: product11,
  },
  {
    id: 4,
    group: "beverage",
    groupName: "Kopi O",
    variantItem: [
      { name: "Hot", price: 3.00 },
      { name: "Cool", price: 3.50 },
    ],
    modifier: [
      { name: "Kopi O Less Sweet", price: 0.00},
      { name: "Kopi O Less Ice", price: 0.00},
      { name: "Kopi O Kosong", price: 0.00},
      { name: "Kopi O Kopi Extra", price: 1.00},
      { name: "Kopi O Take Away", price: 0.50},
    ],
    productImage: product12,
  },
  {
    id: 5,
    group: "beverage",
    groupName: "Teh C",
    variantItem: [
      { name: "Teh C Hot", price: 3.20 },
      { name: "Teh C Cool", price: 3.70 },
    ],
    modifier: [
      { name: "Less Sweet", price: 0.00},
      { name: "Less Ice", price: 0.00},
      { name: "Kosong", price: 0.00},
      { name: "Kopi Extra", price: 1.00},
      { name: "Take Away", price: 0.50},
    ],
    productImage: product13,
  },
  {
    id: 6,
    group: "beverage",
    groupName: "Teh C",
    variantItem: [
      { name: "Teh C Normal", price: 7.00},
      { name: "Teh C Less Ice", price: 7.00 },
      { name: "Teh C No Ice", price: 7.50 },
    ],
    modifier: [
      { name: "Take Away", price: 0.50},
    ],
    productImage: product14,
  },


];

