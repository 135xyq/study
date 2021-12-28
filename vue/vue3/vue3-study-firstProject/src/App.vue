<template>
  <div id="app">
    <section class="todoapp">
      <header class="header">
        <h1>todos</h1>
        <input
          class="new-todo"
          autofocus=""
          autocomplete="off"
          placeholder="What needs to be done?"
          v-model = 'newTodoRef'
          @keyup.enter="addTodo"
        />
      </header>
      <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox" v-model="allDoneRef" />
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
          <li class="todo" :class="{completed : todo.completed,editing:todo === editingTodoRef}" v-for="todo in filterTodosRef" :key="todo.id">
            <div class="view">
              <input class="toggle" type="checkbox" v-model="todo.completed"/>
              <label @dblclick="handleEditTodo(todo)">{{todo.title}}</label>
              <button class="destroy"></button>
            </div>
            <input class="edit" type="text" 
            @blur="doneEdit"
            @keyup.enter="doneEdit"
            @keyup.escape="escEdit(todo)"
            v-model="todo.title"
            />
          </li>
        </ul>
      </section>
      <footer class="footer">
        <span class="todo-count">
          <strong>{{activeTodosRef}}</strong>
          <span>item{{activeTodosRef===1?'':'s'}} left</span>
        </span>
        <ul class="filters">
          <li><a href="#/all" :class="{selected:visibilityRef === 'all'}">All</a></li>
          <li><a href="#/active" :class="{selected:visibilityRef === 'active'}">Active</a></li>
          <li><a href="#/completed" :class="{selected:visibilityRef === 'completed'}">Completed</a></li>
        </ul>
        <button class="clear-completed" v-show = "completedTodosRef > 0">
          Clear completed
        </button>
      </footer>
    </section>
  </div>
</template>

<script>
import  {usetodoList} from './composition/usetodoList.js';
import useNewTodo from './composition/useNewTodo'
import useFilter from './composition/useFilter'
import useEdit from './composition/useEdit'
export default {
  setup(){
    const {todosRef} = usetodoList()
    return{
      todosRef,
      ...useNewTodo(todosRef),
      ...useFilter(todosRef),
      ...useEdit(todosRef)
    }
  }
};
</script>