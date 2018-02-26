/**
 * @flow
 * @relayHash 8cda3657d0cff17ba3a98cf33302fde2
 */

/* eslint-disable */

"use strict";

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppQueryVariables = {| |};
export type AppQueryResponse = {|
  +pokemon: ?{|
    +id: string,
    +name: ?string,
    +active: ?boolean,
  |},
|};
*/

/*
query AppQuery {
  pokemon(name: "Pikachu") {
    id
    name
  }
}
*/

const node /*: ConcreteRequest*/ = (function() {
  var v0 = [
      {
        kind: "Literal",
        name: "name",
        value: "Pikachu",
        type: "String"
      }
    ],
    v1 = {
      kind: "ScalarField",
      alias: null,
      name: "id",
      args: null,
      storageKey: null
    },
    v2 = {
      kind: "ScalarField",
      alias: null,
      name: "name",
      args: null,
      storageKey: null
    };
  return {
    kind: "Request",
    operationKind: "query",
    name: "AppQuery",
    id: null,
    text:
      'query AppQuery {\n  pokemon(name: "Pikachu") {\n    id\n    name\n  }\n}\n',
    metadata: {},
    fragment: {
      kind: "Fragment",
      name: "AppQuery",
      type: "Query",
      metadata: null,
      argumentDefinitions: [],
      selections: [
        {
          kind: "LinkedField",
          alias: null,
          name: "pokemon",
          storageKey: 'pokemon(name:"Pikachu")',
          args: v0,
          concreteType: "Pokemon",
          plural: false,
          selections: [
            v1,
            v2,
            {
              kind: "ScalarField",
              alias: null,
              name: "active",
              args: null,
              storageKey: null
            }
          ]
        }
      ]
    },
    operation: {
      kind: "Operation",
      name: "AppQuery",
      argumentDefinitions: [],
      selections: [
        {
          kind: "LinkedField",
          alias: null,
          name: "pokemon",
          storageKey: 'pokemon(name:"Pikachu")',
          args: v0,
          concreteType: "Pokemon",
          plural: false,
          selections: [v1, v2]
        }
      ]
    }
  };
})();
node /*: any*/.hash = "c62af48a74342b4414afebe1673758ef";
module.exports = node;
