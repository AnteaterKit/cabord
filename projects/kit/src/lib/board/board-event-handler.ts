// import {injectable} from "tsyringe";
import {ICaboardView} from './board-view';
// https://stackoverflow.com/questions/12881212/does-typescript-support-events-on-classes
// https://dev.to/leehambley/using-tsyringe-for-dependency-injection-without-using-the-class-syntax-29h7

export class BoardEventHandler {
    constructor(private readonly board: ICaboardView) {}

    subscribe() {
        this.board.click!.on(x => {
            this.board.state.click(x);
        });

        this.board.mousedown!.on(x => {
            this.board.state.mousedown(x);
        });

        this.board.mousemove!.on(x => {
            this.board.state.mousemove(x);
        });

        this.board.mouseup!.on(x => {
            this.board.state.mouseup(x);
        });
    }

    unsubscribe() {}

    destroy() {
        this.unsubscribe();
    }
}
