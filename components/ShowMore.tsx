"use client";
import { useRouter } from "next/navigation";
import Button from "./Button";

const ShowMore = ({
  pageNumber,
  isNext,
}: {
  pageNumber: number;
  isNext: boolean;
}) => {
  const router = useRouter();

  const handleNavigation = () => {
    const searchParams = new URLSearchParams(window.location.search);

    const newLimit = (pageNumber + 1) * 10;
    searchParams.set("limit", `${newLimit}`);

    let newPathname = `${window.location.pathname}?${searchParams.toString()}`;
    router.replace(newPathname);
  };

  return (
    <div className="flex justify-center items-center">
      {!isNext && (
        <Button
          title="Show more"
          btnStyle="text-white hover:scale-105 mt-4"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};
export default ShowMore;
