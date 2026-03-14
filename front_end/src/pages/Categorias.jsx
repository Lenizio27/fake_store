import { Sections } from "../components/Section";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { CardProdutosEmAlta } from "../components/ProductCard";
import { getProducts } from "../services/apis";

const Categorias = () => {
        const { id } = useParams();
        const [product, setProduct] = useState(null);
        const [relatedProducts, setRelatedProducts] = useState([]); // Para os cards de baixo (Array)
        const [loading, setLoading] = useState(false);

        // Exemplo de como enviar para o SEU servidor
        const salvarNoBackEnd = async (carrinhoAtualizado) => {
        try {
                const response = await fetch('http://localhost:3000/cart/lenizio', { // 'lenizio' é o userId de teste
                method: 'POST',
                headers: {
                        'Content-Type': 'application/json' // Avisa o servidor que estamos enviando JSON
                },
                body: JSON.stringify(carrinhoAtualizado)
                });

                if (response.ok) {
                console.log("Sincronizado com o Back-end com sucesso!");
                }
        } catch (error) {
                console.error("Erro ao conectar com o servidor:", error);
        }
        };

        const handleComprar = () => {
    const produtoSelecionado = {
        id: product.id,
        nome: product.title,
        preco: product.price
    };

    // Chamamos a função que você acabou de colocar no código
    salvarNoBackEnd(produtoSelecionado);
};
        
        useEffect(() => {
        const fetchItems = async () => {
        setLoading(true);
        const data = await getProducts();
        setRelatedProducts(data);
        setLoading(false);
        }
        fetchItems();
        }, []);


       useEffect(() => {
        setLoading(true);
        fetch(`https://fakestoreapi.com/products/${id}`)
                .then(res => res.json())
                .then(data => {
                setProduct(data);
                setLoading(false);
                })
                .catch(err => {
                console.error(err);
                setLoading(false);
                });
        }, [id]);
        if ( loading || !product ) {return <p className="h-[calc(100vh-120px)] w-[100%] flex items-center justify-center ">
        <span className="pi pi-spin pi-spinner-dotted text-[50px]"></span>
        </p>;} 

        const arrayCardsEmAlta = []
        for(let i = 0; i < (relatedProducts?.length || 0) ; i++){
                arrayCardsEmAlta.push({
                        image: relatedProducts[i]?.image,
                        title: relatedProducts[i]?.title,
                        discount: "30% OFF",
                        type: relatedProducts[i]?.category,
                        price: relatedProducts[i]?.price,
                        id: relatedProducts[i]?.id,
                })
        }
                
        return(
        <>
        <section className="max-w-[1440px] m-auto px-4">
                <div>
                        <section className="flex h-[500px]">
                                <div className="w-full flex items-center justify-center bg-s7">
                                       <img src={product?.image} alt={product?.title} className="w-[200px]"/>
                                </div>
                                <div className="w-[700px]">
                                        <h2 className="font-bold text-[32px]">{product?.title}</h2>
                                        <p>{product?.category}</p>
                                        <p className="pi pi-eye text-c1"></p>
                                        <p  >{product?.rating?.rate}</p>
                                        <p className="text-[32px]">${product?.price?.toFixed(2)}</p>
                                        <p>
                                        {product?.description}
                                        </p>
                                        <p>tamanho</p>
                                        <button
                                        className="flex items-center justify-center text-s7 h-[22px] bg-c2 px-7 py-5 rounded-md w-full m-2"
                                        onClick={handleComprar}>
                                                Adicionar ao carrinho
                                        </button>
                                </div>
                        </section>
                        <section className="">
                                <Sections
                                titleAlign={"left"}
                                title={"Coleções em destaque"}
                                link={""}
                                estilo={"flex flex-wrap gap-3"}
                                >
                                {arrayCardsEmAlta.map((item) => (
                                        <CardProdutosEmAlta 
                                        image={item.image}
                                        title={item.title}
                                        discount={item.discount}
                                        type={item.type}
                                        price={item.price}
                                        id={item.id}
                                        >
                                        </CardProdutosEmAlta>
                                ))}
                
                                </Sections>
                        </section>
                </div>
        </section>
        </>)
}
 
export default Categorias;