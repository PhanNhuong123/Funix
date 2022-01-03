function StaFFList({props, onClick , br}){
    
return(
    <li className="staff-name col-4">
        <button style={br} onClick={() => onClick(props)
                
        }>
            {props.name}
        </button>
        </li>
)
}
export default StaFFList