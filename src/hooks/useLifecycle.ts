import {
  onMounted,
  onUpdated,
  onUnmounted,
  onBeforeMount,
  onBeforeUpdate,
  onBeforeUnmount,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
  onActivated,
  onDeactivated,
  onServerPrefetch
} from 'vue'

export const useMounted = onMounted
export const useUpdated = onUpdated
export const useUnmounted = onUnmounted
export const useBeforeMount = onBeforeMount
export const useBeforeUpdate = onBeforeUpdate
export const useBeforeUnmount = onBeforeUnmount
export const useErrorCaptured = onErrorCaptured
export const useRenderTracked = onRenderTracked
export const useRenderTriggered = onRenderTriggered
export const useActivated = onActivated
export const useDeactivated = onDeactivated
export const useServerPrefetch = onServerPrefetch


