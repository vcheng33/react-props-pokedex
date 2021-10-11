function shuffle(items) {
    for (let i = items.length - 1; i > 0; i--) {
        // generate a random index between 0 and i
        let j = Math.floor(Math.random() * i);
        // swap item at i <-> item at j
        [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
}

export default shuffle;