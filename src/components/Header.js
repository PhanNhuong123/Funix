import { Link } from 'react-router-dom'
import handleClick from './HandleClickHeader';

function Header() {
  return (
    <div className="header row">
      <div className="header__nav">
        <Link to="/" onClick={ () => handleClick('staff')} className="header__nav__entry js_staffs  col-2 md-col-3 sm-col-4">
          <span>
            <i className="fas fa-users"></i>
          </span>
          <h3  className='js_entry '>Nhân viên</h3>
        </Link>
        <Link to="/department" onClick={ () => handleClick('department')} className="header__nav__entry js_departments  col-2 md-col-3 sm-col-4">
          <span>
            <i className="fas fa-id-card"></i>
          </span>
          <h3 className='js_entry js_opa'>Phòng Ban</h3>
        </Link>
        <Link to="/salary" onClick={ () => handleClick('salary')} className="header__nav__entry js_salary   col-2 md-col-3 sm-col-4">
          <span>
            <i className="fas fa-money-check-alt"></i>
          </span>
          <h3 className='js_entry js_opa'>Bảng lương</h3>
        </Link>
      </div> 
      <div className='header__search js_search'>
      <Link to="/search" className='search__icon'>
       <i className=" fas fa-search"  ></i>
      </Link>
      </div>
    </div>
  );
}
export default Header;
