import ImgTenisVermelho from "../assets/images/tenis_1.png"
import ImgTenisAmarelo from "../assets/images/tenis_4.png"

export const SectionHero = () => {
    return ( 
        <>
            <section className=" bg-s6">
                <div className="max-md:h-[calc(100vh-80px)] h-[calc(100vh-124px)] flex w-full max-md:flex-col max-w-[1440px] m-auto">
                    <div className="flex-1 flex justify-center items-start p-4 flex-col gap-4 max-md:order-1 max-md:items-center max-md:text-center">
                        <h2 className="font-bold text-c6 max-md:text-c2">
                            Melhores ofertas personalizadas
                        </h2>
                        <h3 className=" font-extrabold text-[64px] leading-[66px]">
                            Queima de stoque Nike🔥
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse officia temporibus accusamus soluta
                        </p>
                         <button
                            className="flex items-center justify-center text-s7 h-[22px] bg-c2 px-14 py-5 rounded-md my-5 max-md:w-full">
                                Ver Ofertas
                        </button>
                    </div>
                    <div className="flex-1 flex justify-center items-center p-2 ">
                        <img src={ImgTenisVermelho} alt="" className="max-md:w-[300px]"/>
                    </div>
                </div>
                
            </section>
        </>
     );
}
// Caso não coloque os props no component destiando dara erro
export const Sections = ({title, titleAlign, link, children, estilo}) => {
    const align = titleAlign === "center" ? "center" : "left";
    return (
        <>
            <section className="bg-s8 py-10">
                <div className="max-w-[1440px] m-auto px-4">
                    <div className={`flex items-center ${align === "center" ? "justify-center" : "justify-between"}`}>
                        <h2 className="text-s2 text-[18px] my-3 font-bold">{title}</h2>
                        <h2 className={`${align === "center" ? `` : `text-c2 text-[18px]`}`}>
                            <a href={link.href}>{link.text}</a>
                        </h2>
                    </div>
                    <div className={estilo}>
                        {children}
                    </div>
                </div>
            </section>
        </>
    )
}

export const SectionOfertaEspecial = ({}) => {
    return (
        <>
            <section className="my-[40px]">
                <div className="flex max-md:flex-col max-w-[1440px] m-auto px-4">
                    <div className="flex-1 relative w-[573px] flex items-center justify-center max-md:w-[auto]">
                        <img src={ImgTenisAmarelo} alt="" className="w-auto max-md:w-[300px]"/>
                        <div className="OfertaEspecial absolute h-[466px] w-[466px] top-0 -z-10 rounded-full max-md:w-[280px] max-md:h-[280px]"></div>
                    </div>
                    <div className="flex-1 flex flex-col gap-3 justify-center px-8 max-md:pt-28">
                        <p className="font-bold text-[14px] text-c2 max-md:text-c6">
                            Oferta Especial
                        </p>
                        <h3 className="font-bold text-[48px] leading-[50px] ">
                            Air Jordan edição de colecionador
                        </h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus nihil quas obcaecati quae molestiae soluta nam reprehenderit sunt nemo. Id nesciunt ut voluptas dolores voluptatem atque doloribus! Alias, modi facilis?
                        </p>
                        <button
                            className="flex items-center justify-center text-s7 h-[22px] bg-c2 px-14 py-5 rounded-md my-5 max-md:w-full w-[200px]">
                                Ver Oferta
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

