import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="row w-100 mt-5 p-3 bg-secondary text-white">
      <div className="col-md-4 p-4 ms-md-5">
        <h3> <FontAwesomeIcon icon={faCartShopping} className='me-3'/> E-Kart</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, fuga excepturi? Ea laboriosam saepe error omnis dicta, eveniet optio fuga libero quo autem natus odit totam minima, repellendus, ratione pariatur.</p>
      </div>
      <div className="col-md-2 p-4 ms-md-5 d-md-flex justify-content-center">
        <div>
          <h4>Links</h4>
          <p style={{textDecoration :'none', color:'white'}} className='mt-4'><Link to={'/'}>Home Page</Link></p>
          <p style={{textDecoration :'none' , color:'white'}} ><Link to={'/wishlist'}>Wish List</Link></p>
          <p style={{textDecoration :'none',  color:'white'}}><Link to={'/cart'}>Cart</Link></p>

        </div>
      </div>
      <div className="col-md-2 p-4">
        <h4>Guides</h4>
        <p className='mt-4'>React</p>
        <p>React Bootstrap</p>
        <p>Bootswatch</p>
      </div>
      <div className="col-md-3 p-4">
        <h4>Contact Us</h4>
        <div className='d-flex mt-4'>
          <input type="text" className='form-control' placeholder='Email Id' />
          <button className='btn btn-warning ms-3'>Subscribe</button>
        </div>
        <div className='d-flex mt-4 justify-content-between'>
        <FontAwesomeIcon icon={faInstagram} size='2xl' />
        <FontAwesomeIcon icon={faTwitter} size='2xl'/>
        <FontAwesomeIcon icon={faLinkedin} size='2xl'/>
        <FontAwesomeIcon icon={faFacebook} size='2xl'/>

        </div>
       
      </div>
       <div className='text-center align-items-center justify-content-center mt-5'>
          <p>Copyright © 2024 E-Kart.Built with ReactJS</p>
        </div>

      <div className="col-md-1"></div>
      
    </div>
  )
}

export default Footer



// import React from 'react'
// import {Link} from 'react-router-dom'

// function Footer() {
//   return (
//     <div style={{width:'100%',height:'300px'}} className='d-flex align-items-center justify-content-center flex-column bg-primary text-light'>
//     <div className="footer d-flex align-items-center justify-content-evenly w-100">
//       <div className="website" style={{width:'400px'}}>
//         <h4 style={{overflow:'hidden'}}><i className="fa-solid fa-cart-shopping"></i>{' '}
//           E-Cart</h4>
//           <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit optio quaerat odio voluptatem. Reprehenderit, necessitatibus</h6>
//       </div>
//       <div className="link d-flex flex-column ms-5">
//         <h4>Links</h4>
//         <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home page</Link>
//         <Link to={'/cart'} style={{textDecoration:'none',color:'white'}}>Cart</Link>
//         <Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}}>WishList</Link>
//       </div>
//       <div className="guides d-flex flex-column ms-5">
//         <h4>Guides</h4>
//         <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'white'}}>React</Link>
//         <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'white'}}>React Bootsrap</Link>
//         <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white'}}>Bootswatch</Link>
//       </div>
//       <div className="contact ms-5">
//         <h4>contact Us</h4>
//         <div className='d-flex'>
//           <input type="text" className='form-control' placeholder='enter your email' />
//           <button className='btn btn-warning text-white ms-3'>Subscribe</button>
//         </div>
//         <div className='d-flex justify-content-evenly mt-3'>
//         <Link to={''} style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-instagram fa-2x "></i></Link>
//         <Link to={''} style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-twitter fa-2x"></i></Link>
//         <Link to={''} style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-linkedin fa-2x"></i></Link>
//         <Link to={''} style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-facebook fa-2x"></i></Link>
//         </div>
//       </div>
//     </div>
//     <p className='mt-5'>copyright@2023,built with react</p>
//   </div>
//   )
// }

// export default Footer