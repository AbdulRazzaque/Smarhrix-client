import React from "react";
import DueTask from "./dashboardTabs/DueTask";
import DashboardJobs from "./dashboardTabs/DashboardJobs";
import DashboardMeetings from "./dashboardTabs/DashboardMeetings";
import DashboardCall from "./dashboardTabs/DashboardCall";

const DashboardTask = () => {
  return (
    <div className="m-2">

    <div className="">
      <div className="row">
        <div className="col-md-8 col-sx-6"> <DashboardJobs /><h1></h1></div>
        <div className="col-md-4 col-sx-6"> <DashboardMeetings /></div>
      </div>
    </div>
     <div className="">
      <div className="row">
        <div className="col-md-8 col-sx-6"> <DueTask /><h1></h1></div>
        <div className="col-md-4 col-sx-6"> <DashboardCall /></div>
      </div>
    </div>


   
    </div>
  );
};

export default DashboardTask;
