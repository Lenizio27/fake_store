import { MeusPedidos, MinhasInformacoes, MetodosDePagamento } from "./Configuration";
const ProductViewPage = () => {
    const meusPerfils = [
        {Perfil: "Meus Pedidos", Link: ""},
        {Perfil: "Minhas Informações", Link: ""},
        {Perfil: "Metodos de Pagemento", Link: ""}
    ]
    const arrayLinks = [
        {
            route: "MeusPedidos",
            title: "Meus Pedidos"
        },
        {
            route: "MinhasInformacoes",
            title: "Minhas Informações"
        },
        {
            route: "MetodosDePagamento",
            title: "Metodos de Pagamento"
        },
    ]
    return ( 
        <>
         <section className="flex m-auto p-4 max-w-[1440px]">
                <section className="w-[334px]">
                </section>
                <section>
                    {arrayLinks.map((item) => (
                            <p>{item.title}</p>
                    ))}
                </section>
            </section>
        </>
     );
}
 
export default ProductViewPage;