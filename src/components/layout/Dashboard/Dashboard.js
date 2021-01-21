import React from "react";
import AddEstablishment from "../../functional/Dashboard/AddEstablishment";
import Enquiries from "../../functional/Dashboard/Enquiries";
import Messages from "../../functional/Dashboard/Messages";

function Dashboard() {
  return (
    <>
      <Messages />
      <Enquiries />
      <AddEstablishment />
    </>
  );
}

export default Dashboard;
