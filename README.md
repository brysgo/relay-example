# Relay Example

This is an example of how I use relayjs, it includes the way I mix in client
only schema. This is a work in progress, and may have mistakes because I
wrote it without referencing the actual use cases where these patterns
arose.

## Usage

Mostly everything is the same as a regular CRA app.

Run it with:

    yarn start

Some differences you may notice:

    yarn relay

Will run the relay-compiler. It will also mix in your
`src/clientExtensions.graphql` in for you.

That is the file you will use to declare the additional types and fields you
want to only use locally. These extra fields you add will be filtered out in
the network layer by `graphql-mask` via `graphql-gateway`.

You can also run `yarn relay -u <api-url>` to have it grab the remote schema
and pull it down for you.
