import moment from "moment";
import { ResultModel } from "../../../Models/Users";
import "./UserCard.css";

interface UserCardProps{
   result:ResultModel; 
}
function UserCard(props:UserCardProps): JSX.Element {
    return (
        <div className="UserCard">
			<p>{props.result.name.title} {props.result.name.first} {props.result.name.last}</p>
            <p>({props.result.location.coordinates.latitude},{props.result.location.coordinates.longitude})</p>
            <p>{moment(props.result.dob.date).format("DD/MM/yyyy - hh:mm:ss")}</p>
            <img src={props.result.picture.medium} alt={props.result.name.first}/>

        </div>
    );
}

export default UserCard;
