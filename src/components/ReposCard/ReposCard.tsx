import { ReposCardContainer } from "./style";
import { FaStar } from "react-icons/fa";
import { githubReposParams } from "../../services/githubUserAPI";
import { format } from 'date-fns';

export default function ReposCard({props}: githubReposParams) {

    return (
        <ReposCardContainer>
            <div>
                <a href={props.html_url} target="_blank"><h3>{props.name}</h3></a>
                <p>{props.stargazers_count} <FaStar /></p>
            </div>
            <p className="repos_repository_createdAt">(criado em: {format(new Date(props.created_at), "dd/MM/yyyy")})</p>
            <p className="repos_repository_description">{props.description !== null && props.description}</p>
            { 
                props.language && props.language !== "" ? (
                    <p className="repos_repository_language font_display">{props.language}</p>
                ) : (
                    <div className="repos_repository_language_emptySpace"></div>
                )
            }
        </ReposCardContainer>
    );
}