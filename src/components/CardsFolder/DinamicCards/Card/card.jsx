import React, { useState } from 'react';
import { motion } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import { UilTimes } from '@iconscout/react-unicons';
import Chart from 'react-apexcharts';
import '../DinamicCard.css'

const Card = (props) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <motion.div>
            {expanded ? (
                <ExpandedCard param={props} toggleExpanded={toggleExpanded} />
            ) : (
                <CompactCard param={props} toggleExpanded={toggleExpanded} />
            )}
        </motion.div>
    );
};

function CompactCard({ param, toggleExpanded }) {
    const Png = param.png;

    return (
        <motion.div
            className="CompactCard"
            style={{
                background: param.color.backGround,
                boxShadow: param.color.boxShadow
            }}
            onClick={toggleExpanded}
        >
            <div className="radialBar">
                <CircularProgressbar value={param.barValue} text={`${param.barValue}%`} />
                <span>{param.title}</span>
            </div>
            <div className="detail">
                <Png />
                <span>{param.value}</span>
                <span></span>
            </div>
        </motion.div>
    );
}

function ExpandedCard({ param, toggleExpanded }) {
    const data = {
        options: {
            chart: {
                type: "area",
                height: "auto",
            },
            dropShadow: {
                enabled: false,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.35
            },
            fill: {
                colors: ["#fff"],
                type: "gradient",
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
                colors: ["white"],
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm"
                },
            },
            grid: {
                show: true,
            },
            xaxis: {
                type: "datetime",
            },
        }
    };

    return (
        <motion.div
            className='ExpandedCard'
            style={{
                background: param.color.backGround,
                boxShadow: param.color.boxShadow
            }}
        >
            <div style={{ alignSelf: 'flex-end', cursor: 'pointer', color: 'white' }}>
                <UilTimes onClick={toggleExpanded} />
            </div>
            <span>{param.title}</span>
            <div className="chartContainer">
                <Chart series={param.series} type='area' options={data.options} />
            </div>
            <span>Last 24 hours</span>
        </motion.div>
    );
}

export default Card;
