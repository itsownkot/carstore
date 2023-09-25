import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  btnType?: "button" | "submit";
  btnStyle?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface FooterUlElements {
  title: string;
  links: FooterLink[];
}

interface FooterLink {
  title: string;
  url: string;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CarItemProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilterProps {
  manufacturer: string;
  model: string;
  fuel: string;
  limit: number;
  year: number;
}

export interface Options {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: Options[];
}
