function Footer() {
  return (
    <div className="footer">
      <ul className="footer__address col-3">
        <h4>Our Address</h4>
        <li>121,Clear Water Bay Road Clear Water Bay, Kowloon HONG KONG</li>
        <li>
          <i class="fas fa-phone-alt"></i>+852 1234 5678
        </li>
        <li>
          <i class="fas fa-blender-phone">+852 2348 4568</i>
        </li>
        <li>
          <i class="fas fa-envelope"></i>
          <a href="mailto:www.nhuong.zzz@gmail.com">www.nhuong.zzz@gmail.com</a>
        </li>
      </ul>
      <div className="footer__social col-3">
        <i class="fab fa-google-plus-g footer__social__icon"></i>
        <i class="fab fa-facebook footer__social__icon"></i>
        <i class="fab fa-linkedin-in footer__social__icon"></i>
        <i class="fab fa-twitter footer__social__icon"></i>
        <i class="fab fa-youtube footer__social__icon"></i>
        <i class="far fa-envelope footer__social__icon"></i>
      </div>
    </div>
  );
}
export default Footer;
