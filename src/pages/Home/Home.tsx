const Home = () => {
  return (
    <div className="filter flex flex-col h-screen">
        <div className="flex items-center justify-center gap-7 h-[70vh] z-40">
          <div className="main-text-container">
              <p className="font-bold underline">The All-in-One Resort</p>

              <h1 className="main-text font-bold text-blue-800">
                Him

                <b className="text-red-800">o</b>

                <strong>S</strong>
              </h1>
          </div>

          <div className="seconde-text-container flex gap-3">
            <div className="border-l-2 border-white flex flex-col justify-center gap-5 pl-3 mt-7">
              <h1 className="text-6xl font-bold">-20°C</h1>
              <div>
                sunny
              </div>
            </div>

            <div className="border-l-2 border-white flex flex-col justify-center gap-5 pl-3 mt-7">
              <h1 className="text-6xl font-bold">17:24</h1>
              <div>
                14.02.2023
              </div>
            </div>
          </div>
        </div>

        <aside className="grid grid-flow-col items-center justify-center gap-10 h-[30vh] opacity-60 z-30">
          <span className="flex flex-col gap-8">
            <img className="w-[4rem]" src="src/assets/Icon1.png" alt="equipment"/>
            <p className="text-lg font-bold text-black border-b-2 border-black w-60 pb-3">Rent equipment</p>
          </span>

          <span className="flex flex-col gap-8">
            <img className="w-[4rem]" src="src/assets/Icon2.png" alt="equipment"/>
            <p className="text-lg font-bold text-black border-b-2 border-black w-60 pb-3">Accomodations</p>
          </span>

          <span className="flex flex-col gap-8">
            <img className="w-[4rem]" src="src/assets/Icon3.png" alt="equipment"/>
            <p className="text-lg font-bold text-black border-b-2 border-black w-60 pb-3">Webcams</p>
          </span>

          <span className="flex flex-col gap-8">
            <img className="w-[4rem]" src="src/assets/Icon4.png" alt="equipment"/>
            <p className="text-lg font-bold text-black border-b-2 border-black w-60 pb-3">Opening Hours</p>
          </span>
        </aside>

        <div className="background-img h-[70vh]"></div>
    </div>
  )
}

export default Home