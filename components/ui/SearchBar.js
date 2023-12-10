import React from "react";

const SearchBar = () => {
  return (
    <div
      className="w-full flex flex-row text-black justify-center bg-slate-100 p-3 rounded-2xl"
      style={{ fontFamily: "Nunito, sans-serif" }}
    >
      <div className="grow">
        <input
          type="text"
          placeholder="Search by Hotel or City"
          className="bg-slate-100 w-full outline-none"
        />
      </div>
      <div className="grow flex justify-center">
        <input type="date" className=" bg-slate-100 outline-none"/>
      </div>
      <div className="grow bg-slate-100 flex justify-center">1 Room, 1 Guest</div>
    </div>
  );
};

export default SearchBar;
