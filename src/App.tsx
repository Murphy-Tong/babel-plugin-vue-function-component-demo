import { defineComponent, onMounted, ref, type SetupContext } from 'vue'

const DefineComp = defineComponent({
  setup() {
    return function () {
      return <div>this is define component</div>
    }
  },
})

function FnComponent(props: { msg: string }, ctx: SetupContext) {
  const count = ref(0)
  onMounted(function () {
    setInterval(function () {
      count.value++
    }, 1000)
  })
  return function () {
    return <div>
      {props.msg}<br />
      {count.value}
      {ctx.slots?.default?.()}
    </div>
  }
}

export default function () {
  const tapCount = ref(0)
  return function () {
    return <FnComponent msg="count down!" >
      <button onClick={() => tapCount.value++}> tap count :{tapCount.value}</button>
      <DefineComp />
    </FnComponent>
  }
}