import { RED, WHITE } from "../../Helper/Colors";
const Header = () => {
  return (
    <header className="shadow" style={{ background: RED, color: WHITE }}>
      <div className="logo">Tech Land</div>

      <div className="link">
        <a href="#">#تکنولوژی</a>
        <a href="#">#اسکار</a>
        <a href="#">#فیلم و سریال</a>
        <a href="#">#اپل</a>
        <a href="#">#سامسونگ</a>
        <a href="#">#جعبه گشایی</a>
      </div>
    </header>
  );
};

export default Header;
