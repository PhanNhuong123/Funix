function Footer() {
  return (
    <div className="footer">
      <ul className="footer__address col-3">
        <h4>Our Address</h4>
        <li>121,Clear Water Bay Road Clear Water Bay, Kowloon HONG KONG</li>
        <li>
          <i className="fas fa-phone-alt"></i>+852 1234 5678
        </li>
        <li>
          <i className="fas fa-blender-phone">+852 2348 4568</i>
        </li>
        <li>
          <i className="fas fa-envelope"></i>
          <a href="mailto:www.nhuong.zzz@gmail.com">www.nhuong.zzz@gmail.com</a>
        </li>
      </ul>
      <div className="footer__social col-3">
        <i className="fab fa-google-plus-g footer__social__icon"></i>
        <i className="fab fa-facebook footer__social__icon"></i>
        <i className="fab fa-linkedin-in footer__social__icon"></i>
        <i className="fab fa-twitter footer__social__icon"></i>
        <i className="fab fa-youtube footer__social__icon"></i>
        <i className="far fa-envelope footer__social__icon"></i>
      </div>
    </div>
  );
}
export default Footer;
