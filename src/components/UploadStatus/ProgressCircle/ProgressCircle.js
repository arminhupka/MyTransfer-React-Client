import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "./style.css";

const ProgressCircle = ({ size, progress, strokeWidth, circleOneStroke, circleTwoStroke }) => {
  const circleRef = useRef(null);
  const [offset, setOffset] = useState(0);

  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference;
    setOffset(progressOffset);
    circleRef.current.style = "transition: stroke-dashoffset 850ms ease-in-out;";
  }, [setOffset, circumference, progress, offset]);

  return (
    <svg className="svg" width={size} height={size}>
      <circle className="svg-circle-bg" stroke={circleOneStroke} cx={center} cy={center} r={radius} strokeWidth={strokeWidth} />
      <circle
        ref={circleRef}
        className="svg-circle"
        stroke={circleTwoStroke}
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform={`rotate(-90 ${center} ${center})`}
      />
    </svg>
  );
};

ProgressCircle.propTypes = {
  size: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  circleOneStroke: PropTypes.number.isRequired,
  circleTwoStroke: PropTypes.number.isRequired,
};

export default ProgressCircle;
