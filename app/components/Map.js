import { useState } from 'react';
import Image from 'next/image';

const ContactUsMap = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="contact_us_map" style={{ position: 'relative' }}>
      {isLoading && (
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          backgroundColor: 'rgba(255, 255, 255, 0.8)', 
          zIndex: 10 
        }}>
          {/* <Image src="/loading-spinner.gif" alt="Loading..." width={50} height={50} /> */}
        </div>
      )}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9763107437866!2d72.6683760793457!3d23.024642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87a903dcf153%3A0x6ee86b91e0a8e92a!2sMahakali%20Enterprise!5e0!3m2!1sen!2sin!4v1718446385764!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={() => setIsLoading(false)}
      ></iframe>
    </div>
  );
};

export default ContactUsMap;
