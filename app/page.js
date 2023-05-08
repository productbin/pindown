 export default function Home() {
  return (
    <main className=" justify-center text-white">
      <div className="flex border-white border-50 border-solid  items-center justify-center mt-16 m-2">
        <h1 className="font-bold text-3xl sm:text-7xl">
          Powerful for developers.
        </h1>
      </div>
      <div className="flex border-white border-50 border-solid  items-center justify-center m-1">
        <h1 className="font-bold  text-2xl sm:text-5xl">
          Secure for everyone.
        </h1>
      </div>
      <div className="flex items-center justify-center mt-16">
        <div>
          <button className="bg-white text-gra-two font-bold p-3 m-2 rounded-lg  hover:bg-gray-700 hover:text-white  ">
            START HERE{' '}
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
          <div className="">
            <div className="flex justify-center m-5">
              {' '}
              <h1 className="font-bold text-2xl sm:text-5xl items-center ">
                WHY PINDOWN ?
              </h1>
            </div>
            <div>
              {' '}
              <h1 className="font-bold  text-xl sm:text-4xl items-center ">
                Pindown is a blockchain-based document verifier.{' '}
              </h1>
            </div>
          </div>
        </div>
        <div className="items-center sm:justify-around">
          <div className="sm:flex justify-evenly m-10 ">
            <div className=" min-w-[45%]  p-10 sm:p-4 m-2">
              <img src="transparent.png" alt="Girl in a jacket" />
            </div>
            <div className=" m-8 p-10 text-center justify-center items-center self-center ">
              <p className="">
                Anyone can view the legit source and destination of any
                certificate(or document in general). It records the document
                transfer data and link details on-chain such that only the
                issuer can specify the link to the document and receiver address
                and the source(issuer public key) is signed by the issuer.
                Anyone can also easily verify the same details through the
                PinDown Dapp.
              </p>
            </div>
          </div>
          <div className="items-center sm:justify-around ">
            <div className="sm:flex justify-evenly m-10">
              <div className=" m-8 p-10 text-center justify-center items-center self-center ">
                <p className="font-int ">
                  Anyone can view the legit source and destination of any
                  certificate(or document in general). It records the document
                  transfer data and link details on-chain such that only the
                  issuer can specify the link to the document and receiver
                  address and the source(issuer public key) is signed by the
                  issuer. Anyone can also easily verify the same details through
                  the PinDown Dapp.
                </p>
              </div>

              <div className=" min-w-[45%]  p-10 sm:p-4 m-2">
                <img src="verify.png" alt="Girl in a jacket" />
              </div>
            </div>
            <div className="items-center sm:justify-around">
              <div className="sm:flex justify-evenly m-10">
                <div className=" min-w-[45%]  p-10 sm:p-4 m-2">
                  <img src="secure.png" alt="Girl in a jacket" />
                </div>
                <div className=" m-8 p-10 text-center justify-center items-center self-center ">
                  <p>
                    Anyone can view the legit source and destination of any
                    certificate(or document in general). It records the document
                    transfer data and link details on-chain such that only the
                    issuer can specify the link to the document and receiver
                    address and the source(issuer public key) is signed by the
                    issuer. Anyone can also easily verify the same details
                    through the PinDown Dapp.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="flex items-center justify-center m-5">
            <h1 className="font-bold  text-2xl  sm:text-5xl items-center">
              HOW TO USE PINDOWN ?
            </h1>
          </div>

          <div className="sm:flex items-center sm:justify-around">
            <div className="p-10 sm:p-4 m-2">
              <img src="whycard1.png" alt="Girl in a jacket" />
            </div>
            <div className="p-10 sm:p-4 m-2">
              <img src="whycard1.png" alt="not found" />
            </div>
            <div className="p-10 sm:p-4 m-2">
              <img src="whycard1.png" alt="not found" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
