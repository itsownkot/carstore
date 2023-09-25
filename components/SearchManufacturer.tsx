"use client";
import { SearchManufacturerProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import Image from "next/image";
import { manufacturers } from "@/constants";

const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  const [query, setQuery] = useState("");
  const filteredBrands =
    query === ""
      ? manufacturers
      : manufacturers.filter((el) =>
          el.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <div>
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="flex items-center gap-2">
          <Combobox.Button>
            <Image src="/car-logo.svg" width={25} height={25} alt="car logo" />
          </Combobox.Button>
          {/* FIXME: после ввода значения и нажатия enter оно не стирается */}
          <Combobox.Input
            placeholder="Volkswagen"
            onChange={(e) => setQuery(e.target.value)}
            displayValue={(manufacturer: string) => manufacturer}
            className="bg-gray-200 px-2 py-1 rounded-md w-full hover:bg-gray-300 transition"
          />
        </div>
        {/* FIXME: сделать выпадающий список не блочным */}
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}
        >
          <Combobox.Options className="overflow-y-auto max-h-[200px]">
            {filteredBrands.length === 0 && query !== "" ? (
              <Combobox.Option value={query}>
                There is no '{query}'
              </Combobox.Option>
            ) : (
              filteredBrands.map((item) => (
                <Combobox.Option
                  key={item}
                  value={item}
                  className={({ active }) =>
                    active ? "bg-blue-500 text-white" : "text-gray-900"
                  }
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${selected ? "font-bold" : "font-normal"}`}
                      >
                        {item}
                      </span>
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </Combobox>
    </div>
  );
};
export default SearchManufacturer;
