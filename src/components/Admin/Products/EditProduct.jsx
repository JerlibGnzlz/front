import React from 'react'
import "./EditProduct.css"

export default function EditProduct() {
    return (
        <div className='Edit'>
        <div className='.EditContainer'>
            <h1 className='EdiTitle'>Edit Product</h1>
             {/* <button className='EditButton'>Create</button> */}
        </div>
        <div className='container'>
            <div className='show'></div>
            <div className='showTop'></div>
            <img src=   "https://m.media-amazon.com/images/I/51inY39-t8L._AC_UY535_.jpg" alt="product" className='showImg'/>
            <div className='showTitle'>
                <span className='showName'>modern boots for women</span>
                <span className='showDescription'>perfect boots with a unique design</span>


            </div>
            <div className='showBottom'></div>

            <div className='update'></div>

        </div>

            
        </div>
    )
}
