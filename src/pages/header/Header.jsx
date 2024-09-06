import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto bg-[#171717]  rounded-[50px] text-[20px] border border-1  text-white ">
        {/* main nav */}
        <div className="flex items-center justify-between h-[80px] mx-[100px] ">
          {/* left nav */}
          <div className=" ">
            <nav>
              <ul className="flex items-center justify-between gap-14 ">
                <li>
                  {" "}
                  <NavLink to={"/"}>Home</NavLink>{" "}
                </li>
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/Service"}>Service</NavLink>
                </li>
              </ul>
            </nav>
          </div>
          {/* icon div */}
          <div></div>
          {/* right div */}
          <div>
            <nav>
              <ul className="flex items-center justify-between gap-14 ">
                <li>
                  {" "}
                  <NavLink to={"/resume"}>Resume</NavLink>{" "}
                </li>
                <li>
                  <NavLink to={"/project"}>Project</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
