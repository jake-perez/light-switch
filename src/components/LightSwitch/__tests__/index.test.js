import React from 'react'
import { act, create } from "react-test-renderer";
import LightSwitch from '../index';


describe('LightSwitch', () => {
  it("creates a component", () => {
    let lightSwitch;
    act(() => {
      lightSwitch = create(<LightSwitch isOn={true} />);
    })

    expect(lightSwitch).not.toBeNull();
  });
})