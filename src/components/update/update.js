import axios from "axios";
import React, { useState, useEffect } from "react";
import { Form, Button } from "semantic-ui-react";

export default function Update() {
  const [repo, setRepo] = useState([]);
  const [ID, setID] = useState(null);

  const sendDataToAPI = () => {
    axios.patch(
      `https://tweakplan.com/JavaScriptDemoSubmission-1.0/candidates/${ID}`,
      { repo }
    );
  };

  useEffect(() => {
    setRepo(localStorage.getItem("repoURL"));
    setID(localStorage.getItem("ID"));
  }, []);

  return (
    <div>
      <Form>
        <Form.Field>
          <label>RepoURL</label>
          <input
            name="repo"
            placeholder="repoURL"
            value={repo}
            onChange={(e) => setRepo(e.target.value)}
          />
        </Form.Field>
        <Button type="submit" onClick={sendDataToAPI}>
          Update
        </Button>
      </Form>
    </div>
  );
}
