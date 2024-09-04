import { useEffect, useState } from 'react';
import { createEmptyBattleField, createShip } from '../viewBuilder';
import { CellStates } from './useCell';
import translations from '../translate/en.json';

export const BATTLE_FIELD_SIZE = 10;
export const useBattleState  = () => {
    const [state, setState] = useState({
        turnQty: 0,
        battleField: createEmptyBattleField(BATTLE_FIELD_SIZE),
        shipLength: 0,
        wreckedСells: 0
    });

    const [isLoading, setLoading] = useState(true);
    const {turnQty, battleField, shipLength, wreckedСells} = state;
    const fire = (x:number, y:number) => {
        const _battleField = [...battleField];
        const cellState = _battleField[y][x];
        let _wreckedСells = wreckedСells;

        if (cellState === CellStates.CHECKED_WATER || cellState === CellStates.CHECKED_SHIP) {
            return;
        }
        if (cellState === CellStates.WATER) {
            _battleField[y][x] = CellStates.CHECKED_WATER;
        } else if (cellState === CellStates.SHIP) {
            _battleField[y][x] = CellStates.CHECKED_SHIP;
            _wreckedСells = _wreckedСells + 1;
        }

        _battleField[y][x] = cellState === CellStates.WATER ? CellStates.CHECKED_WATER : CellStates.CHECKED_SHIP;

        setState({
            ...state,
            turnQty: turnQty + 1,
            battleField: _battleField,
            wreckedСells: _wreckedСells
        });

    }

    const setNewGame = async () => {
        setLoading(true);
        
        const battleField = createEmptyBattleField(BATTLE_FIELD_SIZE);
        const ship = await createShip(BATTLE_FIELD_SIZE);
        
        ship.forEach(({x,y}) => battleField[y][x] = CellStates.SHIP);
        setState({
            turnQty: 0,
            battleField,
            shipLength: ship.length,
            wreckedСells: 0
        })
        setLoading(false);
    }

    useEffect(() => {
        (async () => {
          try {
            setNewGame();
          } catch (err) {
            console.log('Error occured when fetching ship data');
          }
        })();
      }, []);
  

    return {
        turnQty,
        setNewGame,
        battleField,
        fire,
        isLoading,
        translations,
        wreckedСells,
        shipLength
    };
}