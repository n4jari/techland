import React from "react";
import { SocialItems } from "./FooterItems";

const Footer = () => {
  return (
    <footer>
      <div className="info">
        <h2>Tech Land</h2>
        <p>
          سایت تک لند در سال 1398 شروع به کار کرد. ما در این سایت به آخرین اخبار
          تکنولوژی و اخبار زمینه های دیگری چون اخبار : گیم و فیلم وسریال کتاب
          های الکتریکی و غیره میپردازیم.
        </p>

        <div className="social">
          {SocialItems.map((item) => (
            <a href="#" key={item.id}>
              <i className={item.icon}></i>
            </a>
          ))}
        </div>
      </div>

      <div className="cpr">
        <span>
          Copyright {new Date().getFullYear()} |{" "}
          <a href="http://n4jari.ir" target="_blank">
            {" "}
            &copy;n4jari{" "}
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
