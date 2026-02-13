const BASE_URL = 'https://fakestoreapi.com';

export const getProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    if (!response.ok) throw new Error('Erro ao buscar dados');
    return await response.json();
  } catch (error) {
    console.error("Erro na API:", error);
    return [];
  }
};