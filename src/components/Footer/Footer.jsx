import "./footer.css";

function Footer() {
  return (
    <div>
      <div className="footerContainer">
        <div className="footerItemsFirst">
          <p>Home</p>
          <p>About Me</p>
          <p>Portfolio</p>
          <p>Contact</p>
        </div>
        <div className="footerItemsSecond">
          <p>Contact</p>
          <p>Email: example@mail.ru</p>
          <p>Teleg: @birnasa</p>
          <p>Calls: +552463555</p>
        </div>
        <div className="footerItemsThird">
          <p>Copyright &copy; MuzaffarjonDev</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
