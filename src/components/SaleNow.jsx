import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { auth, db, storage } from '../firebase/Firebase';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";

const SaleNow = () => {

    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(true);
    }

    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [imageUpload, setImageUpload] = useState('');


    const handelImage = async() => {
        const imageRef = ref(storage, `images/product images/${imageUpload.name}`)
        return uploadBytes(imageRef, imageUpload).then((snapshot) => {
            alert('Product Added Successfully')
            return getDownloadURL(snapshot.ref).then(url => url)
        })
    }
    var handleForm = async (e) => {
        e.preventDefault()

        // Uploading images to firebase storage

        let image = ''
        if (imageUpload) {
            image = await handelImage()
        }

        const obj = {
            category,
            title,
            description,
            price,
            image,
        }
        const docRef = await addDoc(collection(db, "Products"), obj);
        // console.log(docRef.id);
    }


    return (
        <>
            <p className="m-2 text-white" onClick={() => handleShow()}> SELL </p>
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>PRODUCT LISTING</Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <Form onSubmit={handleForm}>
                        <Form.Select required onChange={(e) => setCategory(e.target.value)}>
                            <option>Select Category</option>
                            <option value="men's clothing">men's clothing</option>
                            <option value="jewelery">jewelery</option>
                            <option value="electronics">electronics</option>
                            <option value="women's clothing">women's clothing</option>
                        </Form.Select>

                        <br />

                        <FloatingLabel label="Title">
                            <Form.Control type="text" placeholder="Title"
                                onChange={(e) => setTitle(e.target.value)} />
                        </FloatingLabel>

                        <br />

                        <FloatingLabel label="Description">
                            <Form.Control type="text" placeholder="Description"
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </FloatingLabel>

                        <br />

                        <FloatingLabel label="Price">
                            <Form.Control type="text" placeholder="Price"
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </FloatingLabel>

                        <br />

                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Product Image</Form.Label>
                            <Form.Control type="file"
                                accept="image/png, image/jpeg"
                                onChange={(e) => setImageUpload(e.target.files[0])}
                            />
                        </Form.Group>


                        <Button onClick={handleForm} variant="primary">Add Product</Button>

                    </Form>
                </Modal.Body>

            </Modal>
        </>
    );
}

export default SaleNow