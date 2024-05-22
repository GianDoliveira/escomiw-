import { useState } from "react";
import "./Navbar.css";
import { NavLink } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-screen fixed z-10 flex items-center justify-between flex-wrap bg-blue-800 px-2 py-1">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <img src="/srm1.png" className="size-44" />
            </div>
            <div className="block lg:hidden">
                <div className={`nav-icon ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-end`}>
                <ul className="text-sm p-2">
                    <NavLink to="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-orange-400 mr-4">
                        Início
                    </NavLink>
                    <NavLink to="/sobre" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-orange-400 mr-4">
                        Sobre nós
                    </NavLink>
                    <NavLink to="" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-orange-400 mr-4">
                        Campo Missionário
                    </NavLink>
                    <NavLink to="/projetopai" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-orange-400 mr-4">
                        Projeto PAI
                    </NavLink>
                    <NavLink to="/escomiw" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-orange-400 mr-4">
                        ESCOMIW
                    </NavLink>
                    <NavLink to="" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-orange-400 mr-4">
                        Agenda
                    </NavLink>
                    <NavLink to="" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-orange-400 mr-4">
                        Como Ofertar
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;