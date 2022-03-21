import { Outlet, Link } from "react-router-dom";

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
        <Link to="/">Main</Link>
        <Link to="/users">Users</Link>
        <Link to="/user/1">User 1</Link>
    </nav>
)

export default Menu