export const CardDestaque = ({discount, title, image}) => {
    return ( 
        <>
            <section className="relative overflow-hidden h-[251px] flex-1 bg-c7 basis-[405px] shrink-[405px] rounded-xl flex ">
                <div className="flex flex-col p-3 w-[50%] h-[100%] justify-around z-[1]">
                    <p className="bg-[#E7FF86] p-3 font-bold h-[32px] w-[92px] text-[14px] flex items-center rounded-xl">
                        {discount}
                    </p>
                    <h3 className="font-bold text-[32px]">
                        {title}
                    </h3>
                    <button 
                    className="flex items-center justify-center text-c2 h-[22px] bg-s7 px-7 py-5 rounded-md w-[153px]">
                            Comprar
                    </button>
                </div>
                <img src={image} alt="" className="w-[300px] absolute -bottom-12 -right-10 -rotate-[30deg]"/>
            </section>
        </>
     );
}

export const CardDestaqueTipo = ({image}) => {
    return (
        <>
            <section>
                <div className="bg-s7 rounded-full p-3 w-[100px] h-[100px] flex items-center justify-center ">
                    <img src={image} alt="" className="cssDropShadow transition-all "/>
                </div>
            </section>
        </>
    )
}

export const CardProdutosEmAlta = ({image, title, type, price}) => {
    return (
        <>
            <section className="w-[292px] h-[439px] max-md:w-[163px] max-md:h-[300px]">
                <div className="relative flex items-center justify-center bg-s7 w-full h-[321px] max-md:h-[200px]">
                    <img src={image} alt="" className="w-[200px] max-md:w-[120px]"/>
                </div>
                <div>
                    <p>{type}</p>
                    <h2>{title}</h2>
                    <h3>R$ {price}</h3>
                </div>
            </section>
        </>
    )
}