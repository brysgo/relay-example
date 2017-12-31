/**
 * @flow
 * @relayHash 8ed260e19ded124200f31f1b9b6a576d
 */

/* eslint-disable */

"use strict";

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type AppQueryResponse = {|
  +pokemon: ?{|
    +id: string;
    +name: ?string;
    +active: ?boolean;
  |};
|};
*/

/*
query AppQuery {
  pokemon(name: "Pikachu") {
    id
    name
    active
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  fragment: {
    argumentDefinitions: [],
    kind: "Fragment",
    metadata: null,
    name: "AppQuery",
    selections: [
      {
        kind: "LinkedField",
        alias: null,
        args: [
          {
            kind: "Literal",
            name: "name",
            value: "Pikachu",
            type: "String"
          }
        ],
        concreteType: "Pokemon",
        name: "pokemon",
        plural: false,
        selections: [
          {
            kind: "ScalarField",
            alias: null,
            args: null,
            name: "id",
            storageKey: null
          },
          {
            kind: "ScalarField",
            alias: null,
            args: null,
            name: "name",
            storageKey: null
          },
          {
            kind: "ScalarField",
            alias: null,
            args: null,
            name: "active",
            storageKey: null
          }
        ],
        storageKey: 'pokemon{"name":"Pikachu"}'
      }
    ],
    type: "Query"
  },
  id: null,
  kind: "Batch",
  metadata: {},
  name: "AppQuery",
  query: {
    argumentDefinitions: [],
    kind: "Root",
    name: "AppQuery",
    operation: "query",
    selections: [
      {
        kind: "LinkedField",
        alias: null,
        args: [
          {
            kind: "Literal",
            name: "name",
            value: "Pikachu",
            type: "String"
          }
        ],
        concreteType: "Pokemon",
        name: "pokemon",
        plural: false,
        selections: [
          {
            kind: "ScalarField",
            alias: null,
            args: null,
            name: "id",
            storageKey: null
          },
          {
            kind: "ScalarField",
            alias: null,
            args: null,
            name: "name",
            storageKey: null
          },
          {
            kind: "ScalarField",
            alias: null,
            args: null,
            name: "active",
            storageKey: null
          }
        ],
        storageKey: 'pokemon{"name":"Pikachu"}'
      }
    ]
  },
  text:
    'query AppQuery {\n  pokemon(name: "Pikachu") {\n    id\n    name\n    active\n  }\n}\n'
};

module.exports = batch;
