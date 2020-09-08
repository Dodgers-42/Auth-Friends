import React, {useState} from 'react';

const Friend = (props) => {
    const [editing, setEditing] = useState(false);
    const [edits, setEdits] = useState({
        name: props.friend.name,
        age: props.friend.age,
        email: props.friend.email,
})

    const onChange = e =>  {
        setEditing({
            ...edits,
            [e.target.name]: e.tartget.value
        })
    }

    const submitEdits = id => {
        props.updateFriend(id, edits);
        setEditing(false);
    }
    return (
        // <div>
        //     <div>
        //         {editing ?(
        //         <input
        //             onChange={onChange}type="text" name="name"value={edits.name}placeholder="name"/>
        //         <input
        //         onChange={onChange}type="number" name="age"value={edits.age}placeholder="age"/>
        //         <input
        //         onChange={onChange}type="email" name="email"value={edits.email}placeholder="email"/>
        //     </div>
        //     <div>
        //         <button onClick={()=> setEditing(false)}>Cancel</button>
        //         <button onClick={()=> submitEdits(props.friend.id)}Submit Edits></button>
        //     </div>
        // </div>
    );
}

)}
export default Friend;