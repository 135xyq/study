// 新增任务

import { ref } from 'vue';
import { createId } from '../utils/todoStorage';
export default function useNewTodo(todosRef) {
    const newTodoRef = ref('');
    const addTodo = () => {
        const value = newTodoRef.value && newTodoRef.value.trim();
        if (!value) {
            return;
        }

        const newTodoIfo = {
            id: createId(),
            title: value,
            completed: false,
            createDate: Date.now(),
        }
        todosRef.value.push(newTodoIfo);
        newTodoRef.value = "";
    };

    return {
        newTodoRef,
        addTodo
    }
}