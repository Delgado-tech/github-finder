import { ReposCardContainer } from "./style";
import { PiArrowRightBold } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { githubReposParams } from "../../services/githubUserAPI";
import { format } from 'date-fns';

export default function ReposCard({props}: githubReposParams) {

    return (
        <ReposCardContainer>
            <a href="#" target="_blank">Visitar Repositório <PiArrowRightBold /></a>
            <div>
                <h3>{props.name}</h3>
                <p>{props.stargazers_count} <FaStar /></p>
            </div>
            <p className="repos_repository_createdAt">(criado em: {format(new Date(props.created_at), "dd/MM/yyyy")})</p>
            <p className="repos_repository_description">{props.description !== null && props.description}</p>
            { 
                props.language !== null && (
                    <p className="repos_repository_language font-display">{props.language}</p>
                )
            }
        </ReposCardContainer>
    );
}