import Image from "next/image"
import data from "data.json"
import { 
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
} from "@heroicons/react/solid"

function Header() {
  return (
    <header className="sticky items-center top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">

        {/* left */}
        <div className="relative flex items-center h-10 cursor-pointer">
            <Image src={data.main.logo} layout="fill" objectFit="contain" objectPosition="left"/>
        </div>

        {/* middle */}
        <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm text-sm text-gray-600 placeholder-gray-400">
          <input className="flex-grow pl-5 bg-transparent outline-none" type="text" placeholder="Start your search" />
          <SearchIcon className="hidden md:inline-flex h-8 p-2 bg-red-400 text-white rounded-full cursor-pointer md:mx-2"/>
        </div>

        {/* right */}
        <div>
          <div className="flex items-center space-x-4 justify-end text-gray-500">
            <p className="hidden md:inline cursor-pointer">Become a host</p>
            <GlobeAltIcon className="h-6 cursor-pointer"/>
            <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
              <MenuIcon className="h-6 cursor-pointer"/>
              <UserCircleIcon className="h-6 cursor-pointer"/>
            </div>
          </div>
        </div>
    </header>
  )
}

export default Header
