import React from 'react';
import { shallow } from 'enzyme';
import {findByTestAttr, testStore} from '../Utils/index';
import App from './App';

const setUp = (initialState) => {
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store}/>).childAt(0).dive();
    return wrapper;
}

describe('App Component', () => {

    let wrapper;
    beforeEach(()=> {
        const initialState = {
                posts: [{
                    title: "test",
                    body: 'body'
                }, {
                    title: "test",
                    body: 'body'
                },{
                    title: "test",
                    body: 'body'
                }]
        }
        wrapper = setUp(initialState);
    });

    it('Should render without errors', () => {
        const component = findByTestAttr(wrapper, 'appComponent');
        expect(component.length).toBe(1);
    });

    it('exampleMethod_updatesState method should update state as expected', () => {
        const classInstance = wrapper.instance();
        classInstance.exampleMethod_updatesState();
        const newState = classInstance.state.hideBtn;
        expect(newState).toBe(true);
    });

    it('exampleMethod_returnAValue method should return a value as expected', () => {
        const classInstance = wrapper.instance();
        const newValue = classInstance.exampleMethod_returnAValue(6);
        expect(newValue).toBe(7);
    });
    
})