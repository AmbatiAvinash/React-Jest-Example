import React from 'react';
import {findByTestAttr, checkProps} from '../../../Utils/index';
import SharedButton from './index';
import { shallow } from 'enzyme';

describe('SharedButton Component', () => {
    describe('Checking PropsTypes', ()=> {
        it('Should not throw warning', () => {
            const expectedProps = {
                buttonText: 'Button test',
                emitEvent: () => {

                }
            };
            const propsError =checkProps(SharedButton, expectedProps);
            expect(propsError).toBeUndefined();
        })
    });


    describe('Renders', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                buttonText: 'Button test',
                emitEvent: () => {

                }
            }
            wrapper = shallow(<SharedButton {...props}/>)
        })


        it('Should Render a button', () => {
            const button = findByTestAttr(wrapper, 'buttonComponent');
            expect(button.length).toBe(1);
        })
    })
});

