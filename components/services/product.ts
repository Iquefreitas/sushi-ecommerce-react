
import { Product } from "@/components/types/product";
import { products } from "@/components/data/products";

export const getAllProducts = async (): Promise<Product[]> => {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            resolve(products);
        }, 2000);
    });

}