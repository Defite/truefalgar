import * as React from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export interface ComponentState {
    todo: number[]
}

export interface ParentProps {
    checked: boolean,
    id: number,
    name: string
  }

export interface Props {
    items: ParentProps[]
}

export interface ClickCheckbox {
    index: number,
    value: number
}

const initialState: ComponentState = {
    todo: []
}

class Todo extends React.Component<Props, ComponentState> {
    public todoArr: number[] = [];

    constructor(props: Props) {
        super(props);
    
        this.state = initialState;
    }

    public render() {
        const { items } = this.props;
        
        return items.map( (item, index) => {
            return (
                <div key={ 'id-' + item.id }>
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={ this.handleChange({
                                    index,
                                    value: item.id
                                }) }  
                            />
                        }
                        label={ item.name }
                    />
                </div>
            ) 
            
        });
    }

    private handleChange = ( params: ClickCheckbox ) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;

        // setState в массив по индексу
        this.todoArr[params.index] = isChecked ? params.value : 0;

        this.setState({
            todo: this.todoArr
        });
    }
}

export default Todo;
