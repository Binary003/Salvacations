import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const navbarLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Blogs",
    path: "/blogs",
  },
  {
    name: "Best Places",
    path: "/places",
  },
];
const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="Navbar__card">
        {/* top section */}
        <div>
          <div className="flex items-center justify-start gap-4">
            <FaUserCircle size={50} className="text-gray-500" />
            <div className="text-gray-500">
              <h1>Hello User</h1>
              <h1 className="text-sm text-slate-500">Premium user</h1>
            </div>
          </div>
        </div>
        {/* Navlink section */}
        <div className="text-black mt-12">
          <ul>
            {navbarLinks.map(({ name, path }) => (
              <li key={name}>
                <Link
                  to={path}
                  onClick={() => setShowMenu(false)}
                  className="mb-5 inline-block"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Contact Info */}
      <div className="mt-8 border-t pt-4 text-sm text-gray-600 dark:text-gray-300">
        <p className="font-semibold">Mobile No. +91 123456789</p>
        <p className="text-sm font-semibold">
          Email to:{" "}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ashu@email.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary"
          >
            ashu@email.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
