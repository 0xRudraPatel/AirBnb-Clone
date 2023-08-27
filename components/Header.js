import Image from "next/image"
import data from "../data.json"

function Header() {
  return (
    <header>
        <h1>Header</h1>
        {/* left */}
        <div>
            <Image src={data.mainAsset.logo} layout="fill" />
        </div>

        {/* middle */}
        <div></div>

        {/* right */}
        <div></div>
    </header>
  )
}

export default Header
