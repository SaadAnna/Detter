

export default function Navbar() {
  function toggleMenu() {
    document.getElementById('navbar-menu').classList.toggle('hidden')
  }

  return (
    <nav className="bg-transparent text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 w-full bg-gray-100 rounded-full p-2">
          <div className="flex items-center">
            <a href="#" className="felx text-2xl font-Text font-medium text-black">
              Detter
            </a>
          </div>
          <div className="hidden m-auto  lg:block">
            <div className=" flex items-baseline gap-10">
              <a href="#" className=" font-normal font-Text text-black text-lg">Home</a>
              <a href="#" className=" font-normal font-Text text-black text-lg">About</a>
              <a href="#" className=" font-normal font-Text text-black text-lg">Services</a>
              <a href="#" className=" font-normal font-Text text-black text-lg">Contact</a>
            </div>
          </div>
          <div className="hidden lg:block">
            <button className="text-black bg-yellow-400 pl-7 pr-7 pt-3 pb-3 font-Text font-medium rounded-3xl hover:bg-yellow-500">
              Get started
            </button>
          </div>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-black ">
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="hidden bg-gray-100 w-full mt-5 rounded-3xl h-full p-5 text-black lg:hidden" id="navbar-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="block px-3 py-2  font-normal font-Text text-black text-lg">Home</a>
          <a href="#" className="block px-3 py-2  font-normal font-Text text-black text-lg">About</a>
          <a href="#" className="block px-3 py-2  font-normal font-Text text-black text-lg">Services</a>
          <a href="#" className="block px-3 py-2  font-normal font-Text text-black text-lg">Contact</a>
          <button className="w-full  bg-yellow-400 text-center hover:bg-yellow-500 text-black relative top-5 px-3 py-2 rounded-md font-medium font-Text text-lg transition-colors duration-200">
          Get stated
          </button>
        </div>
      </div>
    </nav>
  )
}