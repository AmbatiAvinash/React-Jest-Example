import React from 'react';
import {findByTestAttr, checkProps} from '../../../Utils/index';
import ListItem from './index';
import { shallow } from 'enzyme';

describe('ListItem component', () => {
    describe('Checking Proptypes', ()=> {
        it('shouldnot throw a warning', () => {
            const expectedProps = {
                title: 'Title',
                desc: 'Desc'
            }

            const propsErr = checkProps(ListItem, expectedProps);
            expect(propsErr).toBeUndefined();
        });
    });

    describe('Component rendered', () => {

        let wrapper;
        beforeEach(()=> {
            const props = {
                title: 'Title',
                desc: 'Desc'
            };
            wrapper = shallow(<ListItem {...props} />)
        })
        it('Should render without error', () => {
            const component = findByTestAttr(wrapper, 'listItemComponent');
            expect(component.length).toBe(1);
        });

        it('should render a title', () => {
            const title = findByTestAttr(wrapper, 'componentTitle');
            expect(title.length).toBe(1);
        })

        it('should render a description', () => {
            const desc = findByTestAttr(wrapper, 'componentDesc');
            expect(desc.length).toBe(1)
        })
    })

    describe('should NOT render', ()=> {
        let wrapper;
        beforeEach(()=> {
            const props = {
                title: 'Title',
                desc: 'Desc'
            };
            wrapper = shallow(<ListItem {...props} />)
        })

        it('Component is not rendered', ()=> {
            const component = findByTestAttr(wrapper, 'listItemComponent');
            expect(component.length).toBe(1);
        })
    })
})