import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { faCartPlus, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { useSelector } from 'react-redux';


function Header() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  const cartArray = useSelector((state)=>state.cartReducer)

  return (
    <>    
   <Navbar expand="lg" className="bg-secondary w-100" style={{top:'0px', position:'fixed', zIndex :'1'}}>
        <Container>
            <Link to={'/'}>

          <Navbar.Brand className='text-white'>
          <FontAwesomeIcon icon={faCartShopping} className='me-3' style={{color:'white'}} beat size='xl' />
          <b>E-Kart</b>
          </Navbar.Brand>
    </Link>

<Navbar.Toggle aria-controls='basic- navbar-nav'/>
<Navbar.Collapse id="basic-navbar-nav">
    <Nav className='ms-auto'>

    <Nav.Link>
        <Link to={'/wishlist'}> <button className='btn btn-outline-light border rounded'> <FontAwesomeIcon icon ={faHeart} style={{color :"red",}} className='me-2'/> WishList <Badge bg="secondary" className='rounded ms-2'> {wishlistArray?.length} </Badge> </button> </Link>

      </Nav.Link>

      <Nav.Link>
        <Link to={'/cart'}> <button className='btn btn-outline-light border rounded'> <FontAwesomeIcon icon ={faCartPlus} style={{color :"#d2ec09",}} className='me-2'/> Cart <Badge className='ms-2 rounded' bg="secondary">{cartArray?.length} </Badge> </button> </Link>

      </Nav.Link>


      </Nav>
</Navbar.Collapse>

      </Container>
      </Navbar>
    </>
  )
}

export default Header
 