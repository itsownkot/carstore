"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image";

const Button = (props: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={props.btnType ?? "button"}
      onClick={props.handleClick}
      className={`relative flex justify-center items-center bg-blue-500 rounded-full py-1 px-2 transition ${props.btnStyle}`}
    >
      <span>{props.title}</span>
      {props.rightIcon && (
        <div className="absolute right-4 w-6 h-6 hover:scale-110 transition">
          <Image src={props.rightIcon} fill alt="right icon" />
        </div>
      )}
    </button>
  );
};
export default Button;
