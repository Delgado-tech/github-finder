import { ButtonReposContainer } from "./style";

export default function ButtonRepos({ public_repos = 0}) {
    return (
        <ButtonReposContainer>
            <span />
            <p className="font_display">Mostrar Repositórios</p>
            <div>
                <p className="font_display">{public_repos}</p>
            </div>
        </ButtonReposContainer>
    );
}