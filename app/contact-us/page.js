import Image from "next/image";

import "./contact-us.css";
import home from "../../public/home.png";
import location from "../../public/location.png";
import phone from "../../public/phone.png";
import mail from "../../public/mail.png";
import map from "../../public/map.jpg";

export default function ContactUs() {
	const iconSize = 35;

	return (
		<div className="contact_us_container">
			<h2>Contact Us</h2>
			<div>
				<div className="contact_us_info">
					<ul>
						<li>
							<span>
								<Image
									src={home}
									alt="Home Icon"
									width={iconSize}
									height={iconSize}
								/>
							</span>
							<p>
								<h3>Company Name:</h3>
								<span>Mahakali Saw Mill</span>
							</p>
						</li>
						<li>
							<span>
								<Image
									src={location}
									alt="Location Icon"
									width={iconSize}
									height={iconSize}
								/>
							</span>
							<p>
								<h3>Address:</h3>
								<span>
									64/2, Mahakali Saw mill, Nr. Neal Petroleum,
									Opp. S.P.RING ROAD BRTS STOP, Odhav,
									Ahmedabad, Gujarat 382415 India.
								</span>
							</p>
						</li>
						<li>
							<span>
								<Image
									src={phone}
									alt="Phone Icon"
									width={iconSize}
									height={iconSize}
								/>
							</span>
							<p>
								<h3>Moblie No:</h3>
								<span>
									<a href="tel:9427801136">+91 94278-01136</a>
									<br />
									<a href="tel:9824044536">+91 98240-44536</a>
								</span>
							</p>
						</li>
						<li>
							<span>
								<Image
									src={mail}
									alt="Mail Icon"
									width={iconSize}
									height={iconSize}
								/>
							</span>
							<p>
								<h3>E-Mail ID:</h3>
								<span>
									<a href="mailto:mahakali.odhav@gamil.com">
										mahakali.odhav@gmail.com
									</a>
								</span>
							</p>
						</li>
					</ul>
				</div>
				<div className="contact_us_map">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9763107437866!2d72.6683760793457!3d23.024642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87a903dcf153%3A0x6ee86b91e0a8e92a!2sMahakali%20Enterprise!5e0!3m2!1sen!2sin!4v1718446385764!5m2!1sen!2sin"
						width="100%"
						height="100%"
						style={{ border: 0 }}
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
					<Image src={map} />
				</div>
			</div>
		</div>
	);
}
