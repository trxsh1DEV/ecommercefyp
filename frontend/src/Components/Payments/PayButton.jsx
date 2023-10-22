// import { UseSelector } from 'react-redux/es/hooks/useSelector';
// import { url } from '../../utils/requestMethods';
import P from 'prop-types';
import { userRequest } from '../../utils/requestMethods';

const PayButton = ({ cartItens }) => {
  const handleCheckout = async () => {
    console.log(cartItens);

    userRequest
      .post(`create-checkout-session`, cartItens)
      .then((response) => {
        if (response.data.url) {
          window.location.href = response.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <button onClick={() => handleCheckout()}>Check Out</button>
    </>
  );
};

PayButton.propTypes = {
  cartItens: P.any,
};

export default PayButton;
