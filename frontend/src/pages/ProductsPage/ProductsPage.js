import React, { useEffect, useState } from "react";
import * as s from './styled-ProductsPage';
import axios from 'axios';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Card from '../../components/card-product/CardProduct';
import { BASE_URL } from '../../constants/BASE_URL';
import Pagination from '../../components/pagination/Pagination';

export default function FeedPage() {
  const [products, setProducts] = useState([])
  const [cartDB, setCartDB] = useState([])

  const [numProdPgn, setNumProdPgn] = useState(0);
  const [searchName, setSearchName] = useState("");
  const [minimunPrice, setMinimunPrice] = useState();
  const [maximunPrice, setMaximunPrice] = useState();
  const [ordenation, setOrdenation] = useState();
  const [actualPage, setActualPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [numTotalProducts, setNumTotalProducts] = useState();
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  const getAllProducts = (clique = false) => {
    clique && setActualPage(1);
    axios
      .post(`${BASE_URL}/products`,
        {
          "numProdPgn": numProdPgn,
          "searchName": searchName,
          "minimunPrice": minimunPrice,
          "maximunPrice": maximunPrice,
          "ordenation": ordenation,
          "page": actualPage
        })
      .then(res => {
        setProducts(res.data.products);
        onChangeNumTotalProducts(res.data.products.length);
      })
      .catch(error => {
        const errorCode = error.response.status;
        if (errorCode >= 400 && errorCode < 500) {
          alert(`Erro ${errorCode}: ${error.response.data.message}!`)
        } else {
          alert(`Erro no servidor, tente novamente mais tarde!`)
        }
      })
  }
  useEffect(() => {
    getAllProducts()
    getCart()
  }, [actualPage])

  const addProductCart = (id, name, price, qty_stock) => {
    axios
      .post(`${BASE_URL}/cart/add`,
        {
          "id": id,
          "name": name,
          "price": price,
          "qty_stock": qty_stock,
          "qty": 1
        })
      .then(res => {
        getAllProducts();
        getCart();
      })
      .catch(error => {
        const errorCode = error.response.status;
        if (errorCode >= 400 && errorCode < 500) {
          alert(`Erro ${errorCode}: ${error.response.data.message}!`)
        } else {
          alert(`Erro no servidor, tente novamente mais tarde!`)
        }
      })
  }

  const getCart = async () => {
    await axios
      .get(`${BASE_URL}/cart/all`)
      .then(res => {
        setCartDB(res.data.cart)
      })
      .catch(error => {
        const errorCode = error.response.status;
        if (errorCode >= 400 && errorCode < 500) {
          alert(`Erro ${errorCode}: ${error.response.data.message}!`)
        } else {
          alert(`Erro no servidor, tente novamente mais tarde!`)
        }
      })
  }

  const changeActualPage = (page) => {
    setActualPage(page);
  }

  const onChangePages = () => {
    let pages = numProdPgn === 0 ? 1 : Math.ceil(numTotalProducts / numProdPgn);
    setPages(pages)
  }

  const onChangeNumTotalProducts = (numProductos) => {
    if (isFirstLoad) {
      setNumTotalProducts(numProductos)
      setIsFirstLoad(false)
    }
    onChangePages()
  }

  const ids = cartDB.map(item => item.id);

  const updateNumProdPgn = (event) => {
    setNumProdPgn(Number(event.target.value));
  }

  const onMinimunPrice = (event) => {
    setMinimunPrice(Number(event.target.value));
  }

  const onMaximunPrice = (event) => {
    setMaximunPrice(Number(event.target.value));
  }

  const onSearchName = (event) => {
    setSearchName(event.target.value);
  }

  const updateOrdenation = (event) => {
    setOrdenation(event.target.value)
  }

  return (
    <s.Grid>
      <s.LineHeader>
        <Header />
      </s.LineHeader>

      <s.Main>
        <s.MainLeft>

          <s.Filter><h1>Filtros</h1></s.Filter>

          <s.NumProdPgn
            value={numProdPgn}
            onChange={updateNumProdPgn}
          >
            <option value="" disabled selected>Num Prod Pgn:</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
            <option value={0}>Todos</option>
          </s.NumProdPgn>

          <s.Search
            type="text"
            onChange={onSearchName}
            value={searchName}
            placeholder="Buscar por..."
          />

          <s.OrderBy
            value={ordenation}
            onChange={updateOrdenation}
          >
            <option value="" disabled selected>Ordenar por:</option>
            <option value="name">Nome produto</option>
            <option value="price-ASC">Preço (cresc)</option>
            <option value="price-DESC" >Preço (decres)</option>
            <option value="qty_stock-ASC">Estoque (cresc)</option>
            <option value="qty_stock-DESC">Estoque (decres)</option>
          </s.OrderBy>

          <s.MinPrice
            type="number"
            onChange={onMinimunPrice}
            value={minimunPrice}
            placeholder="Preço mín. (R$)"
          />
          <s.MaxPrice
            type="number"
            onChange={onMaximunPrice}
            value={maximunPrice}
            placeholder="Preço máx. (R$)"
          />

          <s.ButtonApplyFilter onClick={() => getAllProducts(true)}>Aplicar</s.ButtonApplyFilter>

        </s.MainLeft>
        <s.MainRight>
          <s.Box>
            <s.ListProducts>
              {
                products && products
                  .map((product, index) => {
                    const found = ids.includes(product.id)
                    return (
                      <Card key={index}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        qty_stock={product.qty_stock}
                        found={found}
                        addProductCart={addProductCart}
                      />
                    )
                  })
              }
            </s.ListProducts>
            <s.LinePagination>
              <Pagination
                actualPage={actualPage}
                changeActualPage={changeActualPage}
                pages={pages}
              />
            </s.LinePagination>
          </s.Box>
        </s.MainRight>

      </s.Main>

      <s.LineFooter>
        <Footer />
      </s.LineFooter>

    </s.Grid>
  )
}