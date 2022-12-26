import { SetStateAction, useRef, useState } from "react";
import Search from "../assets/icons/Search";
import { Link } from "react-router-dom";

type Data = {
    data: [] | any,
    value: string,
    setValue: React.Dispatch<SetStateAction<string>>,
}

const AutoComplete = ({ data, value, setValue }: Data) => {


    const [suggestions, setSuggestionsName] = useState([]);
    const [suggestionsActive, setSuggestionsActive] = useState(false);


    const handleChange = (e: { target: { value: string; }; }) => {

        const query = e.target.value.toLowerCase();
        setValue(query)
        if (query.length > 1) {
            const filterSuggestions = data.filter(

                (suggestion: { name: string }) =>
                    suggestion.name.toLowerCase().indexOf(query) > -1
            )
            setSuggestionsName(filterSuggestions)
            setSuggestionsActive(true);

            console.log(filterSuggestions);



        } else {
            setSuggestionsActive(false);
        }
    };

    const handleClick = (e: any) => {
        setSuggestionsName([]);
        setValue(e.target.innerText);
        setSuggestionsActive(false)

    }

    const Suggestions = () => {
        return (
            <ul className={suggestions?.length !== 0 ? "mt-2 bg-white h-full max-h-40 overflow-scroll rounded-md px-3 py-2" : ''}>
                {suggestions?.map((suggestion: { name: string, id: string }, index) => {
                    return (
                        <Link to={`/breed/${suggestion.id}`}
                            className={'py-2 cursor-pointer block'}
                            key={index}
                            onClick={handleClick}
                        >
                            {suggestion.name}
                        </Link>
                    );
                })}
            </ul>
        );
    };

    return (
        <div className="autocomplete text-black w-full pr-3 z-10 rounded-b-md ">
            <div className="flex bg-white rounded-lg px-3 py-2">
                <input
                    type="text"
                    className="w-full outline-none  text-black placeholder-gray-800"
                    value={value}
                    onChange={handleChange}
                />
                <button type="submit">
                    <Search />
                </button>
            </div>

            {suggestionsActive && <Suggestions />}
        </div>
    );

};

export default AutoComplete;