import { LocationOn, ExpandMoreSharp, CheckCircle } from '@mui/icons-material';
import * as Styled from './styles';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import { useLocation } from 'react-router-dom';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { userRequest } from '../../utils/requestMethods';
import { addProduct } from '../../redux/cart';
import Modal from '../../Components/ModalCustom/Modal';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { zipCodeMask } from '../../utils/regex';
import { InputText } from '../../styles/render-theme';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { comments, images } from './mock';
import { Heading1, Heading2 } from '../../styles/theme';

interface ProductProps {}

interface FormData {
  cep: string;
}

const CepSchema = z.object({
  cep: z.string().min(7, 'CEP Inválido'),
});

const Product: React.FC<ProductProps> = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const quantity = 1;
  const [product, setProduct] = useState<any>({});
  const [showModal, setShowModal] = useState<boolean>(false);
  const mainImageRef = useRef<HTMLImageElement>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onBlur',
    criteriaMode: 'all',
    resolver: zodResolver(CepSchema),
    defaultValues: {
      cep: '',
    },
  });

  const zipCode = watch('cep');

  const handleFetchAddress = useCallback(async (zipCode: string) => {
    const { data } = await axios.get(
      `https://viacep.com.br/ws/${zipCode}/json/`,
    );

    console.log(data);
  }, []);

  useEffect(() => {
    setValue('cep', zipCodeMask(zipCode)); // Formata o CEP e define o valor
    if (zipCode.length !== 9) return; // Verifica se o CEP tem 8 caracteres

    handleFetchAddress(zipCode);
  }, [handleFetchAddress, setValue, zipCode]);

  // console.log(errors);

  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await userRequest(`products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getProduct();
  }, [id]);

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity }));
  };

  function onSubmit(data: FormData) {
    console.log(data);
  }

  const handleImageClick = (imageUrl: string) => {
    if (mainImageRef.current) {
      mainImageRef.current.src = imageUrl;
    }
  };

  const formatDigit = (digit) => {
    return digit < 10 ? '0' + digit : digit;
  };

  return (
    <Styled.Container>
      <Navbar />
      <Styled.Wrapper>
        <Styled.WrapperImages>
          {product.image &&
            images.map((image: string, index: number) => (
              <Styled.containerImages
                key={index}
                onClick={() => handleImageClick(image)}
              >
                <Styled.ImagesMininal src={image}></Styled.ImagesMininal>
              </Styled.containerImages>
            ))}
        </Styled.WrapperImages>
        <Styled.ImgContainer>
          <Styled.Image ref={mainImageRef} src={product.image} />
        </Styled.ImgContainer>
        <Styled.InfoContainer>
          <Styled.Title>{product.title} asdasassdasssssss</Styled.Title>
          <Styled.Brand>
            Fabricante: SZMZ
            <Styled.StyledRating name={'ratingProduct'} readOnly />
          </Styled.Brand>
          <Styled.PromotionalField>
            <Styled.ContentPromotional>
              <Heading1>Promoção Relâmpago</Heading1>

              <Styled.ClockContainer>
                <Styled.Digit>
                  {formatDigit(new Date().getHours())}
                </Styled.Digit>
                <Styled.Digit>
                  {formatDigit(new Date().getMinutes())}
                </Styled.Digit>
                <Styled.Digit>
                  {formatDigit(new Date().getSeconds())}
                </Styled.Digit>
              </Styled.ClockContainer>
              <Heading2>R$ 59,90</Heading2>
            </Styled.ContentPromotional>
          </Styled.PromotionalField>
          <Styled.Brand>
            <Styled.BrandContent>
              Disponível em estoque
              <CheckCircle fontSize="large" color="success" />
            </Styled.BrandContent>
            <b>Produtos similares</b>
          </Styled.Brand>
          <Styled.PriceFull>R$ {product.price * 1.3}</Styled.PriceFull>
          <Styled.Price>
            R$ {product.price}{' '}
            <span>
              À vista no pix (<b>15%</b> off)
            </span>
          </Styled.Price>
          <Styled.SpanCustom>
            <div>
              Em até 2x de <b>R$ {product.price * 1.3}</b> sem juros no cartão
            </div>
            <div style={{ margin: '0.3rem 0 1.5rem 0' }}>
              Ou em 1x no cartão com até <b>10%</b> OFF
            </div>
            <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              Mais detalhes sobre outras formas de pagamento
            </span>
          </Styled.SpanCustom>

          <Styled.AddContainer>
            <Styled.Button onClick={handleClick}>COMPRAR AGORA</Styled.Button>
            <Styled.Button onClick={handleClick}>ADD TO CART</Styled.Button>
          </Styled.AddContainer>
          {/* <Styled.ContainerSale>
            <Styled.SectionSale>
              <Styled.ItemsSale>25%</Styled.ItemsSale>
              <Styled.ItemsSale>17</Styled.ItemsSale>
              <Styled.ItemsSale>3</Styled.ItemsSale>
            </Styled.SectionSale>
          </Styled.ContainerSale> */}
          <Styled.FreteCalculate>
            <Styled.ContentFrete onClick={() => setShowModal(true)}>
              <LocationOn fontSize="large" />
              Calcular frete e prazo
            </Styled.ContentFrete>
          </Styled.FreteCalculate>
        </Styled.InfoContainer>

        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <Styled.ModalContent>
              <Styled.ContainerCEP>
                <p>Não sabe sua localização?</p>
                <Styled.NavLinkCustom
                  target="_blank"
                  to="https://buscacepinter.correios.com.br/app/localidade_logradouro/index.php"
                >
                  Clique aqui
                </Styled.NavLinkCustom>
              </Styled.ContainerCEP>
              <form
                onSubmit={handleSubmit(onSubmit)}
                style={{ marginTop: '2.5rem' }}
              >
                <InputText
                  type="text"
                  {...register('cep')}
                  placeholder="CEP"
                  maxLength={9}
                  autoFocus={true}
                />
                {errors.cep?.message && <p>{errors.cep?.message}</p>}
              </form>
            </Styled.ModalContent>
          </Modal>
        )}
      </Styled.Wrapper>
      {/* <hr /> */}
      <Styled.InfoContainer>
        <Accordion sx={{ marginBottom: '3rem' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreSharp fontSize="large" />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Styled.SectionsProducts>
              Descrição sobre o produto
            </Styled.SectionsProducts>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Voluptate eos cumque
            delectus distinctio est facere at dolor vero corrupti vitae quae
            tempora quidem molestias, amet laborum, magnam pariatur ullam
            commodi?
            {product.desc}
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreSharp fontSize="large" />}
            sx={{ backgroundColor: '', margin: '0' }}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Styled.SectionsProducts>
              Informações Técnicas
            </Styled.SectionsProducts>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Voluptate eos cumque
            delectus distinctio est facere at dolor vero corrupti vitae quae
            tempora quidem molestias, amet laborum, magnam pariatur ullam
            commodi?
            {product.desc}
          </AccordionDetails>
        </Accordion>
      </Styled.InfoContainer>
      <Styled.InfoContainer>
        <Styled.CommentContainer>
          <h2 style={{ textAlign: 'center' }}>Customer Reviews</h2>
          {comments.map((comment, index) => (
            <Styled.Comment key={index}>
              <Styled.UserInfo>{comment.user}</Styled.UserInfo>
              <Styled.Date>Purchased on: {comment.date}</Styled.Date>
              <Styled.RatingComment>
                <Styled.StyledRatingComment
                  name={'ratingProduct'}
                  readOnly
                  value={comment.rating}
                  size="small"
                />
              </Styled.RatingComment>
              <Styled.Description>{comment.description}</Styled.Description>
            </Styled.Comment>
          ))}
        </Styled.CommentContainer>
        <hr />
      </Styled.InfoContainer>
      <Footer />
    </Styled.Container>
  );
};

export default Product;
