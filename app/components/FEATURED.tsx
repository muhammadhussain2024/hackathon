import { Button } from "./ui/button";

const featuredStyles = {
  backgroundImage: "url('/Featured.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100vh",
  width: "100%",
};

export default function Featured() {
  return (
    <main className="m-4">
      {/* Title Section */}
      <header>
        <h1 className="font-semibold text-xl py-5">Featured</h1>
      </header>

      {/* Background Image Section */}
      <section style={featuredStyles}></section>

      {/* Content Section */}
      <div className="flex justify-center items-center flex-col gap-3 p-10 text-center">
        <h2 className="text-4xl font-bold uppercase">STEP INTO WHAT FEELS GOOD</h2>
        <p className="text-sm leading-5 w-[60%] pt-3 pb-2">
          Cause everyone should know the feeling of running in that perfect pair.
        </p>
        <Button>Find Your Shoe</Button>
      </div>
    </main>
  );
}
