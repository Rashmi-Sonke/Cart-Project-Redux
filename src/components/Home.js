import React from 'react'

function Home(props) {
    console.log("props",props)
    return (
        <div>
           
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://images.macrumors.com/t/1Qx7Upnlkr63vKmeNRIWm3JH3wI=/800x0/smart/https://images.macrumors.com/article-new/2017/09/iphonexdesign.jpg?lossy" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={
                        ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                        }>
                        Add To Cart</button>
                
                
                    <button 
                    className="remove-cart-btn"
                    onClick={
                        ()=>{props.removeFromCartHandler()}
                        }>
                        Remove from Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home