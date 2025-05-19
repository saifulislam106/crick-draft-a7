import logoImg from "../../assets/logo.png";

export const Navbar = ({coins}) => {
  return (
   <div className="bg-base-100 ">
     <div className="navbar container mx-auto shadow-sm px-4">
      {/* Left: Logo + Hamburger for small screens */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><a>Home</a></li>
            <li><a>Fixture</a></li>
            <li><a>Teams</a></li>
            <li><a>Schedules</a></li>
          </ul>
        </div>

        {/* Logo */}
        <a className="">
          <img src={logoImg} alt="Logo" className="h-20 w-20" />
        
        </a>
      </div>

      {/* Right: Nav Items + Button */}
      <div className="navbar-end w-full justify-end">
        <ul className="menu menu-horizontal px-1 text-gray-500 dark:text-gray-300 font-medium hidden md:flex">
          <li><a>Home</a></li>
          <li><a>Fixture</a></li>
          <li><a>Teams</a></li>
          <li><a>Schedules</a></li>
        </ul>
        <a className="btn ml-2"><span>{coins}</span>Coins</a>
      </div>
    </div>
   </div>
  );
};
