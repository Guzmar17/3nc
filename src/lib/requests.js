import { collection, getDocs, getDoc, doc } from 'firebase/firestore';
import { db } from '../firebase.js';

export const fetchProducts = async () => {
  const querySnapshot = await getDocs(collection(db, 'products'));
  const products = querySnapshot.docs.map(async (document) => { // Cambia 'doc' a 'document'
    var productData = document.data();
    const productId = document.id;

    if (productData.category) {
      const categoryDocRef = doc(db, 'category', productData.category);
      const categoryDocSnapshot = await getDoc(categoryDocRef);
      if (categoryDocSnapshot.exists()) {
         productData = {
          ...productData,
          categoryData: categoryDocSnapshot.data(),
        };    
      }
    }
      if (productData.ingredients && Array.isArray(productData.ingredients)) {
        // Itera a través de cada objeto en el array "ingredients"
        const ingredientPromises = productData.ingredients.map(async (ingredientObj) => {
          if (ingredientObj.id_ingredient) {
            // Consulta el documento correspondiente del ingrediente
            const ingredientDocRef = doc(db, 'ingredients', ingredientObj.id_ingredient);
            const ingredientDocSnapshot = await getDoc(ingredientDocRef);
  
            if (ingredientDocSnapshot.exists()) {
              // Combina los datos del producto con los detalles del ingrediente
              return {
                ...ingredientObj,
                ingredientData: ingredientDocSnapshot.data(),
              };
            }
          }
          return ingredientObj;
        });
        // Espera a que se resuelvan todas las promesas de consulta de ingredientes
        const resolvedIngredients = await Promise.all(ingredientPromises);
  
        // Combina los ingredientes resueltos con los datos del producto
        return { ...productData, id: productId, ingredients: resolvedIngredients };
      }
    return { ...productData, id: productId };
  });

  const resolvedProducts = await Promise.all(products);

  return(resolvedProducts);
};
