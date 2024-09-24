import { Link } from "react-scroll";

type NavLinkProps = {
  title: string;
  to: string;
};

const NavLink = ({ title, to }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className="base-bold text-p4 uppercase transition-colors duration-300 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
    >
      {title}
    </Link>
  );
};

export default NavLink;
