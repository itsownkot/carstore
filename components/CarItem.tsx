"use client";
import { useState } from "react";
import Image from "next/image";
import { CarItemProps } from "@/types";
import Button from "./Button";
import calculateCarRent from "@/utils";
import CarItemDetails from "./CarItemDetails";

type Props = {
  car: CarItemProps;
};

const CarItem = ({ car }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { city_mpg, year, make, model, transmission, drive } = car;
  const rent = calculateCarRent(city_mpg, year);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="rounded-md bg-gray-100 mt-10 px-6 py-4">
      {/* TITLE */}
      <div>
        <h3>
          {make} {model}
        </h3>
      </div>
      {/* PRICING */}
      <p className="flex text-xl font-bold">
        <span className="text-sm font-medium self-start">$</span>
        {rent}
        <span className="text-sm font-medium self-end">/day</span>
      </p>
      {/* IMAGE */}
      <div className="relative w-full h-40">
        <Image
          src="/hero.png"
          fill
          alt="car model"
          className="object-contain"
        />
      </div>
      {/* DESCR */}
      <div className="group relative w-full mt-2">
        <div className="flex justify-between text-gray-700 group-hover:invisible w-full">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" width={20} height={20} alt="tire" />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" width={20} height={20} alt="gas" />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>
        {/* BUTTON */}
        <div className="hidden group-hover:flex absolute top-0 w-full h-full">
          <Button
            title="View more"
            btnStyle="text-white text-xl w-full rounded-md"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      {/* MODAL */}
      {isOpen && (
        <CarItemDetails car={car} isOpen={isOpen} closeModal={closeModal} />
      )}
    </div>
  );
};
export default CarItem;
