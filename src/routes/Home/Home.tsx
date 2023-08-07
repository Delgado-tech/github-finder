import { Link, useOutletContext } from "react-router-dom";
import ButtonRepos from "../../components/Button/ButtonRepos";
import { HomeContainer } from "./style";
import { githubUserParams } from "../../services/githubUserAPI";
import { format } from "date-fns"

export default function Home() {

    const userParams: githubUserParams = useOutletContext();

    return (
        <HomeContainer>
            <p className="home_id">id: { userParams.props ? userParams.props.id : "xxxxxx" }</p>
            <div className="home_bio">
                <div>
                    <h3>Biografia</h3>
                    <p>{ userParams.props ? ( userParams.props.bio ? userParams.props.bio : "Esse usuário não possui uma biografia." ) : "" }</p>
                </div>
            </div>
            <div className="home_othersInfos">
                <p>Usuário desde: { userParams.props ? format(new Date(userParams.props.created_at), "dd/MM/yyyy") : "xx/xx/xxxx" }</p>
                <p>Localização: { userParams.props ? (userParams.props.location ? userParams.props.location : "não definido") : "xxxxxxx" }</p>
            </div>
            <Link to={'repos'}>
                <ButtonRepos public_repos={userParams.props ? userParams.props.public_repos : 0} />
            </Link>
        </HomeContainer>
    );
}