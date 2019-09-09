import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonItem,
  IonLabel,
  IonInput
} from "@ionic/react";
import React from "react";

import { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";

import { getPersonById } from "../data-service";

const PersonCreate: React.FunctionComponent<any> = ({
  match,
  history
}: RouteComponentProps<any>) => {
  // react hooks...
  const useForm = (callback: Function) => {
    // this is the shap of the state model for this functional component
    const [values, setValues] = useState({
      name: {},
      location: {}
    });

    // when user calls submit, we can validate the datas state and
    // take the appropriate action
    const handleSubmit = (event: any) => {
      if (event) event.preventDefault();
      callback();
    };

    // when the data changes handle  the event and set the data
    // properly
    const handleChange = (event: any, data?: any) => {
      event.persist();

      if (data) {
        setValues({
          ...values,
          ...data
        });
      } else {
        setValues({
          ...values,
          [event.target.name]: event.target.value
        });
      }
    };

    return {
      handleChange,
      handleSubmit,
      values
    };
  };

  const { values, handleChange, handleSubmit } = useForm(() => {
    debugger;
  });

  return (
    <>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>React Class - Create Person</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div style={{ justifyContent: "center", display: "flex" }}>
          <div style={{ width: 500 }}>
            <IonItem>
              <IonLabel position="floating">First Name</IonLabel>
              <IonInput
                onInput={(_event: any) => {
                  let { value } = _event.target;
                  handleChange(_event, {
                    name: { ...values.name, ...{ first: value } }
                  });
                }}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Last Name</IonLabel>
              <IonInput
                onInput={(_event: any) => {
                  let { value } = _event.target;
                  handleChange(_event, {
                    name: { ...values.name, ...{ last: value } }
                  });
                }}
              ></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Email Address</IonLabel>
              <IonInput onInput={handleChange} name="email"></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="floating">City</IonLabel>
              <IonInput
                onInput={(_event: any) => {
                  let data = {
                    location: {
                      ...values.location,
                      ...{ city: _event.target.value }
                    }
                  };
                  handleChange(_event, data);
                }}
              ></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="floating">State</IonLabel>
              <IonInput
                onInput={(_event: any) => {
                  let data = {
                    location: {
                      ...values.location,
                      ...{ state: _event.target.value }
                    }
                  };
                  handleChange(_event, data);
                }}
              ></IonInput>
            </IonItem>
          </div>
        </div>
        <div
          style={{ justifyContent: "center", display: "flex", paddingTop: 8 }}
        >
          <IonButton color="danger" onClick={() => history.go(-1)}>
            CANCEL
          </IonButton>
          <IonButton onClick={handleSubmit}>CREATE USER</IonButton>
        </div>
      </IonContent>
    </>
  );
};

export default PersonCreate;
