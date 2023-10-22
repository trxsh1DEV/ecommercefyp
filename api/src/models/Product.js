import mongoose from 'mongoose';

class ProductModel {
  constructor() {
    this.ProductSchema = new mongoose.Schema(
      {
        // code: { type: String, required: true },
        title: {
          type: String,
          required: true,
          validate: {
            validator: (value) => value.length > 4,
            message: 'O titulo deve ser uma string e conter mais de 4 letras',
          },
        },
        desc: { type: String, required: true },
        img: { type: String, required: true },
        categories: { type: Array, required: true, default: '.all' },
        size: { type: Array, default: 'XS' },
        color: { type: Array, default: 'white' },
        price: { type: Number, required: true, default: 0.0 },
        inStock: { type: Boolean, default: true },
      },
      { timestamps: true },
    );

    this.ProductModel = mongoose.model('Product', this.ProductSchema);
  }
}

export default new ProductModel().ProductModel;
