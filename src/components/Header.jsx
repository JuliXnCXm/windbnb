import React from 'react'
import logo from '../assets/logo.svg'
import Modal from './Modal'
import '../styles/Header.css'
import Searcher from './Searcher'

const Header = ({choice}) => {

    const [show, setShow] = React.useState(false)

    return (
        <div className="Header--container">
            <img src={logo} alt="" />
            <div className="searcher__container" onClick={() => setShow(true)}>
                <h3>{choice}</h3>
                <input placeholder="Add guests"/>
                <span class="material-symbols-outlined" id="search_icon">search</span>
            </div>
            {!!show && (
                <Modal>
                    <Searcher />
                    <div class="modal-close" onClick={() => setShow(false)}></div>
                </Modal>
            )}
        </div>
    );
}

export default Header