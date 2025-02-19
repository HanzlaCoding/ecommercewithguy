import React, { useState } from "react";
import organic from "/Images/Organic.svg";
import link from "/Images/Link.png";
import appleJuice from "/Images/appleJuice.png";

const ProductCard = () => {
  const [Data, setData] = useState([
    {
      id: 1,
      name: "100% Percent Apple Juice - 64 ml Bottle",
      price: 0.6,
      originalPrice: 2.00,
      discount: 70,
      category: "Organic",
      image: "appleJuice",
    },
    {
      id: 2,
      name: "Organic Orange Juice - 500 ml Pack",
      price: 1.3,
      originalPrice: 5.50,
      discount: 65,
      category: "Organic",
      image: "orangeJuice",
    },
    {
      id: 3,
      name: "Fresh Almond Milk - 1L Carton",
      price: 2.8,
      originalPrice: 10.50,
      discount: 60,
      category: "Dairy",
      image: "almondMilk",
    },
    {
      id: 4,
      name: "Strawberry Yogurt - 250g Cup",
      price: 1.2,
      originalPrice: 4.50,
      discount: 50,
      category: "Dairy",
      image: "strawberryYogurt",
    },
    {
      id: 5,
      name: "Whole Grain Oats - 500g Pack",
      price: 1.8,
      originalPrice: 6.50,
      discount: 72,
      category: "Healthy",
      image: "wholeGrainOats",
    },
    {
      id: 6,
      name: "Dark Chocolate Protein Bar - 50g",
      price: 0.9,
      originalPrice: 3.50,
      discount: 55,
      category: "Snacks",
      image: "proteinBar",
    },
    {
      id: 7,
      name: "Organic Honey - 500g Jar",
      price: 3.9,
      originalPrice: 14.50,
      discount: 40,
      category: "Organic",
      image: "organicHoney",
    },
    {
      id: 8,
      name: "Green Tea - 100 Tea Bags",
      price: 2.5,
      originalPrice: 9.50,
      discount: 45,
      category: "Beverages",
      image: "greenTea",
    },
    {
      id: 9,
      name: "Peanut Butter - 400g Jar",
      price: 2.3,
      originalPrice: 8.50,
      discount: 58,
      category: "Spreads",
      image: "peanutButter",
    },
    {
      id: 10,
      name: "Granola Mix - 300g Pack",
      price: 3.0,
      originalPrice: 12.00,
      discount: 50,
      category: "Healthy",
      image: "granolaMix",
    },
    {
      id: 11,
      name: "ReactJS Course - Beginner to Advanced",
      price: 12.99,
      originalPrice: 49.99,
      discount: 74,
      category: "Education",
      image: "reactCourse",
    },
    {
      id: 12,
      name: "JavaScript Mastery Guide",
      price: 15.99,
      originalPrice: 59.99,
      discount: 73,
      category: "Education",
      image: "jsBook",
    },
    {
      id: 13,
      name: "Web Development Bootcamp",
      price: 19.99,
      originalPrice: 79.99,
      discount: 75,
      category: "Education",
      image: "webDevBootcamp",
    },
    {
      id: 14,
      name: "Wireless Bluetooth Headphones",
      price: 29.99,
      originalPrice: 99.99,
      discount: 70,
      category: "Electronics",
      image: "bluetoothHeadphones",
    },
    {
      id: 15,
      name: "Smart LED Light Bulb",
      price: 8.99,
      originalPrice: 24.99,
      discount: 64,
      category: "Electronics",
      image: "ledBulb",
    },
    {
      id: 16,
      name: "Portable Laptop Stand",
      price: 18.99,
      originalPrice: 39.99,
      discount: 52,
      category: "Accessories",
      image: "laptopStand",
    },
    {
      id: 17,
      name: "Mechanical Gaming Keyboard",
      price: 45.99,
      originalPrice: 99.99,
      discount: 54,
      category: "Gaming",
      image: "gamingKeyboard",
    },
    {
      id: 18,
      name: "Ergonomic Office Chair",
      price: 79.99,
      originalPrice: 199.99,
      discount: 60,
      category: "Furniture",
      image: "officeChair",
    },
    {
      id: 19,
      name: "USB-C Fast Charging Cable",
      price: 5.99,
      originalPrice: 14.99,
      discount: 60,
      category: "Accessories",
      image: "usbCable",
    },
    {
      id: 20,
      name: "Noise Cancelling Earbuds",
      price: 49.99,
      originalPrice: 129.99,
      discount: 62,
      category: "Electronics",
      image: "noiseCancellingEarbuds",
    }
  ])

  return (
    <>
      {Data.map((items, idx) => {
        const { name, price, originalPrice, discount, category } = items;

        return <div className="card p-3 w-48 bg-zinc-100 rounded-md overflow-hidden flex flex-col gap-5">
        <div className="img w-full h-40 bg-amber-800 rounded-md relative">
          <div className="overlay absolute p-2 flex flex-col items-start gap-24">
            <div className="discount px-2 py-1 bg-red-600 text-white text-xs rounded-full">
             {discount}%
            </div>
            <div className="category part2 flex justify-between gap-6 items-center">
              <img src={organic} alt="" className="h-5" />
              <img src={link} alt="" className="h-3" />
            </div>
          </div>
          <img src={appleJuice} alt="" />
        </div>
        <h5 className="text-lg tracking-tighter leading-5 py-1 font-semibold">
          {name}
        </h5>
        <div className="price flex gap-2 items-center">
          <h5 className="text-red-600 tracking-tighter font-bold text-2xl">
            ${price}
          </h5>
          <del className="text-gray-700 font-bold text-sm">${originalPrice}</del>
        </div>
        <button className="px-2 py-1 font-light text-sm border-[1px] border-zinc-700 rounded-full w-full text-left">
          Add to cart
        </button>
      </div>
      })}
    </>
  );
};

export default ProductCard;
