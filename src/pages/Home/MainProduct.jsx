import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {Product} from "@/components";
import {Link} from "react-router-dom";
import {app} from "@/firebase/app";
import {getFirestore, collection, getDocs} from "firebase/firestore";

export function MainProduct() {
  return (
    <StyledProduct>
      <div className="inner">
        <h2>중고거래 인기 매물</h2>
        <div className="productContainer">
          <Product title={"버버리가방"} price={"20,000원"} location={"부산 북구 만덕제2동"} interest={"34"} />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
        <Link to="/">
          <span className="popularProduct">인기매물 더 보기</span>
        </Link>
        <UseProductList />
      </div>
    </StyledProduct>
  );
}

const StyledProduct = styled.div`
  & .inner {
    margin: 65px auto 85px;
    width: 1056px;
  }

  & h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 54px;
    align-items: center;
    text-align: center;
    color: #212529;
  }

  & .productContainer {
    margin-top: 85px;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(4, 1fr);
    gap: 55px;
    justify-items: center;
  }

  & .popularProduct {
    margin-top: 55px;
    display: block;
    text-align: center;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.3px;
    text-decoration-line: underline;
    color: #212529;
  }
`;

function UseProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore(app);
    const productsRef = collection(db, "Products");

    getDocs(productsRef)
      .then((querySnapshot) => {
        const productList = [];
        querySnapshot.forEach((doc) => {
          const product = {id: doc.id, ...doc.data()};
          productList.push(product);
          console.log(productList);
        });
        setProducts(productList);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);

  return (
    <div className="test">
      {products.map((product) => (
        // <img src={product.imgUrl && storage.refFromURL(product.imgUrl).getDownloadURL()} alt={product.title} />
        <Product key={product.id} title={product.title} price={product.price} location={"부산 북구 만덕제2동"} interest={product.interest} />
      ))}
    </div>
  );
}
