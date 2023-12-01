import mongoose from 'mongoose';
import { isEmail, isLength, isStrongPassword } from 'validator';

class CustomerModel {
  constructor() {
    this.CustomerSchema = new mongoose.Schema(
      {
        avatar: {
          type: String,
          default: 'asd',
        },
        username: {
          type: String,
          required: true,
          validate: {
            validator: (value) => isLength(value, { min: 2, max: 20 }),
            message: 'Campo (usuário) deve ter entre 2 e 50 caracteres',
          },
        },
        email: {
          type: String,
          required: true,
          unique: true,
          validate: {
            validator: (value) => isEmail(value),
            message: 'E-mail inválido',
          },
        },
        password: {
          type: String,
          required: true,
          validate: {
            validator: (value) => isStrongPassword(value),
            message: 'A senha não atende aos requisitos',
          },
        },
        telephone: { type: String, required: false },
        verified: { type: Boolean, default: false, required: false },
      },
      { timestamps: true },
    );

    this.CustomerModel = mongoose.model('Customer', this.CustomerSchema);
  }
}

export default new CustomerModel().CustomerModel;
