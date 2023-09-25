"use client";

import Image from "next/image";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CarItemProps } from "@/types";

interface CarDetailProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarItemProps;
}

const CarItemDetails = ({ isOpen, closeModal, car }: CarDetailProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" onClose={closeModal} className="relative z-10">
          {/* BLACK OVERLAY */}
          <Transition.Child
            as={Fragment}
            enter="transition ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          {/* CAR DETAILS MODAL */}
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center p-4 min-h-full">
              <Transition.Child
                as={Fragment}
                enter="transition ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] rounded-md bg-white flex flex-col shadow-xl gap-5 p-5 transition">
                  <button
                    onClick={closeModal}
                    className="absolute top-2 right-2 rounded-full z-10 bg-white p-2"
                    type="button"
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                    />
                  </button>
                  {/* IMAGES */}
                  <div>
                    {/* TOP IMAGE */}
                    <div className="relative w-full h-40 bg-cover bg-center rounded-md bg-pattern-bg">
                      <Image
                        src="/hero.png"
                        fill
                        alt="car model"
                        className="object-contain"
                      />
                    </div>
                    {/* BOTTOM IMAGES */}
                    <div className="flex gap-3 mt-2">
                      <div className="flex-1 relative w-full h-24 reounded-md">
                        <Image
                          src="/hero.png"
                          fill
                          alt="car model"
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 reounded-md">
                        <Image
                          src="/hero.png"
                          fill
                          alt="car model"
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 reounded-md">
                        <Image
                          src="/hero.png"
                          fill
                          alt="car model"
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  {/* CAR INFO */}
                  <div className="flex flex-col gap-2 overflow-y-auto pr-2 mt-4">
                    <h3 className="capitalize">
                      {car.make} {car.model}
                    </h3>
                    {Object.entries(car).map(([key, val]) => (
                      <div key={key} className="flex justify-between">
                        <span className="capitalize text-gray-600">
                          {key.split("_").join(" ")}
                        </span>
                        <span>{val}</span>
                      </div>
                    ))}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default CarItemDetails;
