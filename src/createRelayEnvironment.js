import { Environment, Network, RecordSource, Store } from "relay-runtime";
import graphqlMask from "graphql-mask";
import remoteSchemaUrl from "schema.graphql";

let remoteSchemaReq = fetch(remoteSchemaUrl).then(res => res.text());

async function fetchQuery(operation, variables, cacheConfig, uploadables) {
  const remoteSchema = await remoteSchemaReq;
  return fetch("https://graphql-pokemon.now.sh/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: graphqlMask(remoteSchema, operation.text), // TODO: Add validation or switch to use graphql-gateway
      variables
    })
  }).then(response => {
    return response.json();
  });
}

const network = Network.create(fetchQuery);

const source = new RecordSource();
const store = new Store(source);

const environment = new Environment({
  network,
  store
});

export default environment;
