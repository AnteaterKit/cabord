import Konva from 'konva';

export abstract class ShapeBase {
    id: number | null = null;
    konvaJsShape: Konva.Shape | null = null;

    abstract updateAttrs(): void;
}
