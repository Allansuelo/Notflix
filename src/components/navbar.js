import React from 'react';
import ReactDOM from 'react-dom';


const menus = ["Home", "Series","Movies","New","To view"];
let isLogged = false;

function NumberList(props) {
    const menus = props.numbers;
    const listItems = menus.map((number) =>
      <li>{number}</li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }
function Login(){
    if (isLogged == true){
        isLogged = false;
        console.log('isLogged: ',isLogged);
    }else
    if (isLogged == false){
        isLogged = true;
        console.log('isLogged: ',isLogged);
    }
}

class Navbar extends React.Component {

    
    render() {
        return(
        <div className="">
            <h1 className="title"> NOTFLIX</h1>
            <div className="menu"><NumberList numbers={menus} /></div>
        </div>
        )
    }
  }

  export default Navbar;