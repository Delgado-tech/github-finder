import { SidebarContainer } from "./style";
import { PiArrowUpRightBold } from 'react-icons/pi';
import defaultAvatar from '../../assets/avatar_default.svg';
import { githubUserParams } from "../../services/githubUserAPI";

export default function Sidebar({ props }: githubUserParams) {

    return (
        <SidebarContainer>
            <figure>
                <img src={defaultAvatar} alt="avatar" />
            </figure>
            <div className="sidebar_username">
                <a href={props ? props.html_url : "#"} target={props && "_blank"}>
                    <h3 className="font_display">
                        { props ? ( props.name === null ? props.login : props.name): "Username" }
                        <span>
                            <PiArrowUpRightBold />
                        </span>
                    </h3>
                </a>
                <p>{props ? props.login : "usertag" }</p>
            </div>
            <div className="sidebar_followers">
                <p>seguidores: <span>{ props ? props.followers : 0 }</span></p>
                <span>·</span>
                <p>seguindo: <span>{ props ? props.following : 0 }</span></p>
            </div>
        </SidebarContainer>
    );
}