import {useState} from 'react';

const New = ({createBox}) =>{

    const [newColor, setNewColor] = useState("")
    const [error, setError] = useState("")

    const submitColor = (event) => {
        event.preventDefault();

        let errs = false;

        if(newColor.length < 2){
            setError(" Too Short");
            errs = true;
        }

        if(!errs){
            setError(null);
            createBox({color: newColor});
        }
    }

    return (
        <>
            What the user is typing:{newColor}
            <br/>
            {error}
            <form onSubmit={submitColor}>
                <input type="color" value={newColor} onChange={e => setNewColor(e.target.value)}/>
                <input type="submit" value="create a color" />
            </form>
        </>
    )
}

export default New;