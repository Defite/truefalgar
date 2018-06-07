import * as React from 'react';

export interface ParentProps {
    checked: boolean,
    id: number,
    name: string
  }

export interface Props {
    items: ParentProps[]
}

class Todo extends React.Component<Props, ParentProps[]> {
    constructor(props: Props) {
        super(props);
    }

    public render() {
        const { items } = this.props;

        return items.map( (item, index) => {
            return (
                <div key={ 'id-' + item.id }>
                    <input id={ 'id-' + item.id } type="checkbox" defaultChecked={ item.checked } />
                    <label htmlFor={ 'id-' + item.id }>{ item.name }</label>
                </div>
            ) 
            
        });
    }
}

export default Todo;