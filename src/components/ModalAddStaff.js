import { FastField, Form, Formik } from "formik";
import { FormGroup, Input, Label } from "reactstrap";
import InputField from "./custom/InputField";

function ModalAddStaff() {
  const initialValues = {
    staffName: "",
    doB: "",
    startDate: "",
    department: "",
    annualLeave: "",
    overTime: "",
  };
  return (
    <div className="box_modal">
      <div className="form_add_staff">
        <Formik initialValues={initialValues}>
          {(formikPorps) => {
            const { values, errors, touched } = formikPorps;
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
                  component={InputField}
                  label="Phòng ban"
                  type="text"
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
