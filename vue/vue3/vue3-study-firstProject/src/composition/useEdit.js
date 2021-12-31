// 编辑部分

import { ref, computed } from 'vue'
export default function useEdit(todosRef) {
    let lastTitle = null; //编辑之前的内容
    const editingTodoRef = ref(null); //当前修改的任务

    /**
     * 编辑
     * @param {*} todo 要编辑的任务
     */
    const handleEditTodo = (todo) => {
        editingTodoRef.value = todo;
        lastTitle = todo.title;
    }

    // 完成编辑
    const doneEdit = (todo) => {
        editingTodoRef.value = null;
        const title = todo.title.trim();
        if (title) {
            todo.title = title;
        } else {
            const index = todosRef.value.indexOf(todo);
            if (index >= 0) {
                todosRef.value.splice(index, 1);
            }
        }
    }


    // 取消编辑
    const escEdit = (todo) => {
        todo.title = lastTitle;
        editingTodoRef.value = null;
    }

    // 一键全选
    const allDoneRef = computed({
        get() {
            return todosRef.value.filter(item => !item.completed).length === 0;
        },
        set(checked) {
            todosRef.value.forEach(item => {
                item.completed = checked;
            })
        }
    })

    return {
        editingTodoRef,
        handleEditTodo,
        doneEdit,
        escEdit,
        allDoneRef
    }
}