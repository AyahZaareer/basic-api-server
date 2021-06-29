'use strict';
const uuid = require('uuid').v4;


class Clothes {
    constructor() {
        this.db = [];
    }
    read(id) {
        if (id) {
            return this.db.find((ele) => ele.id === id);
        } else {
            return this.db;
        }
    }
    create(obj) {
        const clothes = {
            id: uuid(),
            data: obj
        };
        this.db.push(clothes);
        return clothes;
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
        this.db = this.db.filter((clothes) => clothes.id !== id);
        return this.db;
    }
}

module.exports = Clothes;
