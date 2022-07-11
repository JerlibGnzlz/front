import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function General() {
  return (
    <div className="flex justify-around m-3 font-500 text-2xl">
      <div className="bg-gray-200 shadow-lg rounded-lg p-4">
        <div>
          <span className="text-xl">Revanue</span>
        </div>
        <div>
          <span>$2,423 </span>
          <span className="ml-5 text-xl text-green-600 tracking-wider">
            1.5+ <ArrowUpwardIcon />
          </span>
        </div>
        <p className="text-xl">Compare to last Month</p>
      </div>
      <div className="bg-gray-200 shadow-lg rounded-lg p-4">
        <div>
          <span className="text-xl">Cost</span>
        </div>
        <div>
          <span>$1,423 </span>
          <span className="ml-5 text-xl text-green-600 tracking-wider">
            1.8+ <ArrowUpwardIcon />
          </span>
        </div>
        <p className="text-xl">Compare to last Month</p>
      </div>
      <div className="bg-gray-200 shadow-lg rounded-lg p-4">
        <div>
          <span className="text-xl">Sales</span>
        </div>
        <div>
          <span>$4,423 </span>
          <span className="ml-5 text-xl text-red-600 tracking-wider">
            -1.4 <ArrowDownwardIcon />
          </span>
        </div>
        <p className="text-xl"> Compare to last Week</p>
      </div>
    </div>
  );
}

export default General;
