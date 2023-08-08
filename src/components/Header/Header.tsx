import Navbar from "../Navbar/Navbar";
import { HeaderContainer } from "./style";

export default function Header() {
    return (
        <HeaderContainer>
            <h1 className="font_display">GitHub Finder</h1>
            <Navbar />
        </HeaderContainer>
    );
}