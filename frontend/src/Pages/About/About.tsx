function About() {
    return (
        <>
            <section className="w-screen h-screen relative flex flex-col justify-center items-center ">
                <h1 className="text-center text-5xl font-bold mb-4 text-[#080451]">SOBRE</h1>
                <div className="lg:w-1/2 h-96 px-20 py-5 lg:py-10 overflow-auto lg:border border-gray-400">
                    <p className="py-5 max-lg:text-3xl">A Secretaria Regional de Missões é o Órgão Regional instituído para executar os planos e
                        programas missionários da igreja, sendo responsável diretamente pela expansão das Igrejas
                        Wesleyanas no campo missionário da 1ª Região, no estado do Piauí, além de contribuir com o
                        sustento missionário no campo transcultural dentro e fora do Brasil. Além do trabalho religioso e
                        evangelístico, a SRM desenvolve projetos na área social.
                    </p>
                    <p className="py-5 max-lg:text-3xl">Temos como objetivos principais:</p>
                    <ul className="list-disc max-lg:text-3xl">
                        <li>Desenvolver, por meios ao seu alcance, o ardor missionário e evangelizador da Igreja,
                            motivando as igrejas de cada distrito a obedecer à grande comissão, na tarefa de orar,
                            evangelizar e contribuir;
                        </li>
                        <li>Planejar a criação de frentes de missões em áreas do campo missionário no Piauí e
                            estimular a expansão do trabalho missionário na 1ª região em locais ainda não
                            alcançados ou que não se tenha uma Igreja Wesleyana estabelecida.
                        </li>
                        <li>Potencializar o alcance e influência do Projeto PAI (Programa de Apadrinhamento
                            Infantil) nas igrejas e congregações do Piauí, buscando proporcionar condições para o
                            desenvolvimento socioeconômico das famílias, assim como contribuir com a formação
                            educacional e profissional das crianças e adolescentes atendidas pelo PAI.
                        </li>
                    </ul>
                    <p className="py-5 max-lg:text-3xl">Para o alcance destes objetivos, nosso Programa é usar como ferramenta para viabilizar nossos
                        projetos os seguintes órgãos: PAI – Programa de Apadrinhamento Infantil, ESCOMIW- Escola
                        Missionária Wesleyana e AGEMIW- Agência Missionária Wesleyana.
                    </p>
                    <p className="py-5 max-lg:text-3xl">Graças ao envolvimento com missões, orações e contribuições financeiras das igrejas e irmãos
                        em Cristo, contamos atualmente com 2 famílias pastorais dedicadas ao campo missionário no
                        Piauí, onde temos duas igrejas estabelecidas e outras 12 congregações e pontos de pregação
                        espalhados desde a capital até o interior do estado.
                    </p>
                    <p className="py-5 max-lg:text-3xl">A SRM espera que a obra missionária cresça ainda mais através do aumento do número de
                        intercessores, do apoio financeiro dos crentes, de novos missionários que serão enviados a
                        novos campos e de projetos que serão implementados, para que a Palavra de Deus seja
                        difundida.
                        Avançar na pregação do Evangelho até os confins da terra, levando Jesus ao coração de toda
                        criatura é a missão que a SRM compartilha com você.
                    </p>
                    <p className="py-5 max-lg:text-3xl">Como parte da Secretaria Geral de Missões, a SRM da 1ª Região tem contribuído com o trabalho
                        de Missões transculturais.
                    </p>
                    <p className="py-5 max-lg:text-3xl">Atualmente estamos presentes nos seguintes países:</p>
                    <ul className="list-disc max-lg:text-3xl">
                        <li>Europa: Portugal, Bélgica, Suíça e Espanha.</li>
                        <li>América: Peru, Argentina, Paraguai, Uruguai, Bolívia e Estados Unidos - Nações
                            Indígenas no Brasil: (Ttikunas, Sateré-Mawé, Sanumá, Matis e Pataxós)
                        </li>
                        <li>Ásia: Japão, Tailândia, Paquistão e Ásia Cental.
                        </li>
                        <li>África: Senegal, Moçambique e Burkina-Faso</li>
                    </ul>
                    <p className="py-5 max-lg:text-3xl">Seja parte deste grande mover que está acontecendo. Participe das ações missionárias da 1ª
                        Região. Sua contribuição, oração e participação podem impactar muitas vidas e alcançar um
                        número ainda maior de pessoas que hoje estão sem Cristo.
                    </p>
                    <p className="py-5 max-lg:text-3xl">Seja a resposta!</p>
                </div>
            </section>
            <section className="w-screen flex relative bottom-14 justify-center items-center">
                <div>
                    <h1 className="text-center text-5xl font-bold mb-4 text-[#080451]">NOSSA EQUIPE</h1>
                    <img src="./equipe srm.jpg" alt="Equipe Missionário Regional" />
                </div>
            </section>
        </>
    );
}

export default About;