import Konva from 'konva';
import {Shape} from 'konva/lib/Shape';

export interface ShapeFactory {
    createShape(): Shape | Konva.Group;
}
