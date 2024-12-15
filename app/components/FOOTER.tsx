import Link from "next/link";
import { FaTwitter, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";  // Import location icon

const Footer = () => {
  const links = [
    {
      title: "FIND A STORE",
      items: [
        { label: "Become Link Member", href: "#" },
        { label: "Sign Up for Email", href: "#" },
        { label: "Student Discounts", href: "#" },
      ],
    },
    {
      title: "GET HELP",
      items: [
        { label: "Order Status", href: "#" },
        { label: "Delivery", href: "#" },
        { label: "Returns", href: "#" },
        { label: "Payment Options", href: "#" },
        { label: "Contact Us on Nike.com", href: "#" },
        { label: "Contact Us on All Other Inquiries", href: "#" },
      ],
    },
    {
      title: "ABOUT NIKE",
      items: [
        { label: "News", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Investors", href: "#" },
        { label: "Sustainability", href: "#" },
      ],
    },
  ];

  const socialIcons = [
    { component: <FaTwitter />, label: "Twitter" },
    { component: <FaFacebook />, label: "Facebook" },
    { component: <FaYoutube />, label: "YouTube" },
    { component: <FaInstagram />, label: "Instagram" },
  ];

  return (
    <footer className="bg-black text-white py-8 px-6">
      <div className="flex justify-between items-center flex-wrap gap-10">
        {/* Columns for links */}
        <div className="flex justify-start gap-10 flex-wrap">
          {links.map(({ title, items }) => (
            <div key={title}>
              <h3 className="text-sm font-semibold mb-4">{title}</h3>
              <ul className="space-y-2 text-sm">
                {items.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="hover:underline">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Column for Social Media Icons */}
        <div className="flex justify-start lg:justify-end items-start gap-4">
          {socialIcons.map(({ component, label }) => (
            <div key={label} className="cursor-pointer hover:text-gray-400">
              {component}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 flex flex-wrap justify-between items-center text-xs text-gray-400">
        {/* Country and Copyright */}
        <div className="flex mb-4 md:mb-0 gap-2">
          <IoLocationOutline className="" />
          <p>India</p>
          <p>© 2023 Nike, Inc. All Rights Reserved</p>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap gap-4">
          {[
            { label: "Guides", href: "#" },
            { label: "Terms of Sale", href: "#" },
            { label: "Terms of Use", href: "#" },
            { label: "Nike Privacy Policy", href: "#" },
          ].map(({ label, href }) => (
            <Link key={label} href={href} className="hover:underline">
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
