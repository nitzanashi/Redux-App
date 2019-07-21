import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux'
import {addTodo} from "../TodoList/actions";
import Button from "../Button";
import Input from '../Input';
import * as ButtonColors from '../Button/colors';


const AddTodo = (props) => {
    const [text, setText] = useState('');

    useEffect(() => {
        if(text) {
            document.title = 'Add Todo:' + text;
        }
        else {
            document.title = 'Redux App'
        }

    });
    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if(!text.trim()) {
            return;
        }
        props.dispatch(addTodo(text));
        setText('');
    };

    return (
        <div>
            <form
                onSubmit={onSubmit}
            >
                <Input
                    type="text"
                    name="text"
                    value={text}
                    onChange={handleTextChange}
                    placeholder="put text here"
                />
                <Button
                    color={ButtonColors.SECONDARY}
                    type="submit"
                    text="Add Todo"
                />
            </form>
        </div>
    );

};

// class AddTodo extends Component {
//     constructor (props) {
//         super(props);
//
//         this.state = {
//             text: '',
//         };
//         this.onChange = this.onChange.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);
//     }
//
//     onChange(e) {
//         this.setState({text: e.target.value});
//     }
//
//     onSubmit(e) {
//       e.preventDefault();
//       if(!this.state.text.trim()) {
//           return;
//       }
//       this.props.dispatch(addTodo(this.state.text));
//       this.setState({text: ''})
//     };
//
//     render () {
//         return (
//             <div>
//                 <form
//                     onSubmit={this.onSubmit}
//                     >
//                     <Input
//                         type="text"
//                         name="text"
//                         value={this.state.text}
//                         onChange={this.onChange}
//                         placeholder="put text here"
//                     />
//                     <Button
//                         color={ButtonColors.SECONDARY}
//                         type="submit"
//                         text="Add Todo"
//                     />
//                 </form>
//             </div>
//         );
//     }
//
//
// };

export default connect()(AddTodo);
