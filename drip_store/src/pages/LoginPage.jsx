import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import { Logo } from "../components/Logo"
const LoginPage = () => {
    return ( 
        <>
            <section className="flex justify-between items-center px-4">
                <Logo open={true}/>
                <NavLink to="/">
                    <button className="flex items-center justify-center text-s7 h-[22px] bg-c2 px-7 py-5 rounded-md"> Voltar</button>
                </NavLink>
            </section>
            <section className="flex px-4">
                <section className="flex-1">
                    <div>
                        <h1 className="font-bold text ">Acesse sua conta</h1>
                        <p>Novo cliente? Então registre-se <a href="">aqui</a></p>
                        <form className="flex flex-col">
                            <label className="flex flex-col">Login *
                                <input type="email" />
                            </label>
                            <label className="flex flex-col">Senha *
                                <input type="password" />
                            </label>
                        </form>
                        <a href="esqueci minha senha"></a>
                        <button className="flex items-center justify-center text-s7 h-[22px] bg-c2 px-7 py-5 rounded-md w-full"> Acessar Conta</button>
                        <div className=" text-center">
                            Ou faça login com <span className="pi pi-google"></span> <span className="pi pi-facebook"></span>
                        </div>
                    </div>
                </section>
                <section className="flex-1">

                </section>
            </section>
            <Footer />  
        </>
     );
}
 
export default LoginPage;