import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Card from '../components/Card';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


describe('Testing', ()=>{
  it('render card with style',()=>{
    const wrapper = mount(
        <Card/>
   );
   expect (wrapper.html()).toContain('card-container');
   expect(wrapper.html()).toContain('card-content__inner');

  })
})