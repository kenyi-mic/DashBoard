import {
  MoreVert,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import React from "react";
import "./featured.scss";

function Featured() {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total revenue</h1>
        <MoreVert fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={87} text={"87%"} strokeWidth={5} />
        </div>
        <p className="title">Total sales mades today</p>
        <p className="amount">$891</p>
        <p className="desc">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="summery">
          <div className="item">
            <div className="itemTitile">Target</div>
            <div className="itemResults">
              <KeyboardArrowDown />
              $3.78K
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
