import { Logo } from "./Logo";

const Footer = () => {
    const arrayFooter = [
        {
            title: "Informações",
            items: ["Sobre Drip Store", "Segurança", "Wishlist", "Blog", "Trabalhe Conosco", "Meus Pedidos"],
        },
        {
            title: "Categorias",
            items: ["Camisetas", "Calças", "Bonés", "Headphones", "Tênis",],
        },
        {
            title: "Contato",
            items: ["Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161", "(85) 3051-3411"],
        },
    ]
    const arrayIcons = ["pi pi-instagram", "pi pi-facebook", "pi pi-twitter"]
    return ( 
        <>
            <footer className="bg-s1 text-s7 pt-10">
                <div className="flex max-w-[1440px] m-auto px-4 max-md:flex-wrap py-4">
                    <article className="flex flex-col flex-2 items-start w-[480px] max-md:pb-3">
                        <Logo open={false}/>
                        <p className="w-[330px] py-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, accusamus, minima dolor nam molestiae</p>
                        <div>
                            {arrayIcons.map(a => <i className={`${a} text-[22px] m-1`}></i>)}
                        </div>
                    </article>
                    <section className="flex flex-10 w-full flex-wrap">
                            {arrayFooter.map((item)=>(
                                <article className="flex-1 basis-[150px]">
                                    <h2 className="font-bold text-18px]">{item.title}</h2>
                                    {item.items.map(a => <p className="text-[16px] my-2">{a}</p>)}
                                </article>
                            ))}
                    </section>
                </div>
                <div className="text-center max-w-[1280px] m-auto px-4">
                    <hr className="text-s3"/>
                    <p className="text-[13px] py-4">&copy; 2025 Lenízio Nascimento</p>
                </div>
            </footer>
        </>
     );
}
 
export default Footer;