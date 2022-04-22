interface Props{
    content: string;
    href: string;
}
const NavItem = ({ content, href }: Props) => {
    console.log(content, href);
    return(
        <li><a href={href}>{content}</a></li>
    )
}
export default NavItem