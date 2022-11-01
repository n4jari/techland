import { NavItems } from "./NavItems";
import { BLUE } from "../../Helper/Colors";
import { useRef } from "react";

const Nav = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="nav_container " style={{ background: BLUE }}>
      <nav ref={navRef} style={{ background: BLUE }}>
        {NavItems.map((item) => (
          <a href={item.link} key={item.id}>
            <i className={item.icon} />
            {item.text}
          </a>
        ))}
        <button onClick={showNavbar}>
          <i className="fa fa-remove" />
        </button>
      </nav>
      <button onClick={showNavbar}>
        <i className="fa fa-bars" />
      </button>
    </div>
  );
};

export default Nav;
