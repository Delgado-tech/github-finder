import { ReposBody } from "./style";
import { Link, useLoaderData } from "react-router-dom";
import { githubReposParams } from "../../services/githubUserAPI";
import ReposCard from "../../components/ReposCard/ReposCard";


export default function Repos() {
    const repositories = useLoaderData() as githubReposParams[] | null;

    const reposCards: any = [];
    repositories?.map((repos, index) => reposCards.push(
        <ReposCard key={index} props={repos.props} />
    ));

    return (
        <ReposBody>
            <p>Repos</p>
            <Link to={"?page=2"}>test</Link>
            <div className="repos_repositories">
                { reposCards }
            </div>
        </ReposBody>
    );
}