import React from 'react';
import './product.css';
import { LineChart, Line, XAxis, Tooltip,  ResponsiveContainer } from 'recharts';
import { Link } from 'react-router-dom';
import Image21 from '../../components/Img/Image21.jpg'
import { Publish } from '@mui/icons-material';
/*import Chart from '../../components/chart/Chart';*/

const productData = [
  {
    name: 'Jan',
    Sales: 4000,
  },
  {
    name: 'Feb',
    Sales: 2000,
  },
  {
    name: 'March',
    Sales: 5000,
  },
];

export default function Product() {
  return (
    <div className='product'>
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to='/newproduct'>
          <button className="productAddButton">Create</button>
        </Link> 
      </div>
      <div className="productTop">
        <div className="productTopLeft">
        <ResponsiveContainer width="100%" aspect={4 / 1} title='Sales Performance'>
            <LineChart data={productData}  > 
             <XAxis dataKey="name" stroke='#5550bd' /> 
              <Line type ='monotone'  dataKey="Sales"  stroke='#5550bd' />
              <Tooltip />
            </LineChart>
             </ResponsiveContainer>
        </div>
        <div className="productTopRight">
            <div className="productInfoTop">
                <img src= {Image21} alt="Airpods" className='productInfoImage' />
                <span className="productName">Apple Airpods</span>
            </div>
            <div className="productInfoBottom">
                <div className="productInfoItem">
                    <span className="productInfoKey">Id:</span>
                    <span className="productInfoValue">123</span>
                </div>

                <div className="productInfoItem">
                    <span className="productInfoKey">Sales:</span>
                    <span className="productInfoValue">4223</span>
                </div>

                <div className="productInfoItem">
                    <span className="productInfoKey">Active:</span>
                    <span className="productInfoValue">yes</span>
                </div>

                <div className="productInfoItem">
                    <span className="productInfoKey">In Stock:</span>
                    <span className="productInfoValue">no</span>
                </div>

            </div>
        </div>
      </div>
      <div className="productBottom">
        <form  className="productForm">
            <div className="productFormLeft">
                <label >Product Name</label>
                <input type="text" placeholder='Airpods' />
                <label >In Stock</label>
                <select name="inStock" id="inStock">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <label >Active</label>
                <select name="active" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div className="productFormRight">
                <div className="productUpload">
                    <img src={Image21} alt="" className='productUploadImg' />
                    <label for="file">
                       <Publish /> 
                    </label>
                    <input type="file" name="" id="file" style={{display:'none'}} />
                </div>
                <button className="productButton">Update</button>
            </div>
        </form>
      </div>
    </div>
  );
}
