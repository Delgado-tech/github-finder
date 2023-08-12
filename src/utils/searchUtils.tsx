export function removeSearchQuestionMark(search: string): string {
    return search.replace("?", "");
}

export function removeSearchKey(search: string, removeKey: string): string {
    const searchKeys = search.split("&");
    let newSearch: string = "";

    searchKeys.map((key) => {
        if (!key.includes(`${removeKey}=`)) {
            newSearch += key;
        }
    });

    return newSearch;
}

export function getKeyValue(search: string, findKey: string): string {
    const searchKeys = search.split("&");
    let newSearch: string = "";

    searchKeys.map((key) => {
        if (key.includes(`${findKey}=`)) {
            newSearch += key.split("=")[1];
            newSearch = newSearch.replace("%20", " ");
        }
    });

    return newSearch;
}