import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/images/fcc.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Who We Are", href: "/about" },
    { name: "Real Experience", href: "/projects" },
    { name: "North Star", href: "/north-star" },
    { name: "Goals", href: "/goals" },
    { name: "Partners", href: "/partners" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/70 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-[78px] max-w-[1320px] items-center justify-between px-5 lg:px-8">

        {/* LOGO */}
        <NavLink to="/" className="flex items-center">
          <img
            src={logo}
            alt="Future Creators Computing"
            className="h-[52px] w-auto object-contain sm:h-[58px]"
          />
        </NavLink>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                `relative pb-[6px] text-[15px] font-extrabold tracking-[-0.01em] transition duration-300 ${
                  isActive
                    ? "text-[#6f4cff] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:rounded-full after:bg-[#6f4cff]"
                    : "text-[#111827] hover:text-[#6f4cff]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* DESKTOP BUTTON */}
        <NavLink
          to="/contact"
          className="hidden rounded-[18px] bg-[#6f4cff] px-7 py-[13px] text-[15px] font-extrabold text-white shadow-[0_14px_34px_rgba(111,76,255,0.25)] transition duration-300 hover:-translate-y-[1px] hover:bg-[#6241ff] lg:block"
        >
          Contact Us
        </NavLink>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#6f4cff] shadow-[0_10px_25px_rgba(111,76,255,0.25)] transition duration-300 hover:bg-[#6241ff] lg:hidden"
        >
          {open ? (
            <X className="h-5 w-5 text-white" />
          ) : (
            <Menu className="h-5 w-5 text-white" />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden border-t border-[#edf0f5] bg-white transition-all duration-300 lg:hidden ${
          open ? "max-h-[500px] py-5" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-5 px-5">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              onClick={() => setOpen(false)}
              className="text-[15px] font-bold text-[#111827] transition hover:text-[#6f4cff]"
            >
              {link.name}
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 flex justify-center rounded-2xl bg-[#6f4cff] px-6 py-4 text-sm font-bold text-white"
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Navbar;