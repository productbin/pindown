
export default function Home() {
  return (
    <main className=" justify-center text-white min-h-[1000px]">
      <div className="flex border-white border-50 border-solid  items-center justify-center mt-16 m-2">
        <h1 className="font-bold text-7xl">Powerful for developers.</h1>
      </div>
      <div className="flex border-white border-50 border-solid  items-center justify-center m-1">
        <h1 className="font-bold text-5xl">Secure for everyone.</h1>
      </div>
      <div className="flex items-center justify-center mt-16">
        <div>
          <button className="bg-white text-gra-two font-bold p-3 m-2 rounded-lg  hover:bg-gray-700 hover:text-white  ">
            START HERE{" "}
          </button>
        </div>
        <div>
          <button className="font-bold rounded-lg border-white border-2 p-3 w-28 m-2  hover:bg-white hover:text-gray-700 ">
            DOCS
          </button>
        </div>
      </div>
      <div className="mb-8">
        <div className=" flex justify-center items-center m-5 mt-40 ">
          <h1 className="font-bold text-5xl items-center">WHY PINDOWN ?</h1>
        </div>
        <div className="flex items-center justify-around">
          <div className="p-4 m-2">
            <img src="whycard2.png" alt="Girl in a jacket"/>
          </div>
          <div className="p-4 m-2">
            <img  src="whycard2.png" alt="not found"/>
          </div>
          <div className="p-4 m-2">
            <img src="whycard2.png" alt="not found"/>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="flex items-center justify-center m-5">
            <h1 className="font-bold text-5xl items-center">HOW TO USE PINDOWN ?</h1>          
          </div>
          
          <div className="flex items-center justify-around">
            <div className="p-4 m-2">
              <img src="whycard1.png" alt="Girl in a jacket"/>
            </div>
            <div className="p-4 m-2">
              <img  src="whycard1.png" alt="not found"/>
             </div>
            <div className="p-4 m-2">
              <img src="whycard1.png" alt="not found"/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
