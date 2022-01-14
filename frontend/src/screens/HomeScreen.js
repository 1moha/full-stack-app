import './HomeScreen.css';


// Components
import Product from '../components/Product';
import Hero from '../components/Hero';

const HomeScreen = () => {


    return <div className="back">
            <div className="homescreen">
                <Hero />
                <h2 className="homescreen__title">Latest Products</h2>

                <div className="homescreen__products">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>

            </div>

            {/* Watermark */}
            <div className="homescreen__watermark">Products</div>

            {/* SVG and Images */}
            <div>
                <svg id="img1" width="360" height="367" viewBox="0 0 360 367" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <rect y="-14" width="360" height="381" fill="url(#pattern0)"/>
                    <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0" transform="translate(0 -0.083545) scale(0.000433839)"/>
                    </pattern>
                    </defs>
                </svg>
            </div>

        </div>

}

export default HomeScreen