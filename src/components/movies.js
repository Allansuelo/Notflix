import React from 'react';
import ReactDOM from 'react-dom';

class Movies extends React.Component {
    
    render() {
        const { rowLimit = 0 } = this.props;
        return(
        <div>
            {
                Array.from({ length: this.props.dataFromParent }, (_, k) => (
                <div className="moviecontainer" key={k}>
                    <div className="image">.</div>
                    <h4>Awesome movie {k+1}</h4>
                    <p>This movie is awesome </p>
                </div>
                ))
            }
            
        </div>
        )
    }
  };

  export default Movies;