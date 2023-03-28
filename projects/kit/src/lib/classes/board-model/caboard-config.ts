import {ShapeBase} from '../../shapes/shape-base';
import {CaboardStates} from './caboard-states';

export interface CaboardConfig {
    width: number;
    height: number;
    initialShapes?: ShapeBase[] | null;
    initialState?: CaboardStates | null;
}
