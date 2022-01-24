import Select from "react-select";
import { FormGroup } from "reactstrap";



function SelectField(props){
    const { field, options, label, disabled, placeholder } = props;
    const { name, value} = field;
    const selectedOption = options.find(option => options.value === value)

    const HandleSelectOptionField = selectedOption => {
        const selectValue = selectedOption ? selectedOption.value : selectedOption;
       
        const changeEvent = {
            target: {
                name: name,
                value: selectValue,
            }
        };
        field.onChange(changeEvent)
    };

    return(
      <FormGroup>
         {label && <label htmlFor={name} >{label}</label>}
        <Select 
        id={name}
        {...field}
        value={selectedOption}
        placeholder={placeholder}
        options={options}
        onChange={HandleSelectOptionField}
        />
      </FormGroup>
        
    )
};
export default SelectField