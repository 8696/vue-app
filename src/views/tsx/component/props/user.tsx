import style from './index.module.scss'
import { ElButton } from 'element-plus'
export type TProps = {
  name: string
  age?: number
  onChange: (name: string) => void
  onAgeChange: (age: number) => void
}

export default (props: TProps) => {
  console.log(props)
  const { name, age = 20, onChange, onAgeChange } = props
  return (
    <>
      <div class="m-content">
        <div>name: {name}</div>
        <div class={style.title}>age: {age}</div>
      </div>
      <div>
        <ElButton
          onClick={() => {
            onChange(Math.random().toString())
          }}
        >
          change name
        </ElButton>
        <ElButton
          onClick={() => {
            onAgeChange(age + 1)
          }}
        >
          age +1
        </ElButton>
        <ElButton
          disabled={age === 0}
          onClick={() => {
            onAgeChange(age - 1)
          }}
        >
          age -1
        </ElButton>
      </div>
    </>
  )
}
