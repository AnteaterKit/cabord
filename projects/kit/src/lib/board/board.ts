import {CaboardConfig} from '../classes/board-model/caboard-config';
import {BoardEventHandler} from './board-event-handler';
import {CaboardView} from './board-view';

export class Caboard {
    private _boardEventHandler: BoardEventHandler | null = null;
    constructor(
        private readonly element: HTMLDivElement,
        private readonly config: CaboardConfig,
    ) {
        if (!element) {
            throw new Error(`Caboard: canvas HTMLElement not found`);
        }

        if (!config) {
            throw new Error(`Caboard: config not found`);
        }
    }

    render() {
        const view = new CaboardView(this.element, this.config);
        view.render();
        this._boardEventHandler = new BoardEventHandler(view);
        this._boardEventHandler.subscribe();
    }

    get boardEventHandler() {
        return this._boardEventHandler;
    }

    destroy() {
        this._boardEventHandler?.destroy();
    }
}
