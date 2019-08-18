import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CameraIcon from '@material-ui/icons/Restaurant';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import fallbackImg from '../img/fallback.png';
import recipes from '../recipes';

const styles = theme => ({
  appBar: {
    position: 'relative'
  },
  icon: {
    marginRight: theme.spacing.unit * 2
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  cardItem: {
    padding: '3px 0'
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6
  }
});

const DialogTitle = withStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit * 2
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing.unit,
    top: theme.spacing.unit,
    color: theme.palette.grey[500]
  }
}))(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="Close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing.unit * 2
  }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    borderTop: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit
  }
}))(MuiDialogActions);
const getPath = n =>
  n
    .replace(/[^\w\s]/gi, '')
    .split(' ')
    .join('-')
    .toLowerCase();

class App extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  state = { open: null };

  componentDidMount() {
    if (location.pathname === '/') {
      return;
    }

    const initiallyOpen = recipes.find(r => {
      return `/${getPath(r.name)}` === location.pathname;
    });

    if (!initiallyOpen) {
      return;
    }

    this.setState({
      open: initiallyOpen.name
    });
  }

  dialogOpen = n => {
    history.pushState({}, n, getPath(n));
    this.setState({ open: n });
  };

  dialogClose = () => {
    this.setState({ open: null });
    history.pushState({}, '', '/');
  };

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <CssBaseline />
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <CameraIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap>
              Recipes
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          <div className={classes.heroUnit}>
            <div className={classes.heroContent}>
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Recipes
              </Typography>
              <Typography
                variant="h6"
                align="center"
                color="textSecondary"
                paragraph
              >
                This site is dedicated my wonderful Nonna, Yvette Pivetta.
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={16} justify="center">
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      href="mailto:me@harris-schneiderman.com"
                    >
                      Request Recipe Addition
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
          <div className={classNames(classes.layout, classes.cardGrid)}>
            <Grid container spacing={40}>
              {recipes.map((card, cardIndex) => (
                <Grid item key={cardIndex} sm={6} md={4} lg={3}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={card.image || fallbackImg}
                      title={card.name}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {card.name}
                      </Typography>
                      {card.type && (
                        <p>
                          <em>{card.type}</em>
                        </p>
                      )}
                      <Typography>{card.description}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="small"
                        color="primary"
                        onClick={() => this.dialogOpen(card.name)}
                      >
                        View recipe
                      </Button>
                    </CardActions>
                  </Card>
                  <Dialog
                    onClose={this.dialogClose}
                    aria-labelledby="customized-dialog-title"
                    open={this.state.open === card.name}
                  >
                    <DialogTitle
                      id="customized-dialog-title"
                      onClose={this.dialogClose}
                    >
                      {card.name}
                    </DialogTitle>
                    <DialogContent>
                      <Typography gutterBottom variant="h6" component="h6">
                        Ingredients
                      </Typography>
                      <ul>
                        {card.ingredients.map((ingredient, i) => (
                          <li
                            className={classes.cardItem}
                            key={`${card.name}-${cardIndex}-${i}`}
                          >
                            {typeof ingredient === 'string' ? (
                              ingredient
                            ) : (
                              <Fragment>
                                {ingredient.amount && (
                                  <strong>
                                    <em>{ingredient.amount}</em>{' '}
                                  </strong>
                                )}
                                <span>{ingredient.value}</span>
                              </Fragment>
                            )}
                          </li>
                        ))}
                      </ul>
                      <Typography gutterBottom variant="h6" component="h6">
                        Directions
                      </Typography>
                      <ol>
                        {card.directions.map((d, i) => (
                          <li
                            className={classes.cardItem}
                            key={`dir-${card.name}-${i}`}
                          >
                            {d}
                          </li>
                        ))}
                      </ol>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={this.dialogClose} color="primary">
                        Dismiss
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Grid>
              ))}
            </Grid>
          </div>
        </main>
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Mangia!
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            Go cook this shit
          </Typography>
        </footer>
      </Fragment>
    );
  }
}

export default withStyles(styles)(App);
