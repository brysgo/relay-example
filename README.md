# Relay Example

This is an example of how I use relayjs, it includes the way I mix in client
only schema. This is a work in progress, and may have mistakes because I
wrote it without referencing the actual use cases where these patterns
arose.

## Usage

Mostly everything is the same as a regular CRA app.

Run it with:

    yarn start

To run the relay compiler, use:

    yarn relay

Graphql files in the src directory get loaded for client only use, as you see
in `src/clientExtensions.graphql`.

You can also run `yarn relay -u <api-url>` to have it grab the remote schema
and pull it down for you.
