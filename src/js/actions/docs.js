import { ADD_TOAST, DISMISS_TOAST } from '../constants/ActionTypes';

export function addToast(toast) {
  return {
    type: ADD_TOAST,
    toast,
  };
}

export function dismissToast() {
  return { type: DISMISS_TOAST };
}
