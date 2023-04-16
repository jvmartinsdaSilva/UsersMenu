import BtnDefault from "./Style"


export const ButtonDelete = ({clickEvent}) => {
    return (
        <BtnDefault onClick={clickEvent}>
            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M261 936q-24.75 0-42.375-17.625T201 876V306h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438V306ZM367 790h60V391h-60v399Zm166 0h60V391h-60v399ZM261 306v570-570Z" /></svg>
        </BtnDefault>
    )
}

export const ButtonEdit = ({clickEvent}) => {
    return(
        <BtnDefault onClick={clickEvent}>
            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M80 1056V935h800v121H80Zm82-227V696l373-373 133 133-373 373H162Zm60-60h45l315-315-45-45-315 315v45Zm490-357L579 279l84-84q11-13 25-13.5t28 13.5l78 78q13 13 13 27.5T796 328l-84 84ZM222 769Z"/></svg>
        </BtnDefault>
    )
}