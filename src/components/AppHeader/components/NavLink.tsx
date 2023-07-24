import {Link} from 'react-router-dom';

interface NavLinkProps {
  text: string;
  to: string;
}

const NavLink: React.FC<NavLinkProps> = ({text, to}) => {
  return (
    <Link
      className="text-lg capitalize px-5 py-1 w-[100px] text-center hover:font-bold transition-all ease-in duration-100"
      to={to}
    >
      {text}
    </Link>
  );
};

export default NavLink;
