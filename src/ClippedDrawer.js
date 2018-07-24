import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import MyAppBar from './MyAppBar';
import LeftItems from './LeftItems';
import ContentIndex from './ContentIndex';

const drawerWidth = 200;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
});

class ClippedDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showContent: 'ContentA',
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(content) {
    this.setState(() => ({showContent: content}));
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <MyAppBar />
        <Drawer
          variant="permanent"
          classes={{
            paper: this.props.classes.drawerPaper,
          }}
        >
          <div className={this.props.classes.toolbar} />
          <LeftItems handleClick={this.handleClick} />
        </Drawer>
        <main className={this.props.classes.content}>
          <div className={this.props.classes.toolbar} />
          <ContentIndex showContent={this.state.showContent} />
        </main>
      </div>
    );
  };
}

ClippedDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClippedDrawer);
