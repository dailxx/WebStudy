import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './actions';

class App extends Component {
  render() {
    const { onAddClick, onTodoClick, onFilterChange, visibleTodos, visibilityFilter } = this.props;
    return (
      <div>
        <AddTodo
          onAddClick={ onAddClick } />
        <TodoList
          todos={ visibleTodos }
          onTodoClick={ onTodoClick } />
        <Footer
          filter={ visibilityFilter }
          onFilterChange={ onFilterChange } />
      </div>
    );
  }
}


function selectTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    default:
      todos;
  }
}


function mapStateToProps(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  };
}


function mapDispatchToProps(dispatch) {
  return {
    onAddClick: (text) => dispatch(addTodo(text)),
    onTodoClick: (index) => dispatch(toggleTodo(index)),
    onFilterChange: (filter) => dispatch(setVisibilityFilter(filter))
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
