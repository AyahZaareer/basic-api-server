'use strict';
const uuid = require('uuid').v4;


class Food {
    constructor() {
        this.db = [];
    }
    read(id) {
        if (id) {
            return this.db.find((foo) => foo.id === id);
        } else {
            return this.db;
        }
    }
    create(obj) {
        const food = {
            id: uuid(),
            data: obj
        };
        this.db.push(clothes);
        return food;
    }
    update(id, obj) {
        for (let i = 0; i < this.db.length; i++) {
            let ele = this.db[i];
            if (ele.id === id) {
                this.db[i].data = obj;
                return this.db[i];
            }
        }
    }
    delete(id) {
        this.db = this.db.filter((fo) => fo.id !== id);
        return this.db;
    }
}

module.exports = Food;