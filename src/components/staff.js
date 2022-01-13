import { Link } from "react-router-dom";

const Staff = ({ staff }) => (
  <Link
    to={"/staffinfo/" + staff.id }
    className="staff col-2 md-col-4 sm-col-6"
  >
    <div className="staff__content">
      <img src={staff.image} alt={staff.name} />
      <p className="staff__content__staff-name">
        <b>{staff.name}</b>
      </p>
    </div>
  </Link>
);

export default Staff;
