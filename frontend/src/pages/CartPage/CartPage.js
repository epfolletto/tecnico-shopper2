import React, { useEffect, useState } from "react";
import * as s from './styled-CartPage';
import axios from 'axios';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { BASE_URL } from '../../constants/BASE_URL';
import img_trash from './../../assets/images/img_trash.png';

export default function CartPage() {
  const [listCartPrint, setListCartPrint] = useState();
  const [total, setTotal] = useState();
  const [cartDB, setCartDB] = useState([]);
  const [edit, setEdit] = useState(false);
  const [buyerName, setBuyerName] = useState();
  const [deliveryDate, setDeliveryDate] = useState();

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
  useEffect(() => {
    getCart()
  }, [])

  const deleteProductCart = async (id) => {
    await axios
      .delete(`${BASE_URL}/cart/delete/${id}`)
      .then(res => {
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

  const updateCart = () => {
    cartDB.forEach(product => {
      axios
        .put(`${BASE_URL}/cart/update`,
          {
            "id": product.id,
            "name": product.name,
            "price": product.price,
            "qty": product.qty,
            "qty_stock": product.qty_stock,
            "totalValue": product.totalValue
          })
        .then(res => { })
        .catch(error => {
          const errorCode = error.response.status;
          if (errorCode >= 400 && errorCode < 500) {
            alert(`Erro ${errorCode}: ${error.response.data.message}!`)
          } else {
            alert(`Erro no servidor, tente novamente mais tarde!`)
          }
        })
    })
  }

  const addPurchase = async () => {
    if (cartDB.length !== 0) {
      await axios
        .post(`${BASE_URL}/purchases/add`,
          {
            "name_user": buyerName,
            "delivery_date": deliveryDate,
            "list_products": cartDB
          })
        .then(res => {
          setBuyerName("")
          setDeliveryDate("")
          getCart();
          alert("Compra salva com sucesso!")
        })
        .catch(error => {
          const errorCode = error.response.status;
          if (errorCode >= 400 && errorCode < 500) {
            alert(`Erro ${errorCode}: ${error.response.data.message}.`)
          } else {
            alert(`Erro no servidor, tente novamente mais tarde!`)
          }
        })
    } else {
      alert("Sua compra não foi salva pois o carrinho está vazio!");
    }
  }

  const changeEdit = () => {
    setEdit(!edit);
  }

  const changeEditFalseAndSaveCart = () => {
    setEdit(false);
    updateCart();
  }

  const onChangeBuyerName = (event) => {
    setBuyerName(event.target.value);
  }

  const onChangeDeliveryDate = (event) => {
    setDeliveryDate(event.target.value);
  }

  const editCart = (event = null) => {
    if (event !== null) {
      const id = Number(event.target.id);
      const insert_qty = Number(event.target.value);

      let newCartDB = cartDB;
      let sum = 0;
      for (let i = 0; i < newCartDB.length; i++) {
        if (newCartDB[i].id === id) {
          newCartDB[i].qty = insert_qty;
        }
        newCartDB[i].totalValue = Number((newCartDB[i].qty * newCartDB[i].price).toFixed(2))
        sum = +((sum + newCartDB[i].totalValue).toFixed(2));
      }
      setCartDB(newCartDB)
      setTotal(sum);
    } else {
      let newCartDB = cartDB;
      let sum = 0;
      for (let i = 0; i < newCartDB.length; i++) {
        newCartDB[i].totalValue = Number((newCartDB[i].qty * newCartDB[i].price).toFixed(2))
        sum = +((sum + newCartDB[i].totalValue).toFixed(2));
      }
      setCartDB(newCartDB)
      setTotal(sum);
    }
  }
  useEffect(() => {
    editCart()
  }, [cartDB])

  const listCart = () => {
    const listProducts = cartDB && cartDB.map(product => {
      return (
        <s.ProductInfo key={product.id}>
          <s.ProductName> {product.name} </s.ProductName>
          <s.ProductPrice> {product.price} </s.ProductPrice>
          <s.ProductQtt>
            <s.Input disabled={edit ? false : true} id={product.id} onChange={editCart} value={product.qty} />
          </s.ProductQtt>
          <s.ProductTotalValue> {product.totalValue} </s.ProductTotalValue>
          <s.ProductTrash>
            <s.ImgTrash onClick={() => deleteProductCart(product.id)} src={img_trash} />
          </s.ProductTrash>
        </s.ProductInfo>
      )
    })
    setListCartPrint(listProducts);
  }
  useEffect(() => {
    listCart()
  }, [cartDB, edit, total])

  return (
    <s.Grid>
      <s.LineHeader>
        <Header />
      </s.LineHeader>

      <s.Main>
        <s.CenterBox>
          <s.BoxListTop>
            <s.Title><h1>Lista de produtos</h1></s.Title>
            {
              listCartPrint && listCartPrint.length > 0 ?
                <>
                  <s.ProductInfo2>
                    <s.ProductName2> Produto </s.ProductName2>
                    <s.ProductPrice2> Valor unitário </s.ProductPrice2>
                    <s.ProductQty2> Qtd </s.ProductQty2>
                    <s.ProductTotalValue2> Valor total </s.ProductTotalValue2>
                    <s.ProductTrash2 />
                  </s.ProductInfo2>
                  <s.ProductsInCart>
                    {listCartPrint}
                  </s.ProductsInCart>
                  <s.ProductTotal> Total: R$ {total} </s.ProductTotal>
                </>
                :
                <s.EmptyCart><h2>O carrinho está vazio!</h2></s.EmptyCart>
            }
          </s.BoxListTop>
          <s.BoxListDown>
            <s.Buttons>
              <s.ButtonCancel disabled={edit ? true : false} onClick={changeEdit}>Editar carrinho</s.ButtonCancel>
              <s.ButtonSave disabled={edit ? false : true} onClick={changeEditFalseAndSaveCart}>Salvar carrinho</s.ButtonSave>
            </s.Buttons>
            <s.BuyerName
              value={buyerName}
              onChange={onChangeBuyerName}
              placeholder="Digite seu nome"
              type={"text"}
            />
            <s.DeliveryDate
              value={deliveryDate}
              onChange={onChangeDeliveryDate}
              placeholder="data"
              type={"date"}
              title={"Não podem ser escolhidas datas no passado"}
            />
            <s.ButtonSaveBuy onClick={addPurchase}>Salvar compra</s.ButtonSaveBuy>

          </s.BoxListDown>
        </s.CenterBox>
      </s.Main>

      <s.LineFooter>
        <Footer />
      </s.LineFooter>
    </s.Grid>
  )
}