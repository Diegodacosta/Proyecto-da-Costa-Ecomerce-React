import React from 'react'
import { Col, Row, FloatingLabel, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { getAuth, signInWithEmailAndPassword, setPersistence, browserSessionPersistence } from 'firebase/auth'

//Context
// import { UseContext } from '../../Context'

const LoginShema = Yup.object().shape({   
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(8, 'Valor corto')
        .max(50, 'Excede la cantidad de caracteres')
        .required('Required')
    })

const Login = () => {

    // const { startSession, user } = UseContext()
    
    return (
        <>
        <Container fluid>
            <Row>
                <Col xxl={6} xl={6} lg={6} md={0} xs={0} sm={0} >
                    <div class="d-none d-md-block d-sm-block d-xs-block d-print-block">
                        <img src='https://http2.mlstatic.com/D_NQ_NP_610283-MLA43542250161_092020-O.webp' alt='Imagen login' />
                    </div>
                </Col>
                <Col xxl={6} xl={6} lg={6} md={12} xs={12} sm={12} >
                    <h2>Login</h2>
                    <Formik
                        initialValues = {{
                            email: '',
                            password: ''
                        }}
                        validationSchema = { LoginShema }
                        onSubmit = { values => {
                            const auth = getAuth()
                            setPersistence(auth, browserSessionPersistence)
                                .then( () => {
                                    return signInWithEmailAndPassword( auth, values.email, values.password )
                                }) 
                                .catch( error => {
                                    console.log('error', error)
                                })
                        } }
                    >
                    {( { errors, touched} ) => (
                        <Form>
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
                            <p>No sos usuario <Link to='signup'>Registrate</Link></p>
                            <button type='submit' className="btn btn-success">Ingresar</button>
                        </Form>
                    )}    
                    </Formik>
                </Col>
            </Row>
            </Container>
        </>
    )
}

export default Login
