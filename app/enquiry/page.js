// export default function Enquiry() {
// 	return <h1>Enquiry</h1>;
// }
"use client"
import {useState} from "react"
import "./enquiry.css"
import Loader from "../components/loader"

export default function Enquiry() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("loading")
    // console.log("hello");
    // console.log(formData.name);
    // console.log(formData.email);
    // console.log(formData.message);

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus("success")
        setFormData({name: "", email: "", message: ""})
      } else {
        setStatus("error")
      }
    } catch (error) {
      setStatus("error")
    }
  }

  return (

    // TODO: add more input fields like phone no.,budget, address, fname, lname, also add more styles to it

    <div className="background-collage">
      <div id="myForm">
        <div className="message">Some message</div>
        <form onSubmit={handleSubmit}>
          <div className="form_name">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form_email">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form_message">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              placeholder="Enter your requirements"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          {status === "loading" ? (
            <button type="submit" id="submitButton" disabled>
              <Loader/>
            </button>
          ) : (
            <button type="submit" id="submitButton">
              {/* <Loader/> */}
              Submit
            </button>
          )}
          {/* <button type="submit" id="submitButton">
            Submit
          </button> */}

          {/* {status === "loading" && <p>Sending...</p>} */}
          {status === "success" && (
            <p>Thank you! Your inquiry has been sent.</p>
          )}
          {status === "error" && (
            <p>Sorry, there was an error. Please try again.</p>
          )}
        </form>
      </div>
    </div>
  )
}
