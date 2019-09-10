import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonButtons,
  IonButton,
  IonIcon,
  IonThumbnail
} from "@ionic/react";
import { addCircleOutline } from "ionicons/icons";

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
    if (getAllPeople().length === 0) {
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
          <IonTitle>React Class - Person List</IonTitle>
          <IonButtons slot="end">
          <IonButton onClick={() => history.push('/person-new')}>
            <IonIcon slot="icon-only" icon={addCircleOutline}></IonIcon>
          </IonButton>
        </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {data.persons.map((person: any) => {
          return (
            <IonItem
              key={person.phone}
              onClick={() => history.push("/person-detail/" + person.phone)}
            >
              <IonThumbnail slot="start">
                <img src={person.picture.medium}  alt={""}/>
              </IonThumbnail>
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
