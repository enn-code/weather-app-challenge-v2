import React from 'react';
import { shallow } from 'enzyme';
import { createMockStore } from 'redux-test-utils';
import InitialState from '../Reducers/InitialState';
import Constants from '../Actions/ActionTypes';
import Weather from '../Containers/Weather';

// const middlewares = [thunk];
const mockStore = createMockStore(InitialState);

describe('>>>Weather --- Shallow Render REACT COMPONENTS', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Weather store={mockStore} />);
  });

  it('+++ render Weather component', () => {
    expect(wrapper.length).toEqual(1);
  });

  // it('+++ check Weather control buttons send dispatch', () => {
  //   wrapper.dive().find({ displayId: 'simpleSwitch' }).prop('onClick')();
  //   expect(mockStore.isActionDispatched({
  //     type: Constants.UPDATE_SEARCH_PRETTY,
  //     isRenderPrettyTable: false,
  //   })).to.be.true;
  // });
});
