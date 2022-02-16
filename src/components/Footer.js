import React from "react";

function Footer() {
  return (
    <div className="footer">
      <img className="image" src="/img/footer-background.jpg" alt="Background" />
      <div className="footer-info d-flex justify-between align-end">
        <div className="footer-info__contact">
          <ul className="cu-p">
            <li>+7 499 653 67 66</li>
            <li>+7 977 853 38 15</li>
            <li>Ежедневно с 08:00 – 22:00</li>
          </ul>
        </div>
        <div className="footer-info__pay">
          <ul className="d-flex justify-between align-center cu-p">
            <li>
              <img src="/img/mir.svg" alt="Mir" />
            </li>
            <li>
              <img src="/img/visa.svg" alt="Visa" />
            </li>
            <li>
              <img src="/img/gpay.svg" alt="Gpay" />
            </li>
            <li>
              <img src="/img/applepay.svg" alt="ApplePay" />
            </li>
            <li>
              <img src="/img/maestro.svg" alt="Maestro" />
            </li>
            <li>
              <img src="/img/maestrocard.svg" alt="MaestroCard" />
            </li>
          </ul>
        </div>
        <div className="footer-info__social">
          <ul className="d-flex align-center cu-p">
            <li>
              <img src="/img/facebook.svg" alt="facebook" />
            </li>
            <li>
              <img src="/img/vk.svg" alt="vk" />
            </li>
            <li>
              <img src="/img/instagram.svg" alt="instagram" />
            </li>
            <li>
              <img src="/img/social.svg" alt="social" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
