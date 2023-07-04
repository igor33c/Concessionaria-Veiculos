import thunder from '../images/thunder.png'

function TopInfo () {
    return(
        <>
            <div className="bg-gradient-to-br from-gray-400 to-gray-100 px-4 py-6 sm:flex sm:items-center sm:justify-between">
                <div className="flex items-center">
                    <h1 className="text-black font-bold text-lg sm:text-2xl">Thunderstorm Veículos</h1>
                    <img src={thunder} alt="" className="ml-4 w-16 h-16 sm:ml-6 " />
                </div>
                <div className="mt-4 sm:mt-0 sm:flex sm:flex-row sm:justify-center">
                    <div className="mt-4 sm:mt-0 sm:mr-8">
                        <h2 className="font-bold text-base sm:text-lg text-gray-800">Martinópolis</h2>
                        <h3 className="text-green-500 text-sm sm:text-base">(18)99699-9999</h3>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:mr-8">
                        <h2 className="font-bold text-base sm:text-lg text-gray-800">Maringá</h2>
                        <h3 className="text-green-500 text-sm sm:text-base">(44)99699-9999</h3>
                    </div>
                    <div className="mt-4 sm:mt-0">
                        <h2 className="font-bold text-base sm:text-lg text-gray-800">Marília</h2>
                        <h3 className="text-green-500 text-sm sm:text-base">(14)99699-9999</h3>
                    </div>
                </div>
            </div>
        </>
    );
}
export default TopInfo;
// https://www.flaticon.com/free-icons/thunder iconsThunder icons created by Freepik - Flaticon