import "./contact_Card.css"
import PhoneIcon from '@mui/icons-material/Phone';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const Contact_Card = () => {
  return (
    <div className="card">
      <ul className="cardullist">
        <li className="cardlist"><p className="card-header">Get in Touch</p></li>
        <li className="cardlist"><p className="card-text">
        Give us a missed call to share your experience. This is only for India callers. Our team will call you ​back within 24 hours.
        </p></li>
        <li className="cardlist"><a className="carda" href="tel:+918107843028" target="_blank" rel="noopener"><span class="iconstyles" style={{ color:"rgb(110, 94, 254)" }}><PhoneIcon/>&nbsp;+91 8107843028</span></a></li>
        <li className="cardlist"><a className="carda" href="tel:+917891664337" target="_blank" rel="noopener"><span class="iconstyles" style={{ color:"rgb(110, 94, 254)" }}><PhoneIcon/>&nbsp;+91 8107843028</span></a></li>
<li className="cardlist"><h5 className="card-title">Write To Us</h5></li>
        <li className="cardlist"><a className="carda" href="mailto:abhishekkumargupta22110@gmail.com" target="_blank" rel="noopener"><span  class="iconstyles" style={{color:"rgb(110, 94, 254)"}}><ContactMailIcon/>&nbsp;&nbsp;abhishekkumargupta22110@gmail.com</span></a></li>
      </ul>   
    </div>
    
  );
};

export default Contact_Card;
