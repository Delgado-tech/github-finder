import { useRef, useState, useEffect } from "react";
import { ButtonSelectContainer } from "./style";
import { AiOutlineDown } from 'react-icons/ai';
import { Link, useLocation } from "react-router-dom";
import { getKeyValue, removeSearchKey, removeSearchQuestionMark } from "../../utils/searchUtils";

export interface buttonSelectParams {
    selectOptions: string []
};

export default function ButtonSelect({ selectOptions }: buttonSelectParams) {

    const selectContainer = useRef<HTMLDivElement>(null);
    const selectElement = useRef<HTMLUListElement>(null);
    const iconArrow = useRef<HTMLElement>(null);

    const location = useLocation();
    const search = removeSearchQuestionMark(removeSearchKey(location.search, "order"));

    const [currentOption, setCurrentOption] = useState(getKeyValue(location.search, "order"));

    useEffect(() => {
        const handleClickOutside = (ev: MouseEvent) => {
            if (selectContainer.current && selectElement.current) {
                if (!selectContainer.current.contains(ev.target as Node) && !selectElement.current.classList.contains("buttonSelect_hidden")) {
                    handleToggleSelect();
                }
            }

        }

        if (selectContainer.current) {
            window.addEventListener("click", handleClickOutside);
        }

        return () => {
            if (selectContainer.current) {
                window.removeEventListener("click", handleClickOutside);
            }
        };
        
    }, []);

    if (currentOption === '') { 
        setCurrentOption(selectOptions[0]);
    }

    const options: any = [];
    selectOptions.map((op, index) => {
        if (op !== currentOption) {
            options.push(
                <Link to={`?${search !== '' ? search + '&' : ''}order=${op}`} key={index} >
                    <li 
                        className="font_display" 
                        onClick={() => handleHasBeenSelected(op)} 
                        key={index} 
                        value={op}
                    >{op}</li>
                </Link>
            );
        }
    });

    const handleToggleSelect = () => {
        if (selectElement.current) {
            selectElement.current.classList.toggle("buttonSelect_hidden");
        }

        if (iconArrow.current) {
            iconArrow.current.children[0].classList.toggle("rotate180");
        }
    }

    const handleHasBeenSelected = (op: string) => {
        setCurrentOption(op);
        handleToggleSelect();
    }

    return (
        <ButtonSelectContainer ref={selectContainer}>
            <p onClick={handleToggleSelect} className="font_display">{currentOption} <span ref={iconArrow} ><AiOutlineDown className="rotate180"/></span> </p>
            <ul ref={selectElement} className="buttonSelect_hidden">
                { options }
            </ul>
        </ButtonSelectContainer>
    );
}