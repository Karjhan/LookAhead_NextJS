import Container from "../Container"
import Logo from "./Logo"
import localFont from 'next/font/local'
import Search from "./Search"
import UserMenu from "./UserMenu"

const fataisie = localFont({
  src: "../../public/fonts/FantaisieArtistique.ttf",
  variable: "--font-fantaisie"
})

const Navbar = () => {
  return (
    <div className="navbarMain shadow-sm bg-orange-200">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <div className="hidden md:flex flex-col lg:flex-row items-center gap-4 cursor-pointer">
              <Logo />
              <span className={`${fataisie.className} text-xl lg:text-2xl text-rose-600`}>Look-Ahead-BnB</span>
            </div>
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar
