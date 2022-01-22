import { FormGroup, Input, Label } from "reactstrap";

function InputField(props) {
  const { field, form, label, placeholder, type, disabled} = props;
  const { name,} = field;
    console.log(label)
  return (
    <FormGroup>
      {label && <label htmlFor={name}>{label}</label>}
      <Input
        id={name}
       {...field}
       type={type}
       disabled={disabled}
       placeholder={placeholder}
      />
    </FormGroup>
  );    
}

export default InputField;
