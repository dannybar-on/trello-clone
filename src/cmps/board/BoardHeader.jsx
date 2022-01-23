import React from 'react';
import { connect } from 'react-redux';
import { updateBoard } from '../../store/board.action.js';
import { UserAvatar } from '../UserAvatar.jsx';
import AvatarGroup from '@mui/material/AvatarGroup';
// import {Loader} from '../Loader.jsx'
import { FiStar } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import { RiUserAddLine } from 'react-icons/ri';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
class _BoardHeader extends React.Component {

    state = {
        isClicked: false,
        isStarHover: false,
        isTitleClicked: false,
    };

    toggleIsStarred = () => {
        const { isClicked } = this.state;
        let { board, updateBoard } = this.props;
        this.setState({ isClicked: !isClicked });
        board.isStarred = !isClicked;
        updateBoard(board);
    };

    toggleTitleClicked = () => {
        const { isTitleClicked } = this.state;
        this.setState({ isTitleClicked: !isTitleClicked });
    };

    toggleStarHover = () => {
        const { isStarHover } = this.state;
        this.setState({ isStarHover: !isStarHover });
    };

    render() {
        const { board } = this.props;
        const { isClicked, isStarHover } = this.state;
        let { isTitleClicked } = this.state;
        if (!board) return <h1>Loading</h1>;
        return <section className='board-header-container flex align-center space-between'>
            <div className='board-header-left flex'>
                {(!isTitleClicked) ?
                    <button className='change-header-btn' onClick={this.toggleTitleClicked}>
                        <h1 >{board.title}</h1>
                    </button>
                        :
                        <input type='text' autoFocus value={board.title} onBlur={() => this.setState({ isTitleClicked: !isTitleClicked })} />
                }
                <button className='star-btn' onMouseEnter={this.toggleStarHover} onMouseLeave={this.toggleStarHover} onClick={this.toggleIsStarred}>
                    {(board.isStarred || isStarHover) ? <FaStar /> : <FiStar />}
                </button>
                {/* <h1>User avatars</h1> */}
                <AvatarGroup max={4} >
                    {board.members.map((member, idx) => <UserAvatar key={idx} fullname={member.fullname} url={member.imgUrl} />)}
                </AvatarGroup>
                <button className='invite-btn'><RiUserAddLine /> Invite</button>
            </div>
            <div className='board-header-right flex row' >
                <button className='dashboard-btn flex align-center justify-center'> Dashboard</button>
                <button className='show-more-btn flex align-center justify-center'><BiDotsHorizontalRounded /> Show menu</button>
            </div>
        </section>;
    }
}

function mapStateToProps({ boardModule }) {
    return {
        board: boardModule.currBoard,
    };
}

const mapDispatchToProps = {
    updateBoard,
};

export const BoardHeader = connect(mapStateToProps, mapDispatchToProps)(_BoardHeader);