import { defineComponent, ref } from 'vue'
import './app.css'
import AboutView from './views/AboutView'

const Inner = defineComponent({
  setup(props, ctx) {
    return function () {
      return <div>this is inner</div>
    }
  },
})

// window.aa

export default function () {
  const tapCount = ref(0)
  return function () {
    return <AboutView msg="count down!" >
      <button onClick={() => tapCount.value++}> tap count :{tapCount.value}</button>
      <Inner />
      <Inner />
    </AboutView>
  }
}