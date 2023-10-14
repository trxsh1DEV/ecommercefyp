import mongoose from 'mongoose';

class ProductModel {
  constructor() {
    this.ProductSchema = new mongoose.Schema({
      code: { type: String, required: true },
      title: { type: String, required: true },
      description: { type: String, required: true },
      srcImg: { type: String, required: true },
      categories: { type: Array, required: true, default: '.all' },
      color: { type: String },
      price: { type: Number, required: true },

    }, { timestamps: true });

    this.ProductModel = mongoose.model('Product', this.ProductSchema);
  }
}

export default new ProductModel().ProductModel;
