import { GET_COMPONENT_DOCS } from '../constants/ActionTypes';

export function getComponentDocs(component) {
  return {
    component,
    type: GET_COMPONENT_DOCS,
  };
}
