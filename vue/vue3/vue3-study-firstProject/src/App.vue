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
              <button class="create-date">{{formate(todo.createDate)}}</button>
              <button class="destroy" @click="remove(todo)"></button>
            </div>
            <input class="edit" type="text" 
            @keyup.enter="doneEdit(todo)"
            @blur="doneEdit(todo)"
            @keyup.escape="escEdit(todo)"
            v-model="todo.title"
            />
          </li>
        </ul>
      </section>
      <footer class="footer" v-show="todosRef.length > 0">
        <span class="todo-count">
          <strong>{{activeTodosRef}}</strong>
          <span>item{{activeTodosRef===1?'':'s'}} left</span>
        </span>
        <ul class="filters">
          <li><a href="#/all" :class="{selected:visibilityRef === 'all'}">All</a></li>
          <li><a href="#/active" :class="{selected:visibilityRef === 'active'}">Active</a></li>
          <li><a href="#/completed" :class="{selected:visibilityRef === 'completed'}">Completed</a></li>
        </ul>
        <button class="clear-completed" v-show = "completedTodosRef > 0" @click="removeAllCompleted">
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
import useRemove from './composition/useRemove'
import formateDate from './utils/formateDate';
export default {
  setup(){
    const {todosRef} = usetodoList()
    return{
      todosRef,
      ...useNewTodo(todosRef),
      ...useFilter(todosRef),
      ...useEdit(todosRef),
      ...useRemove(todosRef),
      ...formateDate()
    }
  }
};
</script>