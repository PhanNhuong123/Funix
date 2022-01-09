function Header() {
  return (
    <div className="header row">
      <ul className="header__nav">
        <li className="header__nav__entry js_staffs  js_non-active js_active col-2">
          <span>
            <i className="fas fa-users"></i>
          </span>
          <h3>Nhân viên</h3>
        </li>
        <li className="header__nav__entry js_departments js_non-active col-2">
          <span>
            <i className="fas fa-id-card"></i>
          </span>
          <h3>Phòng Ban</h3>
        </li>
        <li className="header__nav__entry js_salary  js_non-active col-2">
          <span>
            <i className="fas fa-money-check-alt"></i>
          </span>
          <h3>Bảng lương</h3>
        </li>
      </ul>
    </div>
  );
}
export default Header;
