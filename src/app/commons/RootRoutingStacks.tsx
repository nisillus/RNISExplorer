import { createStackNavigator } from 'react-navigation';

import { ROUTES_NAMES } from '../utils/routes.constant';
import * as SCREEN from '../views';

export const RootRoutingStacks = createStackNavigator({
  [ROUTES_NAMES.HomeRT]: {
    screen: SCREEN.Home
  },
  [ROUTES_NAMES.LoginRT]: {
    screen: SCREEN.Login
  }
}, {
  initialRouteName: ROUTES_NAMES.LoginRT,
  navigationOptions: {
    header: null
  }
});