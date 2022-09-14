import React from 'react'
import { Link } from 'react-router-dom';
import Charts from '../components/Charts';
import ImageProduit from '../assets/images/defaultProduit.jpg';


import { productData } from '../data/dataAnalyticProduct';
import { Publish } from '@mui/icons-material';


export default function ProductDetail() {
  return (
    <div className="ProductDetail">
      <div className="ProductDetailTitleContainer">
        <h1 className="productTitle">Detail Produit</h1>
        <Link to={'/newProduct'}>
          <button className="productAddButton">Crée</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Charts
            data={productData}
            title={productData[0].name}
            grid
            dataKey={'Vente Produits'}
          />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src={ImageProduit}
              alt="pic-produit"
              className="productInfoImage"
            />
            <span className="productName">Nom Produit</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id :</span>
              <span className="productInfoValue">5674</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Ventes :</span>
              <span className="productInfoValue">674</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Actif :</span>
              <span className="productInfoValue">Oui</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Stock :</span>
              <span className="productInfoValue">oui</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label htmlFor="">Nom Produit</label>
            <input type="text" placeholder="Nom produit" />
            <label htmlFor="">En Stock</label>
            <select name="instock" id="instock">
              <option value={'oui'}>Oui</option>
              <option value={'non'}>Non</option>
            </select>
            <label htmlFor="">Actif</label>
            <select name="active" id="active">
              <option value={'oui'}>Oui</option>
              <option value={'non'}>Non</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={ImageProduit} alt="pic-product" className='productUploadImage'/>
              <label for="file">
                <Publish className='productIcon'/>
              </label>
              <input type={'file'} id='file' style={{display:'none'}}/>
            </div>
            <button className="productButton">Mis a Jour</button>
          </div>
        </form>
      </div>
    </div>
  );
}
