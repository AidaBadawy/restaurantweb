import Productbox from "./Productbox"
import productimage1 from "../images/s1.png"
import productimage2 from "../images/s2.png"


const Products = () => {
    return (
        <div id='products'>
            <h1>CHOOSE & ENJOY</h1>
            <p>Pariatur occaecat occaecat quis ad qui sunt officia ex duis dolore.</p>
            <div className='a-container'>
                <Productbox image={productimage1} title='Chicken Burger' />
                <Productbox image={productimage2} title='Beef Burger' />
                <Productbox image={productimage1} title='Cheese Burger' />


            </div>
            
        </div>
    )
}

export default Products
