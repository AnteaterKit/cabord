import Konva from 'konva';
import {Group} from 'konva/lib/Group';
import {Shape, ShapeConfig} from 'konva/lib/Shape';
import {ShapeFactory} from './base-factory';

export class RectFactory implements ShapeFactory {
    constructor(
        private readonly x: number,
        private readonly y: number,
        private readonly fill: string,
    ) {}
    createShape(): Group | Shape<ShapeConfig> {
        return new Konva.Rect({
            x: this.x,
            y: this.y,
            fill: this.fill,
            draggable: false,
        });
    }
}
