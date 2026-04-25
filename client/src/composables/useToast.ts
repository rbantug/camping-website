import { ref } from 'vue'

type ToastType = 'success' | 'error' | 'info'
type ToastPosition = 'top-right' | 'bottom-left' | 'bottom-center'

interface Toast {
  id: number
  message: string
  type?: ToastType
  duration?: number
}

const toasts = ref<Toast[]>([])
const position = ref<ToastPosition>('top-right')

let id = 0

export function useToast() {
  function show(message: string, type: ToastType = 'info', duration = 3000) {
    const toast: Toast = {
      id: id++,
      message,
      type,
      duration,
    }

    toasts.value.push(toast)

    if (duration > 0) {
      setTimeout(() => remove(toast.id), duration)
    }
  }

  function remove(toastId: number) {
    toasts.value = toasts.value.filter((t) => t.id !== toastId)
  }

  function setPosition(pos: ToastPosition) {
    position.value = pos
  }

  return {
    toasts,
    position,
    show,
    remove,
    setPosition,
  }
}
