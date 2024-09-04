import { FC } from 'react';
import Button from '../../../utils/ui/button/Button';
import styles from './BattleItem.module.scss';
import { CellStates } from '../../../state/useCell';

const ICONS = {
    [CellStates.WATER]: '🌊',
    [CellStates.SHIP]: '🌊',
    [CellStates.CHECKED_WATER]: '💣',
    [CellStates.CHECKED_SHIP]: '🛳️'
}
console.log(ICONS[0]);
type BattleItemProps = {
    value: number,
    x: number,
    y: number,
    callback: (x: number, y: number) => void
}

const BattleItem:FC<BattleItemProps> = ({value, x, y, callback}) => (
    <Button className={styles.battleItem} onClick={() => callback(x, y)}>{ICONS[value]}</Button>
);

export default BattleItem;