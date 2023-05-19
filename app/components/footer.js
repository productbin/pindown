import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faInstagram,
  faTwitter,
  faYoutube,
  faReddit,
} from "@fortawesome/free-brands-svg-icons";
import { redirect } from "next/dist/server/api-utils";
function Footer() {
  return (
    <div className="sm:flex bg-white  bg-opacity-5 rounded-lg m-4 mt-32">
      <div className=" sm:max-w-[45%]">
        <div className="text-white font-bold m-10 text-2xl sm:text-4xl">
          <h1>STAY SYNCED</h1>
        </div>
        <div className="text-white  text-sm sm:text-xl m-10 font-medium ">
          <p>
            Join our mailing list to stay in sync with our newest feature
            releases, NFT drops, and tips and tricks for navigating Pindown.
          </p>
        </div>
        <div className="sm:flex sm:justify-around">
          <div className=" ml-10 mt-10">
            <input
              className="p-5 bg-transparent border rounded-lg"
              type="email"
              id="email"
              name="email"
            />
          </div>
          <div className=" flex ml-10 mb-10 mt-10  sm:mr-10">
            <button className="relative inline-block text-lg group">
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span className="absolute left-0 w-64 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12  hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500  group-hover:-rotate-180 ease"></span>
                <span className="relative">Subscribe</span>
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500   rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </button>
          </div>
        </div>
      </div>
      <div className="sm:min-w-[40%] sm:ml-64">
        <div className="text-white font-bold m-10  text-2xl sm:text-4xl">
          <h1>JOIN OUR TRIBE!!</h1>
        </div>
        <div className="flex">
          <div className=" hover:from-purple-600 m-1 hover:to-pink-600 ease bg-gradient-to-br rounded-lg  from-purple-500 to-pink-500 justify-items-center items-center flex place-items-center">
            <div className="w-20 m-1 bg-black   p-2 rounded-lg justify-items-center items-center flex place-items-center">
              <FontAwesomeIcon icon={faTwitter} style={{ color: "white" }} />
            </div>
          </div>

          <div className="hover:from-purple-600 m-1 hover:to-pink-600 ease bg-gradient-to-br rounded-lg  from-purple-500 to-pink-500 justify-items-center items-center flex place-items-center">
            <div className="w-20 m-1 bg-black  p-2 rounded-lg justify-items-center items-center flex place-items-center">
              <FontAwesomeIcon icon={faReddit} style={{ color: "white" }} />
            </div>
          </div>
          <div className=" hover:from-purple-600 m-1 hover:to-pink-600 ease bg-gradient-to-br rounded-lg  from-purple-500 to-pink-500 justify-items-center items-center flex place-items-center ">
            <div className="w-20 m-1 bg-black   p-2 rounded-lg justify-items-center items-center flex place-items-center">
              <FontAwesomeIcon icon={faYoutube} style={{ color: "white" }} />
            </div>
          </div>
          <div className="hover:from-purple-600 m-1 hover:to-pink-600 ease bg-gradient-to-br rounded-lg  from-purple-500 to-pink-500 justify-items-center items-center flex place-items-center ">
            <div className="w-20 m-1 bg-black   p-2 rounded-lg justify-items-center items-center flex place-items-center">
              <FontAwesomeIcon icon={faInstagram} style={{ color: "white" }} />
            </div>
          </div>
          <div className="hover:from-purple-600 m-1 hover:to-pink-600 ease bg-gradient-to-br rounded-lg  from-purple-500 to-pink-500  justify-items-center items-center flex place-items-center">
            <div className="w-20 m-1 bg-black   p-2 rounded-lg justify-items-center items-center flex place-items-center">
              <FontAwesomeIcon icon={faDiscord} style={{ color: "white" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
