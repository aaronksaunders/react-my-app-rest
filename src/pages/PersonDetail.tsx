import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonAvatar,
  IonButton
} from "@ionic/react";
import React from "react";

import { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";

import { getPersonById } from "../data-service";

const PersonDetail: React.FunctionComponent<any> = ({
  match,
  history
}: RouteComponentProps<any>) => {
  const [data, setPerson] = useState({ person: null });

  useEffect(() => {
    let p = getPersonById(match.params.userId);
    setPerson({ person: p as any });
  }, []);

  const renderPerson = () => {
    let person: any = data.person;
    return person ? (
      <>
        <img src={person.picture.large} />
        <div>
          {person.name.first} {person.name.last}
        </div>
        <div>{person.phone}</div>
      </>
    ) : null;
  };

  return (
    <>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>React Class - Ionic - Person Detail</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {renderPerson()}
        <IonButton onClick={() => history.go(-1)}>GO BACK</IonButton>
      </IonContent>
    </>
  );
};

export default PersonDetail;
