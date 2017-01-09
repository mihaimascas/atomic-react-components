import React from 'react';

import { Grid, Button, Icon, List, ListItem} from 'atomic-react-components';
import CodePreview from './../components/CodePreview'

export default React.createClass({
  displayName: 'VIEW_Home',

  render () {
    console.log(List);
    console.log(ListItem);
    return (
      <div className="spl-page-wrapper">
        <h1>Atomoc React Components: ARC</h1>
        <p>Applying patternlab.io design systems to React components.</p>
        <p>BEM css class naming convention.</p>
        <h2>Initial setup</h2>
        <CodePreview>
          $ npm install
        </CodePreview>

        <p>Run project:</p>
        <CodePreview>
          $ npm run start
        </CodePreview>

        <p>Opens web server: localhost:3011 (node express)<br />
          Sample site is available at localhost:3011/site.<br />
          Live reload on code changes (webpack hot module replacement).
        </p>

        <h2>TDD</h2>
        <p>Run tests: </p>
        <CodePreview>
          $ npm run test
        </CodePreview>

        <p>Run tests and watch changes: </p>
        <CodePreview>
          $ npm run test
        </CodePreview>
        <p>Test re-run after code changes. This enables TDD.</p>

        <h2>Documentation</h2>
        <p>Library documentation is generated from comments using <a href="https://esdoc.org/">ESdocs</a>. To generate the documentation use the following command:</p>
        <CodePreview>
          $ npm run doc
        </CodePreview>
        <p>Documentation is static and is generated in <code>dist/doc</code> folder. <br/>
        </p>

      </div>
    );
  }
});
