import {Message} from '/lib/imports/collections';

const ReactivityProvider = function () {
  this.types = {
      Message
  };
};

const resolveType = function (type) {
    if (Object.prototype.toString.call(type) === '[object String]') return this.types[type];
    return type;
};

ReactivityProvider.prototype = {
    findOne(type,query = {}) {
        return resolveType(type).findOne(query);
    },
    find(type,query = {},options = {}) {
        return resolveType(type).find(query,options).fetch();
    },
    observeChanges(type,query = {},options = {},callbacks) {
        resolveType(type).find(query,options).observeChanges(callbacks);
    },
    update(){

    },
    delete(){

    }
};

export default new ReactivityProvider();