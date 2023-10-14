import mongoose from 'mongoose';
import { isEmail, isLength, isStrongPassword } from 'validator';
import bcryptjs from 'bcryptjs';

class UserModel {
  constructor() {
    this.UserSchema = new mongoose.Schema({
      username: {
        type: String,
        required: true,
        validate: {
          validator: (value) => isLength(value, { min: 2, max: 50 }),
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
      isAdmin: {
        type: Boolean,
        default: false,
      },
    }, { timestamps: true });

    // eslint-disable-next-line
    this.UserSchema.pre('save', async function (next) {
      if (!this.isModified('password')) return next();

      try {
        const salt = await bcryptjs.genSalt(8);
        const hashedPassword = await bcryptjs.hash(this.password, salt);
        this.password = hashedPassword;
        next();
      } catch (err) {
        return next(err);
      }
    });

    this.userModel = mongoose.model('User', this.UserSchema);
  }
}

export default new UserModel().userModel;
