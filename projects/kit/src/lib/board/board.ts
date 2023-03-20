import Konva from 'konva';

export class Caboard {
    private readonly _element: HTMLDivElement;
    private readonly _config: any;
    private _stage: Konva.Stage | null = null;

    constructor(element: HTMLDivElement, config: any) {
        if (!element) {
            throw new Error(`Caboard: canvas HTMLElement not found`);
        }

        if (!config) {
            throw new Error(`Caboard: _config not found`);
        }

        this._element = element;
        this._config = config;
    }

    render() {
        this.initStage();
        this.renderMainLayer();
        this.renderBackLayer();
    }

    private renderMainLayer() {}

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
}
