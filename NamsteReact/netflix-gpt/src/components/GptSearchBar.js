import { lang } from "../utils/languageContants"; 
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const language = useSelector((store) => store.config); 
  return (
    <div className='pt-[10%] flex justify-center '>
        <form className='w-1/2 bg-black grid grid-cols-12 rounded-lg'>
            <input className='p-4 m-4 rounded-lg col-span-9' type='text' placeholder={lang[language.lang].gptSearchPlaceholder}/>
            <button className='py-2 px-4 col-span-3 m-4 bg-red-700 text-white rounded-lg '>{lang[language.lang].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar