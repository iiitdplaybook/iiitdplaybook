import React from "react";
import "./ComingSoonTools.css";
import Navbar from "../Navbar/Navbar";

function ComingSoonTools() {
  const description = " ";
  return (
    <div className="div">
      <Navbar loggedIn={true} colorStatus={true} />
      <h1 className="comingSoon">Coming Soon</h1>
      <p className="description">{description}</p>

      <iframe
        class="docEmbed"
        src="https://docs.google.com/document/d/e/2PACX-1vQXQ0Vc6hvTp7UM8ZGL3tQZZOIv3L8rickxVwfpSINkOglsZ7vw0VhNmbLB6CfHFcPb3cZJpz9KkoUH/pub?embedded=true"
      ></iframe>

      <iframe class="docEmbed" src="https://timetable.cf/"></iframe>
    </div>
  );
}

export default ComingSoonTools;
