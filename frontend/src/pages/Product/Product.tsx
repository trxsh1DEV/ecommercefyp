import { LocationOn, ExpandMoreSharp } from '@mui/icons-material';
import * as Styled from './styles';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import { Announcement } from '../../Components/Announcement/Announcement';
import { useLocation, NavLink } from 'react-router-dom';
import React, { useCallback, useEffect, useState } from 'react';
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
  const [product, setProduct] = useState<any>({});
  const [showModal, setShowModal] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'all',
    criteriaMode: 'all',
    resolver: zodResolver(CepSchema),
    defaultValues: {
      cep: '',
    },
  });

  const zipCode = watch('cep');

  const handleFetchAddress = useCallback(async (zipCode: string) => {
    console.log(zipCode);
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
    dispatch(addProduct({ ...product }));
  };

  function onSubmit(data: FormData) {
    console.log(data);
  }

  return (
    <Styled.Container>
      <Navbar />
      <Announcement />
      <Styled.Wrapper>
        <Styled.ImgContainer>
          <Styled.Image src={product.image} />
        </Styled.ImgContainer>
        <Styled.InfoContainer>
          <Styled.Title>{product.title}</Styled.Title>
          <Styled.Brand>
            Fabricante: SZMZ
            <Styled.StyledRating name={'ratingProduct'} readOnly />
          </Styled.Brand>
          <Styled.Brand>
            Disponível em estoque <b>Veja produtos similares</b>
          </Styled.Brand>
          <Styled.PriceFull>R$ {product.price * 1.3}</Styled.PriceFull>
          <Styled.Price>
            R$ {product.price} <span>À vista no pix</span>
          </Styled.Price>
          <Styled.SpanCustom>
            Mais detalhes sobre outras formas de pagamento
          </Styled.SpanCustom>
          <Styled.AddContainer>
            <Styled.Button onClick={handleClick}>COMPRAR AGORA</Styled.Button>
            <Styled.Button onClick={handleClick}>ADD TO CART</Styled.Button>
          </Styled.AddContainer>

          <Styled.FreteCalculate onClick={() => setShowModal(true)}>
            <LocationOn fontSize="large" />
            Calcular frete e prazo
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
                  // autoFocus={true}
                />
                {errors.cep?.message && <p>{errors.cep?.message}</p>}

                {/* <Styled.Button type="submit">Submit</Styled.Button> */}
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
      <Footer />
    </Styled.Container>
  );
};

export default Product;
