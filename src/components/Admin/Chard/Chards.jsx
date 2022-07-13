import React, { useEffect} from "react";
import { chardOrders, chardEarnings } from "../../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import LeftPanel from '../LeftPanel'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis
  } from "recharts";


function Chards() {
    const dispatch = useDispatch();
    const dataEarnings = useSelector((state) => state.dataEarnings);
    const dataOrders = useSelector((state) => state.dataOrders);

    useEffect(() => {
        dispatch(chardEarnings())
        dispatch(chardOrders())
    }, [dispatch])
  
    return (
      <div className="flex bg-gray-300">
        <div className="relative">
          <LeftPanel />
        </div>
        <AreaChart
            width={500}
            height={400}
            data={dataEarnings}
            margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
            <RadarChart
            cx={300}
            cy={250}
            outerRadius={150}
            width={500}
            height={500}
            data={dataOrders}
            >
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar
                name="Mike"
                dataKey="A"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
            />
        </RadarChart>
      </div>
    );
  }
  
  export default Chards;
  