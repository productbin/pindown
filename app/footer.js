function Footer(){
  return(
    <div className="flex border-4 border-white rounded-lg m-4 ">
      <div className=" max-w-[45%]">
        <div className="text-white font-bold m-10 text-4xl">
          <h1>STAY SYNCED</h1>
        </div>
        <div className="text-white  text-xl m-10 font-medium ">
          <p>Join our mailing list to stay in sync with our newest feature releases, NFT drops, and tips and tricks for navigating Pindown.</p>
        </div>
        <div className="flex justify-around">
          <div className=" ml-10 mt-10">
            <input className="p-5 rounded-lg" type="email" id="email" name="email" />
          </div>
          <div className="ml-2 mb-10 mt-10 mr-10">
            <button className="rounded-lg text-white font-semibold border-4 border-white p-4">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="min-w-[25%] ml-64">
        <div className="text-white font-bold m-10 text-4xl">
          <h1>JOIN OUR TRIBE!!</h1> 
        </div>
      </div>
    </div>
  )
}
export default Footer
