const ProductViewPage = () => {
    const meusPerfils = [
        {Perfil: "Meus Pedidos", Link: ""},
        {Perfil: "Minhas Informações", Link: ""},
        {Perfil: "Metodos de Pagemento", Link: ""}
    ]
    return ( 
        <>
         <section className="flex m-auto p-4 max-w-[1440px]">
                <section className="w-[334px]">
                    {meusPerfils.map((perfil) => (
                        <div className="flex flex-col gap-2">
                            <h2>{perfil.Perfil}</h2>
                            <hr />
                        </div>
                    ))}
                </section>
                <section>
                    <div>
                        <h2>Meus Pedidos</h2>
                        <h2>STATUS</h2>
                    </div>
                </section>
            </section>
        </>
     );
}
 
export default ProductViewPage;