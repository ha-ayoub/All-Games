import {MESSAGES} from '../utils/constants'
import type { StatusProps } from '../utils/props';
import classNames from 'classnames';

export default function Status({ status }: StatusProps) {
    if (!status) return null;
    
    return (
        <div className={classNames('sudoku-status', {
            'st-cor': status === `${MESSAGES.CORRECT}`,
            'st-incor': status === `${MESSAGES.INCORRECT}`,
            'st-fill-cells': status === `${MESSAGES.FILL_ALL_CELLS}`,
        })}>
            {status}
        </div>
    )
}