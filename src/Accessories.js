import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./Courses.css";
import Row from "./Row";
import Card from "./Card";
import Grid from '@material-ui/core/Grid';
import {Carousel} from '3d-react-carousal';


function Web_C() {
  let slides = [
    <img  src="https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="4" />  ,
      <img src="http://www.tekshapers.com/uploads/blog_image/15362384091533896513blog-sco2.jpg" alt="5" />,
      <img  src="https://analyticsinsight.b-cdn.net/wp-content/uploads/2020/11/Artificial-Intelligence-5.jpg" alt="2" />,
      <img  src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="1" />,
      <img  src="https://publictechnology.net/sites/www.publictechnology.net/files/styles/original_-_local_copy/entityshare/22796%3Fitok%3DmHGPJ4_v" alt="3" />  ,
         ];
  return (
      <div style={{marginBottom:'20px',marginTop:'30px', width:'100%',backgroundColor:"black"}}>
          <Carousel slides={slides} autoplay={false} interval={1000} />
      </div>
  )
}

const Web = ({product, setProduct}) => {

  const cards = [
    {
      id: "1",
      src: "https://rukminim1.flixcart.com/image/416/416/ks4yz680/laptop-skin-decal/4/x/q/hd-printed-full-panel-laptop-skin-sticker-vinyl-fits-size-upto-original-imag5rtgsuj9yhyt.jpeg?q=70",
      title: "Printed Full Panel Laptop Skin Sticker",
      price: "₹2000",
      cutprice: "₹6,400",
      rating: "★★★★★",
    },
    {
      id: "2",
      src: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-gallery2-2021_GEO_US_FMT_WHH?wid=750&hei=778&fmt=jpeg&qlt=80&.v=1617122867000",
      title: "iPhone12 and iPhone12 mini - Apple",
      price: "₹2340",
      cutprice: "₹6,464",
      rating: "★★★★★",
    },
    {
      id: "3",
      src: "https://cdn.idealo.com/folder/Product/200455/6/200455675/s3_produktbild_gross/canon-eos-r6.jpg",
      title: "Canon Canon Full Frame Mirrorless EOS R6 Camera Body",
      price: "₹2000",
      cutprice: "₹6,400",
      rating: "★★★★★",
    },
    {
      id: "4",
      src: "https://i.gadgets360cdn.com/products/large/google-nest-mini-main-1200x675-1574667312.jpg",
      title: "Google Nest Mini (2nd Gen) with Google Assistant Smart Speaker",
      price: "₹5000",
      cutprice: "₹16,400",
      rating: "★★★★★",
    },
    {
      id: "5",
      src: "https://rukminim1.flixcart.com/image/416/416/kiow6fk0-0/keyboard/gaming-keyboard/p/t/7/zeb-magnus-zebronics-original-imafyfftskutknfu.jpeg?q=70",
      title: "HP KM3004 Wired Gaming Keyboard",
      price: "₹5000",
      cutprice: "₹6,530",
      rating: "★★★★★",
    },
    {
      id: "6",
      src: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202103/iPad_Pro_2020_1200x768.jpeg?75BJfJMCD_d.UCSwkDLN8RZvxXkkiYcm&size=1200:675",
      title: "APPLE iPad Pro 2021 12.9 inch and wide display",
      price: "₹2000",
      cutprice: "₹6,400",
      rating: "★★★★★",
    },
    {
      id: "7",
      src: "https://m.media-amazon.com/images/I/51KfNINjdTL._SX342_.jpg",
      title: "Portronics Konnect A Type C Cable 3 A 2 m USB Type C Cable",
      price: "₹2000",
      cutprice: "₹6,400",
      rating: "★★★★★",
    },
    {
      id: "8",
      src: "https://rukminim1.flixcart.com/image/416/416/k6qsn0w0/smart-glass/f/g/p/virtual-reality-headset-ventarx-b11-32gb-raxdon-original-imafp4kumpnszbjb.jpeg?q=70",
      title: "Raxdon Virtual Reality Headset Ventarx B11 - 32GB",
      price: "₹2000",
      cutprice: "₹6,400",
      rating: "★★★★★",
    },
    {
      id: "9",
      src: "https://www.exlmart.com/image/cache/catalog/B075R9P7H8/AppleWatch-Series3-GPS-42mm---Space-Gray-Aluminium-Case-with-Black-Sport-Band-B0-322x218.jpg",
      title: "APPLE Watch Series 3 GPS - 38 mm Black Sport Band",
      price: "₹2000",
      cutprice: "₹6,400",
      rating: "★★★★★",
    },
    {
      id: "10",
      src: "https://m.media-amazon.com/images/I/51PUy7Umi0L._SL1291_.jpg",
      title: "Tenda AC10  Wireless Smart Dual-Band Gigabit WiFi Router",
      price: "₹2000",
      cutprice: "₹6,400",
      rating: "★★★★★",
    },
    {
      id: "11",
      src: "https://m.media-amazon.com/images/I/917QAUQorDL._SL1500_.jpg",
      title: "Samsung 139.7 cm (55 inches) 4K Ultra HD Smart LED TV",
      price: "₹2000",
      cutprice: "₹6,400",
      rating: "★★★★★",
    },
    {
      id: "12",
      src: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/9803279/2019/10/11/8b3247d2-99d4-4448-aa57-9c28905968861570782281063-Apple-White-2nd-Gen-AirPods-with-Charging-Case-MV7N2HNA-1181-1.jpg",
      title: "Apple AirPods Pro: with charging case",
      price: "₹2000",
      cutprice: "₹6,400",
      rating: "★★★★★",
    },
  ];
  let arr = [];
  for (let i = 0; i <= cards.length - 4; i += 4) {
    arr.push(
      <Row>
        <Card
          key={cards[i].id}
          src={cards[i].src}
          title={cards[i].title}
          desc={cards[i].desc}
          price={cards[i].price}
          cutprice={cards[i].cutprice}
          rating={cards[i].rating}
          view={cards[i].view}
          product={product} setProduct={setProduct}
          type={1}
        />
        <Card
          key={cards[i + 1].id}
          src={cards[i + 1].src}
          title={cards[i + 1].title}
          desc={cards[i + 1].desc}
          price={cards[i + 1].price}
          cutprice={cards[i + 1].cutprice}
          rating={cards[i + 1].rating}
          view={cards[i + 1].view}
          product={product} setProduct={setProduct}
          type={1}
        />
        <Card
          key={cards[i + 2].id}
          src={cards[i + 2].src}
          title={cards[i + 2].title}
          desc={cards[i + 2].desc}
          price={cards[i + 2].price}
          cutprice={cards[i + 2].cutprice}
          rating={cards[i + 2].rating}
          view={cards[i + 2].view}
          product={product} setProduct={setProduct}
          type={1}
        />
        <Card
          key={cards[i + 3].id}
          src={cards[i + 3].src}
          title={cards[i + 3].title}
          desc={cards[i + 3].desc}
          price={cards[i + 3].price}
          cutprice={cards[i + 3].cutprice}
          rating={cards[i + 3].rating}
          view={cards[i + 3].view}
          product={product} setProduct={setProduct}
          type={1}
        />
      </Row>
    );
  }
  if (cards.length % 4 === 1) {
    arr.push(
      <Row>
        <Card
          key={cards[cards.length - 1].id}
          src={cards[cards.length - 1].src}
          title={cards[cards.length - 1].title}
          desc={cards[cards.length - 1].desc}
          price={cards[cards.length - 1].price}
          cutprice={cards[cards.length - 1].cutprice}
          rating={cards[cards.length - 1].rating}
          view={cards[cards.length - 1].view}
          product={product} setProduct={setProduct}
          type={1}
        />
      </Row>
    );
  } else if (cards.length % 4 === 2) {
    arr.push(
      <Row>
        <Card
          key={cards[cards.length - 2].id}
          src={cards[cards.length - 2].src}
          title={cards[cards.length - 2].title}
          desc={cards[cards.length - 2].desc}
          price={cards[cards.length - 2].price}
          cutprice={cards[cards.length - 2].cutprice}
          rating={cards[cards.length - 2].rating}
          view={cards[cards.length - 2].view}
          product={product} setProduct={setProduct}
          type={1}
        />
        <Card
          key={cards[cards.length - 1].id}
          src={cards[cards.length - 1].src}
          title={cards[cards.length - 1].title}
          desc={cards[cards.length - 1].desc}
          price={cards[cards.length - 1].price}
          cutprice={cards[cards.length - 1].cutprice}
          rating={cards[cards.length - 1].rating}
          view={cards[cards.length - 1].view}
          product={product} setProduct={setProduct}
          type={1}
        />
      </Row>
    );
  } else if (cards.length % 4 === 3) {
    arr.push(
      <Row>
        <Card
          key={cards[cards.length - 3].id}
          src={cards[cards.length - 3].src}
          title={cards[cards.length - 3].title}
          desc={cards[cards.length - 3].desc}
          price={cards[cards.length - 3].price}
          cutprice={cards[cards.length - 3].cutprice}
          rating={cards[cards.length - 3].rating}
          view={cards[cards.length - 3].view}
          product={product} setProduct={setProduct}
          type={1}
        />
        <Card
          key={cards[cards.length - 2].id}
          src={cards[cards.length - 2].src}
          title={cards[cards.length - 2].title}
          desc={cards[cards.length - 2].desc}
          price={cards[cards.length - 2].price}
          cutprice={cards[cards.length - 2].cutprice}
          rating={cards[cards.length - 2].rating}
          view={cards[cards.length - 2].view}
          product={product} setProduct={setProduct}
          type={1}
        />
        <Card
          key={cards[cards.length - 1].id}
          src={cards[cards.length - 1].src}
          title={cards[cards.length - 1].title}
          desc={cards[cards.length - 1].desc}
          price={cards[cards.length - 1].price}
          cutprice={cards[cards.length - 1].cutprice}
          rating={cards[cards.length - 1].rating}
          view={cards[cards.length - 1].view}
          product={product} setProduct={setProduct}
          type={1}
        />
      </Row>
    );
  }

  return (
    <div className="App">
      {/* <h1 class="heading">
        <span>Web Development</span>
      </h1> */}
      <Web_C />
      <div id="cards_landscape_wrap-2">
        <div className="container"><Grid>{arr}</Grid></div>
      </div>
    </div>
  );
};
export default Web;
