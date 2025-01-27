import logo from "../../assets/logo.svg";
import cartIcon from "../../assets/cart-icon.svg";
import notiIcon from "../../assets/noti-icon.svg";
import { Button } from "@chakra-ui/react";
import "./Navbar.scss";
export function Navbar() {
  return (
    <nav className="navbar">
      <div className="menu_section">
        <img src={logo} />
        <div>
          <Button variant="plain">Category</Button>
          <Button variant="plain">Brand</Button>
          <Button variant="plain">Contact</Button>
          <Button variant="plain">FAQ’s</Button>
        </div>
      </div>
      <div className="user_menu">
        <img src={cartIcon} />
        <img src={notiIcon} />
        <img
          src="https://picsum.photos/200"
          width={50}
          height={50}
          className="user_img"
        />
        <div>
          <span className="greeting_text">Good Morning!</span>
          <span>Scarlet Johnson</span>
        </div>
      </div>
    </nav>
  );
}
