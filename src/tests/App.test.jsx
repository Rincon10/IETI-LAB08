import React from 'react';
import { shallow } from 'enzyme';
import { describe, expect, test } from '@jest/globals';
import App from '../App';

describe('Test to the <App/> component', () => {
    var wrapper = shallow(<App />);

    // before running each test
    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    test('Should render the <App/> component propertly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
