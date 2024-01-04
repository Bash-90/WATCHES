import logo from "../img/logo.webp";
export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <ul>
              <img src={logo} alt="" />
            </ul>
            <ul>
              QUICK LINKS
              <li>Our Store</li>
              <li>Store Map</li>
              <li>Return Policy</li>
              <li>Cancellation</li>
            </ul>
            <ul>
              <li>No: 58 A, East Madison</li>
              <li>Street, Baltimore, MD, USA 4508</li>
              <li>Mail: imail@example.com</li>
              <li>Phone: 0000 - 123 - 456789</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
