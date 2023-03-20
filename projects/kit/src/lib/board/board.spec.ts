import {Caboard} from './board';
import 'jest-canvas-mock';

beforeEach(() => {
    jest.resetAllMocks();
    document.body.innerHTML = '<div><canvas id="caboard" /></div>';
});

describe('Caboard', () => {
    const element = document.getElementById('caboard') as HTMLDivElement;
    it('should work', () => {
        expect(new Caboard(element, null)).toEqual('Caboard');
    });
});
