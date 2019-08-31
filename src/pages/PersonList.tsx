import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonAvatar
} from "@ionic/react";
import React from "react";

import { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";

import { loadAllPeople, getAllPeople } from "../data-service";

const PersonList: React.FunctionComponent<any> = ({
  history
}: RouteComponentProps<any>) => {
  const [data, setData] = useState({ persons: [] });

  useEffect(() => {
    getData();
  }, []);

  /**
   *
   */
  async function getData() {
    if (getAllPeople().length == 0) {
      const data = await loadAllPeople();
      setData({ persons: data });
    } else {
      setData({ persons: getAllPeople() as any });
    }
  }

  return (
    <>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>React Class - Ionic - In Person List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {data.persons.map((person: any) => {
          return (
            <IonItem
              key={person.phone}
              onClick={() => history.push("/person-detail/" + person.phone)}
            >
              <IonAvatar slot="start">
                <img src={person.picture.medium} />
              </IonAvatar>
              <IonLabel>
                <h1>
                  {person.name.first} {person.name.last}
                </h1>
                <h2>{person.email}</h2>
              </IonLabel>
            </IonItem>
          );
        })}
      </IonContent>
    </>
  );
};

export default PersonList;
