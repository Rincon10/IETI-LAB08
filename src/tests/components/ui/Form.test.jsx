import { mount } from 'enzyme';
import { describe, expect, test } from '@jest/globals';
import { UserContext } from 'contexts/UserContext';
import Form from 'components/ui/Form';

describe('Test to the <Form/> component', () => {
    const dispatch = jest.fn();
    var wrapper = mount(<Form />, {
        wrappingComponent: UserContext.Provider,
        wrappingComponentProps: {
            value: { dispatch },
        },
    });

    // before running each test
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = mount(<Form />, {
            wrappingComponent: UserContext.Provider,
            wrappingComponentProps: {
                value: { dispatch },
            },
        });
    });

    test('should render the <Form/> component propertly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should set a default title', () => {
        const expectedTitle = 'Default title';
        const renderedTitle = wrapper.find('h1').text();

        expect(expectedTitle).toBe(renderedTitle);
    });

    test('should render with login title', () => {
        const expectedTitle = 'Login';
        wrapper = mount(<Form title={expectedTitle} />, {
            wrappingComponent: UserContext.Provider,
            wrappingComponentProps: {
                value: { dispatch },
            },
        });

        const renderedTitle = wrapper.find('h1').text();

        expect(expectedTitle).toBe(renderedTitle);
    });
});
