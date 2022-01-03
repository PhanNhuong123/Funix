function StaFFList({props, onClick}){
    console.log(props.br)
return(
    <li className="staff-name col-4">
        <button style={props.br} onClick={() => onClick(props)
                
        }>
            {props.name}
        </button>
        </li>
)
}
export default StaFFList