// 筛选功能
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { filterTodos } from '../utils/todoStorage';

const filterChoice = ['all', 'active', 'completed'];
export default function useFilter(todosRef) {
    const visibilityRef = ref('all');

    // 哈希值变化处理函数
    const handleHashChange = () => {
        const hash = location.hash.replace(/#\/?/, '');
        if (filterChoice.includes(hash)) {
            visibilityRef.value = hash;
        } else {
            visibilityRef.value = 'all';
            location.hash = "";
        }
    }

    onMounted(() => {
        window.addEventListener('hashchange', handleHashChange)
    });

    onUnmounted(() => {
        window.removeEventListener('hashchange', handleHashChange)
    })

    // 筛选总的数据
    const filterTodosRef = computed(() => {
        return filterTodos(todosRef.value, visibilityRef.value);
    });

    // 筛选未完成任务的数量
    const activeTodosRef = computed(() => {
        return filterTodos(todosRef.value, 'active').length;
    });

    // 筛选已完成任务的数量
    const completedTodosRef = computed(() => {
        return filterTodos(todosRef.value, 'completed').length;
    })


    return {
        visibilityRef,
        filterTodosRef,
        activeTodosRef,
        completedTodosRef
    }
}