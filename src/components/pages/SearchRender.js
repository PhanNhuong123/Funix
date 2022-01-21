import Staff from "../staff";

function SearchRender({ staffs }) {
  return (
    <div className="wrapper__staffs">
      {staffs.map((staff) => (
        <Staff key={staff.id} staff={staff} />
      ))}
    </div>
  );
}
export default SearchRender;
