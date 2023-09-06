export default function Footer() {
  return (
    <footer className="footer">
      <div className="topHalf">
        <div className="logoBx">
          <a href="#">
            <img className="logo" src="/images/logo.png" alt="logo" />
            <h2 className="appName">Foodie Fusion</h2>
          </a>
          <p className="footerText">
            et eiusmod veniam nisi tempor qui fugiat veniam aute proident
          </p>
        </div>
        <ul className="categories">
          <li>
            <h5>Categories</h5>
          </li>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Reciepe</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
      <div className="copyright">
        <p className="copyrightText">
          Copyright &copy; 2023 Foodie Fusion. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
