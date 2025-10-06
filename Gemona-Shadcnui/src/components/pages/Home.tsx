import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { categories, mostSearchedServices } from "../../config/mock-db"; // Assuming this path is correct
import { Button } from "../ui/button";

export default function HomePage() {
    return (
        <>
            <Header />
            <main className="flex flex-col min-h-[700px] p-4 bg-[#05315f]">
                <h2 className="text-center mt-8 text-2xl font-semibold text-[#07284b] md:text-3xl">
                    Categorias
                </h2>
                <div className="flex flex-row flex-wrap justify-center gap-4 p-0 mx-[4%] my-10">
                    {categories.map((category) => (
                        <Button key={category.name}  className="bg-[#07284b]" asChild>
                            <Link
                                to="/services"
                                className="flex items-center justify-center gap-1 px-2 py-1 bg-[#07284b] text-[#ffecd1] rounded-xl shadow-sm
                           hover:bg-gradient-to-r hover:from-blue-800 hover:to-blue-900 hover:scale-105 transition-all duration-500 ease-in-out
                           text-base md:text-lg h-full"
                            >
                                <category.icon aria-hidden="true" className="w-5 h-5 md:w-6 md:h-6" />
                                {category.name}
                            </Link>
                        </Button>
                    ))}
                </div>

                <h2 className="text-center mt-12 text-2xl font-semibold text-[#07284b] md:text-3xl">
                    Serviços mais buscados
                </h2>
                <div className="flex flex-wrap justify-center gap-4 p-0 mx-[4%] my-10">
                    {mostSearchedServices.map((service) => (
                        <Button key={service.name} className="bg-[#07284b]" asChild>
                            <Link
                                to="/services"
                                className="flex wrap items-center justify-center gap-1 px-2 py-1 bg-[#07284b] text-[#ffecd1] rounded-xl shadow-sm
                           hover:bg-gradient-to-r hover:from-blue-800 hover:to-blue-900 hover:scale-105 transition-all duration-500 ease-in-out
                           text-base md:text-lg min-w-[100px] lg:min-w-[120px] h-full"
                            >
                                <service.icon aria-hidden="true" className="w-5 h-5 md:w-6 md:h-6" />
                                {service.name}
                            </Link>
                        </Button>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}