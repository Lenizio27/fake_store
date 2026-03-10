import { Sections } from "../components/Section";
import { getProducts } from "../services/apis";

import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';


const Categorias = () => {
        const { id } = useParams();
        const [product, setProduct] = useState(null);

        useEffect(() => {
        // Chamada direta para o endpoint de produto único da FakeStore
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id]);

    if (!product) return <div>Carregando...</div>;

        return(
        <>
        <section className="max-w-[1440px] m-auto">
                <section className="flex">
                        <div className="w-full flex items-center justify-center bg-s7">
                               <img src={product?.image} alt={product?.title} />
                        </div>
                        <div className="w-[500px]">
                                <h2 className="font-bold text-[32px]">Title</h2>
                                <p>Categoria</p>
                                <p >Avaliação</p>
                                <p>Preço</p>
                                <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci corrupti nostrum reiciendis praesentium sapiente et laborum fuga repellendus obcaecati, officia, exercitationem quisquam dolore aperiam dignissimos, voluptatibus id impedit assumenda nisi!
                                </p>
                                <p>tamanho</p>
                                <button
                                className="flex items-center justify-center text-s7 h-[22px] bg-c2 px-7 py-5 rounded-md w-full m-2">
                                        Entrar
                                </button>
                        </div>
                </section>
                <section>
                        <Sections
                        titleAlign={"left"}
                        title={"Coleções em destaque"}
                        link={""}
                        estilo={"flex flex-wrap gap-3"}
                        >
                                
                        </Sections>
                </section>
        </section>
        </>)
}
 
export default Categorias;