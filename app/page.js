import "./home.css"
// import Image from "next/image";
// import collage from "../public/collage.jpg";
import {favicon} from "../public/favicon.ico"
import {ImageSlideShow} from "./components/imageSlideshow"

export default function Home() {
  return (
    <>
      <div className="pic">
        {/* <div className=""/> */}
        <ImageSlideShow />
      </div>
      <hr />

      <div className="description">
        <p className="welcome-para">Welcome to,</p>
        <h1 className="company-name">MAHAKALI SAW MILL</h1>

        <p className="company-desc">
          <br />
          We specialize in producing high-quality pallets, crates, and boxes
          designed for the safe and efficient transport of goods. Our products
          are crafted from durable wood to provide strong, reliable packaging
          solutions that meet the demands of various industries. Whether you
          need pallets for shipping, crates for storage, or custom-sized boxes,
          we deliver practical, cost-effective options tailored to your specific
          needs.
          <br /> <br /> At Mahakali Saw Mill, we prioritize quality and customer
          satisfaction. Our wooden packaging materials are built to last,
          ensuring your products remain secure during transit or storage. With a
          commitment to sustainable practices, we source our materials
          responsibly and strive to minimize our environmental impact.
          <br /> <br />
          Choose Mahakali Saw Mill for your wooden packaging requirements, and
          experience the reliability and strength of our products, trusted by
          businesses across industries. Let us help you protect and transport
          your goods with confidence.
        </p>
      </div>

      {/* <div className="multiple-box">image of about us</div>

			<div>Our products</div>

			<div>Our SERVICES</div> */}
    </>
  )
}

/*
	- style header
	- style home page with images
	- add products in our products in nav bar
	- add about us

*/
