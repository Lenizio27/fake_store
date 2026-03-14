import Paths from './paths/paths'
import { useEffect, useState } from 'react';
function App() {

  const [cart, setCart] = useState([]);
  useEffect(() => {
    // Função para buscar o carrinho que está guardado lá no servidor
    const buscarCarrinhoSalvo = async () => {
        try {
            const response = await fetch('http://localhost:3000/cart/lenizio');
            const dados = await response.json();
            
            // Se o servidor devolveu algo, colocamos no nosso estado do React
            if (dados) {
                setCart(dados); 
            }
        } catch (error) {
            console.error("Erro ao recuperar carrinho:", error);
        }
    };

    buscarCarrinhoSalvo();
}, []); // O array vazio [] garante que isso só rode UMA VEZ ao abrir o site
  return (
    <>
      <Paths/>
    </>
  )
}

export default App
