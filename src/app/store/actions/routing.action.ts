import {
  NavigationContainer,
  NavigationNavigateActionPayload
} from 'react-navigation';

import { IAppAction, IAppStateError } from '../states';

export interface ISetTopLevelNavigatorAction extends IAppAction {
  payload: {
    navigator: NavigationContainer
  }
}

export interface IRoutingNavigateAction extends IAppAction {
  payload: NavigationNavigateActionPayload
}

export interface IRoutingFailureAction extends IAppAction {
  payload: IAppStateError
}

export const ROUTING_ACTION_TYPES = {
  SET_TOP_LEVEL_NAVIGATOR: '[ROUTING_ACTION_TYPES]_SET_TOP_LEVEL_NAVIGATOR',
  NAVIGATE: '[ROUTING_ACTION_TYPES]_NAVIGATE',
  ROUTING_ACTION_FAILURE: '[ROUTING_ACTION_TYPES]_ROUTING_ACTION_FAILURE'
}

export const ROUTING_ACTIONS = {
  setTopLevelNavigator: (navigationRef: NavigationContainer): ISetTopLevelNavigatorAction => ({
    type: ROUTING_ACTION_TYPES.SET_TOP_LEVEL_NAVIGATOR,
    payload: { navigator: navigationRef }
  }),
  navigate: (options: NavigationNavigateActionPayload): IRoutingNavigateAction => ({
    type: ROUTING_ACTION_TYPES.NAVIGATE,
    payload: options
  }),
  routingActionFailure: (data: IAppStateError): IRoutingFailureAction => ({
    type: ROUTING_ACTION_TYPES.ROUTING_ACTION_FAILURE,
    payload: data
  })
}