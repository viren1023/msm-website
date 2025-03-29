export default function ProductDescription({product}) {
  if (product == "wooden-pallets") {
    // pallets
    return (
      <div>
        Mahakali Saw Mill produces heavy-duty wooden pallets tailored to meet
        the rigorous demands of diverse industrial applications. We offer a
        variety of sizes and shapes to optimize your warehouse and
        transportation operations. Our pallets serve various sectors including
        packaging, engineering, and electrical, providing stable support for
        heavy machinery and goods. All our pallets comply with ISPM 15
        standards, ensuring smooth international trade. Choose Mahakali Saw Mill
        for high-quality, reliable, and compliant pallet solutions.
        <br />
        <br />
        Wooden pallets come in various configurations to suit different material
        handling needs. Two common types are 2-way and 4-way entry pallets.
        <br />
        <br />
        <p>What are 2-way and 4-way entry pallets?</p>
        <ul>
          <li>
            <span>2-way entry pallets</span>: These pallets have two entry
            faces, typically on opposite sides. They are designed for forklift
            entry from two directions, making them suitable for applications
            where space is limited or where access from multiple sides is not
            required.
          </li>
          <li>
            <span>4-way entry pallets</span>: These pallets have four entry
            faces, allowing forklifts to access them from all sides. This
            provides maximum flexibility and maneuverability, making them ideal
            for use in warehouses and distribution centers where space is
            limited and efficient material flow is crucial.
          </li>
        </ul>
        <p>Benefits of using wooden pallets from Mahakali Saw Mill:</p>
        <ul>
          <li>
            <span>Exceptional Quality</span>: Our pallets are crafted from
            high-quality, durable wood, ensuring they can withstand the rigors
            of transportation and handling.
          </li>
          <li>
            <span>Customizable Solutions</span>: We can tailor our pallets to
            your specific needs, including size, weight capacity, and entry
            configurations.
          </li>
          <li>
            <span>Cost-Effective</span>: Our pallets offer excellent value for
            money, providing a reliable and cost-effective solution for your
            material handling needs.
          </li>
        </ul>
      </div>
    )
  } else if (product == "wooden-boxes") {
    // boxes
    return (
      <div>
        Mahakali Saw Mill manufactures high-quality wooden crates and boxes,
        with a focus on custom-designed pine solutions for the safe
        transportation of heavy machinery and equipment. We understand the
        critical role that robust packaging plays in the successful delivery of
        your valuable assets. Our expertise lies in crafting durable pine boxes
        that withstand the demands of both domestic and international shipping,
        minimizing the risk of damage during transit. We prioritize client
        satisfaction by working closely with you to determine the optimal box
        design, ensuring it perfectly accommodates the size and weight of your
        equipment. All our boxes can be heat-treated to comply with
        international phytosanitary regulations (ISPM 15), facilitating smooth
        customs clearance for overseas shipments. Choose Mahakali Saw Mill as
        your packaging partner and experience the peace of mind that comes with
        knowing your valuable machinery is securely protected throughout its
        journey. Contact us today for a consultation and a customized quote.
      </div>
    )
  } else if (product == "wooden-crates") {
    // crates
    return (
      <div>
        Wooden crates provide a strong and reliable solution for the safe and
        secure transportation of a wide range of goods. These sturdy containers
        are constructed from wood, providing excellent protection against shock,
        vibration, and moisture during transit. Wooden crates are highly
        customizable, allowing for the creation of bespoke solutions tailored to
        the specific dimensions and weight of your products. This versatility
        ensures that your goods remain secure and protected throughout their
        journey, minimizing the risk of damage and ensuring their safe arrival
        at the destination. Furthermore, wooden crates can be customized to meet
        specific industry requirements. For example, crates for international
        shipping can be heat-treated to comply with international phytosanitary
        regulations (ISPM 15), ensuring smooth customs clearance. This attention
        to detail and commitment to meeting industry standards make wooden
        crates a preferred choice for businesses seeking reliable and compliant
        packaging solutions.
      </div>
    )
  }
}
