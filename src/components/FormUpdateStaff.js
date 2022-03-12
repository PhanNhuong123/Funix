import { FastField, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import InputField from "./custom/InputField";
import options from "./custom/option";
import SelectField from "./custom/Select";
import { HandleClickBtnClose } from "./toggleModalBox";
import * as yup from "yup";
import { patchUpdateStaff } from "../actions";



function FormUpdateStaff(props) {
  const dispatch = useDispatch();
  const staff = props.staff;
  

  const HandleSubmitForm = (values) => {
    if (values.name) {
      values.id = staff.id
      dispatch(patchUpdateStaff(values))
     
      console.log(values);
    }
  };


  const initialValues = {
    name: staff.name,
    doB: '',
    startDate: '',
    departmentId: '',
    annualLeave:'',
    overTime: '',
    salaryScale:'',
    image:
      "https://png.pngtree.com/png-clipart/20200225/original/pngtree-businessman-avatar-icon-vector-download-vector-user-icon-avatar-silhouette-social-png-image_5257566.jpg",
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required("Hãy Nhập tên nhân viên"),

    doB: yup.date().required("Ngày sinh không hợp lệ"),

    startDate: yup.date().required("Ngày vào công ty không hợp lệ"),

    departmentId: yup.string().required("Thông tin này là bắt buộc"),

    annualLeave: yup
      .number("Vui lòng nhập số")
      .required("Thông tin này là bắt buộc"),

    overTime: yup
      .number("Vui lòng nhập số")
      .required("Thông tin này là bắt buộc"),

    salaryScale: yup
      .number("Vui lòng nhập số")
      .required("Thông tin này là bắt buộc"),
  });

  return (
    <div className="box_modal">
      <div className="box_modal__title" >
        <h4>Cập Nhật</h4>
      </div>
      <div className="btn-close-form" onClick={HandleClickBtnClose}>
        <i className="fas fa-times"></i>
      </div>

      <div className="form_staff">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => HandleSubmitForm(values)}
        >
          {(formikProps) => {
            const { values, errors, touched } = formikProps;
            console.log({ values, errors, touched });
            return (
              <Form>
                <FastField
                  name="name"
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
                  type="date"
                />
                <FastField
                  name="startDate"
                  component={InputField}
                  label="Ngày vào công ty"
                  placeholder="dd/mm/yyyy"
                  type="date"
                />
                <FastField
                  name="departmentId"
                  component={SelectField}
                  label="Phòng ban"
                  placeholder="Chọn phòng ban"
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
                <FastField
                  name="salaryScale"
                  component={InputField}
                  label="Hệ số lương"
                  type="text"
                />

                <button
                  className="btn-submit"
                  onClick={(values) => HandleSubmitForm(values)}
                  type="submit"
                >
                    Cập Nhật
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default FormUpdateStaff;
