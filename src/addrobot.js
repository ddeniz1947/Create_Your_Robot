import React from 'react';
const AddRobot = ({ addRobotName }) => {
    console.log(addRobotName);
    return (
        <div>
            {addRobotName.map((data, i) =>
                <img key={i} src={`https://robohash.org/${data}?200x200`}></img>)}
        </div>

    )
}
// class addrobot extends Component {
//     constructor(props) {
//         super(props)
//     this.state={
//         addArrayRobot : ''
//     }
//     }
//     render() {
//         console.log(this.state.addArrayRobot);
//         return (
//             <div>
//                 {/* {this.props.addArrayRobot.map((data, i) =>
//                     <img key={i} src={`https://robohash.org/${data.name}?200x200`}></img>)} */}
//             </div>

//         )
//     }

// }

export default AddRobot;