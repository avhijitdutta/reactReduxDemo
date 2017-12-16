import React from 'react';
import { shallow } from 'enzyme';
import {App} from './App';

// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('App component should render as expected', () => {
    const component = shallow(<App/>);
    console.log(component);
});