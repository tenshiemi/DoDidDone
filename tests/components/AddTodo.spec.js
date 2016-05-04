import React from 'react'
import { AddTodo } from 'components/AddTodo'
import { shallow } from 'enzyme'

describe('(Component) AddTodo', () => {
  let _props, _wrapper

  beforeEach(() => {
    _props = {
        dispatch: function(){}
    }
    _wrapper = shallow(<AddTodo {..._props}/>)
  })

  it('Renders a todo adding textfield', () => {
    const list = _wrapper.find('TextField')
    expect(list).to.exist
  })
})
