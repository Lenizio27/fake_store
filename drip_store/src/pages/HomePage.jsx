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

import { useState, useEffect} from "react";
import { getProducts } from "../services/apis";

const HomePage = () => {
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchItems = async () => {
            setLoading(true);
            const data = await getProducts();
            setProducts(data);
            setLoading(false);
        }
        fetchItems();
    }, []);


    if(loading) return <p>Carregando Produtos...</p>;

    const arrayCards = [
        {
            discount: "30% OFF",
            title: "Novo drop Supreme",
            image: products[0]?.image
        },
        {
            discount: "30% OFF",
            title: "Coleção Adidas",
            image: products[1]?.image
        },
        {
            discount: "30% OFF",
            title: "Novo Beats Bass",
            image: products[2]?.image
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
            image: products[i ]?.image,
            title: products[i]?.title,
            type: products[i]?.category,
            price: products[i]?.price,
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