import React from "react";

function List({ list }) {
  return (
    <ul className="DM-Sans sm:text-2xl text-xs text-white">
      {list.map((list, key) => {
        return (
          <li className="my-8" key={key}>
            <span className="bg-gradient-to-br from-[#DA25E2] to-[#5718F3] py-2 px-3 sm:px-5 sm:rounded-xl rounded-md mr-4">{key + 1}</span> {list}
          </li>
        );
      })}
    </ul>
  );
}

export default List;
