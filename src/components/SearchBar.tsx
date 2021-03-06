import React from 'react';

export interface ISearchBarProps {
    keyword: string;
    setKeyword: (element: string) => void;
}

export const SearchBar: React.FC<ISearchBarProps> = ({keyword,setKeyword}) => {
    const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
    return (
        <input
            style={BarStyling}
            key="random1"
            value={keyword}
            placeholder={"search by name"}
            onChange={(e) => setKeyword(e.target.value)}
        />
    );
}
