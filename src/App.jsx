import React, { useContext, useEffect } from 'react';

import {
  HashRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import { light as ThemeLight } from "./utils";
import { Layout } from "./components/UI";
import { HomePage } from './views';

const useStyles = makeStyles((theme) => ({
  globalStyle: {
    backgroundColor: theme.palette.background.default,
    transition: "all 0.25s linear",
    minHeight: "100%",
  },
}));

const AppConstantsDefault = {
  setTheme: null,
  currentTheme: "light",
  version: "0.0.1", //Para cada commit, o terceiro número sobe 1,
  //para cada release o segundo número sobe 1
  //Para cada versão oficial lançada, o primeiro número sobe 1
  //Quando o número a esquerda sobe, os demais ficam 0, ex: 0.2.12 -> 0.3.0
  header: {
    currentTitle: "Inicio",
  },
  user: {
    name: "",
  },
};

export const AppContext = React.createContext(AppConstantsDefault);

function MainContainer(props) {
  const match = useRouteMatch();
  return (
    <Layout>
      <Switch>
        <Route path={`${match.url}`} component={HomePage} />
      </Switch>
    </Layout>
  )
}

function AppContainer(props) {
  const classes = useStyles();
  return (
    <div className={classes.globalStyle}>
      <Router>
        <Switch>
          <Route path="/" component={MainContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default function App(props) {
  const appConstants = useContext(AppContext);

  useEffect(() => {
    document.title = `Electron App v${appConstants.version}`;
  }, [appConstants.version]);

  return (
    <ThemeProvider theme={ThemeLight}>
      <AppContext.Provider value={appConstants}>
        <AppContainer />
      </AppContext.Provider>
    </ThemeProvider>
  );
}