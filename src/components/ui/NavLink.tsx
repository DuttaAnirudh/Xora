import { Link } from "react-scroll";

type NavLinkProps = {
  title: string;
  to: string;
  onClick?: () => void;
};

const NavLink = ({ title, to, onClick }: NavLinkProps) => {
  return (
    <Link
      to={to}
      offset={-90}
      spy
      smooth
      activeClass="nav-active"
      onClick={onClick}
      className="base-bold text-p4 uppercase transition-colors duration-300 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
    >
      {title}
    </Link>
  );
};

export default NavLink;
