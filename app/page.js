"use client";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";

export default function Home() {
  const router = useRouter();
  const { isConnected } = useAccount();
  function handleClick() {
    if (isConnected) {
      router.push("/login");
    } else {
      window.alert("Please Connect You MetaMask Wallet");
    }
  }

  return (
    <main className="  justify-center text-white">
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
        <div className="m-1">
          <button
            className="relative inline-block text-lg group"
            onClick={handleClick}
          >
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-64 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12  hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500  group-hover:-rotate-180 ease"></span>
              <span className="relative">START HERE</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear  hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500  rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </button>
        </div>
        <div className="m-1">
          <button className="relative inline-block text-lg group">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-transperent"></span>
              <span className="absolute left-0 w-64 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12  hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500  group-hover:-rotate-180 ease"></span>
              <span className="relative">DOCS</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear   bg-white rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </button>
        </div>
      </div>
      <div className="mb-8">
        <div className=" flex justify-center items-center m-5 mt-40 ">
          <div className="">
            <div className="flex justify-center m-5">
              {" "}
              <h1 className="font-bold text-2xl sm:text-5xl items-center ">
                WHY PINDOWN ?
              </h1>
            </div>
            <div>
              {" "}
              <h1 className="font-bold  text-xl sm:text-4xl text-center items-center ">
                Pindown is a blockchain-based document verifier.{" "}
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
            <div className="items-center sm:justify-around">
              <div className="sm:flex justify-evenly m-10">
                <div className="m-8 p-10 text-center justify-center items-center self-center sm:w-1/2">
                  <p className="font-int">
                    Anyone can view the legit source and destination of any
                    certificate (or document in general). It records the
                    document transfer data and link details on-chain such that
                    only the issuer can specify the link to the document and
                    receiver address, and the source (issuer public key) is
                    signed by the issuer. Anyone can also easily verify the same
                    details through the PinDown Dapp.
                  </p>
                </div>

                <div className="min-w-[45%] p-10 sm:p-4 m-2 sm:w-1/2">
                  <img src="verify.png" alt="Girl in a jacket" />
                </div>
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
