import 'reflect-metadata';
import {container} from 'tsyringe';
import {Layer} from 'konva/lib/Layer';
import {Stage} from 'konva/lib/Stage';
import {Event} from '../classes/infrastructure/ievent';
import {ICaboardState} from './board-state';
import {BoardEventHandler} from './board-event-handler';
import {ICaboardView} from './board-view';
import {KonvaEventObject} from 'konva/lib/Node';

class StateFake implements ICaboardState {
    mousedown(): void {}
    mouseup(): void {}
    mousemove(): void {}
    click(): void {}
}

class CaboardViewFake implements ICaboardView {
    getElementRectPosition(): {x: number; y: number} {
        return {x: 5, y: 5};
    }
    mousedown: Event<KonvaEventObject<MouseEvent>> | null = new Event();
    mouseup: Event<KonvaEventObject<MouseEvent>> | null = new Event();
    mousemove: Event<KonvaEventObject<MouseEvent>> | null = new Event();
    state: ICaboardState = new StateFake();
    get mainLayer(): Layer | null {
        return null;
    }
    get stage(): Stage | null {
        return null;
    }
    click: Event<any> | null = new Event<any>();
}

describe('BoardEventHandler', () => {
    beforeEach(async () => {
        container.register<ICaboardView>('ICaboardView', {useClass: CaboardViewFake});
    });

    it('board click state should work', () => {
        const board = container.resolve<ICaboardView>(CaboardViewFake);
        const handler = new BoardEventHandler(board);
        const click = board.click as Event<any>;
        click.trigger('test');

        expect(!!handler).toEqual(true);
    });
});
