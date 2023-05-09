import SearchForm from "./SearchForm";

const Home = () => {

  return (
    <div className="min-h-screen h-full hero overflow-x-hidden">
      <header className="text-center font-[500] bg-gradient-to-b from-orange-900 to-transparent bg-opacity-50 py-[1rem] grid place-content-center text-white">
      <h1 className="text-[clamp(2rem,3.5vw,4.5rem)]">Weather App</h1>
      <p className="font-thin text-lg sm:text-2xl leading-[25px]">Everything about weather, wherever you are</p>
      </header>
      <main className="max-w-[400px] md:max-w-[850px] mx-auto">
      <SearchForm/>
      </main>

    </div>
  );
}

export default Home;