import { FastField, Form, Formik } from "formik";
import InputField from "./custom/InputField";
import options from "./custom/option";
import SelectField from "./custom/Select";
import * as yup from 'yup'

function ModalAddStaff() {
  const initialValues = {
    staffName: "",
    doB: "",
    startDate: "",
    department: "",
    annualLeave: "",
    overTime: "",
  };

  const validationSchema = yup.object().shape({
    staffName: yup.string().required('Hãy Nhập tên nhân viên'),

    department: yup.string().required('chưa nhập kìa'),

    annualLeave: yup.string().required('chưa nhập kìa'),

    overTime: yup.string().required('chưa nhập kìa'),


  }

  )
  
  return (
    <div className="box_modal">
      <div className="form_add_staff">
        <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        >
          {(formikProps) => {
            const { values, errors, touched } = formikProps;
            console.log({ values, errors, touched });
            return (
              <Form>
                <FastField
                  name="staffName"
                  component={InputField}
                  label="Họ và tên"
                  placeholder="Nhập họ và tên"
                  type="text"
                />
                <FastField
                  name="doB"
                  component={InputField}
                  label="Ngày sinh"
                  placeholder="dd/mm/yyyy"
                  type="text"
                />
                  <FastField
                  name="startDate"
                  component={InputField}
                  label="Ngày vào công ty"
                  placeholder="dd/mm/yyyy"
                  type="text"
                /> 
                 <FastField
                  name="department"
                  component={SelectField}
                  label="Phòng ban"
                
                  placeholder='Chọn phòng ban'
                  options={options}
                  
                />
                  <FastField
                  name="annualLeave"
                  component={InputField}
                  label="Ngày nghỉ còn lại"
                  type="text"
                />
                 <FastField
                  name="overTime"
                  component={InputField}
                  label="Ngày làm thêm"
                  type="text"
                />

              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default ModalAddStaff;
