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
      <OpenSVG isOn={switchOn} />
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
      <ellipse id={isOn ? "light-bulb-on" : ""} stroke="#000" ry="20.500001" rx="31.5" cy="163.250005" cx="32.25" strokeWidth="1.5" fill="url(#gridpattern)" />
      <ellipse ry="12.5" rx="31.5" id="svg_4" cy="152.250004" cx="32.25" strokeWidth="1.5" stroke="#000" fill={isOn ? "grey" : "black"} />
    </g>
  </svg>)

RoomLightSVG.defaultProps = {
  isOn: false
}

RoomLightSVG.propTypes = {
  isOn: PropTypes.bool.isRequired
}

const OpenSVG = ({ isOn }) => (
  <svg viewBox="0 0 500 250" width="200" height="150" xmlns="http://www.w3.org/2000/svg">
    <g>
      <title>Open Sign</title>
      <path id="wire" d="m419.428837,230.544695l3.429135,8.884346l9.142875,4.000008l8.571445,2.285719" fillOpacity="null" strokeOpacity="null" strokeWidth="1.4" stroke="grey" fill="none" />
      <path id="wire" d="m183.86026,233.684986l17.193034,-1.403519l12.982499,-5.614054l8.070202,-6.666689l7.719323,-8.42108l4.561419,-13.333377l1.754392,-9.824594l0.701756,-9.122837l4.21054,-15.789526" fillOpacity="null" strokeOpacity="null" strokeWidth="1.4" stroke="grey" fill="none" />
      <path id="wire" d="m350.527481,231.228838l8.42107,-0.350885l6.31581,-3.859662l5.614054,-10.52635l1.052635,-17.193039l2.10527,-16.491282l3.157905,-16.842161" fillOpacity="null" strokeOpacity="null" strokeWidth="1.4" stroke="grey" fill="none" />
      <path id="wire" d="m262.807891,230.175797l25.817071,3.859566l7.516364,-1.7939" stroke="grey" fillOpacity="null" strokeOpacity="null" strokeWidth="1.4" fill="none" />
      <text id={isOn ? "main-sign-on" : ""} stroke="#000" transform="matrix(4.977575798430222,0,0,5.326028823852539,-1053.4123872750486,-399.8747123479843) " fontStyle="normal" textAnchor="start" fontFamily="'Courier New', Courier, monospace" fontSize="24" y="119.026894" x="241.089083" strokeWidth="0" fill="black">OPEN</text>
      <rect id={isOn ? "outer-sign-on" : ""} rx="15" stroke="black" height="182" width="325" y="109.000006" x="127.499996" strokeWidth="2" fill="none" />
      <rect rx="3" id="power-box" height="24.571477" width="11.428594" y="245.973297" x="438.286017" fillOpacity="null" strokeOpacity="null" strokeWidth="2" stroke="#000" fill="none" />
    </g>
  </svg>
)

export default Room