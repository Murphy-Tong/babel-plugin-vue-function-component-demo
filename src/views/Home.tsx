export default function (props?: { title: string }) {
  return function () {
    return <div>this is home title {props?.title}</div>
  }
}