import Staff from "../staff";

function SearchRender({ staffs }) {
  console.log(staffs)
  return (
    <div className="wrapper__staffs">
      {staffs.map((staff) => (
        <Staff key={staff.id} staff={staff} />
      ))}
    </div>
  );
}
export default SearchRender;
