import React from "react";

const MiniCard = () => {
  const categories = [
    {
      name: "Fruits & Vegetables",
      imgLink: "/Images/List_Images/list02.jpg",
    },
    {
      name: "Baby & Pregnancy",
      imgLink: "/Images/List_Images/list05.jpg",
    },
    {
      name: "Beverages",
      imgLink: "/Images/List_Images/list08.jpg",
    },
    {
      name: "Meats & Seafood",
      imgLink: "/Images/List_Images/list11.jpg",
    },
    {
      name: "Biscuits & Snacks",
      imgLink: "/Images/List_Images/list14.jpg",
    },
    {
      name: "Breads & Bakery",
      imgLink: "/Images/List_Images/list17.jpg",
    },
    {
      name: "Breakfast & Dairy",
      imgLink: "/Images/List_Images/list20.jpg",
    },
    {
      name: "Frozen Foods",
      imgLink: "/Images/List_Images/list23.jpg",
    },
    {
      name: "Grocery & Staples",
      imgLink: "/Images/List_Images/list26.jpg",
    },
  ];

  return (
    <>
      <div className="mini-card w-full h-[20%] flex justify-between flex-wrap py-10">
        {categories.map((items, idx) => {
          const { name, imgLink } = items;
          return (
            <div
              key={idx}
              className="card-body w-fit flex flex-col items-center"
            >
              <div className="img-div w-24 h-24 mb- bg-green-400 rounded-full overflow-hidden">
                <img className="hover:scale-110 transition-all" src={imgLink} alt="" />
              </div>
              <p className="text-sm text-center">{name}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MiniCard;