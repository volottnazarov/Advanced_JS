const musicCollection = {
    albums: [
        {title: "Human", artist: "Death", year: "1991"},
        {title: "Battles In The North", artist: "Immortal", year: "1995"},
        {title: "The Miracle", artist: "Queen", year: "1989"},
        {title: "The Silent Enigma", artist: "Anathema", year: "1995"}
    ],
    [Symbol.iterator] () {
        this.current = 0;
        return this;
    },
    next() {
        return this.current < this.albums.length
            ? {done: false, value: this.albums[this.current ++] }
            : {done: true};
    }

}

for (const elem of musicCollection) {
    console.log(elem.title ,"-", elem.artist, "(", elem.year, ")");
}