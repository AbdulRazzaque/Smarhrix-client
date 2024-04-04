import React from 'react'

const Details = () => {
  return (
    <div>
          <div className=' bg-white'>
           <p className='my-3 mx-3 py-2 boxtitle'>Client Information</p>
            <hr className='mx-3'/>
            <div className="row my-2">
                <div className="col">
                  <div className="col my-3 boxtextheading">CLIENT NAME</div>
                  <div className="col my-3 boxtextcontent" >Sharjeel Sahikh</div>
                </div>
                <div className="col">
                  <div className="col my-3 boxtextheading">CONTACT NUMBER</div>
                  <div className="col my-3 boxtextcontent" >Tabish</div>
                </div>
                <div className="col">
    
                </div>
               
            </div>
            {/* ============================================ */}
            <div className="row my-3">
                
                <div className="col">
                  <div className="col my-3 boxtextheading">FAX</div>
                  <div className="col my-3 boxtextcontent" >N/A</div>
                </div>
                <div className="col">
                  <div className="col my-3 boxtextheading">WEBSITE</div>
                  <div className="col my-3 boxtextcontent" >N/A</div>
                </div>
                <div className="col">
    
                </div>
               
            </div>
            {/* ============================================ */}
            <div className="row my-2">
                <div className="col">
                  <div className="col my-3 boxtextheading">INDUSTRY</div>
                  <div className="col my-3 boxtextcontent" >Agriculture</div>
                </div>
                <div className="col">
                  <div className="col my-3 boxtextheading">CLIENT SOURCE</div>
                  <div className="col my-3 boxtextcontent" >Added Bu User</div>
                </div>
                <div className="col">

                </div>
               
            </div>
    </div>
    {/* ==============================second================================================== */}
    <div className="row  my-5 ">
     <div className="col-5  bg-white  ">
     <p className='my-3 mx-3 py-2 boxtitleBlackheading'>Address 1 | <span className='boxtitle'>Client Information</span></p>
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
     {/* =================================================================================== */}
     <div className="col-6  bg-white " style={{ marginLeft: '15px' }}>
     <p className='my-3 mx-3 py-2 boxtitleBlackheading'>Address 2 | <span className='boxtitle'>Shipping Address</span></p>
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

export default Details