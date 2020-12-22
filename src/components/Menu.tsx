import * as React from 'react';
import { createElement } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles, Theme, useMediaQuery } from '@material-ui/core';
import { MenuItemLink, getResources } from 'react-admin';
import { withRouter } from 'react-router-dom';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { drawerActive } from '../theme/theme';

const useStyles = makeStyles({
  root: {
    '&:hover': {
      background: 'rgba(230,80,0,0.04)',
    },
    '& .MuiListItemIcon-root': {},
  },
  active: {
    color: drawerActive.textColor,
    background: 'rgba(230,80,0,0.1)',
    '& .MuiListItemIcon-root': {
      color: drawerActive.iconColor,
    },
  },
});

const Menu = ({ onMenuClick, logout }: any) => {
  const isXSmall = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('xs')
  );
  const open = useSelector((state: any) => state.admin.ui.sidebarOpen);
  const resources = useSelector(getResources);

  const classes = useStyles();
  return (
    <div>
      <MenuItemLink
        key='dashboard'
        to='/'
        className={classes.root}
        primaryText='Dashboard'
        activeClassName={classes.active}
        leftIcon={<DashboardIcon />}
        onClick={onMenuClick}
        sidebarIsOpen={open}
        exact={true}
      />
      {resources.map((resource: any) => (
        <MenuItemLink
          key={resource.name}
          to={`/${resource.name}`}
          className={classes.root}
          primaryText={
            (resource.options && resource.options.label) || resource.name
          }
          activeClassName={classes.active}
          leftIcon={createElement(resource.icon)}
          onClick={onMenuClick}
          sidebarIsOpen={open}
        />
      ))}
      {isXSmall && logout}
    </div>
  );
};

export default withRouter(Menu);
