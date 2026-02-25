import { CardProdutosEmAlta } from "../components/ProductCard";
import ImgTenis2 from "../assets/images/tenis_2.png";
import { useEffect, useState } from "react";
import { getProducts } from "../services/apis";
const ProductListingPage = () => { 

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const [filter, setFilter] = useState('');

    const filteredProducts = products.filter(item => item.category === filter || filter === '');

    useEffect(() => {
        const fetchItems = async () => {
            setLoading(true);
            const data = await getProducts();
                setProducts(data);
                setLoading(false);
            }
            fetchItems();
        }, []);

    const [open, setOpen] = useState(false)
    
    useEffect(() => {
    if (open) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
    }, [open]);

    const arrayCategory = products.map(item => item.category);

    const arrayFiltroProdutos = [
        {
            title: "Estado",
            radios: ["Todos", ...new Set(arrayCategory)],
        },
    ]

    const arrayCardsEmAlta = []
    for(let i = 0; i < products.length ; i++){
        arrayCardsEmAlta.push({
            image: products[i ]?.image,
            title: products[i]?.title,
            discount: "30% OFF",
            type: products[i]?.category,
            price: products[i]?.price,
        })
    }
    if(loading) return <p className="h-[calc(100vh-120px)] w-[100%] flex items-center justify-center ">
            <span className="pi pi-spin pi-spinner-dotted text-[50px]"></span>
            </p>;

    return ( 
        <>
        <section className="bg-s6">
            <div className="flex flex-col max-w-[1440px] m-auto px-4">
                <div className="flex justify-between items-center my-2">
                    <h2 className="max-md:hidden">resultados para ""</h2>
                    <div className="w-[300px] h-[50px] flex items-center justify-center border max-md:w-full mr-1">
                        ordenar por:
                        <select name="" id="" className="bg-s6">
                            <option value="" className="bg-c2">mais relevanes</option>
                        </select>
                    </div>
                    {/* Botao Filtrar */}
                    <div 
                    className="md:hidden h-[50px] w-[50px] flex items-center bg-c2 justify-center text-s7 rounded-md cursor-pointer active:bg-c1"
                    onClick={()=> {setOpen(!open)}}
                    >
                        <div className="pi pi-filter"></div>
                    </div>
                </div>
                <div className="flex">
                    <aside className="flex-4 bg-s7 p-4 w-[315px] max-md:hidden">
                        <h3>Filtrar por</h3>
                        <hr />
                        {arrayFiltroProdutos.map((item) => (
                            <div>
                                <h2 className="font-bold my-1">{item.title}</h2>
                                {item.radios.map(a => 
                                <p className="flex items-center">
                                    <input 
                                    className="appearance-none w-4 h-4 border border-gray-400 rounded-sm checked:bg-c2 checked:border-purple-600 checked:before:content-['✓'] flex items-center text-white mr-1"
                                    type="radio"
                                    name="categoryFilterDesktop"
                                    id={`desktop-${a}`}
                                    value={a}
                                    checked={filter === a}
                                    onChange={a => setFilter(a.target.value)}/>
                                    {a}
                                </p>
                                )}
                            </div>
                        ))}
                    </aside>
                    {/* radios mobile */}
                    <aside className={`transition-all md:hidden w-full absolute bg-b1 h-full ${open ? `` : `opacity-0 `} z-[10]`}>
                        <div className={`${open ? `translate-x-1 scale-x-100` : `scale-x-95 opacity-0 `} left-0 fixed flex-4 bg-s7 p-4 w-[308px] h-[calc(100vh-80px)] top-[80px] transition-all z-10`}>
                            <h3>Filtrar por</h3>
                            <hr />
                            {arrayFiltroProdutos.map((item) => (
                            <div>
                                <h2 className="font-bold my-1">{item.title}</h2>
                                {item.radios.map(a => 
                                <p className="flex items-center">
                                    <input 
                                    className="appearance-none w-4 h-4 border border-gray-400 rounded-sm checked:bg-c2 checked:border-purple-600 checked:before:content-['✓'] flex items-center text-white mr-1"
                                    type="radio"
                                    name="categoryFilter"
                                    id={a}
                                    value={a}
                                    checked={filter === a}
                                    onChange={a => setFilter(a.target.value)}/>
                                    {a}
                                </p>
                                )}
                            </div>
                        ))}
                        </div>
                    </aside>
                    <div className="flex-8 flex flex-wrap gap-2 px-2 justify-around">
                      {arrayCardsEmAlta
                        .filter((item) => {
                            // Se o filtro for "Todos" ou estiver vazio, retorna true para todos os itens
                            if (filter === "Todos" || filter === "") return true;
                            // Caso contrário, compara com a categoria do item
                            return item.type === filter;
                        })
                        .map((item) => (
                            <CardProdutosEmAlta 
                            key={item.title}
                            {...item} 
                            />
                        ))
                        }
                    </div>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default ProductListingPage;