"use client"

import {useState, useEffect} from "react"
import Image from "next/image"
import logo from "../public/logo.webp"
import Link from "next/link"
import "./globals.css"
import "./fonts.css"

export default function DynamicHeader() {
  const [screenWidth, setScreenWidth] = useState(0)

  useEffect(() => {
    // Function to update the screen width
    const updateScreenWidth = () => setScreenWidth(window.innerWidth)

    // Initial screen size
    updateScreenWidth()

    // Add event listener for screen resize
    window.addEventListener("resize", updateScreenWidth)

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", updateScreenWidth)
  }, [])

  return screenWidth > 768 ? (
    <>
      <header className="mainHeader">
        <div className="logoDiv">
          <Image src={logo} alt="logo"/>
        </div>
        <div className="headerContantDiv">
          <h1>Mahakali Saw Mill</h1>
          <hr />
          <div>
            <p>
              <strong>
                ALL KIND OF TIMBER MERCHANT & WOODEN BOXMANUFACTURERS
              </strong>
            </p>
            <p>
              64/2,Nr. Neal Petroleum, Opp. S.P.RING ROAD BRTS STOP, Odhav,
              Ahmedabad, Gujarat 382415.
            </p>
            <p>
              <strong>Phone No: </strong>+91 94278-01136, +91 98240-44536{" "}
              <strong> &nbsp;&nbsp; E-Mail ID: </strong>
              mahakali.odhav@gmail.com
            </p>
          </div>
        </div>
      </header>
      <nav className="mainNavigation">
        <Link href="/">Home</Link>
        <div className="dropdown">
          Our Products
          <div className="dropdown-content">
            <Link href="/products/wooden-pallets">Wooden Pallets</Link>
            <Link href="/products/wooden-boxes">Wooden Boxes</Link>
            <Link href="/products/wooden-crates">Wooden Crates</Link>
          </div>
        </div>
        <Link href="/contact-us">Contact Us</Link>
        <Link href="/enquiry">Enquiry</Link>
      </nav>
    </>
  ) : (
    <>
      <header className="mainHeader">
        <div className="logoDiv">
          <Image src={logo} alt="logo"/>
        </div>
        <div className="headerContantDiv">
          <h1>Mahakali Saw Mill</h1>
        </div>
      </header>
      <nav className="mainNavigation">
        <Link href="/">Home</Link>
        <div className="dropdown">
          Our Products
          <div className="dropdown-content">
            <Link href="/products/wooden-pallets">Wooden Pallets</Link>
            <Link href="/products/wooden-boxes">Wooden Boxes</Link>
            <Link href="/products/wooden-crates">Wooden Crates</Link>
          </div>
        </div>
        <Link href="/contact-us">Contact Us</Link>
        <Link href="/enquiry">Enquiry</Link>
      </nav>
    </>
  )
}
