import TacosDetalle from '../../assets/images/TacosDetalle.png'
import ResponsiveDetail from "./detail_components/ResponsiveDetail";
import DetailNormal from "./detail_components/DetailNormal";

const Detail = () => {
    return (
        <div className="flex grid grid-cols-2 h-screen">
            <div className="sm:bg-white sm:flex sm:flex-col sm:justify-center sm:items-center hidden">
                <h1 className="font-bold text-black text-2xl mb-6">
                    TACOS AL PASTOR
                </h1>
                <img src={TacosDetalle} className="h-96 rounded-lg"/>
            </div>
            <div>
                <ResponsiveDetail/>
                <DetailNormal/>
            </div>
        </div>
    )
}

export default Detail;

