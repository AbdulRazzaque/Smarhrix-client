

import React from 'react'

const JobDetails = () => {
  return (
    <div>
          <div className=' bg-white'>
           <p className='my-3 mx-3 py-2 boxtitle'>Job Information</p>
            <hr className='mx-3'/>
            <div className="row my-2">
                <div className="col">
                  <div className="col my-3 boxtextheading">JOb TITLE</div>
                  <div className="col my-3 boxtextcontent" >Software Design</div>
                </div>
                <div className="col">
                  <div className="col my-3 boxtextheading">NUMBER OF POSITION</div>
                  <div className="col my-3 boxtextcontent" >2</div>
                </div>
                <div className="col">
    
                </div>
               
            </div>
            {/* ============================================ */}
            <div className="row my-3">
                
                <div className="col">
                  <div className="col my-3 boxtextheading">CLIENT</div>
                  <div className="col my-3 boxtextcontent" >Shaikh Sharjeel</div>
                </div>
                <div className="col">
                  <div className="col my-3 boxtextheading">CONTACT</div>
                  <div className="col my-3 boxtextcontent" >+9178767653</div>
                </div>
                <div className="col">
    
                </div>
               
            </div>
            {/* ============================================ */}
            <div className="row my-2">
                <div className="col">
                  <div className="col my-3 boxtextheading">PUBLISH DATE</div>
                  <div className="col my-3 boxtextcontent" >20-1-2023</div>
                </div>
                <div className="col">
                  <div className="col my-3 boxtextheading">APPLICATION DEADLINE</div>
                  <div className="col my-3 boxtextcontent" >23-3-2025</div>
                </div>
                <div className="col">

                </div>
               
            </div>
            {/* ============================================ */}
            <div className="row my-2">
                <div className="col">
                  <div className="col my-3 boxtextheading">JOB TYPE</div>
                  <div className="col my-3 boxtextcontent" >FULL TIME</div>
                </div>
                <div className="col">
                  <div className="col my-3 boxtextheading">OPENING STATUS</div>
                  <div className="col my-3 boxtextcontent" >In-Progrees</div>
                </div>
                <div className="col">

                </div>
               
            </div>
            {/* ============================================ */}
            <div className="row my-2">
                <div className="col">
                  <div className="col my-3 boxtextheading">INDUSTRY</div>
                  <div className="col my-3 boxtextcontent" >IT</div>
                </div>
                <div className="col">
                  <div className="col my-3 boxtextheading">CREATED BY</div>
                  <div className="col my-3 boxtextcontent" >Added By User</div>
                </div>
                <div className="col">

                </div>
               
            </div>
    </div>
    {/* ==============================second================================================== */}
    <div className="row  my-5 ">
     <div className="col-5  bg-white  ">
     <p className='my-3 mx-3 py-2 boxtitleBlackheading'><span className='boxtitle'>Additional Information</span></p>
            <hr className='mx-3'/>
          
          <div className="row ">
            <div className="col-6 ">
            <p className=" my-3 boxtextheading">MININMUM EXPERIENCE (IN YEARS)</p>
            <p className=" my-3 boxtextcontent" >2</p>
            </div>
            <div className="col-6">
            <p className=" my-3 boxtextheading">MAXIMUM EXPERIENCE (IN YEARS)</p>
            <p className=" my-3 boxtextcontent" >Maharashtra</p>
            </div>
          </div>
          <div className="row ">
            <div className="col-6 ">
            <p className=" my-3 boxtextheading">MININMUM SALARY</p>
            <p className=" my-3 boxtextcontent" >3000</p>
            </div>
            <div className="col-6">
            <p className=" my-3 boxtextheading">MAXIMUM SALARY</p>
            <p className=" my-3 boxtextcontent" >4000</p>
            </div>
          </div>
          <div className="row ">
            <div className="col-6 ">
            <p className=" my-3 boxtextheading">CURRENCY</p>
            <p className=" my-3 boxtextcontent" >Rupees</p>
            </div>
           
          </div>
     </div>
     {/* =================================================================================== */}
     <div className="col-6  bg-white " style={{ marginLeft: '15px' }}>
     <p className='my-3 mx-3 py-2 boxtitleBlackheading'> <span className='boxtitle'>Shipping Address</span></p>
            <hr className='mx-3'/>
          <div className="row ">
            <div className="col-6 ">
            <p className=" my-3 boxtextheading">STREET</p>
            <p className=" my-3 boxtextcontent" >Plot No.52 jalan Nagar</p>
            </div>
        
          </div>
          <div className="row ">
            <div className="col-6 ">
            <p className=" my-3 boxtextheading">CITY</p>
            <p className=" my-3 boxtextcontent" >Aurangabad</p>
            </div>
            <div className="col-6">
            <p className=" my-3 boxtextheading">STATE</p>
            <p className=" my-3 boxtextcontent" >Maharashtra</p>
            </div>
          </div>
          <div className="row ">
            <div className="col-6 ">
            <p className=" my-3 boxtextheading">ZIP CODE</p>
            <p className=" my-3 boxtextcontent" >430015</p>
            </div>
            <div className="col-6">
            <p className=" my-3 boxtextheading">COUNTRY</p>
            <p className=" my-3 boxtextcontent" >india</p>
            </div>
          </div>
     </div>
    
    </div>
    </div>
  )
}

export default JobDetails