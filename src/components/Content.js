import react, { useState } from "react";
import Graph1 from "./Graph1";
import "./Content.css";
import SmallBarGraph from "./SmallBarGraph";
import SmallDonutGraph from "./SmallDonutGraph";
import SmallAreaGraph from "./SmallAreaGraph";
function Content() {
  return (
    <div>
      <h1 className="mt-4">Dashboard</h1>
      <div class="container">
        <div className="row Row_one">
          <div className="col-lg-3 row1 BarGraph1 bg-white">
            <h4 className="card-title">Author Sales</h4>
            <SmallBarGraph />
          </div>
          <div className="col-lg-3 row1 DonutGraph bg-white">
            <h4 className="card-title">Technologies</h4>
            <SmallDonutGraph />
          </div>
          <div className="col-lg-3 row1 AreaGraph bg-white">
            <h4 className="card-title">Total Orders</h4>
            <SmallAreaGraph />
          </div>
        </div>
        <div className="row row2">
          <div className="col-lg-3 bg-white">
            <h4 className="card-title">ANNOUNCEMENTS</h4>
            <h4 className="subtext">Incredibly Positive Reviews</h4>
            <p>
              To start a blog, think of a topic about and first brainstorm party
              is ways to write details
            </p>
          </div>

          <div className="col-lg-3 bg-white">
            <h4 className="card-title">PROJECTS</h4>
            <h4 className="subtext">First Milestone Achievement</h4>
            <p>
              To start a blog, think of a topic about and first brainstorm party
              is ways to write details
            </p>
          </div>

          <div className="col-lg-3 bg-white">
            <h4 className="card-title">TODAY'S SCHEDULE</h4>
            <h4 className="subtext">UI/UX Design Updates</h4>
            <p className="time">11:15AM - 12:30PM</p>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row row3">
          <div class="col-lg-3 row3item bg-white">
            {/* <div class="card"> */}
              <h2>Top Products</h2>
              <ul>
                <li>HTML 5 Templates</li>
                <p className="text-muted">Front-end Admin and Email</p>
                <li>Wordpress Themes</li>
                <p className="text-muted">eCommerce Website Plugin</p>

                <li>Commerce Websites</li>
                <p className="text-muted">Shops, Fasion wep sites and atc</p>

                <li>UI/UX Design</li>
                <p className="text-muted">Everything you ever imagine</p>

                <li>Freebie Themes</li>
                <p className="text-muted">Front-end and Admin</p>
              </ul>
            {/* </div> */}
          </div>
          <div class="col-lg-7 row3item bg-white">
            {/* <div class="card"> */}
              <h2>Sales Statistics</h2>
              <Graph1 />
            </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Content;
