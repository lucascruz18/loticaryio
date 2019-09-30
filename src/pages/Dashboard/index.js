import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button, Image } from 'react-bootstrap';

import api from '../../services/api';

import Header from '../../components/Header';
import Loading from '../../components/Loading';

import { Container, List, ProductList, ModalContent } from './styles';

const defaultImage = 'https://api.adorable.io/avatars/285/abott@adorable.png';

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showProduct, setShowProduct] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.data.map(product => ({
        ...product,
        image: product.files.map(file => file.url),
      }));

      setProducts(data);
      setLoading(false);
    }

    loadProducts();
  }, [products]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = data => {
    setShowProduct(data);
    setShow(true);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Container>
            <header>
              <strong>Produtos</strong>
              <Link to="/">
                <button type="button">Adicionar Produto</button>
              </Link>
            </header>

            <List>
              {products.map(product => (
                <ProductList key={product.id}>
                  <img
                    src={product.image || defaultImage}
                    alt="product_image"
                  />

                  <div>
                    <strong>{product.name}</strong>
                    <Button
                      variant="success"
                      onClick={() => handleShow(product)}
                    >
                      Detalhes
                    </Button>
                  </div>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>{showProduct.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <ModalContent>
                        <Image
                          src={showProduct.image}
                          fluid
                          width="200"
                          height="200"
                        />
                        <span>{showProduct.description}</span>
                      </ModalContent>
                    </Modal.Body>
                  </Modal>
                </ProductList>
              ))}
            </List>
          </Container>
        </>
      )}
    </>
  );
}
