import React, { useEffect, useState } from "react";
import * as s from './styled-PurchasePage';
import axios from 'axios';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { BASE_URL } from '../../constants/BASE_URL'
import img_trash from './../../assets/images/img_trash.png'
import img_detail from './../../assets/images/img_detail.png'

export default function CartPage() {
  const [listPurchase, setListPurchase] = useState();
  const [purchasesDB, setPurchasesDB] = useState([]);
  const [openDetail, setOpenDetail] = useState(false);
  const [detailPurchase, setDetailPurchase] = useState([]);
  const [listSummary, setListSummary] = useState(false)
  const [idSelect, setIdSelect] = useState()

  const getAllPurchases = async () => {
    await axios
      .get(`${BASE_URL}/purchases/all`)
      .then(res => {
        setPurchasesDB(res.data.purchases)
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
    getAllPurchases()
  }, [])

  const deletePurchase = async (id) => {
    await axios
      .delete(`${BASE_URL}/purchases/delete/${id}`)
      .then(res => {
        getAllPurchases();
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

  const onDetailPurchase = async (id) => {
    await axios
      .get(`${BASE_URL}/purchases/detail/${id}`)
      .then(res => {
        setIdSelect(id)
        setDetailPurchase(res.data.purchases)
        changeOpenDetail(true)
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

  const changeOpenDetail = (input) => {
    setOpenDetail(input);
  }

  const listCart = () => {
    const res = purchasesDB && purchasesDB.map((purchase, index) => {
      return (
        <s.PurchaseInfo status={openDetail} value={purchase.id_purchase} id={idSelect} key={index}>
          <s.PurchaseName> {purchase.name_user} </s.PurchaseName>
          <s.PurchaseDate> {purchase.delivery_date} </s.PurchaseDate>
          <s.PurchaseQtyProd> {purchase.num_products} </s.PurchaseQtyProd>
          <s.PurchaseQtyItens> {purchase.num_itens} </s.PurchaseQtyItens>
          <s.PurchaseTotalValue> {purchase.total.toFixed(2)} </s.PurchaseTotalValue>
          <s.PurchaseDetail>
            <s.ImgDetail onClick={() => onDetailPurchase(purchase.id_purchase)} src={img_detail} />
          </s.PurchaseDetail>
          <s.PurchaseTrash>
            <s.ImgTrash onClick={() => deletePurchase(purchase.id_purchase)} src={img_trash} />
          </s.PurchaseTrash>
        </s.PurchaseInfo>
      )
    })
    setListPurchase(res);
  }
  useEffect(() => {
    listCart()
  }, [purchasesDB, openDetail, detailPurchase])

  const listDetailPurchase = () => {
    const summaryPurchase = detailPurchase && detailPurchase.map(purchase => {
      return (
        <s.SummaryInfo key={purchase.id_purchase}>
          <s.SummaryName> {purchase.name} </s.SummaryName>
          <s.SummaryPrice> {purchase.price} </s.SummaryPrice>
          <s.SummaryQty> {purchase.qty} </s.SummaryQty>
          <s.SummaryTotalValue> {purchase.total.toFixed(2)} </s.SummaryTotalValue>
        </s.SummaryInfo>
      )
    })
    setListSummary(summaryPurchase);
  }
  useEffect(() => {
    listDetailPurchase()
  }, [detailPurchase])

  return (
    <s.Grid>
      <s.LineHeader>
        <Header />
      </s.LineHeader>

      <s.Main>
        <s.LeftBox>
          <h1>Histórico de compras</h1>
          {
            listPurchase && listPurchase.length > 0 ?
              <>
                <s.ProductInfo2>
                  <s.PurchaseName2> Nome </s.PurchaseName2>
                  <s.PurchaseDate2> Data </s.PurchaseDate2>
                  <s.PurchaseQtyProd2> Qtd prod </s.PurchaseQtyProd2>
                  <s.PurchaseQtyItens2> Qtd itens </s.PurchaseQtyItens2>
                  <s.PurchaseTotalValue2> Valor total </s.PurchaseTotalValue2>
                  <s.ProductDetail2 />
                  <s.ProductTrash2 />
                </s.ProductInfo2>
                <s.BoxListSummary>
                  {listPurchase}
                </s.BoxListSummary>
              </>
              :
              <s.EmptyCart><h2>O histórico está vazio!</h2></s.EmptyCart>
          }
        </s.LeftBox>
        {
          openDetail && listPurchase.length > 0 ?
            <s.RightBox>
              <s.RightBoxUp>
                <h1>Detalhes</h1>
                {
                  listSummary && listSummary.length > 0 ?
                    <>
                      <s.SummaryInfo2>
                        <s.SummaryName2> Produto </s.SummaryName2>
                        <s.SummaryPrice2> Preço </s.SummaryPrice2>
                        <s.SummaryQty2> Qtd itens </s.SummaryQty2>
                        <s.SummaryTotalValue2> Valor total </s.SummaryTotalValue2>
                      </s.SummaryInfo2>
                      <s.BoxListSummary>
                        {listSummary}
                      </s.BoxListSummary>
                    </>
                    :
                    <s.EmptyCart><h2>O histórico está vazio!</h2></s.EmptyCart>
                }
              </s.RightBoxUp>
              <s.RightBoxDown>
                <s.ButtonClose onClick={() => changeOpenDetail(false)}>Fechar</s.ButtonClose>
              </s.RightBoxDown>

            </s.RightBox>
            :
            <>
            </>
        }
      </s.Main>

      <s.LineFooter>
        <Footer />
      </s.LineFooter>
    </s.Grid>
  )
}