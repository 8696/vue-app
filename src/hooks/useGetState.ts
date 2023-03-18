import type { Ref } from 'vue'
import { ref } from 'vue'

type TDispatch<T> = (value: T) => void

type TPatch<T> = (prevState: T) => T

type TSetStateAction<T> = T | TPatch<T>

type TGetStateAction<T> = () => Readonly<T>

function useGetState<T>(
  initialState: T
): [Ref<T>, TDispatch<TSetStateAction<T>>, TGetStateAction<T>]

function useGetState<T = undefined>(): [
  Ref<T | undefined>,
  TDispatch<TSetStateAction<T>>,
  TGetStateAction<T | undefined>
]

function useGetState<T>(
  initialState?: T
): [Ref<T | undefined>, TDispatch<TSetStateAction<T>>, TGetStateAction<T | undefined>] {
  const state = ref<T>()

  state.value = initialState

  const getState = () => {
    return state.value as T
  }

  const setState = (patch: TSetStateAction<T>) => {
    state.value = typeof patch === 'function' ? (patch as TPatch<T>)(getState()) : patch
  }

  return [state, setState, getState]
}
export default useGetState
