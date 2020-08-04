import moxios, { requests } from 'moxios';
import { testStore } from '../../Utils/index';
import { fetchPosts } from './../actions';

describe('fetchPosts action', () => {
    beforeEach(()=> {
        moxios.install();
    });

    afterEach(()=> {
        moxios.uninstall();
    })

    it('Store is updated correctly', () => {
        const expectedState = [{
            title: 'Title',
            body: 'Text'
        },{
            title: 'Title',
            body: 'Text'
        },{
            title: 'Title',
            body: 'Text'
        },{
            title: 'Title',
            body: 'Text'
        }];
        const store= testStore();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        })
        return store.dispatch(fetchPosts())
        .then(() => {
            const newState = store.getState();
            expect(newState.posts).toBe(expectedState);
        })
    });
   
})