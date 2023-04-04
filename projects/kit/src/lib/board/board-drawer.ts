import Konva from 'konva';
import {KonvaEventObject} from 'konva/lib/Node';
import {getNextFreeLinePoints} from '../math/free-line';
import {ICaboardView} from './board-view';

export interface ICabordDrawer {
    start(e: KonvaEventObject<MouseEvent>): void;
    draw(e: KonvaEventObject<MouseEvent>): void;
    end(e: KonvaEventObject<MouseEvent>): void;
}

export class CabordDrawer implements ICabordDrawer {
    constructor(private readonly board: ICaboardView) {}
    start(): void {}
    end(): void {}

    draw(e: KonvaEventObject<MouseEvent>) {
        const rect = new Konva.Rect({
            x: e.evt.clientX - this.board.getElementRectPosition().x,
            y: e.evt.clientY - this.board.getElementRectPosition().y,
            width: 100,
            height: 50,
            fill: 'green',
            stroke: 'black',
            strokeWidth: 4,
        });

        this.board.mainLayer?.add(rect);
    }
}

export class LineDrawer {
    current: any;
    startPoint: {x: number; y: number} | null = null;
    constructor(private readonly board: ICaboardView) {}

    start(e: KonvaEventObject<MouseEvent>): void {
        this.startPoint = {
            x: e.evt.clientX - this.board.getElementRectPosition().x,
            y: e.evt.clientY - this.board.getElementRectPosition().y,
        };

        const points =
            (this.current === this.current) !== null && this.current !== undefined
                ? getNextFreeLinePoints({x: 0, y: 0}, [])
                : [0.5, 0.5, 0, 0];

        this.current = this.createShape(this.startPoint.x, this.startPoint.y, points);

        this.board.mainLayer?.add(this.current);
    }
    draw(e: KonvaEventObject<MouseEvent>) {
        if (!this.startPoint || !this.current) {
            return;
        }

        const position = {
            x: e.evt.clientX - this.board.getElementRectPosition().x,
            y: e.evt.clientY - this.board.getElementRectPosition().y,
        };
        const x = this.startPoint!.x;
        const y = this.startPoint!.y;

        const points =
            (this.current === this.current) !== null && this.current !== undefined
                ? getNextFreeLinePoints(
                      {x: position.x - x, y: position.y - y},
                      this.current.points(),
                  )
                : [0, 0, 0, 0];

        this.current = this.createShape(this.startPoint.x, this.startPoint.y, points);
        this.board.mainLayer?.add(this.current);
    }

    end(): void {
        this.current = null;
        this.startPoint = null;
    }

    createShape(x: number, y: number, points: any[]) {
        return new Konva.Line({
            x: x,
            y: y,
            points: points,
            stroke: '#212121',
            strokeWidth: 1,
            hitStrokeWidth: 20,
            lineCap: 'round',
            globalCompositeOperation: 'source-over',
        });
    }
}
