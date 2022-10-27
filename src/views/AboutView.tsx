import { onMounted, ref, type SetupContext } from "vue"

export default function (props: { msg: string }, ctx: SetupContext) {
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