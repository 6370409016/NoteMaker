import react,{useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [isExpand, setIsExpand]=useState(false);

  const [note, setNote]=useState({
    title:"",
    content:""
  })

  function handleChange(event){
    const {name, value}=event.target;
    setNote(prevState=>{
      return{
        ...prevState,
      [name]:value
      };
      
    });
  };

  function handleSubmit(event){
    props.onAdd(note);
    setNote({
      title:"",
      content:""
    })
    event.preventDefault();
  }

  function handleClick(){
    setIsExpand(true);
  }

    return (
      <div>
        <form className="create-note" onSubmit={handleSubmit}>
          {isExpand?
          <input onChange={handleChange} name="title" placeholder="Title" value={note.title}/>
          :null}
          <textarea onClick={handleClick} onChange={handleChange} name="content" placeholder="Take a note..." 
          rows={isExpand?3:1} value={note.content}/>
          
        <Zoom in={isExpand} >
        <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
         
        </form>
      </div>
    );
  }
  
  export default CreateArea;
  