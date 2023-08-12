import { ReposContainer } from "./style";
import { useLoaderData, useNavigate, useOutletContext } from "react-router-dom";
import { PiArrowRightBold } from "react-icons/pi";
import { githubReposParams, githubUserParams, orderByOption } from "../../services/githubUserAPI";
import ReposCard from "../../components/ReposCard/ReposCard";
import ButtonSelect from "../../components/ButtonSelect/ButtonSelect";
import NavRepos from "../../components/NavRepos/NavRepos";

export default function Repos() {

    const navigate = useNavigate();

    const repositories = useLoaderData() as githubReposParams[] | null;
    const userParams: githubUserParams = useOutletContext();
    const totalOfPages = Math.ceil((userParams.props.public_repos / 30));

    const reposCards: any = [];
    repositories?.map((repos, index) => reposCards.push(
        <ReposCard key={index} props={repos.props} />
    ));

    return (
        <ReposContainer>
            <div className="repos_header">
                <button className="repos_header_back" onClick={() => navigate("..", { relative: "path" })}>
                    <PiArrowRightBold className="rotate180" /> Voltar
                </button>
                <div className="repos_header_orderBy">
                    <p>Ordernar por:</p>
                    <ButtonSelect selectOptions={orderByOption} />
                </div>
            </div>
            <div className="repos_repositories">
                { reposCards }
                <NavRepos pagesToShow={3} totalOfPages={totalOfPages} />
            </div>
        </ReposContainer>
    );
}