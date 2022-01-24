import React from 'react';
import { connect } from 'react-redux';
import { taskService } from '../../services/task.service';
import { updateTask } from '../../store/board.action';
import { ProgressBar } from './ProgressBar.jsx';

class _TaskDetailsChecklist extends React.Component {
    state = {
        perecentage: 0,
        isAddOpen: false,
        todoTitle: '',
    };

    componentDidMount() {
        this.setTodoPctg();
    }
    componentDidUpdate(prevProps) {
        if (prevProps.board !== this.props.board) {
            this.setTodoPctg();
        }
    }

    handleCheckbox = (ev, todo) => {
        ev.preventDefault();
        todo.isDone = !todo.isDone;
        const { currTask, board } = this.props;
        const group = taskService.getGroupById(currTask.id);
        this.props.updateTask(board, group, currTask);
    };

    toggleAddTodo = () => {
        const { isAddOpen } = this.state;
        this.setState({ isAddOpen: !isAddOpen });
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState((prevState) => ({ ...prevState, [name]: value }));
    };

    setTodoPctg = (todos = this.props.checklist.todos) => {
        const doneTodos = todos.filter(todo => todo.isDone);
        let percentage;
        if (todos.length) percentage = (doneTodos.length / todos.length) * 100;
        else percentage = 0;
        this.setState({ percentage });
    };

    onAddTodo = (ev, title, checklist) => {
        ev.preventDefault();
        let newTodo = taskService.getEmptyTodo();
        newTodo.title = title;
        checklist.todos.push(newTodo);
        // console.log(checklist);
        const { currTask, board } = this.props;
        const group = taskService.getGroupById(currTask.id);
        this.props.updateTask(board, group, currTask);
        this.setState({ todoTitle: '' });
        this.toggleAddTodo();
    };

    onRemoveTodo = (todoId) => {
        let { checklist } = this.props;
        const updatedTodos = checklist.todos.filter(todo => todo.id !== todoId);
        checklist.todos = updatedTodos;
        const { currTask, board } = this.props;
        const group = taskService.getGroupById(currTask.id);
        this.props.updateTask(board, group, currTask);
    };


    render() {
        const { checklist } = this.props;
        const { todoTitle, isAddOpen, percentage } = this.state;
        console.log(percentage);
        return (
            <div>
                <ProgressBar percentage={percentage} />
                {checklist.todos.map((todo, idx) => {
                    return <div key={idx}>
                        <input type="checkbox" name={todo.id} checked={todo.isDone} onChange={(event) => this.handleCheckbox(event, todo)} />
                        <span> {todo.title} </span>
                        <button onClick={() => this.onRemoveTodo(todo.id)}>Remove todo</button>
                    </div>;
                })}
                {(isAddOpen) ? <form onSubmit={(event) => this.onAddTodo(event, todoTitle, checklist)}>
                    <textarea className='search-modal' type="text" name="todoTitle" value={todoTitle} onChange={this.handleChange} />
                    <button className='btn-style1' type="submit">Add</button>
                    <button onClick={() => this.toggleAddTodo()}>X</button>

                </form>
                    :
                    <button className='btn-style1' onClick={() => this.toggleAddTodo()}>Add an item</button>
                }
            </div>
        );

    }
};

const mapStateToProps = ({ boardModule }) => {
    return {
        board: boardModule.currBoard,
        currTask: boardModule.currTask,
    };
};

const mapDispatchToProps = {
    updateTask,
};

export const TaskDetailsChecklist = connect(mapStateToProps, mapDispatchToProps)(_TaskDetailsChecklist);