import Image from "next/image"
import { useRouter } from "next/router"

const Logo = () => {
  return (
    <Image
      alt="Navbar Logo"
      className="hidden md:block cursor-pointer"
      height="65"
      width="65"
      src="/images/logo.png"
    />
  )
}

export default Logo
