import * as React from 'react';

import './Hello.css';

export interface Props {
    name: string;
    enthusiasmLevel?: number
}

const exclamationMarks = (numChars: number) => {
    return Array(numChars + 1).join('!');
}

const Hello = ({ name, enthusiasmLevel = 1 }: Props) => {
    if (enthusiasmLevel <= 0) {
        throw new Error('Need more enthusiasm...')
    }

    return (
        <div className="hello">
            Hello { name +  exclamationMarks(enthusiasmLevel)}
        </div>
    )
}

export default Hello;