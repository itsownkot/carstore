import { CustomFilter, SearchBar, Hero, CarItem, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";

export default async function Home({
  searchParams,
}: {
  searchParams: {
    manufacturer: string;
    model: string;
    fuel: string;
    limit: number;
    year: number;
  };
}) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    model: searchParams.model || "",
    // NOTE: точно ли fuel??
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    year: searchParams.year || 2023,
  });
  const thereNoCars =
    !Array.isArray(allCars) || allCars.length === 0 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 px-5" id="discover">
        <div>
          <h1 className="text-4xl font-extra-bold">Car Catalogue</h1>
          <p>Expore the cars you might like</p>
        </div>
        {/* FILTERS */}
        <div className="flex gap-5 items-center">
          <SearchBar />
          <div className="flex gap-5">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>
        {/* CARS */}
        {!thereNoCars ? (
          <section>
            <div>
              {allCars.map((car) => (
                <CarItem car={car} />
              ))}
            </div>
            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <section>
            <h2>Sorry, no cars</h2>
            <p>{allCars?.message}</p>
          </section>
        )}
      </div>
    </main>
  );
}
