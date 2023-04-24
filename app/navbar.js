function Navbar(){
  return(
    <div className="p-8">
          <nav class="border-white border-4 rounded-lg ">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="flex items-center justify-around   h-16">
                <div class="flex items-center">
                  <a href="/" class="text-white font-bold text-xl">
                    PINDOWN
                  </a>
                </div>
                <div class="hidden md:block min-w-[70%]">
                  <div class="flex items-center justify-center ">
                    <a
                      href="#"
                      class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      About
                    </a>
                    <a
                      href="login/"
                      class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      login
                    </a>
                  </div>
                </div>
                <div>
                  <button

                    className="bg-white p-2 rounded-lg  hover:bg-gray-700 hover:text-white  "
                  >
                    Connect Wallet
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>

  )
}
export default Navbar 
