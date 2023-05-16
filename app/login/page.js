"use client";
import "../globals.css";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  function handleClick() {
    router.push("/upload");
  }
  return (
    <div className="sm:flex sm:p-4 p-10 justify-around">
      <div className="bg-opacity-50 p-5 rounded-lg bg-gra-one">
        <div className=" w-128 h-128">
          <div className="bg-grey-900  ">
            <div>
              <h1 className="text-white text-3xl m-5 font-semibold flex justify-center   hover:bg-gradient-to-r from-purple-600  to-pink-600 hover:text-transparent hover:bg-clip-text">
                UPLOAD CERTIFICATE
              </h1>
            </div>
            <div>
              <img src="login1.png" />
            </div>
            <div className="flex m-5  justify-center">
              <a href="/upload" className="relative inline-block text-lg group">
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                  <span className="absolute left-0 w-96 h-72  -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12  hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500  group-hover:-rotate-180 ease"></span>
                  <span className="relative">UPLOAD</span>
                </span>
                <span
                  className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500   rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-opacity-50 p-5 rounded-lg bg-gra-one">
        <div className=" w-128 h-128">
          <div className="bg-grey-900  ">
            <div>
              <h1 className="text-white text-3xl m-5 font-semibold flex justify-center   hover:bg-gradient-to-r from-purple-600  to-pink-600 hover:text-transparent hover:bg-clip-text">
                VALIDATE CERTIFICATE
              </h1>
            </div>
            <div>
              <img src="login1.png" />
            </div>
            <div className="flex m-5  justify-center">
              <a href="#" className="relative inline-block text-lg group">
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                  <span className="absolute left-0 w-96 h-72  -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12  hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500  group-hover:-rotate-180 ease"></span>
                  <span className="relative">VALIDATE</span>
                </span>
                <span
                  className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500   rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
