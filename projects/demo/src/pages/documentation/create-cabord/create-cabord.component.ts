import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    ViewChild,
} from '@angular/core';
import {Caboard, CaboardStates} from '@cabord/kit';

@Component({
    selector: 'app-create-cabord',
    templateUrl: './create-cabord.component.html',
    styleUrls: ['./create-cabord.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateCabordComponent implements AfterViewInit {
    private _board: Caboard | null = null;
    private _boardPen: Caboard | null = null;
    @ViewChild('board') canvas: ElementRef | null = null;
    @ViewChild('boardPen') canvasPen: ElementRef | null = null;

    readonly maskitoParseNumberDemo = import('./examples/caboard-demo.md?raw');

    ngAfterViewInit(): void {
        if (this.canvas) {
            this._board = new Caboard(this.canvas.nativeElement, {
                width: 1000,
                height: 300,
            });
            this._board.render();
        }

        if (this.canvasPen) {
            this._boardPen = new Caboard(this.canvasPen.nativeElement, {
                width: 1000,
                height: 300,
                initialState: CaboardStates.freeline,
            });
            this._boardPen.render();
        }
    }
    get board() {
        return this._board;
    }
}
