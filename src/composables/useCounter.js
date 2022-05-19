import {ref, computed} from 'vue'
export default () => {
    const count = ref(0)
    const increment = () => count.value++

    const countPlusOne = computed(() => count.value + 1)

    return {count, increment, countPlusOne}
}