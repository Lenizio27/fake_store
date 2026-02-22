import { Logo, LogoMobile } from "./Logo";
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useEffect } from "react";


const Header = () => {
    const [open, menuOpen] = useState(false)
    const [classe, setClasse] = useState("");

    function aplicarClasseDepois() {
        if(open === false){
            setTimeout(() => {
                setClasse("z-[-100]");
            }, 400)
        }else if(open === true){
            setTimeout(() => {
                setClasse("flex");
            }, 100)
        }
    }

    const arrayLinks = [
        {
            route: "/",
            title: "Home"
        },
        {
            route: "/ProductListingPage",
            title: "Produtos"
        },
        {
            route: "/CategoriasProdutos",
            title: "Categorias"
        },
        {
            route: "/ProductViewPage",
            title: "Meus Pedidos"
        },
    ]
    
    useEffect(() => {
    if (open) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
    return () => {
        document.body.style.overflow = "auto";
    };
    }, [open]);


    return ( 
        <>
        <header className="bg-s7">
            <div className="flex flex-col items-center max-w-[1440px] m-auto px-4 max-md:hidden">
                {/* Pesquisas */}
                <div className="flex items-center justify-between w-full py-5">
                    <Logo className="flex-6" open={true}/>
                    <div className="w-[500px] flex-1 relative">
                        <input placeholder="Pesquisar produto..." type="text" className=" pl-5 bg-s6  h-[60px] rounded-md w-full" />
                        <i className="pi pi-search absolute right-4 top-5 text-[20px] text-s5"></i>
                    </div>
                    <div className="flex gap-6 items-center px-8">
                        <a href="" className="underline text-s3">Cadastre-se</a>
                        <button 
                        className="flex items-center justify-center text-s7 h-[22px] bg-c2 px-7 py-5 rounded-md">
                            <NavLink to={"/LoginPage"}>Entrar</NavLink>
                        </button>
                    </div>
                    <div className="relative px-1">
                        <i className="pi pi-shopping-cart text-[25px]"></i>
                        <div className="absolute top-0 right-0 w-[15px] h-[15px] bg-c1 rounded-lg text-center text-[10px] text-s7">1</div>
                    </div>
                </div>
                {/* Navegação Pagina */}
                <nav className="justify-start items-start w-full">
                    <ul className="flex gap-6">
                        {arrayLinks.map(item => (
                            <li>
                                <NavLink to={item.route} 
                                className={({ isActive }) =>
                                isActive ? "text-c2 underline" : "text-s3"}
                                >{item.title}</NavLink>
                            </li>
                        ))}
                    </ul> 
                </nav>
            </div>
            {/* Header Mobile */}
            <div className="hidden max-md:flex items-center justify-between px-4 py-2 h-[80px] fixed bg-s7 w-full z-50">
                <div 
                className={`cursor-pointer transition-all duration-100 pi ${open ? `pi-align-left scale-x-90`: `pi-align-justify ${aplicarClasseDepois()}`} text-[20px] ${aplicarClasseDepois()}`} 
                onClick={() => menuOpen(!open)}></div>
                <LogoMobile open={true}/>
                <div className="flex gap-5">
                    <div className="pi pi-search text-[20px] cursor-pointer"></div>
                    <div className="relative px-1">
                        <i className="pi pi-shopping-cart text-[20px]"></i>
                        <div className="absolute top-0 right-0 w-[15px] h-[15px] bg-c1 rounded-lg text-center text-[10px] text-s7">1</div>
                    </div>
                </div>
            </div>
            
            {/* Navegacao Mobile */}
            <div className={`md:hidden h-[calc(100dvh-80px)] w-full bg-b1 transition-all duration-200 bottom-0 fixed  ${open ? " opacity-100" : `scale-100 opacity-0 ${classe}`} z-10`}>

                <div className={`flex flex-col w-[80%] bg-s7 h-[calc(100dvh-80px)] md:hidden transition-all duration-200 origin-left px-4 py-4 justify-between ${open ? "scale-100 opacity-100" : "scale-100 scale-x-0 opacity-0"}`}>
                    <div>
                        <h2>Paginas</h2>
                        <ul>
                            {arrayLinks.map(item => (
                            <li>
                                <NavLink to={item.route} 
                                className={({ isActive }) =>
                                isActive ? "text-c2 underline" : "text-s3"}
                                >{item.title}</NavLink>
                            </li>
                        ))}
                        </ul>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <hr />
                        <button
                        className="flex items-center justify-center text-s7 h-[22px] bg-c2 px-7 py-5 rounded-md w-full m-2">
                                Entrar
                        </button>
                        <a href="" className="underline text-s3">Cadastre-se</a>
                    </div>
                </div>
            </div>
        </header>
        </>
     );
}
 
export default Header;