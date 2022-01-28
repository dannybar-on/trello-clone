import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoggedAvatar } from './LoggedAvatar.jsx';
import jello from '../assets/img/jello.svg';
import { logout } from '../store/user.action.js';
// import {DynamicModal} from '../cmps/DynamicModal.jsx'
// import { ReactComponent as Jello } from '../assets/img/jello.svg'

class _AppHeader extends React.Component {

    state = {

        isModalOpen: false,
    };

    toggleDynamicModal = (ev) => {
        this.setState({ isModalOpen: !this.state.isModalOpen });
    };
  


    render() {
        const { user, logout } = this.props;
        const {isModalOpen} = this.state
        return (
            <header className="app-header ">

                <div className="app-header-container flex space-between align-center">
                    <NavLink className="clean-link" to="/">
                        <div className='flex'>
                            {/* <img src={jello} alt='' /> */}
                            <img className='jello wobble-top-on-hover' src={jello} />
                            {/* <svg className='jello wobble-top-on-hover' width="40px" height="40px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M144 73c-7.5 0-17.6 6.44-28 20.59C105.6 107.7 95.27 128.6 86.47 153c-16.66 46.3-28.04 105.4-29.24 158h45.87c.8-54.6 8.6-115.1 22.2-163.4 7.2-25.6 15.8-47.71 26.4-64.2 1-1.51 2-2.96 3-4.39-.7-.85-1.3-1.61-1.9-2.24-2.8-2.75-5-3.77-8.8-3.77zm48 0c-7.5 0-16.2 6.08-25.2 20.1-8.9 14-17.3 34.9-24.1 59.3-13 46.3-20.7 105.6-21.5 158.6H183c.4-54.2 4.5-114.5 14.2-162.8 4.1-20.4 9-38.6 15.5-53.55-.4-.95-.8-1.87-1.2-2.76-3-6.87-6.4-11.86-9.7-14.81-3.3-2.95-6-4.08-9.8-4.08zm64 0c-7.5 0-14.8 5.66-22.3 19.53-7.5 13.87-14 34.77-18.9 59.27-9.3 46.4-13.2 105.8-13.6 159.2h109.6c-.4-53.4-4.3-112.8-13.6-159.2-4.9-24.5-11.4-45.4-18.9-59.27C270.8 78.66 263.5 73 256 73zm64 0c-3.8 0-6.5 1.13-9.8 4.08-3.3 2.95-6.7 7.94-9.7 14.81-.4.89-.8 1.81-1.2 2.76 6.5 14.95 11.4 33.15 15.5 53.55 9.7 48.3 13.8 108.6 14.2 162.8h61.8c-.8-53-8.5-112.3-21.5-158.6-6.8-24.4-15.2-45.3-24.1-59.3-9-14.02-17.7-20.1-25.2-20.1zm48 0c-3.7 0-6 1.02-8.8 3.77-.6.63-1.2 1.39-1.9 2.24 1 1.43 2 2.88 3 4.39 10.6 16.49 19.2 38.6 26.4 64.2 13.6 48.3 21.4 108.8 22.2 163.4h45.9c-1.2-52.6-12.6-111.7-29.3-158-8.8-24.4-19.1-45.3-29.5-59.41C385.6 79.44 375.5 73 368 73zM187.7 88.36c3.8.05 4.8 5.73 1.8 11.64-14.1 25.2-31.2 70.5-41.4 98.1-.7-27.2 18-85.3 34.1-106.89 2.2-2.03 4.1-2.87 5.5-2.85zm-55.9.65c3.1.1 5.6 4.05 4.2 7.82-23.8 28.77-32.1 57.67-43.91 86.47 4.13-37.8 18.11-64.8 35.41-91.65 1.3-1.93 2.9-2.68 4.3-2.64zm192.8 1.58c1.5 0 3.1.08 4.8.24-11.3 7.99-14.4 12.87-16.3 20.47-3.6-13.42-2.6-20.72 11.5-20.71zM254 92.31c3.3.06 5.4 3.71 4.2 7.79-16.2 38.8-32 78.7-37 121.1-4.5-30.1 1.6-88.2 26-124.43 2.4-3.24 4.9-4.5 6.8-4.46zM41.54 329c2.35 21.3 13.22 32.9 26.26 46h376.4c13-13.1 23.9-24.7 26.3-46H41.54zM224 393v51l-80 48h224l-80-48v-51h-64z"/></svg> */}
                            <h1 className='logo '>Jello</h1>
                        </div>
                    </NavLink>
                    {/* <nav className="header-nav "> */}
                    <ul className='clean-list flex align-center'>
                        {/* <li>
                            <NavLink className="clean-link" to="/"><div>Home</div></NavLink>
                        </li> */}
                        <li>
                            <NavLink className="clean-link" to="/board"><div>Board List</div></NavLink>
                        </li>
                        <li>
                            <NavLink className="clean-link" to="/board/login"><div>Login</div></NavLink>
                        </li>
                        <li>
                            {user ? <LoggedAvatar fullname={user.fullname} toggleDynamicModal={this.toggleDynamicModal} isModalOpen={isModalOpen}/> :
                                <LoggedAvatar fullname={'Guest'} toggleDynamicModal={this.toggleDynamicModal} isModalOpen={isModalOpen} />}
                        </li>

                    </ul>
                    {/* </nav> */}
                    {/* {isModalOpen && <DynamicModal item={item.title} {...this.props} toggleDynamicModal={this.toggleDynamicModal} position={position} />} */}
                </div>
            </header>
        );
    }
}

var position
const item = { title: 'User Modal' }
function mapStateToProps({ userModule }) {
    return {
        user: userModule.user
    };
}

const mapDispatchToProps = {
    logout,
};

export const AppHeader = connect(mapStateToProps, mapDispatchToProps)(_AppHeader);


