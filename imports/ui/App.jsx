import React from 'react';
import SimpleSchema from 'simpl-schema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';

// This works fine both in browser and in cordova app:
// import {AutoForm} from 'uniforms-unstyled'

// I copied uniforms-unstyled from node_modules into /imports/ui and importing from there works fine in browser
// but yields error in cordova (TypeError: Cannot call a class constructor without new):
import {AutoForm} from '/imports/ui/uniforms-unstyled'

const schema = new SimpleSchema({
  someString: String
});

const bridge = new SimpleSchema2Bridge(schema);

export const App = () => (
  <div>
    <AutoForm schema={bridge} />
  </div>
);

