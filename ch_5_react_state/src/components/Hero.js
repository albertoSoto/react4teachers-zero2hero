import "./Hero.css"
export function Hero() {
    return (
        <div className="py-20 hero" >
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold mb-2 text-white">
                    React 4 teachers
                </h2>
                <h3 className="text-2xl mb-8 text-gray-200">
                    Capitulo 1: Explorando vanillajs!
                </h3>
                <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
                    Quiero aprender react, no vanillajs!
                </button>
            </div>
        </div>)
}