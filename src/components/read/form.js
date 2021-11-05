import React, { useState, useEffect } from "react";
import { Table, Button } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Form() {
  const [apiData, setApiData] = useState([]);
  console.log("2", apiData);
  useEffect(() => {
    axios
      .get(
        `https://tweakplan.com/JavaScriptDemoSubmission-1.0/candidates?email=hui-niu@outlook.com&secret=nh123`
      )
      .then((getData) => {
        setApiData(getData.data);
      });
  }, []);

  const setData = (id, repoURL) => {
    localStorage.setItem("ID", id);
    localStorage.setItem("repoURL", repoURL);
  };

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>ID</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>Secret</Table.HeaderCell>
          <Table.HeaderCell>RepoURL</Table.HeaderCell>
          <Table.HeaderCell>Created</Table.HeaderCell>
          <Table.HeaderCell>Modified</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>{apiData.id}</Table.Cell>
          <Table.Cell>{apiData.email}</Table.Cell>
          <Table.Cell>{apiData.secret}</Table.Cell>
          <Table.Cell>{apiData.repoURL}</Table.Cell>
          <Table.Cell>{apiData.created}</Table.Cell>
          <Table.Cell>{apiData.modified}</Table.Cell>
          <Table.Cell>
            <Link to="/update">
              <Button
                color="green"
                onClick={() => setData(apiData.id, apiData.repoURL)}
              >
                Update
              </Button>
            </Link>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
