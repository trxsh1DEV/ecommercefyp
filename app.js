import express from 'express';
import userRoutes from './src/routes/user';
import authRoutes from './src/routes/auth';
import tokenRoutes from './src/routes/token';
import productRoutes from './src/routes/product';
import cartRoutes from './src/routes/cart';
import orderRoutes from './src/routes/order';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/api/users/', userRoutes);
    this.app.use('/api/auth/', authRoutes);
    this.app.use('/api/tokens/', tokenRoutes);
    this.app.use('/api/products/', productRoutes);
    this.app.use('/api/carts/', cartRoutes);
    this.app.use('/api/orders/', orderRoutes);
  }
}

export default new App().app;
