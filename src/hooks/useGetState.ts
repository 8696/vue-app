import type { Ref } from 'vue'
import { ref } from 'vue'

type TDispatch<T> = (value: T) => void

type GetStateAction<T> = () => T

function useGetState<T>(initialState: T): [Ref<T>, TDispatch<T>, GetStateAction<T>]

function useGetState<T = undefined>(): [
  Ref<T | undefined>,
  TDispatch<T | undefined>,
  GetStateAction<T | undefined>
]

function useGetState<T>(
  initialState?: T
): [Ref<T | undefined>, TDispatch<T | undefined>, GetStateAction<T | undefined>] {
  const state = ref<T>()

  state.value = initialState

  const setState = (patch: any) => {
    state.value = typeof patch === 'function' ? patch(state) : patch
  }

  const getState = () => {
    return state.value
  }

  return [state, setState, getState]
}
export default useGetState
