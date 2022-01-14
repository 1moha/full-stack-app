import './Product.css';
import {Link} from 'react-router-dom';

const Product = () => {
    return (
        <div className="product">
            <div className="product__card">
                <div>
                    <div className="product__img">
                        <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="product name"/>
                    </div>
                </div>

                <div className="product__info">
                    <p className="info__name">Product 1</p>
                    <p className="info__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, 
                    molestiae
                    </p>

                    <p className="info__price">$299.99</p>
                    <Link to={`/product/${1111}`} className="info__button">
                        View
                    </Link>
                </div>
            </div>
            
        </div>
    )
};

export default Product;