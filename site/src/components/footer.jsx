import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section-image">
          <img src={logo} alt="harmoni vinyls" />
          <div>
            <h3>main menu</h3>
            <ul>
              <ol>about </ol>
              <ol>login </ol>
              <ol>vinyls </ol>
            </ul>
          </div>
        </div>
        <div className="footer-section">
          <div>
            <h3>help & support</h3>
            <ul>
              <ol>faqs </ol>
              <ol>shipping information </ol>
              <ol>refunds </ol>
              <ol>orders </ol>
            </ul>
          </div>
        </div>
        <div className="footer-section">
          <div>
            <h3>contact us</h3>
            <p>email us @:</p>
            <p>help@harmonivinyls.com.au</p>
          </div>
        </div>
        <img src={logo} alt="harmoni vinyls" className="mobile-img" />
      </div>
      <div></div>
    </footer>
  );
}
