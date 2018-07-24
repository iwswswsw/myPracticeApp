import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const LeftItems = (props) => (
  <List>
    <div>
      <ListItem button onClick={() => props.handleClick('ContentA')}>
        <ListItemText primary="ContentA" />
      </ListItem>
      <ListItem button onClick={() => props.handleClick('ContentB')}>
        <ListItemText primary="ContentB" />
      </ListItem>
    </div>
  </List>
);

export default LeftItems;
