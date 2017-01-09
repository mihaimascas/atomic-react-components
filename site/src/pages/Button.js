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
        <h1>Atom: <strong>Button</strong></h1>

        <h2>Buttons types</h2>

        <Button>Default Button</Button>
        <br />
        <br />
        <Button theme="primary">Primary Button</Button>
        <br />
        <br />
        <Button theme="secondary">Secondary Button</Button>

        <CodePreview language="jsx">
          {`
<Button>Default Button</Button>
<Button theme="primary">Primary Button</Button>
<Button theme="secondary">Secondary Button</Button>
`}
        </CodePreview>

        <h3>Buttons Sizes</h3>

        <Button>Default Size</Button>
        <br />
        <br />
        <Button size="small">Small size</Button>
        <br />
        <br />
        <Button size="large">Large Size</Button>

        <CodePreview language="jsx">
          {`
<Button>Default Size</Button>
<Button size="small">Small size</Button>
<Button size="large">Large Size</Button>
          `}
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
