import './ViewUsers.css';

function ItemViewUser(props) {
    return (
        <div key={props.id} className="itemViewUser"> 
            <p> <strong> {props.first_name} </strong> </p> 
            <p> {props.email} </p> 
            <img key={props.avatar} src= {props.avatar} /> 
        </div>
    );
  }
  
  export default ItemViewUser;
  