import React from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonPage, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter, ViewManager } from "@ionic/react-router";
import PersonList from "./pages/PersonList";
import PersonDetail from "./pages/PersonDetail";
import PersonCreate from "./pages/PersonCreate";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FunctionComponent = () => (
  <IonApp>
    <IonReactRouter>
      <IonPage>
        <ViewManager>
          <IonRouterOutlet>
            <Route path="/person-list" component={PersonList} exact={true} />
            <Route
              path="/person-detail/:userId"
              component={PersonDetail}
              exact={true}
            />
            <Route path="/person-new" component={PersonCreate} exact={true} />
            <Route
              exact
              path="/"
              render={() => <Redirect to="/person-list" />}
            />
          </IonRouterOutlet>
        </ViewManager>
      </IonPage>
    </IonReactRouter>
  </IonApp>
);

export default App;
