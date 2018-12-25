import {Message,User} from '/lib/imports/collections';

const ReactivityProvider = function () {
  this.types = {
      Message,
      User
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
    insert(type,data = {}){
        console.log(data);
        resolveType(type).insert(data);
    },
    update(){

    },
    delete(type,condition = {}){
        resolveType(type).remove(condition);
    }
};

export default new ReactivityProvider();