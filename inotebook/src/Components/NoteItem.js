import React, { useContext } from 'react'
import noteContext from "../Components/context/notes/noteContext"

const NoteItem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        <div>
                            <i className="far fa-trash-alt mx-2 text-danger" onClick={() => { deleteNote(note._id) }} style={{ cursor: 'pointer' }}></i>
                            <i className="far fa-edit mx-2 text-primary" onClick={() => { updateNote(note) }} style={{ cursor: 'pointer' }}></i>
                        </div>
                    </div>
                    <p className="card-text">{note.description}</p>
                    <h5 className="card-title">{note.tag}</h5>
                </div>
            </div>
        </div>


    )
}

export default NoteItem;
