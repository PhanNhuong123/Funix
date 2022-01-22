import { Form, Formik } from "formik"
import { FormGroup, Input, Label } from "reactstrap"


function  ModalAddStaff(){
    return(
        <div className="box_modal">
            <div className="form_add_staff">
               <Formik>
                   {formikPorp => {

                       return (
                         <Form>
                             <FormGroup>
                                 <Label for="staffName">Họ và tên</Label><br/>
                                 <Input id="staffName" name="name" placeholder="Nhập họ và tên"/>
                             </FormGroup>
                             <FormGroup>
                                 <Label for="doB">Ngày sinh</Label><br/>
                                 <Input id="doB" name="name" placeholder="dd/mm/yyyy"/>
                             </FormGroup>
                             <FormGroup>
                                 <Label for="startDate">Ngày vào công ty</Label><br/>
                                 <Input id="startDate" name="startDate" placeholder="dd/mm/yyyy"/>
                             </FormGroup>
                             <FormGroup>
                                 <Label for="department">Phòng ban</Label><br/>
                                 <Input id="department" name="department"/>
                             </FormGroup>
                            <FormGroup>
                                 <Label for="annualLeave">Ngày nghỉ còn lại</Label><br/>
                                 <Input id="anualLeave" name="annualLeave"/>
                             </FormGroup>
                            <FormGroup>
                                 <Label for="overTime">Ngày làm thêm</Label><br/>
                                 <Input id="overTime" name="overTime"/>
                             </FormGroup>
                           
                         </Form>  
                       )
                   }}
               </Formik>
            </div>
        </div>
    )
};

export default ModalAddStaff