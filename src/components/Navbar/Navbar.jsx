import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import IMG from '../Resources/recipe_vault.png'

function Navbar() {
	return (
		<header class='page-header'>
			<input id='menu-toggle-input' type='checkbox' />
			<label class='menu-toggle' for='menu-toggle-input'>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</label>
			<nav className='menu'>
				<ol>
					<li className='menu-item'>
						<a href='/'>HOME</a>
					</li>
					<li className='menu-item'>
						<a href='/'>ABOUT</a>
					</li>
					<li className='menu-item'>
						<a href='/'>RECIPES</a>
						<ol className='sub-menu'>
							<li className='menu-item'>
								<a href='/'>VIEW RECIPES</a>
							</li>
							<Link to={'/edit'} className='menu-item' add={false}>
								<li>EDIT RECIPES</li>
							</Link>
							<Link to={`/edit`} className='nav-link' add={true}>
								<li>ADD A RECIPE</li>
							</Link>
						</ol>
					</li>
					<li className='menu-item'>
						<a href='/'>MEMBERS ENTRANCE</a>
						<ol className='sub-menu'>
							<li className='menu-item'>
								<a href='/'>SIGN IN</a>
							</li>
							<li className='menu-item'>
								<a href='/'>SIGN UP</a>
							</li>
							<li className='menu-item'>
								<a href='/'>SIGN OUT</a>
							</li>
						</ol>
					</li>
					<li className='menu-item'>
						<a href='/'>CONTACT</a>
					</li>
				</ol>
			</nav>
		</header>
	)
}

export default Navbar
