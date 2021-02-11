import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import ps from '../../public/assets/store/play-store.svg'
import as from '../../public/assets/store/app-store.svg'
import ws from '../../public/assets/store/windows-store.svg'
import fb from '../../public/assets/social/facebook-white.svg'
import tw from '../../public/assets/social/twitter-white.svg'
import ins from '../../public/assets/social/instagram-white.svg'



const FilmFooterComponent = () => {
  return (
    <MDBFooter color="indigo darken-3" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Contact Us</h5>
            <p>
              You Can Download it from
            </p>
            <br/>
            <a href="#">
                <img alt="playstore" src={ps} width="100" height="100" />
              </a>
              <br/>
              <a href="#">
                <img alt="app store" src={as} width="100" height="100" />
              </a>
              <br/>
              <a href="#">
                <img alt="windows store" src={ws} width="100" height="100" />
              </a>
          </MDBCol>
          <MDBCol md="6">
              
            <h5 className="title">Links</h5>

            <a href="#">
                <img alt="facebook" src={fb} width="100" height="100" />
              </a>
              <br/>
              <a href="#">
                <img alt="twitter" src={tw} width="100" height="100" />
              </a>
              <br/>
              <a href="#">
                <img alt="instagram" src={ins} width="100" height="100" />
              </a>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://dishop.co/"> Dishop.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FilmFooterComponent;