import React from 'react'
import { AppBar, Toolbar, IconButton, makeStyles } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { UserSearchInput } from './UserSearchInput'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(2),
  },
}))

type MainAppBarProps = {
  searchVal: String
  onSearchSubmit: Function
  onSearchValChange: Function
}

const MainAppBar = ({
  searchVal,
  onSearchSubmit,
  onSearchValChange,
}: MainAppBarProps) => {
  const classes = useStyles()

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <IconButton edge="start" color="inherit">
          <MenuIcon />
        </IconButton>
        <UserSearchInput
          value={searchVal}
          onChange={onSearchValChange}
          onSubmit={onSearchSubmit}
        />
      </Toolbar>
    </AppBar>
  )
}

export { MainAppBar }
