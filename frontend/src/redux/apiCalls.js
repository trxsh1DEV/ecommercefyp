import { loginFailure, loginStart, loginSuccess } from './user';
// import { publicRequest } from '../utils/requestMethods';
import axios from 'axios';

export const login = async (dispatch, user) => {
  console.log('oi');
  dispatch(loginStart());
  console.log('oi2');
  try {
    console.log(user);
    const res = await axios.post('http://localhost:5123/api/auth/login', user);
    // console.log('oi4');
    dispatch(loginSuccess(res.data));
    // console.log('oi5');
  } catch (err) {
    dispatch(loginFailure());
  }
};
