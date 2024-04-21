import React from 'react'

const Socialprofile = () => {
  return (
    <div className='bg-white'>
          <p className='my-3 mx-3 py-2 boxtitle'>socail profile</p>
            <hr className='mx-3'/>
            <div className="row my-2">
                <div className="col">
                  <div className="col my-3 boxtextheading">FACEBOOK PROFILE</div>
                  <div className="col my-3 boxtextcontent" >-</div>
                </div>
                <div className="col">
                  <div className="col my-3 boxtextheading">INSTAGRAM PROFILE</div>
                  <div className="col my-3 boxtextcontent" >hantabis2345</div>
                </div>
              
               
            </div>
            {/* ========================second row====================================================== */}
            <div className="row my-2">
                <div className="col">
                  <div className="col my-3 boxtextheading">LINKDIN PROFILE</div>
                  <div className="col my-3 boxtextcontent" >Tabisht Khan</div>
                </div>
                <div className="col">
                  <div className="col my-3 boxtextheading">TWITTER PROFILE</div>
                  <div className="col my-3 boxtextcontent" >tabish2448</div>
                </div>
              </div>
            {/* ========================Third row====================================================== */}
            <div className="row my-2">
  
                <div className="col">
                  <div className="col my-3 boxtextheading">WHASTAPP NUMBER</div>
                  <div className="col my-3 boxtextcontent" >435353</div>
                </div>
              
               
            </div>
    </div>
  )
}

export default Socialprofile