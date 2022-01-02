function StaFFList({props, onClick}){
return(
    <li className="staff-name col-4">
        <button onClick={() => onClick(props)
        }>
            {props.name}
        </button>
        </li>
)
}
export default StaFFList