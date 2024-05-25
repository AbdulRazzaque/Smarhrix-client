import React from 'react'
import { useSelector } from 'react-redux'

const Basic = () => {
  const employeeData = useSelector(state => state.socket.messages)
  // console.log(employeeData,'employeeData')
  return (
    <>
 
    <div className=' bg-white'>
           <p className='my-3 mx-3 py-2 boxtitle'>Basic Information</p>
            <hr className='mx-3'/>
            <div className="row my-2">
                <div className="col">
                  <div className="col my-3 boxtextheading">First Name</div>
                  <div className="col my-3 boxtextcontent" >{employeeData.first_name}</div>
                </div>
                <div className="col">
                  <div className="col my-3 boxtextheading">Last Name</div>
                  <div className="col my-3 boxtextcontent" >{employeeData.last_name}</div>
                </div>
                <div className="col">
                  <div className="col my-3 boxtextheading">STAFF ID</div>
                  <div className="col my-3 boxtextcontent" >{employeeData.staff_id}</div>
                </div>
               
            </div>
            {/* ============================================ */}
            <div className="row my-3">
                <div className="col">
                  <div className="col my-3 boxtextheading">User Name</div>
                  <div className="col my-3 boxtextcontent" >{employeeData.username}</div>
                </div>
                <div className="col">
                  <div className="col my-3 boxtextheading">Email</div>
                  <div className="col my-3 boxtextcontent" >{employeeData.email}</div>
                </div>
                <div className="col">
                  <div className="col my-3 boxtextheading">PHONE</div>
                  <div className="col my-3 boxtextcontent" >{employeeData.phone_number}</div>
                </div>
               
            </div>
            {/* ============================================ */}
            <div className="row my-2">
                <div className="col">
                  <div className="col my-3 boxtextheading">Gender</div>
                  <div className="col my-3 boxtextcontent" >{employeeData.gender}</div>
                </div>
                <div className="col">
                  <div className="col my-3 boxtextheading">Date Of Birth</div>
                  <div className="col my-3 boxtextcontent" >{employeeData.date_of_birth}</div>
                </div>
                <div className="col">
                  <div className="col my-3 boxtextheading">Marrital Status</div>
                  <div className="col my-3 boxtextcontent" >single</div>
                </div>
               
            </div>
    </div>

{/* ===================================================second box start here=================================================================== */}

    <div className='my-5 bg-white'>
           <p className='py-2 my-3 mx-3 boxtitle'>Company Information</p>
            <hr className='mx-3'/>
            <div className="row my-2">
                <div className="col">
                  <div className="col my-3 boxtextheading">Company</div>
                  {/* <div className="col my-3 boxtextcontent" >{employeeData.company_details.company_name}</div> */}
                </div>
                <div className="col">
                  <div className="col my-3 boxtextheading">Department</div>
                  <div className="col my-3 boxtextcontent" >{employeeData.department}</div>
                </div>
                <div className="col">
                  <div className="col my-3 boxtextheading">DESIGNATION</div>
                  <div className="col my-3 boxtextcontent" >{employeeData.designation}</div>
                </div>
               
            </div>
            {/* ============================================ */}
            <div className="row my-3">
                <div className="col">
                  <div className="col my-3 boxtextheading">Role</div>
                  <div className="col my-3 boxtextcontent" >{employeeData.role}</div>
                </div>
                <div className="col">
                  <div className="col my-3 boxtextheading">STATUS</div>
                  <div className="col my-3 boxtextcontent" >Full Time</div>
                </div>
                <div className="col">
                  <div className="col my-3 boxtextheading">OFFICE SHIFT</div>
                  <div className="col my-3 boxtextcontent" >{employeeData.office_shift}</div>
                </div>
               
            </div>
            {/* ============================================ */}
            <div className="row my-2">
                <div className="col">
                  <div className="col my-3 boxtextheading">Date of Joining</div>
                  <div className="col my-3 boxtextcontent" >1-0-203</div>
                </div>
                <div className="col">
                  <div className="col my-3 boxtextheading">DATE OF LEAVING</div>
                  <div className="col my-3 boxtextcontent" >-</div>
                </div>
                <div className="col">
                  <div className="col my-3 boxtextheading">ATTENDANSE TYPE</div>
                  <div className="col my-3 boxtextcontent" >{employeeData.attendance_type}</div>
                </div>
               
            </div>
    </div>
{/* ===================================================Therd box start here=================================================================== */}

    <div className='my-5 bg-white'>
           <p className='py-2 my-3 mx-3 boxtitle'>Address Information</p>
            <hr className='mx-3'/>
            <div className="row my-2">
                <div className="col">
                  <div className="col my-3 boxtextheading">STREET</div>
                  <div className="col my-3 boxtextcontent" >Plot No.52,jalan Nagr</div>
                </div>
                <div className="col">
                  <div className="col my-3 boxtextheading">CITY</div>
                  <div className="col my-3 boxtextcontent" >Aurangabad</div>
                </div>
                <div className="col">
                  <div className="col my-3 boxtextheading">STATE</div>
                  <div className="col my-3 boxtextcontent" >Maharashtra</div>
                </div>
               
            </div>
            {/* ============================================ */}
            <div className="row my-3">
                <div className="col">
                  <div className="col my-3 boxtextheading">ZIP CODE</div>
                  <div className="col my-3 boxtextcontent" >430015</div>
                </div>
                <div className="col">
                  <div className="col my-3 boxtextheading">COUNTYR</div>
                  <div className="col my-3 boxtextcontent" >india</div>
                </div>
                <div className="col">
                  <div className="col my-3 boxtextheading">OFFICE SHIFT</div>
                  <div className="col my-3 boxtextcontent" >Mornig shift</div>
                </div>
               
            </div>
            {/* ============================================ */}
            {/* <div className="row my-2">
                <div className="col">
                  <div className="col my-3 boxtextheading">Date of Joining</div>
                  <div className="col my-3 boxtextcontent" >1-0-203</div>
                </div>
                <div className="col">
                  <div className="col my-3 boxtextheading">DATE OF LEAVING</div>
                  <div className="col my-3 boxtextcontent" >-</div>
                </div>
                <div className="col">
                  <div className="col my-3 boxtextheading">ATTENDANSE TYPE</div>
                  <div className="col my-3 boxtextcontent" >Genral</div>
                </div>
               
            </div> */}
    </div>
    </>
  )
}

export default Basic