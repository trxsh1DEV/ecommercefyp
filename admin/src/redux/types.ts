export interface Product {
  _id: string;
  title: string;
  desc: string;
  img: string;
  categories: string[];
  size: string[];
  color: string[];
  price: number;
  inStock: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ProductState {
  products: Product[];
  _id: string;
  // Outras propriedades do estado, se houverem
}

export interface RootState {
  product: ProductState;
  // user: UserState;
  // Outros estados, se houverem
}
