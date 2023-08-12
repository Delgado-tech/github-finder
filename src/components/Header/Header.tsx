import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { HeaderContainer } from "./style";

export default function Header() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(``, {relative:"route"});
        navigate(0);
    }

    return (
        <HeaderContainer>
            <h1 className="font_display" onClick={handleClick}>GitHub Finder</h1>
            <Navbar />
        </HeaderContainer>
    );
}