import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

import { DeleteOutline } from '@mui/icons-material';

import { productRows } from '../data/dataProduct';

export default function ProductsList() {

  const [data, setData] = useState(productRows);
    const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id));
    };
    const columns = [
      { field: 'id', headerName: 'ID', width: 90 },
      {
        field: 'product',
        headerName: 'Produit',
        width: 200,
        renderCell: (params) => {
          return (
            <div className="productlistProduct">
              <img
                src={params.row.img}
                alt="product-pic"
                className="productListImage"
              />
              {params.row.name}
            </div>
          );
        },
      },
      { field: 'stock', headerName: 'Stock', width: 200 },
      {
        field: 'price',
        headerName: 'Prix',
        width: 130,
      },
      { field: 'status', headerName: 'Statut', width: 130 },
      {
        field: 'action',
        headerName: 'Action',
        width: 150,
        renderCell: (params) => {
          return (
            <>
              <Link to={`/product/${params.row.id}`}>
                <button className="productListEdit">Editer </button>
              </Link>
              <DeleteOutline
                className="productListDelete"
                onClick={() => handleDelete(params.row.id)}
              />
            </>
          );
        },
      },
    ];
  return (
    <div className="ProductsList">
      <h1 className="productTitle">Produit</h1>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
