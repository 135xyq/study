//任务列表

import { ref, watchEffect } from 'vue';
import * as todosStorage from '../utils/todoStorage';

export function usetodoList() {
    const todosRef = ref(todosStorage.fetch());
    watchEffect(() => {
        todosStorage.save(todosRef.value)
    })

    return {
        todosRef,
    }
}