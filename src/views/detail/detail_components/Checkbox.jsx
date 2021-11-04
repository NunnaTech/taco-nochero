const Chechbox = ({espaciado, mb}) => {
    return (
        <label className={`cursor-pointer label mb-${mb}`}>
            <span className="font-regular text-white ">Si deseo condimentos</span>
            <input type="checkbox" className={`checkbox checkbox-secondary bg-nochero-600 ml-${espaciado}`}/>
        </label>
    )
}
export default Chechbox;