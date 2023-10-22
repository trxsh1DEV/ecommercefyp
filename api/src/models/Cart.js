import mongoose from 'mongoose';

class CartModel {
  constructor() {
    this.CartSchema = new mongoose.Schema(
      {
        userId: { type: String, required: true },
        products: [
          {
            productId: {
              type: String,
            },
            quantity: {
              type: Number,
              default: 1,
            },
          },
        ],
      },
      { timestamps: true },
    );

    this.CartModel = mongoose.model('Cart', this.CartSchema);
  }
}

export default new CartModel().CartModel;
