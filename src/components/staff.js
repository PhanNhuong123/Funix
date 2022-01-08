const Staff = ({ staff, click }) => (
  <div className="staff col-2" onClick={() => click(staff)}>
    <div className="staff__content">
      <img src={staff.image} alt={staff.name} />
      <p className="staff__content__staff-name">
        <b>{staff.name}</b>
      </p>
    </div>
  </div>
);

export default Staff;
