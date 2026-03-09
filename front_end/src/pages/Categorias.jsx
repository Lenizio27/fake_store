import { Sections } from "../components/Section";

const Categorias = () => {
        return(
        <>
        <section className="max-w-[1440px] m-auto">
                <section className="flex">
                        <div className="w-full flex items-center justify-center bg-s7">
                                <p className="pi pi-facebook text-[200px]"></p>
                        </div>
                        <div className="w-[500px]">
                                <h2>Title</h2>
                                <p>Categoria</p>
                                <p>Avaliação</p>
                                <p>Preço</p>
                                <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci corrupti nostrum reiciendis praesentium sapiente et laborum fuga repellendus obcaecati, officia, exercitationem quisquam dolore aperiam dignissimos, voluptatibus id impedit assumenda nisi!
                                </p>
                                <p>tamanho</p>
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