import React, { useState } from 'react'
import { actionType } from './Developer';
function DeveloperForm({ dispatch }) {
    const [state, setState] = useState({
        name: '',
        lang: 'JavaScript',
        tech: 'React',
        foodFav: '',
        drinkFav: '',
    });
    const handlerSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: actionType.ADD_NEW_DEV, payload: { state } })
        e.target.reset();
        setState({...state, id:''});
    }
    return (
        <div>
            <form onSubmit={handlerSubmit}>
                <label>Developer Name</label><br></br>
                <input placeholder='Name' onChange={(e) => setState({ ...state, name: e.target.value })} /><br></br>
                <label>Food favorite </label><br></br>
                <input placeholder='Food' onChange={(e) => setState({ ...state, foodFav: e.target.value })} /><br></br>
                <label>favorite Drink</label><br></br>
                <input placeholder='Name' onChange={(e) => setState({ ...state, drinkFav: e.target.value })} /><br></br>
                <label>select favorite language</label><br></br>
                <select onChange={(e) => setState({ ...state, lang: e.target.value })} defaultValue='JavaScript'>
                    <option>JavaScript</option>
                    <option>C++</option>
                    <option>Go</option>
                    <option>Java</option>
                    <option>Python</option>
                    <option>PHP</option>
                </select> <br></br>
                <label>select favorite technologies </label><br></br>
                <select onChange={(e) => setState({ ...state, tech: e.target.value })}>
                    <option>React</option>
                    <option>Vue</option>
                    <option>spring</option>
                    <option>Larvel</option>
                    <option>Django</option>
                    <option>Flax</option>
                </select><br></br>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default DeveloperForm
