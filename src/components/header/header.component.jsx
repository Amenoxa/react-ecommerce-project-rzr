import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './header.logo.svg'; 
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux'; 
import CartIcon from '../cart-item/cart-item.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser }) => (

    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
            
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>LOG OUT</div>
                :
                <Link className='option' to='/login'>LOG IN</Link>
            }
            <CartIcon />
        </div>
            <CartDropdown />
        </div>
       

);

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});
export default connect(mapStateToProps)(Header);