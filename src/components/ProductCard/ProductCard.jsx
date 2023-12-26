import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ProductCard(props) {
  const [productDetail, setProductDetail] = useState(null);

  const productDelete = () => {
    alert("Silmek istediğinizden emin misiniz?");
    axios.delete("https://dummyjson.com/products/" + props.product.id);
    //window.location.reload();
    alert("Silindi");
  };

  return (
    <div className="card">
      <img src={props.product.thumbnail} className="card-img-top" height={200} alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.product.title}</h5>
        <p className="card-text">{props.product.description}</p>
        <Link to={`/product-detail/${props.product.id}`} className="btn btn-primary">
          Details
        </Link>
        &nbsp;
        <button className="btn btn-danger" onClick={productDelete}>
          Sil
        </button>
        {productDetail && (
          <div>
            <h5>Product Details</h5>
            <p>{productDetail.description}</p>
            {/* Diğer ürün detayları*/}
          </div>
        )}
      </div>
    </div>
  );
}
