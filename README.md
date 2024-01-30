# React + Vite Runtime Environment Variables

This project shares one way to implement support for "runtime" environment
variables for a React app.

Here's what you'll find in this `README`:

* Business Problem - Providing context around why this may be needed
* Technical Design - Details around the technical implementation, in case you are curious for a high level walk through of the architecture behind this
* How to Run This - In case you'd like to run the app yourself, this provides instruction for doing so

## Business Problem

### What are runtime environment variables?

These are environment variables for the application that come
from an external source at run time -- in our case, a `json` file.

Traditionally, this configuration comes from a `.env` file.  Thus,
at build time, the bundle has access to these variables to be able
to configure itself.

### Why runtime environment variables?

This is useful if you have a requirement from DevOps where you'd like
to build once and deploy many.  For example, I ran into this when we simply 
wanted to promote from `staging` to `production`.

Given that we could only build once, we needed a way to change the
configuration of an application at runtime.

## Technical Design

### Overview

As with anything else in our line of work, there are many different
ways to implement something.  Thus, there's many ways to implement
the solution to solve for this problem.  The approach I took is: **Vanilla**.  Meaning, it should be simple to use this outside of "React World".

Let's walk through the architecture.

The high level approach is:

* JSON File - You have a JSON file that lives on the web server (in our case this means `public`)
* Runtime hydration - At runtime, while starting up the app, we fetch the file and then set the environment variables in a singleton
* Usage - Throughout our app, we can now access those environment variables

As you'll see, this vanilla approach is powerful because you can reference environment variables outside of react components.  :)

### Environment Variables

This is the code that lives in `src/utils/environmentVariables`.  This is
the core part of the implementation.

Let's start with what gets exported from this directory:

* `getEnvironmentVariablesJson` - Utility function for fetching the file in `main.tsx`
* `environmentVariablesInstance` - This is the "singleton" that will be used to set and get the variables throughout the app

The two files are the modules used to interface with said environment 
variables.

Now, with that out of the way, we have types and the module that declares 
the `class` for `EnvironmentVariables`.

### Using Environment Variables

There are few things worth highlighting here:

1. `main.tsx` - This is where we fetch the file and set the variables in
by calling the singleton's `set` method.
2. `App.tsx` - Here we "print" the environment variables to demo the functionality.  Additionally, we import the singleton and directly get the value for the the first variable to demonstrate usage within a component.  Secondly, we import some utility function that returns an object, where one of the properties contains the value of the second environment variable.  This is done to demonstrate why the vanilla pattern is powerful; it can be used to easily configure packages/3rd party libraries.

### Conclusion

That should provide a high level walk through of implementation details.

## How to run

1. Clone the repo
2. Ensure you have at least `v18.2.0`, as this is the only version I've tested this project on
3. Run `npm install`
4. Run `npm run dev`