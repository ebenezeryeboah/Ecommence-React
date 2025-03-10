import logo from "../assets/images/logo.png";
import { HeartIcon, MagnifyingGlassIcon, ShoppingCartIcon, SpeakerWaveIcon, UserIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router";

export default function Navbar() {
    return (
        <nav className="flex flex-row justify-around items-center">
            <div>
                <img className="h-[41px]" src={logo} alt="Logo" />
            </div>

            <div className="w-[25%] flex flex-row justify-between">
                <Link to={'/'}>Home</Link>
                <Link to={'/shop'}>Shop</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/contact'}>Contact</Link>
            </div>

            <div className="flex flex-row w-[20%] justify-between">
                <UserIcon className="size-[28px]" />
                <MagnifyingGlassIcon className="size-[28px]" />
                < HeartIcon className="size-[28px]" />
                < ShoppingCartIcon className="size-[28px]" />
            </div>
        </nav>
    )
}