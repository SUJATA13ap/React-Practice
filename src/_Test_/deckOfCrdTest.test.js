import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CardsWrapper from '../components/CardsWrapper';
import 'whatwg-fetch';

describe('Testing', ()=>{
  it('render App with CardsWrapper details',()=>{
    const wrapper = mount(
        <App/>
   );
   expect (wrapper.containsAllMatchingElements(<CardsWrapper/>)).toEqual(true);
   expect(wrapper.find('CardsWrapper').props().cardsNumber).toHaveLength(0);
  })
})