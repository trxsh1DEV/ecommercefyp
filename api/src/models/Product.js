import mongoose from 'mongoose';

class ProductModel {
  constructor() {
    this.ProductSchema = new mongoose.Schema({
      code: { type: String, required: true },
      title: {
        type: String,
        required: true,
        validate: {
          validator: (value) => value.length > 4,
          message: 'O titulo deve ser uma string e conter mais de 4 letras',
        },
      },
      description: { type: String, required: true },
      srcImg: { type: String, required: true },
      categories: { type: Array, required: true, default: '.all' },
      color: { type: String, default: 'padrão' },
      price: { type: Number, required: true, default: 0.00 },

    }, { timestamps: true });

    this.ProductModel = mongoose.model('Product', this.ProductSchema);
  }
}

export default new ProductModel().ProductModel;
