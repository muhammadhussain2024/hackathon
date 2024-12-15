import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaHeart, FaShoppingBag } from 'react-icons/fa';

const navLinks = [
  { label: "New & Featured", href: "/features" },
  { label: "Men", href: "#" },
  { label: "Women", href: "#" },
  { label: "Kids", href: "#" },
  { label: "Sale", href: "#" },
  { label: "SNKRS", href: "#" },
];

const topLinks = [
  { label: "Find Link Store", href: "/location" },
  { label: "Help", href: "#" },
  { label: "Join Us", href: "/joinus" },
  { label: "Sign In", href: "/login" },
];

export default function Nav() {
  return (
    <header>
      {/* Top bar */}
      <div className="bg-[#fafafa] flex justify-between items-center px-6 py-2 md:text-[11px] sm:text-[9px] text-[8px] font-medium text-gray-500">
        <Image src={"/logo1.png"} alt={''} width={24} height={24} />
        <div>
          
        </div>
        <div className="flex md:gap-4 sm:gap-3 gap-2">
          {topLinks.map(({ label, href }) => (
            <Link key={label} href={href} className="hover:text-gray-800">
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Main navigation */}
      <div className="flex flex-wrap justify-between items-center px-6 py-4">
        {/* Left section (Logo) */}
        <div className="flex items-center">
          <Image
            src={"/logo2.png"}
            alt="Nike Logo"
            width={35}
            height={35}
          />
        </div>

        {/* Center section (Navigation Links) */}
        <nav className="flex gap-4 md:gap-6 text-gray-700 font-medium md:text-[16px] sm:text-[14px] text-[10px]">
          {navLinks.map(({ label, href }) => (
            <Link key={label} href={href} className="hover:text-black whitespace-nowrap">
              {label}
            </Link>
          ))}
        </nav>

        {/* Right section (Search, Wishlist, Cart) */}
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          {/* Search Bar */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none"
            />
            <FaSearch className="absolute right-3 top-2.5 text-gray-500" />
          </div>
          <FaHeart className="text-gray-700 md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] cursor-pointer hover:text-black" />
          <FaShoppingBag className="text-gray-700 md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] cursor-pointer hover:text-black" />
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="block md:hidden px-6 mt-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none w-full"
          />
          <FaSearch className="absolute right-3 top-2.5 text-gray-500" />
        </div>
      </div>
    </header>
  );
}
