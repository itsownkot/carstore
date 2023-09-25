"use client";
import { useState, Fragment } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";
import { CustomFilterProps } from "@/types";

// NOTE: если выбрать электрический тип и какой либо год если даже нет электро все равно показывает результат, хотя вроде нет
const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0].title);
  const router = useRouter();

  const handleUpdateParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set(type, value);

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };
  return (
    <div>
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          handleUpdateParams(title, e.toLowerCase());
        }}
      >
        <div className="relative w-fit z-10">
          <Listbox.Button className="w-[100px] flex justify-between items-center border rounded-md p-1">
            <span>{selected}</span>
            <Image
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              alt="up and down arrows"
              className="object-contain ml-1"
            />
          </Listbox.Button>
          {/* FIXME: список растягивает контейнер */}
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options>
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  value={option.value}
                  className={({ active }) =>
                    active ? "bg-blue-500 text-white cursor-pointer" : ""
                  }
                >
                  {({ selected }) => (
                    <span className={`${selected ? "font-semibold" : null}`}>
                      {option.value}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};
export default CustomFilter;
