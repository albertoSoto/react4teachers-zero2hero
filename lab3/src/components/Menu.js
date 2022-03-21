import { Outlet, NavLink,Link } from "react-router-dom";

const MenuStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    width: "100%",
    borderBottom: "solid 1px",
    paddingBottom: "1rem"
}

const Menu = () => (
    <nav style={MenuStyle}>
        <div>Aloha!</div>
        <Link to="/" className={"menuLink"}>Main</Link>
        <NavLink to="/users" className={"menuLink"}>Users</NavLink>
        <NavLink to="/user/1" className={"menuLink"}>User 1</NavLink>
    </nav>
)

export default Menu