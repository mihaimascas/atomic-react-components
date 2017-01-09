import React from 'react';

import { Grid, Button, Icon, List, ListItem} from 'atomic-react-components';
import CodePreview from './../components/CodePreview'

export default React.createClass({
  displayName: 'VIEW_Grid',

  render () {
    console.log(List);
    console.log(ListItem);
    return (
      <div className="spl-page-wrapper">
        <h1>Atomoc React Components: ARC</h1>

        <CodePreview>
          $ npm run doc
        </CodePreview>
        <p>Documentation is static and is dored in <code>dist/doc</code> folder.</p>
        <Button>Start <Icon size='3' className="test" fixedWidth data-test="fdf" /> wewq</Button>
        <Grid.Row>
          <Grid.Cell cellSize='12:XS'>
            <List inline>
              <ListItem>Item one</ListItem>
              <ListItem>Item one</ListItem>
              <ListItem>Item one</ListItem>
            </List>
            <Icon size='2' />
          </Grid.Cell>
        </Grid.Row>
      </div>
    );
  }
});
