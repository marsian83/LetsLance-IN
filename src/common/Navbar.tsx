import { Link, NavLink } from "react-router-dom";
import MaterialIcon from "./MaterialIcon";
import { twMerge } from "tailwind-merge";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { title: "Home", to: "/" },
  { title: "Company", to: "/company" },
  // { title: "Services", to: "/services" },
];

export default function Navbar() {
  const [mobileNavShown, setMobileNavShown] = useState(false);

  const navRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  return (
    <>
      <nav
        ref={navRef}
        className="p-page fixed left-0 top-0 z-[100] flex w-full justify-between bg-background py-3 shadow-lg mobile:items-center"
      >
        <Link
          to="/"
          className="group flex w-max items-center gap-x-3 duration-300"
        >
          <img
            src="/logo.png"
            alt="letslance logo"
            className="aspect-square h-20 duration-inherit group-hover:rotate-[360deg] mobile:h-14"
          />
          <h1 className="text-3xl font-semibold text-primary duration-inherit group-hover:scale-105 mobile:-ml-2 mobile:text-2xl">
            LetsLanceHK
          </h1>
        </Link>

        <div className="flex items-center gap-x-3 text-front text-opacity-70 mobile:hidden">
          {navItems.map((item, i) => (
            <div className="flex items-center gap-x-3" key={i}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  twMerge(
                    "border border-transparent px-4 py-1 duration-300 hover:text-primary",
                    isActive
                      ? "rounded-lg border-primary bg-primary bg-opacity-5 text-primary"
                      : undefined
                  )
                }
              >
                {item.title}
              </NavLink>
              <MaterialIcon className="scale-50 text-xs" codepoint="e3fa" />
            </div>
          ))}
          <Link
            to="/contact"
            className="ml-3 rounded-md border-2 bg-primary px-6 py-2 text-background duration-300 hover:-translate-y-1 hover:border-primary hover:bg-front 
            hover:shadow-md hover:shadow-[#0088ff54]"
          >
            Contact Us
          </Link>
        </div>

        <div className="relative widescreen:hidden">
          <button onClick={() => setMobileNavShown(!mobileNavShown)}>
            <MaterialIcon className="text-4xl text-primary" codepoint="e5d2" />
          </button>
          {mobileNavShown && (
            <div className="absolute right-0 top-full flex flex-col gap-y-2 rounded-lg border bg-background py-3 shadow-md">
              {navItems.map((item, i) => (
                <div className="flex flex-col items-center" key={i}>
                  <NavLink
                    onClick={() => setMobileNavShown(false)}
                    to={item.to}
                    className={({ isActive }) =>
                      twMerge(
                        "border border-transparent px-4 py-1 duration-300 hover:text-primary",
                        isActive
                          ? "rounded-lg border-primary bg-primary bg-opacity-5 text-primary"
                          : undefined
                      )
                    }
                  >
                    {item.title}
                  </NavLink>
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
