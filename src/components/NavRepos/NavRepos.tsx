import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavReposContainer } from "./style";
import { getKeyValue, removeSearchKey, removeSearchQuestionMark } from "../../utils/searchUtils";
import { clamp } from "../../utils/mathF";

export interface navReposParams {
    pagesToShow: number,
    totalOfPages: number
}

export default function NavRepos({ pagesToShow, totalOfPages }: navReposParams) {
    totalOfPages = Math.max(totalOfPages, 1);

    const location = useLocation();
    const search = removeSearchQuestionMark(removeSearchKey(location.search, "page"));
    const searchActualPageValue = clamp(Number(getKeyValue(location.search, "page")), 1, totalOfPages);
    
    const [currentPage, setCurrentPage] = useState(searchActualPageValue);
    
    const handleHasBeenSelected = (page: string) => {
        setCurrentPage(Number(page));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const pagesEl = getPagesEl(currentPage, pagesToShow, totalOfPages, search, handleHasBeenSelected);

    return (
        <NavReposContainer>
            <ul>
                {pagesEl}
            </ul>
        </NavReposContainer>
    );
}

function getPagesEl (currentPage: number, pagesToShow: number, totalOfPages: number, search: string, handleHasBeenSelected: Function): any[] {
    const lap = {
        increase: true,
        decrease: true,
        currentLap: 1
    }

    const pagesNumbers: string[] = [String(currentPage)];
    const pagesEl: any[] = [];

    while(lap.increase || lap.decrease) {

        if(lap.increase && (currentPage + lap.currentLap <= totalOfPages) && ((pagesNumbers.length < pagesToShow) || (currentPage + lap.currentLap === totalOfPages))) {
            pagesNumbers.push(String(currentPage + lap.currentLap));
        } else {
            lap.increase = false;
        }

        if(lap.decrease && (currentPage - lap.currentLap >= 1) && ((pagesNumbers.length < pagesToShow) || (currentPage - lap.currentLap === 1))) {
            pagesNumbers.unshift(String(currentPage - lap.currentLap));
        } else {
            lap.decrease = false;
        }
        
        lap.currentLap++;
    }

    if (!pagesNumbers.includes("1")) {
        pagesNumbers.unshift("1", "...");
    }

    if (!pagesNumbers.includes(String(totalOfPages))) {
        pagesNumbers.push("...", String(totalOfPages));
    }

    pagesNumbers.map((page, index) => {
        if (page === "...") {
            pagesEl.push( 
                <li key={index} className={"font_display navrepos_ellipsis"}>{page}</li>
            );
        } else {
            pagesEl.push(
                <Link key={index} to={ `?${search !== '' ? search + '&' : ''}page=${page}` }>
                    <li 
                        key={index} 
                        onClick={() => handleHasBeenSelected(page)}
                        className={`font_display ${page === String(currentPage) && "navrepos_currentPage"}`}
                    >{page}</li>
                </Link>
            );
        }
    });

    return pagesEl;
}