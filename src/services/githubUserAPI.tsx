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
    url: string,
    name: string,
    visibility: string,
    description: string | null,
    license: string | null,
    language: string | null,
    stargazers_count: number,
    created_at: string
}

export enum invalidUserReason {
    emptyUser = 0,
    userNotFound = 1,
}

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

export async function getGithubRepos(loginId: string | undefined, perPage: number = 10, page: number = 1): Promise<githubReposParams[] | null> {
    if(!loginId) return null;

    const response = await fetch(`https://api.github.com/users/${loginId}/repos?per_page=${perPage}&&page=${page}`);
    const data = await response.json();
    console.log(data);
    

    return data;
}