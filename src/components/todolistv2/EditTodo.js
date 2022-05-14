import React, { Fragment, useState } from 'react'
import { Modal, Button } from 'react-bootstrap';

function EditTodo({todo}) {
    const [description, setDescription] = useState(todo.description)
    const [showModal, setShowModal] = React.useState(false);
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    const updateDescription =  async (e)=>{
        e.preventDefault();
        try {
            const body = {description};
            const response = await fetch(`http://localhost:5000/todos/${todo.data_id}`,{
                method: "PUT",
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            false && console.log(response)
        } catch (err) {
            console.error(err.message)
        }
        handleCloseModal();
        window.location = window.location.pathname;
        // window.reload();
    }
  return (
      <Fragment>
        <Button variant="warning" onClick={handleShowModal}>
            Edit
        </Button>

        <Modal centered show={showModal} onHide={()=> setDescription(todo.description) || handleCloseModal()}>
            <Modal.Header  closeButton>
                <Modal.Title>Edit Task ID: {todo.data_id}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input className='form-control' type="text" value={description} onChange={e => setDescription(e.target.value)}/>
                {todo.description}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="warning" onClick={e=> updateDescription(e)}>
                    Edit
                </Button>
                <Button variant="secondary" onClick={()=> setDescription(todo.description) || handleCloseModal()}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    </Fragment>
  )
}

export default EditTodo