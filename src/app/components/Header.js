import Image from "next/image"
import data from "data.json"

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5">
        {/* left */}
        <div className="relative flex items-center h-10 cursor-pointer">
            <Image src={data.main.logo} layout="fill" objectFit="contain" objectPosition="left"/>
        </div>

        {/* middle */}
        <div></div>

        {/* right */}
        <div></div>
    </header>
  )
}

export default Header
