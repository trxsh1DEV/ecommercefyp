export interface Product {
  _id: string;
  title: string;
  desc: string;
  img: string;
  categories: string[];
  size: string[];
  color: string[];
  price: number | string;
  inStock: boolean | string;
  createdAt: string;
  updatedAt: string;
}

export interface ProductState {
  products: Product[];
  _id: string;
  // Outras propriedades do estado, se houverem
}
export interface UserState {
  users: Users[];
  _id: string;
  // Outras propriedades do estado, se houverem
}

export interface RootState {
  product: ProductState;
  users: UserState;
  // Outros estados, se houverem
}

export type Users = {
  username: string;
  email: string;
  isAdmin: boolean;
  _id: string;
};
