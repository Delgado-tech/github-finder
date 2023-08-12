export interface githubUserParams {
    props: {
        id: number,
        login: string,
        name: string | null,
        html_url: string,
        avatar_url: string | null,
        bio: string | null,
        location: string | null,
        followers: number,
        following: number,
        created_at: string,
        repos_url: string,
        public_repos: number,
    }
}

export interface githubReposParams {
    props: {
        html_url: string,
        name: string,
        visibility: string,
        description: string | null,
        license: string | null,
        language: string | null,
        stargazers_count: number,
        created_at: string
    }
}

export enum invalidUserReason {
    emptyUser = 0,
    userNotFound = 1,
}

export const orderByOption: string[] = [ 
    "A-Z",
    "Z-A",
    "Mais Recente",
    "Mais Antigo",
    "Linguagem",
    "Estrelas"
];

export type orderByOption =  
    "A-Z" |
    "Z-A" |
    "Mais Recente" |
    "Mais Antigo" |
    "Linguagem" |
    "Estrelas"
;

export async function getGithubUser(loginId: string | undefined): Promise<githubUserParams | invalidUserReason > {
    if(!loginId) return invalidUserReason.emptyUser;

    const response = await fetch(`https://api.github.com/users/${loginId}`);

    if(!response.ok) return invalidUserReason.userNotFound;

    const data = await response.json();

    const userParams: githubUserParams = {
        props: {
            id: 0,
            login: '',
            name: '',
            html_url: '',
            avatar_url: '',
            bio: '',
            location: '',
            followers: 0,
            following: 0,
            created_at: '',
            repos_url: '',
            public_repos: 0,
        }
    };

    for (const key in data) {
        if(userParams.props.hasOwnProperty(key)) {
            (userParams.props as any)[key] = data[key];
        }
    }

    return userParams;
}

export async function getGithubRepositories(loginId: string | undefined, perPage: number = 30, page: number = 1, order: orderByOption = "A-Z"): Promise<githubReposParams[] | null> {
    if(!loginId) return null;

    const response = await fetch(`https://api.github.com/users/${loginId}/repos?per_page=${perPage}&&page=${page}`);
    
    if(!response.ok) return null;

    const data = await response.json();
    const repositories: githubReposParams[] = [];

    for (let i = 0; i < data.length; i++){
        repositories.push(await getGithubRepository(data, i));
    }

    const sortedRepositories = repositories.sort((a: githubReposParams, b: githubReposParams) => {
        if (order === "Z-A") {
            return (a.props.name < b.props.name ? 1 : -1);

        } else if (order === "Mais Recente") {
            return (new Date(a.props.created_at) < new Date(b.props.created_at) ? 1 : -1);

        } else if (order === "Mais Antigo") {
            return (new Date(a.props.created_at) > new Date(b.props.created_at) ? 1 : -1);

        } else if (order === "Linguagem") {
            if(!a.props.language) a.props.language = "";
            if(!b.props.language) b.props.language = "";
            return (a.props.language > b.props.language ? 1 : -1);

        } else if(order === "Estrelas") {
            return (a.props.stargazers_count < b.props.stargazers_count ? 1 : -1);

        }

        return 0; //A-Z
    })

    return sortedRepositories;
}

async function getGithubRepository(reposList: any[], reposId: number): Promise<githubReposParams> {
    const reposParams: githubReposParams = {
        props: {
            html_url: '',
            name: '',
            visibility: '',
            description: '',
            license: '',
            language: '',
            stargazers_count: 0,
            created_at: ''
        }   
    };

    const data: any = reposList[reposId];

    for (const key in data) {
        if(reposParams.props.hasOwnProperty(key)) {
            (reposParams.props as any)[key] = data[key];
        }
    }

    return reposParams;
}