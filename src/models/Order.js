import mongoose from 'mongoose';

class OrderModel {
  constructor() {
    this.OrderSchema = new mongoose.Schema({
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
      amount: { type: Number, required: true },
      address: { type: Object, required: true },
      status: { type: String, status: 'pending' },
    }, { timestamps: true });

    this.OrderModel = mongoose.model('Order', this.OrderSchema);
  }
}

export default new OrderModel().OrderModel;
