import { Link } from 'react-router-dom'
import handleClick from './HandleClickHeader';


function Header() {
  return (
    <div className="header row">
      <div className="header__nav">
        <Link to="/" onClick={ e => handleClick(e)} className="header__nav__entry js_staffs   js_active col-2">
          <span>
            <i className="fas fa-users"></i>
          </span>
          <h3  className='js_entry '>Nhân viên</h3>
        </Link>
        <Link to="/department" onClick={ e => handleClick(e)} className="header__nav__entry js_departments  col-2">
          <span>
            <i className="fas fa-id-card"></i>
          </span>
          <h3 className='js_entry js_non-active'>Phòng Ban</h3>
        </Link>
        <Link to="/salary" onClick={ e => handleClick(e)} className="header__nav__entry js_salary   col-2">
          <span>
            <i className="fas fa-money-check-alt"></i>
          </span>
          <h3 className='js_entry js_non-active'>Bảng lương</h3>
        </Link>
      </div> 
    </div>
  );
}
export default Header;
