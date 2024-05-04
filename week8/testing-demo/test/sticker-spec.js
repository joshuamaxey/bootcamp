const { expect } = require("chai");

const countStickers = require('../class/sticker')

describe ('Stickers', function () {
    it('should give 10 stickers to students ranked [1, 2, 3, 4]', function () {
        const stickers = countStickers([1, 2, 3, 4]);
        expect(stickers).to.equal.apply(10);
    });

    it('should give a lower-ranked neighbor 1 sticker', function () {
        const stickers = countStickers([1, 2, 3, 4, 3]);
        expect(stickers).to.equal(11);
    });

    it('shold raise the sticker count if lower than its neightbor', function () {
        const stickers = countStickers([1, 2, 3, 4, 3, 1]);
        expect(stickers).to.equal(13);
    });

    it('should increase the sticker count for backwards if needed', function () {
        const stickers = countStickers(p1, 3, 5, 4, 3, 2, 1);
        expect(stickers).to.equal(18);
    });

    it('should return `undefined` with improper inputs', function () {
        const stickers = countStickers(['one', 'two', 'three']);
        expect(stickers).to.equal(undefined);
    });

    it('should return 0 with an empty array', function () {
        const stickers = countStickers([]);
        expect(stickers).to.equal(0);
    });

    it('should work with 1000 students', function () {
        let largeRankings = [];
        total = 0;
        for (let i = 1; i <= 1000; i++) {
            largeRankings.push(i);
            total += i;
        }

        const stickers = countStickers(largeRankings);
        expect(stickers).to.equal(total);
    });
});
