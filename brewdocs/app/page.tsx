import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between leading-relaxed p-24">
      <div className={"md:mr-auto p-1 drop-shadow-xl text-stone-600 max-w-4xl"}>
        <h1 className="font-bold text-6xl pb-7">
          Ready To Leave The Hassles Of Brewing Behind You?
        </h1>
        <h2 className="font-bold text-4xl text-stone-500">
          BrewDocs has the technology to minimize error and drive your business towards the future.
        </h2>
      </div>

      <div className="mb-32 grid text-center lg:max-w-4xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-center text-stone-600">
        <a
          href=""
          className="group border-r-2 border-gray-700/35 px-5 py-4"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-1 text-2xl font-semibold`}>Management </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-75`}>
            Track multiple breweries and their various recipes.
          </p>
        </a>

        <a href="" className="group border border-transparent px-5 py-4" rel="noopener noreferrer">
          <h2 className={`mb-1 text-2xl font-semibold`}>Efficiency </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-75`}>
            Streamline your brewing process and cut out confusion.
          </p>
        </a>

        <a
          href=""
          className="group border-l-2 px-5 py-4 border-gray-700/35"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-1 text-2xl font-semibold`}>Documentation </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-75`}>
            Create a detailed record of your brewing process.
          </p>
        </a>
      </div>
    </main>
  );
}
