import { defineComponent, ref, onMounted } from 'vue'
import { ElButton } from 'element-plus'
export default defineComponent({
  setup() {
    const count = ref(0)
    function increment() {
      count.value++
    }

    onMounted(() => {
      console.log('Component mounted')
    })

    return {
      count,
      increment
    }
  },
  render() {
    // console.log('render')
    const { count, increment } = this
    return (
      <div>
        <div class="m-content">Count: {count}</div>
        <ElButton onClick={increment}>Increment</ElButton>
      </div>
    )
  }
})
