import Carousel from "./Carousel";

function Home() {
    return (
        <>
            <Carousel />
            <section className="w-screen text-center flex relative top-40 mb-40">
                <div className="flex justify-center max-lg:flex-wrap items-center m-10">
                    <div className="my-10 lg:w-1/2">
                        <h1 className="border p-10 text-3xl font-bold text-[#080451]">CURSOS</h1>
                        <p className="text-xl p-3">Conheça os nossos cursos e futuros eventos clicando no botão abaixo!</p>
                        <button className="border rounded-none bg-[#0f09a1] hover:bg-white text-white hover:text-[#0f09a1] border-[#0f09a1] transition duration-300 py-5 px-10 mt-5">Informações</button>
                    </div>
                    <div className="my-10 lg:w-1/2">
                        <h1 className="border p-10 text-3xl font-bold text-[#080451]">PROJETOS MISSIONÁRIOS</h1>
                        <p className="text-xl p-3">Conheça cada projeto, cada missionário e o campo onde estão além de ter o acesso ao PAM - Plano de Adoção Missionária.</p>
                        <button className="border rounded-none bg-[#0f09a1] hover:bg-white text-white hover:text-[#0f09a1] border-[#0f09a1] transition duration-300 py-5 px-10 mt-5">Informações</button>
                    </div>
                    <div className="my-10 lg:w-1/2">
                        <h1 className="border p-10 text-3xl font-bold text-[#080451]">AGEMIW</h1>
                        <p className="text-xl p-3">A AGEMIW é uma agência missionária ligada diretamente à Igreja Metodista Wesleyana, sendo responsável por treinar, preparar e cuidar dos missionários que estão no campo missionário e de suas famílias, além de treinar e aconselhar aos que entendem o chamado de servir no campo missionário integralmente.</p>
                        <button className="border rounded-none bg-[#0f09a1] hover:bg-white text-white hover:text-[#0f09a1] border-[#0f09a1] transition duration-300 py-5 px-10 mt-5">Informações</button>
                    </div>
                </div>
            </section>
            <section className="w-screen flex bg-cover bg-center bg-[url('./wp7075534.jpg')] h-screen bg-local lg:p-80 text-white">
                <div className="">
                    <div className="flex flex-wrap text-wrap items-center justify-center p-20 content-center">
                        <h1 className="text-3xl font-bold m-3">SOBRE</h1>
                        <div className="break-all">
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
                        <button className="border rounded-none bg-[#0f09a1] hover:bg-white text-white hover:text-[#0f09a1] border-[#0f09a1] transition duration-300 py-5 px-10 mt-5">Saiba Mais</button>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Home;