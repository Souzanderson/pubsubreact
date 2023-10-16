import { useState, useEffect } from "react";
import { Subscriber } from "../../services/pubsub.service";

export function Page2() {
  const [value, setValue] = useState("");

  useEffect(() => {
    const subscriber = Subscriber.subscribe("teste", (response) => {
      setValue(response.date);
    });

    return () => {
      subscriber.unsubscribe();
    };
  });

  return (
    <div>
      <h2>Page 2</h2>
      <br />
      <div>Data inscrita: {value}</div>
    </div>
  );
}

