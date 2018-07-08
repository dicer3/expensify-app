import ReactshallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import Header from '../../components/header';

test('should render header correctly',()=>
{
    const renderer=new ReactshallowRenderer();
   renderer.render(<Header />)
   expect(renderer.getRenderOutput()).toMatchSnapshot();
    //console.log(renderer.getRenderOutput())

})