import React from "react";
import Jobs from "./dashboardTabs/Jobs";
import Meetings from "./dashboardTabs/Meetings";
import DueTask from "./dashboardTabs/DueTask";
import Call from "./dashboardTabs/Call";

const DashboardTask = () => {
  return (
    <div className="m-2">

    <div className="">
      <div className="row">
        <div className="col-md-8 col-sx-6"> <Jobs /><h1></h1></div>
        <div className="col-md-4 col-sx-6"> <Meetings /></div>
      </div>
    </div>
     <div className="">
      <div className="row">
        <div className="col-md-8 col-sx-6"> <DueTask /><h1></h1></div>
        <div className="col-md-4 col-sx-6"> <Call /></div>
      </div>
    </div>


   
    </div>
  );
};

export default DashboardTask;
