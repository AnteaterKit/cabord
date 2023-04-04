export interface IEvent<T> {
    on(handler: {(data?: T): void}): void;
    off(handler: {(data?: T): void}): void;
    trigger(data?: T): void;
}

export class Event<T> implements IEvent<T> {
    private handlers: Array<{(data?: T): void}> = [];

    on(handler: {(data?: T): void}): void {
        this.handlers.push(handler);
    }

    off(handler: {(data?: T): void}): void {
        this.handlers = this.handlers.filter(h => h !== handler);
    }

    trigger(data?: T) {
        this.handlers.slice(0).forEach(h => h(data));
    }

    expose(): IEvent<T> {
        return this;
    }
}
