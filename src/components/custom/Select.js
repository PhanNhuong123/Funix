import { ErrorMessage } from "formik";
import Select from "react-select";
import { FormFeedback, FormGroup } from "reactstrap";



function SelectField(props){

    const { field, form, options, label, disabled, placeholder } = props;
    const { name, value} = field;
    const selectedOption = options.find(option => options.value === value)
    const {errors, touched} = form
    const showError = errors[name] && touched[name]
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
        className={showError ? 'is-invalid' : ''}
        
        />
        <ErrorMessage name={name} component={FormFeedback} />
      </FormGroup>
        
    )
};
export default SelectField