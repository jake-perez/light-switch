import React from 'react'
import PropTypes from 'prop-types';
import './index.scss'

const LightSwitch = ({ handleToggleSwitch, isOn }) => {
  return (
    <div className={isOn ? 'light-switch-on' : 'light-switch-off'} onClick={handleToggleSwitch}>
      <SwitchSVG isOn={isOn} />
    </div>
  );
}

LightSwitch.defaultProps = {
  handleToggleSwitch: () => { },
  isOn: false,
}

LightSwitch.propTypes = {
  handleToggleSwitch: PropTypes.func.isRequired,
  isOn: PropTypes.bool.isRequired
}

// Switch SVG for light
const SwitchSVG = ({ isOn }) => (
  <svg className={isOn ? 'switch-on' : 'switch-off'} height="auto" width="auto">
    <circle cx="7.4" cy="8" r="7" stroke="black" strokeWidth="1" fill="grey" />
  </svg>
);

SwitchSVG.defaultProps = {
  isOn: false
}

SwitchSVG.propTypes = {
  isOn: PropTypes.bool.isRequired
}

export default LightSwitch;
