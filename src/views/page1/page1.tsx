import { Subscriber } from "../../services/pubsub.service";
import { useState, useEffect } from "react";

export function Page1() {
  const [value, setValue] = useState<any>(new Date().toUTCString());

  useEffect(() => {
    const subscriber = Subscriber.subscribe("teste", (response) => {
      setValue(response.date);
    });

    return () => {
      subscriber.unsubscribe();
    };
  });

  useEffect(() => {
    setInterval(() => {
      insert();
    }, 1000);
  });

  function insert() {
    Subscriber.publish("teste", { date: new Date().toUTCString() });
  }

  return (
    <div>
      <h2>Page 1</h2>
      <br />
      <div>Data Atual: {value}</div>
    </div>
  );
}
