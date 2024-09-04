import { POS_HORIZONTAL, POS_VERTICAL } from "../../viewBuilder";
import { getRandom } from "../helpers/random";

type ShipData = {
    shipOrientation: 'horiz' | 'vertical',
    shipLength: number,
    positionX: number,
    positionY: number
}

//Api emulation
export function fetchShipData(maxSize: number): Promise<ShipData> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(getShipData(maxSize));
        }, 1000);
      });
}

function getShipData(maxSize: number): ShipData {
    const shipLength = getRandom(2, 7); //ship size from 2 to 6 cells
    const shipOrientation = getRandom(0, 2) === 0 ? POS_HORIZONTAL: POS_VERTICAL;
    const maxX = shipOrientation === POS_HORIZONTAL ? maxSize - shipLength : maxSize;
    const maxY = shipOrientation === POS_VERTICAL ? maxSize - shipLength : maxSize;
    const positionX = getRandom(0, maxX);
    const positionY = getRandom(0, maxY);


    return {
        shipOrientation: shipOrientation,
        shipLength,
        positionX,
        positionY
    }
}