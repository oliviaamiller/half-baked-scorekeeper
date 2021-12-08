import {
    renderGame,
    renderTeam
} from '../render-utils.js';

const test = QUnit.test;

test('renderGame is a function that creates a div that displays name1, name2, score1, and score2', (expect) => {
    const game = {
        name1: 'cat',
        name2: 'mice',
        score1: 3,
        score2: 4
    };

    const expected = '<div class="game"><div><p>cat</p><p>3</p></div><div><p>mice</p><p>4</p></div></div>';
    const actual = renderGame(game).outerHTML;

    expect.equal(actual, expected);
});

test('renderTeam is a function that ')