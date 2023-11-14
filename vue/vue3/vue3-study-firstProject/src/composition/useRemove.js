// 删除

export default function useRemove(todosRef) {
    // 删除一个
    const remove = todo => {
        todosRef.value.splice(todosRef.value.indexOf(todo), 1);
    }

    // 删除所有已完成
    const removeAllCompleted = () => {
        todosRef.value = todosRef.value.filter(item => !item.completed)
    }

    return {
        remove,
        removeAllCompleted
    }
}