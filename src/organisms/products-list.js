import { Button } from "../shadcn/ui/button";
import { fetchProducts } from "../lib/requests";
import { useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  fetchProducts()
    .then((fetchedProducts) => setProducts(fetchedProducts))
    .catch((error) => console.error("Error fetching products:", error));
  console.log(products);
  return (
    <section className="w-full py-12">
      <div className="container grid gap-6 md:gap-8 px-4 md:px-6 max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <div className="grid gap-1">
            <h1 className="text-3xl font-bold tracking-tight">
              Hot Dogs & Sausages
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Delicious options for your next cookout.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products &&
            products.map((product) => (
              <div key={product.id} className="flex flex-col gap-2">
                <img
                  alt="Hot Dog 3"
                  className="rounded-lg object-cover"
                  height={500}
                  src={
                    product.images != null
                      ? product.images[0]
                      : "https://archive.org/download/placeholder-image/placeholder-image.jpg"
                  }
                  style={{
                    aspectRatio: "500/500",
                    objectFit: "cover",
                  }}
                  width={500}
                />
                <div className="grid gap-1">
                  <h3 className="font-bold tracking-tight">{product.name}</h3>
                  <p className="text-sm">${product.price}</p>
                  <Button>Buy</Button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
