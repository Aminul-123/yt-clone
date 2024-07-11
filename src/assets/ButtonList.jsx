import React, { useState } from "react";

function ButtonList() {
  const [active, setActive] = useState('All')

  const allButtons = [
    "All",
    "shorts",
    "Recent",
    "software",
    "films",
    "educational",
    "development",
    "computer",
    'Live',
    "Music",
    'Songs',
    'Vlogs',
    'Trending',
    'Programming',
    'Skills',
    'Mixes',
    'Information',
    'Seminars',
    'Motivation'

  ];
  const videoByTag = (tag) => {
    if(active !== tag) {
      setActive(tag);
      // we will implement this features in afternoon
    }
   // alert(tag)

    }
   // console.log(active)
  
   return (
    <div className=" mx-4 fixed top-12 pb-2 pt-2 mt-0 right-0 left-[17%] bg-gray-50 flex 
    overflow-x-scroll no-scrollbar  gap-2">
      {allButtons.map((item, idx) => {
        return (
          <div key={idx} className="flex">
            <button className={`h-8 px-2  bg-gray-300 rounded-full
            ${active === item? 'bg-red-400 text-white': 'bg-gray-300' }
            `}
            onClick={() => videoByTag(item)}
            >
              {" "}
              {item}{" "}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ButtonList;
