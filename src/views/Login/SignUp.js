import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { Row, Col, Container, FloatingLabel, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom' 


const SignUpShema = Yup.object().shape({
    firstName: Yup.string()
        .min(4, 'Valor corto')
        .max(50, 'Excede la cantidad de caracteres')
        .required('Required'),
        lastName: Yup.string()
            .min(2, 'Valor corto')
            .max(50, 'Excede la cantidad de caracteres')
            .required('Required'),
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        password: Yup.string()
            .min(8, 'Valor corto')
            .max(50, 'Excede la cantidad de caracteres')
            .required('Required')
    })

const SignUp = () => {
    
    const [ show, setShow ] = useState(false)
    const [ userExist, setUserExist ] = useState(false)

    return (
        <>
        <Alert show={show} variant={'success'} onClose={() => setShow(false)} dismissible >
            Te has registrado como usuario. Muchas compras te esperan <Link to='/'>aqui</Link>
        </Alert>
        <Alert show={show} variant={'danger'} onClose={() => setUserExist(false)} dismissible >
            El usuario ya existe.
        </Alert>
        <Container fluid>
            <Row><Col></Col>
                <Col xxl={4} xl={4} lg={6} md={6} xs={12} sm={12} >
                    <h2>Registrarse</h2>
                    <Formik
                        initialValues = {{
                            firstName: '',
                            lastName: '',
                            email: '',
                            password: ''
                        }}
                        validationSchema = { SignUpShema } 
                        onSubmit = { values => {
                            const auth = getAuth()
                            createUserWithEmailAndPassword( auth, values.email , values.password, values.firstName, values.lastName )
                                .then( userCredential => {
                                    const user = userCredential.user
                                    setShow(true)
                                })
                            .catch( error => {
                                setUserExist(true)
                            })
                        }}
                    >
                    {( { errors, touched} ) => (
                        <Form>
                            <FloatingLabel
                                controlId="floatingName"
                                label="Nombre"
                                className="mb-3"
                            >
                                <Field name='firstName' id="floatingName" placeholder="Ciro" className="form-control" />
                                {errors.firstName && touched.firstName ? (
                                    <div>{errors.firstName}</div>
                                    ) : null
                                }
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingLastName"
                                label="Apellido"
                                className="mb-3"
                            >
                                <Field name='lastName' id="floatingLastName" className="form-control" placeholder="Lopez" />
                                {errors.lastName && touched.lastName ? (
                                    <div>{errors.lastName}</div>
                                    ) : null
                                }
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingEmail"
                                label="Email"
                                className="mb-3"
                            >
                            <Field name='email' type='email' className="form-control" placeholder='Email' />
                                {errors.email && touched.email ? (
                                    <div>{errors.email}</div>
                                    ) : null
                                }
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingPassword"
                                label="Password"
                                className="mb-3"
                            >
                            <Field name='password' type='password' className="form-control" placeholder='Password' />
                                {errors.password && touched.password ? (
                                    <div>{errors.password}</div>
                                    ) : null
                                }
                            </FloatingLabel>
                            <p>Sos usuario <Link to='login' >Ingresar</Link></p>
                            <button type='submit' className="btn btn-success" >Registrarse</button>
                        </Form>
                    )}    
                    </Formik>
                </Col>
                <Col />
            </Row>    
    </Container>
    </>
    )
}

export default SignUp
