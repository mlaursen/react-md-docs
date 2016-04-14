import {
  ADD_TOAST,
  DISMISS_TOAST,
  SEARCH_FOR_COMPONENT,
  START_QUICK_SEARCHING,
  STOP_QUICK_SEARCHING,
  INITIALIZE_COLORS,
} from '../constants/ActionTypes';

export function addToast(toast) {
  return {
    type: ADD_TOAST,
    toast,
  };
}

export function dismissToast() {
  return { type: DISMISS_TOAST };
}

export function searchForComponent(query) {
  return {
    type: SEARCH_FOR_COMPONENT,
    query,
  };
}

export function startQuickSearching() {
  return { type: START_QUICK_SEARCHING };
}

export function stopQuickSearching() {
  return { type: STOP_QUICK_SEARCHING };
}

export function initializeColors() {
  return { type: INITIALIZE_COLORS };
}
