import { SectionHero, Sections, SectionOfertaEspecial } from "../components/Section";
import { CardDestaque, CardDestaqueTipo, CardProdutosEmAlta } from "../components/ProductCard";
import ImgBlusa from "../assets/images/blusa_destaque.png";
import ImgFone from "../assets/images/fone_destaque.png";
import ImgTenis from "../assets/images/tenis_3.png";
import ImgTenis2 from "../assets/images/tenis_2.png";

import IconBlusa from "../assets/images/icon_blusa.png"
import IconCalca from "../assets/images/icon_calca.png"
import IconFone from "../assets/images/icon_fone.png"
import IconTenis from "../assets/images/icon_tenis.png"

const HomePage = () => {
    const arrayCards = [
        {
            discount: "30% OFF",
            title: "Novo drop Supreme",
            image: ImgBlusa
        },
        {
            discount: "30% OFF",
            title: "Coleção Adidas",
            image: ImgTenis
        },
        {
            discount: "30% OFF",
            title: "Novo Beats Bass",
            image: ImgFone
        },
    ]

    const arrayCardsTipo = [
        {image: IconBlusa},
        {image: IconCalca},
        {image: IconFone},
        {image: IconTenis},
    ]

    const arrayCardsEmAlta = []
    for(let i = 0; i < 8 ; i++){
        arrayCardsEmAlta.push({
            image: ImgTenis2,
            title: "K-Swiss V8 - Masculino",
            discount: "30% OFF",
            type: "tenis",
            price: " $100",
        })
    }
    

    return ( 
        <>
            <div className="w-full">
                    <SectionHero/>
                    {/* Coleções em destaque */}
                    <Sections
                    titleAlign={"left"}
                    title={"Coleções em destaque"}
                    link={""}
                    estilo={"flex flex-wrap gap-3"}
                    >
                        {arrayCards.map((item)=>(
                            <CardDestaque
                                discount={item.discount}
                                title={item.title}
                                image={item.image}
                            />
                        ))}
                    </Sections>

                    {/* Coleções em Destaque Tipo */}
                    <Sections
                    titleAlign={"center"}
                    title={"Coleções em destaque"}
                    link={""}
                    >
                        <div className="flex gap-3 justify-center flex-wrap">
                            {arrayCardsTipo.map((item) => (
                                    <CardDestaqueTipo
                                        image={item.image}
                                    />
                                ))}
                        </div>
                    </Sections>

                    {/* Produtos em alta */}

                    <Sections
                    titleAlign={"left"}
                    title={"Produtos em alta"}
                    link={{href:"",text:"ver todos ->"}}>
                        <div className="flex flex-wrap items-center justify-between">
                            {arrayCardsEmAlta.map(item => (
                                <CardProdutosEmAlta
                                    image={item.image}
                                    title={item.title}
                                    discount={item.discount}
                                    type={item.type}
                                    price={item.price}
                                ></CardProdutosEmAlta>
                            ))}
                        </div>
                    </Sections>
                    <SectionOfertaEspecial/>
            </div>
        </> 
    );
}
 
export default HomePage;