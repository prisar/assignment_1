import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store/Movies';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class Movies extends Component {
  
  constructor(props){
    super(props)
    this.props.requestMovies("");
    this.state = {
      open: false,
      edit_movie_index: 0,
      make_movie_editable: false
    };
  }

  handleClickOpen = () => {
    console.log("open")
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  
  componentWillMount() {
    // This method runs when the component is first added to the page
    //const startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
    //this.props.requestMovies(startDateIndex);
  }

  componentWillReceiveProps(nextProps) {
    // This method runs when incoming props (e.g., route params) change
    const startDateIndex = parseInt(nextProps.match.params.startDateIndex, 10) || 0;
    //this.props.requestMovies(startDateIndex);
  }

  render() {
    return (
      <div style={{height:'100%',width:"100%"}}>
        <h1>Movies</h1>
        <p>This component demonstrates fetching data from the server and working with URL parameters.</p>
        {this.renderMoviesTable(this.props)}
        {renderPagination(this.props)}
        {console.log(this)}
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
        {console.log(this.state.open)}
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send
              updates occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  renderMoviesTable = () => {
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Release Date</th>
            <th>Plot</th>
            <th>Poster</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.props.movies!=null?this.props.movies.map(movie =>
            <tr key={movie.name}>
              <td>{movie.name}</td>
              <td>{movie.yearOfRelease}</td>
              <td>{movie.plot}</td>
              <td>{movie.poster}</td>
              <td><button className="btn-warning" onClick={()=>this.handleClickOpen()}>Edit</button></td>
            </tr>
          ):<div>No Data</div>}
        </tbody>
      </table>
    );
  }
}

function renderPagination(props) {
  const prevStartDateIndex = (props.startDateIndex || 0) - 5;
  const nextStartDateIndex = (props.startDateIndex || 0) + 5;

  return <p className='clearfix text-center'>
    <Link className='btn btn-default pull-left' to={`/movies/${prevStartDateIndex}`}>Previous</Link>
    <Link className='btn btn-default pull-right' to={`/movies/${nextStartDateIndex}`}>Next</Link>
    {props.isLoading ? <span>Loading...</span> : []}
  </p>;
}

export default connect(
  state => state.movies,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Movies);
