

function countStickers(rankings) {
    let stickers = 0

    if (rankings !== typeof object) {
        return undefined
    } else {
        for (i = 0; i < rankings.length; i++) {
            if (stickers === 0) {
                stickers++
            } else {
                stickers += (i + 1)
            };
        }
    }


    return stickers;
}

countStickers([1, 2, 3, 4])

module.exports = countStickers;
