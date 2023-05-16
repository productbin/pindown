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
          <div className=" flex ml-10 mb-10 mt-10  sm:mr-10">ertificate </div>
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
