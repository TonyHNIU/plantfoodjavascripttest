import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";

export default function Register() {
  const [email, setEmail] = useState("");
  const [secret, setSecret] = useState("");
  const [apiData, setApiData] = useState([]);
  console.log("1", apiData);
  useEffect(() => {
    axios
      .get(
        `https://tweakplan.com/JavaScriptDemoSubmission-1.0/candidates?email=${email}&secret=${secret}`
      )
      .then((getData) => {
        setApiData(getData.data);
      });
  }, [email, secret]);

  return (
    <Form>
      <Form.Field>
        <label>Email</label>
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      </Form.Field>
      <Form.Field>
        <label>Secret</label>
        <input
          placeholder="Secret"
          onChange={(e) => setSecret(e.target.value)}
        />
      </Form.Field>
      <Button type="submit">Check</Button>
    </Form>
  );
}
