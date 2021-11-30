import {MdSearch} from 'react-icons/md'

const SearchCustom = () => {
    return (
        <div className="form-control">
            <div className="relative w-96 md:w-100 text-white">
                <input type="text" placeholder="Buscar" className="w-full pr-16 input bg-nochero-300 input-ghost placeholder-white"/>
                <button className="absolute top-0 right-0 rounded-l-none btn btn-ghost bg-nochero-400"><MdSearch/>
                </button>
            </div>
        </div>
    )
}
export default SearchCustom;