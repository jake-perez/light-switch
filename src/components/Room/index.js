import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LightSwitch from '../LightSwitch';
import './index.scss';

const Room = () => {
  const [switchOn, setSwitchOn] = useState(false);

  const handleToggleSwitch = () => {
    setSwitchOn(!switchOn)
  }

  return (
    <div className={switchOn ? 'room-on' : 'room-off'}>
      <RoomLightSVG isOn={switchOn} />
      <LightSwitch isOn={switchOn} handleToggleSwitch={handleToggleSwitch} />
    </div>
  )
}


const RoomLightSVG = ({ isOn }) => (
  <svg width="65" height="185" xmlns="http://www.w3.org/2000/svg">
    <g>
      <rect fill="none" id="canvas_background" height="187" width="67" y="-1" x="-1" />
      <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
        <rect fill="url(#gridpattern)" strokeWidth="0" y="0" x="0" height="100%" width="100%" />
      </g>
    </g>
    <g>
      <path id="svg_1" d="m30.75,0.749999l1.5,138.54688l-1.5,-138.54688z" strokeWidth="1.5" stroke="#000" fill="#fff" />
      <ellipse stroke="#000" ry="20.500001" rx="31.5" id="svg_2" cy="163.250005" cx="32.25" strokeWidth="1.5" fill={isOn ? "#FFFF66" : "url(#gridpattern)"} />
      <ellipse ry="12.5" rx="31.5" id="svg_4" cy="152.250004" cx="32.25" strokeWidth="1.5" stroke="#000" fill={isOn ? "grey" : "black"} />
    </g>
  </svg>)

RoomLightSVG.defaultProps = {
  isOn: false
}

RoomLightSVG.propTypes = {
  isOn: PropTypes.bool.isRequired
}

export default Room