import { NavLink } from "react-router-dom";
import { BannerImage, BannerInfo } from "../../Components/Services/Carousel";

function Home() {
    return (
        <main>
            <BannerImage />
            <section className="text-center flex relative top-40 mb-40">
                <div className="flex justify-center max-lg:flex-wrap items-center m-10">
                    <div className="my-10 lg:w-1/2">

                        <h1 className="border p-10 text-3xl font-bold text-[#080451]">CURSOS</h1>
                        <p className="text-xl p-3">Conheça os nossos cursos e futuros eventos clicando no botão abaixo!</p>
                        <button className="border rounded-none bg-[#0f09a1] hover:bg-white text-white hover:text-[#0f09a1] border-[#0f09a1] transition duration-300 py-5 px-10 mt-5">Informações</button>
                    </div>
                    <div className="my-10 lg:w-1/2">
                        <h1 className="border p-10 text-3xl font-bold text-[#080451]">lorem</h1>
                        <p className="text-xl p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam iste consequatur rem, est mollitia corrupti praesentium deserunt a blanditiis ratione eaque repudiandae voluptates dicta cum aliquam amet delectus molestias qui.</p>
                        <button className="border rounded-none bg-[#0f09a1] hover:bg-white text-white hover:text-[#0f09a1] border-[#0f09a1] transition duration-300 py-5 px-10 mt-5">
                            Informações
                        </button>
                    </div>
                    <div className="my-10 lg:w-1/2">
                        <h1 className="border p-10 text-3xl font-bold text-[#080451]">ESCOMIW</h1>
                        <p className="text-xl p-3">Somos um braço da Secretaria Regional de Missões que tem como enfoque o despertamento da igreja em âmbito local e distrital para o engajamento da evangelização urbana.</p>
                        <button className="border rounded-none bg-[#0f09a1] hover:bg-white text-white hover:text-[#0f09a1] border-[#0f09a1] transition duration-300 py-5 px-10 mt-5">
                            <NavLink to="/escomiw">Informações</NavLink>
                        </button>
                    </div>
                </div>
            </section>
            <section className="text-white">
                <div className="bg-[url('https://wallpapercave.com/wp/wp7075534.jpg')] bg-center">
                    <div className="flex items-center justify-center bg-blue-900 bg-opacity-60">
                        <div className="text-center p-20">
                            <h1 className="text-3xl font-bold m-3">SOBRE</h1>
                            <div className="text-justify lg:px-20">
                                <p>A Secretaria Geral de Missões é um órgão da Igreja Metodista Wesleyana,
                                    instituído para executar os planos e programas da igreja,
                                    visando à salvação dos pecadores, a glorificação do Senhor Jesus Cristo
                                    e a expansão do Reino de Deus.
                                </p>
                                <br />
                                <div className="">
                                    <p>Nossa Missão:</p>
                                    <p>I - Divulgar, implementar, capacitar, manter e projetar o trabalho de evangelização no Brasil e no mundo;</p>
                                    <p>II -  Desenvolver, o ardor missionário e evangelizador da Igreja.</p>
                                    <p>III - Planejar a criação de frentes missionárias em áreas estrangeiras e nacionais.</p>
                                </div>
                            </div>
                            <button className="border rounded-none bg-[#0f09a1] hover:bg-white text-white hover:text-[#0f09a1] border-[#0f09a1] transition duration-300 py-5 px-10 mt-5">
                                <NavLink to="/sobre">
                                    Saiba mais
                                </NavLink>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <BannerInfo />
        </main>
    )
};

export default Home;