import { OPEN_DOC_DIALOG, CLOSE_DOC_DIALOG } from '../constants/ActionTypes';

export function openDialog(name, event) {
  return { name, event, type: OPEN_DOC_DIALOG };
}

export function closeDialog(name) {
  return { name, type: CLOSE_DOC_DIALOG };
}

