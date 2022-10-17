import './Footer.css'

const Footer = () => {
    return(
        <div className="mt-5">
        <footer className="page-footer font-small indigo bg-dark text-light ">
            <div className="container">
                <div className="row p-3 text-light">
                    <div className="col-md-4">
                        <style>
                            @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap');
                        </style> 
                        <i className="far fa-envelope fa-2x "><span  className="ml-2 myFont">Suscribite al Newsletter</span></i>
                    </div>
                    <div className="col-md-4"> 
                        <form>
                            <input type="text" placeholder="Ingrese su email.." className="form-control" />
                        </form>
                    </div>
                    <div className="col-md-4 d-flex justify-content-end p-1">
                        <a className="fb-ic text-decoration-none mr-3" href="https://www.facebook.com/diego.dacosta.4/" rel="noreferrer" target="_blank">
                            <i className="fab fa-facebook-f fa-lg text-light me-4"> </i>
                        </a>
                        <a className="tw-ic text-decoration-none mr-3" href="https://twitter.com/die_dacosta" rel="noreferrer" target="_blank">
                        <i className="fab fa-twitter fa-lg text-light  me-4"> </i>
                        </a>
                        <a className="github-ic text-decoration-none mr-3" href="https://github.com/Diegodacosta" target="_blank" rel="noreferrer">
                            <i className="fab fa-github fa-lg text-light text-decoration-none me-4"> </i>
                        </a>
                        <a className="li-ic text-decoration-none mr-3" href="https://www.linkedin.com/in/diego-joaquin-da-costa-/" rel="noreferrer" target="_blank">
                            <i className="fab fa-linkedin-in fa-lg text-light me-4"> </i>
                        </a>   
                        <a className="ins-ic text-decoration-none mr-3" href="https://www.instagram.com/dieeedacosta/?hl=es" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram fa-lg text-light me-4"> </i>
                        </a>                       
                    </div>
                </div>
                <div className="row text-center justify-content-center pt-5 mb-3">
                    <div className="col-md-2 mb-3">
                        <h6 className="text-uppercase font-weight-bold">
                            <a href="#!" className="text-decoration-none text-light">Boton de arrepentimiento</a>
                        </h6>
                    </div>
                    <div className="col-md-2 mb-3">
                        <h6 className="text-uppercase font-weight-bold">
                            <a href="#!" className=" text-decoration-none text-light">Empresa</a>
                        </h6>
                    </div>
                    <div className="col-md-2 mb-3">
                        <h6 className="text-uppercase font-weight-bold">
                            <a href="#!" className=" text-decoration-none text-light">Trabaja con nosotros</a>
                        </h6>
                    </div>
                    <div className="col-md-2 mb-3">
                        <h6 className="text-uppercase font-weight-bold">
                            <a href="#!" className="text-decoration-none text-light">Preguntas frecuentes</a>
                        </h6>
                    </div>
                    <div className="col-md-2 mb-3">
                        <h6 className="text-uppercase font-weight-bold">
                            <a href="#!" className="text-decoration-none text-light">Contacto</a>
                        </h6>
                    </div>
                </div>
                <div className="row d-flex text-center justify-content-center mb-md-0 mb-4">
                    <div className="col-md-8 col-12 m-2">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab dolor atque culpa laudantium reprehenderit adipisci voluptatum suscipit voluptas earum, odit ratione. Fuga reiciendis tenetur maiores alias quo nulla! Eius, magni!   </p>
                    </div>
                </div>
            </div>
        </footer>
        <div className="footer-copyright bg-light text-center py-3">
                © 2021 Copyright: daCosta-Ecommerce
            </div>
            
    </div>
    )
}

export default Footer