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
        image: {
          type: String,
          required: true,
          default:
            'https://firebasestorage.googleapis.com/v0/b/ecommercefyp-c0173.appspot.com/o/products%2Ficons8-carrinho-de-compras-64.png?alt=media&token=9bfc0269-5ddb-49fd-a230-189b26a18766&_gl=1*nlgppv*_ga*MTM2NjI4ODg2Mi4xNjk4NTI0NDA4*_ga_CW55HF8NVT*MTY5OTE4OTQwNC40LjEuMTY5OTE4OTY5My41Mi4wLjA.',
        },
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
