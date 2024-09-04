import { FC, useContext } from 'react';
import styles from './BattleField.module.scss';
import BattleItem from './battleItem/BattleItem';
import { TranslationContext } from '../../context/context';

type BattleFieldProps = {
    field: number[][],
    onFire: (x: number, y: number) => void,
    isLoading: boolean
}

const BattleField:FC<BattleFieldProps> = ({field, onFire, isLoading}) => {
    const translation = useContext(TranslationContext);

    return <div className={styles.battleField}>
        {isLoading
        ? <div className={styles.loading}>{translation.loadingLabel}</div> 
        : field.map((line, y) => <div key={y}>
                {
                    line.map((item, x) => <BattleItem key={`${x}${y}`} value={item} x={x} y={y} callback={onFire} />)
                }
            </div>)
        }
    </div>
}


export default BattleField;