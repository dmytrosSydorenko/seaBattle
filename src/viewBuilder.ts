import { CellStates } from "./state/useCell";
import { createArray } from "./utils/helpers/array";
import { fetchShipData } from "./utils/repositories/battleManagement";

export const POS_HORIZONTAL = 'horiz';
export const POS_VERTICAL = 'vertical';

type Point = {
    x: number,
    y: number
}

export const createShip = async (maxSize: number):Promise<Point[]> => {
    const {shipOrientation, shipLength, positionX, positionY} = await fetchShipData(maxSize);

    return createArray(shipLength, (i) => {
        return {
            x: shipOrientation === POS_HORIZONTAL ? positionX + i : positionX,
            y: shipOrientation === POS_VERTICAL ? positionY + i : positionY
        }
    });
}

export const createEmptyBattleField = (arraySize: number) => {
    return createArray(arraySize, () => createArray(arraySize, () => CellStates.WATER) );
}