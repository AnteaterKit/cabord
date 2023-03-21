import Konva from 'konva';

export class Caboard {
    private readonly _element: HTMLDivElement;
    private readonly _config: any;
    private _stage: Konva.Stage | null = null;
    private _mainLayer: Konva.Layer | null = null;

    constructor(element: HTMLDivElement, config: any) {
        if (!element) {
            throw new Error(`Caboard: canvas HTMLElement not found`);
        }

        if (!config) {
            throw new Error(`Caboard: config not found`);
        }

        this._element = element;
        this._config = config;
    }

    render() {
        this.initStage();
        this.renderMainLayer();
        this.renderBackLayer();
    }

    // setScene(shapes: any[]) {

    // }

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

    get stage(): Konva.Stage | null {
        return this._stage;
    }

    get mainLayer(): Konva.Layer | null {
        return this._mainLayer;
    }
}
