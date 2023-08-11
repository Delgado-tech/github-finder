import { ReposContainer } from "./style";
import { useLoaderData, useNavigate } from "react-router-dom";
import { PiArrowRightBold } from "react-icons/pi";
import { githubReposParams, orderByOption } from "../../services/githubUserAPI";
import ReposCard from "../../components/ReposCard/ReposCard";
import ButtonSelect from "../../components/ButtonSelect/ButtonSelect";

export default function Repos() {

    const navigate = useNavigate();

    const repositories = useLoaderData() as githubReposParams[] | null;

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
            </div>
        </ReposContainer>
    );
}