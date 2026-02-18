import { CardProdutosEmAlta } from "../components/ProductCard";
import { Sections } from "../components/Section";

import ImgTenis2 from "../assets/images/tenis_2.png";


const Categorias = () => {
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
            <div>
                <div>
                    <div>

                    </div>
                    <div></div>
                </div>

                <Sections
                    title={"Produtos Relacionados"}
                    titleAlign={"left"}
                    link={"s"}
                >
                   <div className="flex flex-wrap gap-1">
                       {arrayCardsEmAlta.map(item => (
                            <CardProdutosEmAlta
                                image={item.image}
                                title={item.title}
                                discount={item.discount}
                                type={item.type}gupy
                                price={item.price}
                            ></CardProdutosEmAlta>
                        ))}
                   </div>
                </Sections>
            </div>
        </>
     );
}
 
export default Categorias;