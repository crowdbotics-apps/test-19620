import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen1991420Navigator from '../features/BlankScreen1991420/navigator';
import ArticleList91403Navigator from '../features/ArticleList91403/navigator';
import ArticleList91402Navigator from '../features/ArticleList91402/navigator';
import ArticleList91401Navigator from '../features/ArticleList91401/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen1991420: { screen: BlankScreen1991420Navigator },
ArticleList91403: { screen: ArticleList91403Navigator },
ArticleList91402: { screen: ArticleList91402Navigator },
ArticleList91401: { screen: ArticleList91401Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
