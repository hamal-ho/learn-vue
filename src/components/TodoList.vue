<template>
  <div>
    <BaseInputText v-model="newTodoText" placeholder="New todo" @keydown.enter="addTodo"/>
    <ul v-if="todos.length">
      <TodoListItem v-for="todo in todos" :key="todo.id" :todo="todo" @remove="removeTodo"/>
    </ul>
  </div>
</template>
<script>
import BaseInputText from "./BaseInputText";
import TodoListItem from "./TodoListItem";

let nextTodoId = 1;

export default {
  components: {
    BaseInputText,
    TodoListItem
  },
  data() {
    return {
      newTodoText: "",
      todos: [
        {
          id: nextTodoId++,
          text: "Learn Vue"
        },
        {
          id: nextTodoId++,
          text: "Learn about single-file components"
        },
        {
          id: nextTodoId++,
          text: "Fall in love"
        }
      ]
    };
  },
  methods: {
    addTodo() {
      const text = this.newTodoText.trim();
      if (text) {
        this.todos.push({
          id: nextTodoId++,
          text
        });
        this.newTodoText = "";
      }
    },
    removeTodo(idToRemove) {
      this.todos = this.todos.filter(todo => todo.id !== idToRemove);
    }
  }
};
</script>