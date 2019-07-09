/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type createPlanetMutationInput = {
    readonly name: string;
    readonly description: string;
    readonly img: string;
    readonly clientMutationId?: string | null;
};
export type CreatePlanetQueryVariables = {
    readonly input: createPlanetMutationInput;
};
export type CreatePlanetQueryResponse = {
    readonly createPlanetMutation: {
        readonly success: string | null;
        readonly error: string | null;
        readonly planets: ReadonlyArray<{
            readonly id: string;
            readonly name: string | null;
            readonly img: string | null;
            readonly description: string | null;
            readonly idUser: string | null;
        } | null> | null;
    } | null;
};
export type CreatePlanetQuery = {
    readonly response: CreatePlanetQueryResponse;
    readonly variables: CreatePlanetQueryVariables;
};



/*
mutation CreatePlanetQuery(
  $input: createPlanetMutationInput!
) {
  createPlanetMutation(input: $input) {
    success
    error
    planets {
      id
      name
      img
      description
      idUser
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "createPlanetMutationInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createPlanetMutation",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "createPlanetMutationPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "success",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "error",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "planets",
        "storageKey": null,
        "args": null,
        "concreteType": "Planets",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "img",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "description",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "idUser",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreatePlanetQuery",
    "type": "MutationType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CreatePlanetQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreatePlanetQuery",
    "id": null,
    "text": "mutation CreatePlanetQuery(\n  $input: createPlanetMutationInput!\n) {\n  createPlanetMutation(input: $input) {\n    success\n    error\n    planets {\n      id\n      name\n      img\n      description\n      idUser\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '02cb4e0d912584f4eccc0de56cfef3b8';
export default node;