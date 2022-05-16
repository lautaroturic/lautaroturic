import { Link } from "react-router-dom";

interface Props {
    content: string;
    href: string;
    classN: string;
    colorBg: string;
    color: string;
}
const NavItem = ({ content, href, classN, colorBg, color }: Props) => {
    return (
        <Link to={href} className={`navLink navLink-${classN} ${color} ${colorBg} text-white text-2xl cursor-pointer`}><span>{content}</span><i></i></Link>
    )
}
export default NavItem