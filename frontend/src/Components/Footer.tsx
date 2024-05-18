import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <footer className="text-white">
            <div className="w-screen text-center p-20 text-3xl bg-[#0F09A1]">
                <h1>CONTATO</h1>
            </div>
            <div className="w-screen bg-[#080451] flex max-lg:flex-col lg:justify-between p-5 py-10 text-lg">
                <div className="m-5">
                    <h1 className="text-4xl mb-5">Escomiw</h1>
                    <p>Rua Exemplo</p>
                    <p>Caxias - RJ 00000000</p>
                    <p>Email: aaaaaaaaaaa@gmail.com</p>
                    <p>Tel: (21)000000000</p>
                </div>
                <div className="max-lg:w-4/5 w-3/4 h-80 bg-white m-5">
                    <p className="text-black text-center relative top-40">MAPA</p>
                </div>
                <div className="m-5">
                    <h1 className="text-4xl mb-5">SOCIAL</h1>
                    <div className="flex gap-1">
                        <FaInstagram />
                        <FaWhatsapp />
                        <FaYoutube />
                    </div>
                    <br />
                    <p>© 2024 por SRM</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer