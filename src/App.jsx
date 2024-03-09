import './App.css';
import Carousel_principal from './organisms/banner-principal.js';
import ProductList from './organisms/products-list.js'
import Layout from './organisms/layout.js'

function App() {    
  return (
    <Layout>
      <Carousel_principal/>
      <ProductList/>
    </Layout>
  );
}
export default App;
