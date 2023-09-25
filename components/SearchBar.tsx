"use client";
import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import Image from "next/image";
import { useRouter } from "next/navigation";

type SearchButtonProps = {
  btnStyle?: string;
};

const SearchButton = ({ btnStyle }: SearchButtonProps) => {
  return (
    <button type="submit" className={`${btnStyle}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="loopa"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
};

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manufacturer === "" && model === "") return alert("Fill the searchbar");
    updateSearchParams(model, manufacturer);
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("model", model);
    } else searchParams.delete("model");

    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else searchParams.delete("manufacturer");

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center gap-2">
      <div className="w-[300px] flex items-center gap-2">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton btnStyle="sm:hidden" />
      </div>
      <div className="flex items-center gap-2">
        <Image
          src="/model-icon.png"
          alt="car model"
          width={25}
          height={25}
          className=""
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={({ target }) => setModel(target.value)}
          placeholder="Model"
          className="bg-gray-200 hover:bg-gray-300 rounded-md px-2 py-1"
        />
        <SearchButton btnStyle="sm:hidden" />
      </div>
      <SearchButton btnStyle="max-sm:hidden" />
    </form>
  );
};
export default SearchBar;
