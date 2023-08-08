# Acessar Api:
https://api.github.com/users/{login}

## Requests User
- html_url [https://github.com/{login}].html_url
- login [https://api.github.com/users/{login}].login
- name [https://api.github.com/users/{login}].name
- location [https://api.github.com/users/{login}].location <Optional>
- bio [https://api.github.com/users/{login}].bio <Optional>
- id [https://api.github.com/users/{login}].id
- avatar_url [https://avatars.githubusercontent.com/u/{id}?v=4]
- followers [https://api.github.com/users/{login}].followers
- following [https://api.github.com/users/{login}].following
- created_at [https://api.github.com/users/{login}].created_at <Date>
- repos [https://api.github.com/users/{login}/repos] <Array>

## Request Repos
- html_url [https://github.com/{login}/repos].html_url
- name [https://api.github.com/users/{login}/repos].name
- description [https://api.github.com/users/{login}/repos].description
- visibility [https://api.github.com/users/{login}/repos].visibility ----------> true se public
- stargazers_count [https://api.github.com/users/{login}/repos].stargazers_count
- license [https://api.github.com/users/{login}/repos].license <Optional>
- language [https://api.github.com/users/{login}/repos].language <Optional>
- created_at [https://api.github.com/users/{login}/repos].created_at <Date>
