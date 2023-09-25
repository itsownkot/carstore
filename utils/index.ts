import { FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
  const headers = {
    "X-RapidAPI-Key": process.env.RAPID_KEY_API,
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const url = new URL("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars");

  const { manufacturer, model, fuel, limit, year } = filters;

  url.searchParams.append("make", `${manufacturer}`);
  url.searchParams.append("model", `${model}`);
  url.searchParams.append("fuel_type", `${fuel}`);
  url.searchParams.append("limit", `${limit}`);
  url.searchParams.append("year", `${year}`);

  try {
    const response = await fetch(url, { headers });
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
}

export default function calculateCarRent(city_mpg: number, year: number) {
  const basePricePerDay = 50;
  const [mileageFactor, ageFactor] = [0.1, 0.05];

  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
}

// export const generateImageUrl = (car: CarItemProps, angle?: string) => {
// return ...
// }
