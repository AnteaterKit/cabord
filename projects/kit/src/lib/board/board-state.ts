import {ICabordDrawer} from './board-drawer';

export interface ICaboardState {
    click(e: any): void;
    mousedown(e: any): void;
    mouseup(e: any): void;
    mousemove(e: any): void;
}

export class PointState implements ICaboardState {
    constructor(private readonly drawer: ICabordDrawer) {}
    mousedown(): void {}
    mouseup(): void {}
    mousemove(): void {}
    click(e: any): void {
        this.drawer.draw(e);
    }
}

export class FreelineState implements ICaboardState {
    constructor(private readonly drawer: ICabordDrawer) {}
    click(): void {}
    mousedown(e: any): void {
        this.drawer.start(e);
    }
    mouseup(e: any): void {
        this.drawer.end(e);
    }
    mousemove(e: any): void {
        this.drawer.draw(e);
    }
}
