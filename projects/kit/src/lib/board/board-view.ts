import Konva from 'konva';
import {FreelineState, ICaboardState, PointState} from './board-state';
import {Event} from '../classes/infrastructure/ievent';
import {CaboardConfig} from '../classes/board-model/caboard-config';
import {KonvaEventObject} from 'konva/lib/Node';
import {CabordDrawer, LineDrawer} from './board-drawer';
import {CaboardStates} from '../classes/board-model/caboard-states';

export interface ICaboardView {
    state: ICaboardState;
    get mainLayer(): Konva.Layer | null;
    get stage(): Konva.Stage | null;
    getElementRectPosition(): {x: number; y: number};
    click: Event<KonvaEventObject<MouseEvent>> | null;
    mousedown: Event<KonvaEventObject<MouseEvent>> | null;
    mouseup: Event<KonvaEventObject<MouseEvent>> | null;
    mousemove: Event<KonvaEventObject<MouseEvent>> | null;
}

export class CaboardView implements ICaboardView {
    private readonly _element: HTMLDivElement;
    private readonly _config: any;
    private _stage: Konva.Stage | null = null;
    private _mainLayer: Konva.Layer | null = null;

    constructor(element: HTMLDivElement, config: CaboardConfig) {
        if (!element) {
            throw new Error(`Caboard: canvas HTMLElement not found`);
        }

        if (!config) {
            throw new Error(`Caboard: config not found`);
        }

        this._element = element;
        this._config = config;
    }
    state: ICaboardState = new PointState(new CabordDrawer(this));
    click: Event<KonvaEventObject<MouseEvent>> | null = new Event();
    mousedown: Event<KonvaEventObject<MouseEvent>> | null = new Event();
    mouseup: Event<KonvaEventObject<MouseEvent>> | null = new Event();
    mousemove: Event<KonvaEventObject<MouseEvent>> | null = new Event();

    render() {
        if (this._config.initialState === CaboardStates.freeline) {
            this.state = new FreelineState(new LineDrawer(this));
        }
        this.initStage();
        this.renderMainLayer();
        this.renderBackLayer();
        this.buildScene();
        this.subscribeEvents();
    }

    subscribeEvents() {
        this.stage?.on('click', (e: KonvaEventObject<MouseEvent>) => {
            this.click?.trigger(e);
        });
        this.stage?.on('mousedown', (e: KonvaEventObject<MouseEvent>) => {
            this.mousedown?.trigger(e);
        });
        this.stage?.on('mouseup', (e: KonvaEventObject<MouseEvent>) => {
            this.mouseup?.trigger(e);
        });
        this.stage?.on('mousemove', (e: KonvaEventObject<MouseEvent>) => {
            this.mousemove?.trigger(e);
        });
    }

    private renderMainLayer() {
        if (this._stage) {
            this._stage.container().style.backgroundColor = '#4560EC';
            const rect1 = new Konva.Rect({
                x: 20,
                y: 20,
                width: 100,
                height: 50,
                fill: 'green',
                stroke: 'black',
                strokeWidth: 4,
            });

            this._mainLayer = new Konva.Layer();
            this._mainLayer.add(rect1);
            this._stage.add(this._mainLayer);
            this._mainLayer.draw();
        }
    }

    private renderBackLayer() {}

    private initStage() {
        this._stage = new Konva.Stage({
            container: this._element,
            width: this._config.width,
            height: this._config.height,
        });
    }

    private buildScene() {}

    get stage(): Konva.Stage | null {
        return this._stage;
    }

    get mainLayer(): Konva.Layer | null {
        return this._mainLayer;
    }

    getElementRectPosition() {
        const rect = this._element.getBoundingClientRect();
        return {x: rect.x, y: rect.y};
    }
}
