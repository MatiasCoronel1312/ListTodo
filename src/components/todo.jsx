import { useState } from "react";

export default function Todo({item}) {
    const [isEdit, setEdit] = useState(false);

    function FormEdit() {
        function handleSubmit(e){
            e.preventDefault();
        }
        function handleChange ()
        return (
            <form className="todoUpdateForm" onSubmit={handleSubmit}>
                <input type="type" className="todoInput" onChange={handleChange} />
                <button>Update</button>
            </form>
        );
    }
    function TodoElement () {
        return <div className="todoInfo">
                {item.title} 
                <button onClick={() => setEdit(true)} >Edit</button>
                <button>Delete</button>                
            </div>
    }
    return <div className="todo">{isEdit?<FormEdit/>:<TodoElement/>}</div>;
}