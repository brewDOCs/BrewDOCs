import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className={"md:mr-auto font-bold text-5xl border-2 border-red-500 text-stone-600"}>
        <h1>Welcome to BrewDocs</h1>
      </div>

      <div className="mb-32 grid text-center lg:max-w-4xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-center border-2 border-red-500 ">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-1 text-2xl font-semibold`}>Management </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Track multiple breweries and their various recipes.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-1 text-2xl font-semibold`}>Efficiency </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Streamline your brewing process and cut out confusion.
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-1 text-2xl font-semibold`}>Documentation </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Create a detailed record of your brewing process.
          </p>
        </a>
      </div>
    </main>
  );
}
