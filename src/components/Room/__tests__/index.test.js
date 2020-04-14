import React from 'react'
import { render, unmountComponentAtNode, } from "react-dom";
import TestRenderer from "react-test-renderer";
import { act } from "react-dom/test-utils";
import Room from '../index';

const { create, act: testAct } = TestRenderer;

describe('Room', () => {
  let container = null;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("renders without any props", () => {
    act(() => {
      render(<Room />, container);
    })

    expect(container).not.toBeNull();
  });

  it("creates a non-empty component", () => {
    let roomEmpty, roomNonEmpty;
    testAct(() => {
      roomEmpty = create(<Room />);
      roomNonEmpty = create(<Room dummyProp={'dummyProp'} />);
    })

    expect(roomEmpty).not.toBeNull();
    expect(roomNonEmpty).not.toBeNull();
  });

})