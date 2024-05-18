import create from "zustand";

// Se crea un estado global usando Zustand
const useStore = create((set) => ({
  // Estado inicial para la lista de productos, el estado de carga y posibles errores
  products: [],
  loading: false,
  error: null,

  // Función asincrónica para obtener los productos desde la API
  fetchProducts: async () => {
    // Se actualiza el estado para indicar que la carga ha comenzado y se resetea cualquier error previo
    set({ loading: true, error: null });

    try {
      // URL de la API
      let url_api = "https://dummyjson.com/products";

      // Se realiza la solicitud a la API
      const response = await fetch(url_api);

      // Verificación de que la respuesta es exitosa
      if (!response.ok) {
        throw new Error("Error en la petición");
      }

      // Se convierte la respuesta a JSON
      const data = await response.json();

      // Se actualiza el estado con los productos obtenidos y se indica que la carga ha finalizado
      set({ products: data.products, loading: false });
    } catch (error) {
      // En caso de error, se actualiza el estado con el mensaje de error y se indica que la carga ha finalizado
      set({ error: error.message, loading: false });
    }
  },
}));

export default useStore;
