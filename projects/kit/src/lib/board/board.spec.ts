import {Caboard} from './board';

describe('Caboard', () => {
    document.body.innerHTML = '<div><div id="caboard" ><div></div>';
    const element = document.getElementById('caboard') as any;

    it('stage should work', () => {
        const caboard = new Caboard(element, {width: 200, height: 200});
        caboard.render();
        expect(!!caboard.stage).toEqual(true);
        expect(!!caboard.mainLayer).toEqual(true);
    });
});
