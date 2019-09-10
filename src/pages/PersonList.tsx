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
  IonThumbnail,
  IonModal
} from "@ionic/react";
import { addCircleOutline } from "ionicons/icons";

import React from "react";

import { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";

import { loadAllPeople, getAllPeople } from "../data-service";
import PersonCreate from "./PersonCreate";

const PersonList: React.FunctionComponent<any> = ({
  history
}: RouteComponentProps<any>) => {
  const [data, setData] = useState({ persons: [] });
  const [showModal, setShowModal] = useState(false);

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

  function handleModalClose(_event:any) {
    console.log(_event)
    debugger;
    setShowModal(false)
  }

  return (
    <>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>React Class - Person List</IonTitle>
          <IonButtons slot="end">
            <IonButton
              onClick={() => setShowModal(true) /*history.push('/person-new')*/}
            >
              <IonIcon slot="icon-only" icon={addCircleOutline}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonModal isOpen={showModal}>
          <PersonCreate onClose={handleModalClose}></PersonCreate>
          {/* <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton> */}
        </IonModal>

        {data.persons.map((person: any) => {
          return (
            <IonItem
              key={person.phone}
              onClick={() => history.push("/person-detail/" + person.phone)}
            >
              <IonThumbnail slot="start">
                <img src={person.picture.medium} alt={""} />
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
