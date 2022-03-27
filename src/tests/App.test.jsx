import React from 'react';
import { shallow } from 'enzyme';
import { describe, expect, test } from '@jest/globals';
import App from '../App';

describe('Pruebas para el componente <App/>', () => {
    var wrapper = shallow(<App />);

    // before running each test
    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    test('Debe de renderizar el componente', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
