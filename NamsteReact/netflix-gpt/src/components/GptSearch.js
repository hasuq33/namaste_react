import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="rounded-lg">
      <div className='absolute -z-10'>
        <img src={BG_URL}/>
      </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch