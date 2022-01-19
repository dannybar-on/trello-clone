import React from 'react';
import { connect } from 'react-redux';

import { boardService } from '../services/board.service.js';
import { GroupList } from '../cmps/GroupList.jsx';

class _BoardDetails extends React.Component {
    state = {
        board: null,
        isAddOpen: false,
    };

    componentDidMount() {
        this.loadBoard();
    }

    loadBoard = () => {
        const boardId = this.props.match.params.boardId;
        boardService.getById(boardId).then((board) => {
            this.setState({ board });
        });
    };

    onToggleAdd = () => {
        let { isAddOpen } = this.state;
        this.setState({ isAddOpen: !isAddOpen });
    };

    render() {
        const { board } = this.state;
        console.log('In Details', board);
        if (!board) return <>Loading....</>;
        return (
            <div className="board-details-container">
                {/* <h1>{board.title}</h1>
                <h1>{board.createdAt}</h1> */}
                <GroupList groups={board.groups} />
                <button onClick={() => this.onCreateGroup}>Add another list</button>
            </div>
        );
    }
}

function mapStateToProps({ boardModule }) {
    return {
        board: boardModule.boards
    };
}

const mapDispatchToProps = {

};

export const BoardDetails = connect(mapStateToProps, mapDispatchToProps)(_BoardDetails);