import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [secret, setSecret] = useState("");
  const [apiData, setApiData] = useState([]);
  const [registered, setRegistered] = useState(false);

  async function sumbit() {
    const response = await axios.get(
      `https://tweakplan.com/JavaScriptDemoSubmission-1.0/candidates?email=${email}&secret=${secret}`
    );
    return response;
  }

  async function check() {
    if (email.length > 0 && secret.length > 0) {
      try {
        const response = await sumbit();
        if (response.status === 200) {
          if (response.data.length === 0) {
            alert("Try again");
          } else {
            setApiData(response.data);
            setRegistered(true);
          }
        }
      } catch (e) {
        console.log(e.response);
      }
    }
  }

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
      {!registered ? (
        <Button type="submit" onClick={() => check()}>
          Submit
        </Button>
      ) : (
        <Link to="/read">
          <Button type="submit" onClick={() => check()}>
            Login
          </Button>
        </Link>
      )}
    </Form>
  );
}
