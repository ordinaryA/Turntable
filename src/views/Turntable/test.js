import { ref } from 'vue';

export function useTest() {
    const test = ref('123123')

    const testFn = () => {
        test.value = '456456'
    }

    return { test, testFn }
}

export default {}