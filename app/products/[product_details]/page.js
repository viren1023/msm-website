// "use client"

import {ImageSlideShow} from "@/app/components/imageSlideshow"
import "./product_detail.css"
import Image from "next/image"
import ProductDescription from "./ProductDescription"

export default function ProductDetails({params}) {
  console.log(params)
  const slug = params.product_details
  console.log(slug)
  // let descList = ['Wooden Box', 'Wooden Pallet', 'Wooden Crate']
  let descList = {
    "wooden-pallets": "Wooden Pallets",
    "wooden-boxes": "Wooden Boxes",
    "wooden-crates": "Wooden Creates",
  }
  return (
    <div className="product-main-wrapper">
      <h1 className="product-heading">{descList[slug]}</h1>
      <hr className="product-title-underline"/>

      <div className="imageSlideshow">
        <ImageSlideShow />
      </div>
      <div className="product-description">
        <ProductDescription product={slug} />
      </div>
    </div>
  )
}
