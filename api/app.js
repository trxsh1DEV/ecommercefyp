import express from 'express';
import userRoutes from './src/routes/user';
import authRoutes from './src/routes/auth';
import tokenRoutes from './src/routes/token';
import productRoutes from './src/routes/product';
import cartRoutes from './src/routes/cart';
import orderRoutes from './src/routes/order';
import stripe from './src/routes/stripe';
// import customer from './src/routes/customer';
import cors from 'cors';
import delay from 'express-delay';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(delay(3000));
  }

  routes() {
    this.app.use('/api/users/', userRoutes);
    // this.app.use('/api/customer/', customer);
    this.app.use('/api/auth/', authRoutes);
    this.app.use('/api/tokens/', tokenRoutes);
    this.app.use('/api/products/', productRoutes);
    this.app.use('/api/carts/', cartRoutes);
    this.app.use('/api/orders/', orderRoutes);
    this.app.use('/api/create-checkout-session', stripe);
  }
}

export default new App().app;
