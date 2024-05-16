import { FaInstagram, FaWhatsapp, FaYoutube  } from "react-icons/fa";

function Footer() {
    return (
        <footer className=
            "w-screen bg-[#080451] flex lg:justify-between p-4 text-white text-lg">
            <div>
                <h1 className="text-4xl mb-5">Escomiw</h1>
                <p>Rua Exemplo</p>
                <p>Caxias - RJ 00000000</p>
                <p>Email: aaaaaaaaaaa@gmail.com</p>
                <p>Tel: (21)000000000</p>
            </div>
            <div className="mx-10">
                <h1 className="text-4xl mb-5">SOCIAL</h1>
                <div className="flex gap-1">
                    <FaInstagram />
                    <FaWhatsapp />
                    <FaYoutube/>
                </div>
                <br />
                <p>© 2024 por SRM</p>
            </div>
        </footer>
    )
}

export default Footer