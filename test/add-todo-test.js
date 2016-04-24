import './setup';

import React from 'react';
import AddTodo from '../app/add-todo';

import { mount } from 'enzyme';

import test from 'tape';

test('Add Todo component', (t) => {
  t.test('it calls the todo prop with the new text', (t) => {
    t.plan(1);

    const todoCallback = ({ name }) => {
      t.equal(name, 'Buy kibble');
    }

    const form = mount(<AddTodo onNewTodo={todoCallback} />);

    const input = form.fin  d('input').get(0);
    input.value = 'Buy kibble';

    form.find('button').simulate('click');
  });
});
