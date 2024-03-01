import Carousel from "react-bootstrap/Carousel";
import Product from "./Product";

import "./Home.css";
function Home() {
  return (
    <div className="home bg-gray-200">
      <div className="home_container">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="home_img"
              src="https://m.media-amazon.com/images/I/61HHa0VUuaL._SX3000_.jpg"
              alt=""
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="home_img"
              src="https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg"
              alt=""
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="home_img"
              src="https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg"
              alt=""
            />
            <Carousel.Caption>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="home_img"
              src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg"
              alt=""
            />
            <Carousel.Caption>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="home-row">
          <Product
            title="new year, new supplies"
            img="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2023/img/Consumer_Electronics/XCM_CUTTLE_1555947_2997386_379x304_1X_en_US._SY304_CB594429819_.jpg"
            info="here we have amazing gifts for summer-like paints and also for studies try it out quickly"
            rating={5}
            price={98.0}
          />
          <Product
            title="Deals in PCs"
            img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v1._SY304_CB573698005_.jpg"
            price={120.0}
            rating={4}
            info="the most hunted pc available on best deal with free kits which help u to use comfortablely"
          />
          <Product
            title="Apple ipad"
            img="https://images-na.ssl-images-amazon.com/images/I/31+KEhn35VL._SX160_QL100_AC_SCLZZZZZZZ_.jpg"
            price={229.08}
            rating={3}
            info="Apple iPad (9th Generation): with A13 Bionic chip, 10.2-inch Retina Display, 64GB, Wi-Fi,"
          />
          <Product
            title="Gaming accessories"
            img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg"
            price={110.8}
            rating={5}
            info="here we have most powerfull gaming accessories with max-50mzh power and comfortable with key materials"
          />
        </div>
        <div className="home-row">
          <Product
            title="toys"
            img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg"
          />
          <Product
            title="Amazon gadeget store"
            img="https://m.media-amazon.com/images/I/41aF1Kpc1iL._SY160_.jpg"
          />
          <Product
            title="Upgrade your office furniture"
            img="https://images-na.ssl-images-amazon.com/images/W/MEDIAX_849526-T2/images/G/01/dex/2023/Roar/October/D_CC_Roar_OfficeDepot_1023_1X_Furnitrure_v2._SY304_CB577544739_.jpg"
          />
          <Product
            title="Home décor under $50"
            img="https://images-na.ssl-images-amazon.com/images/W/MEDIAX_849526-T2/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v6._SY304_CB573698005_.jpg"
          />
        </div>
      </div>

      <div className="slider">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="home_img"
              src="https://m.media-amazon.com/images/I/61HHa0VUuaL._SX3000_.jpg"
              alt=""
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="home_img"
              src="https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg"
              alt=""
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="home_img"
              src="https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg"
              alt=""
            />
            <Carousel.Caption>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="home_img"
              src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg"
              alt=""
            />
            <Carousel.Caption>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
