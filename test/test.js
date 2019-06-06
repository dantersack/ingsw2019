var assert = require('chai').assert;
var index = require('../src/index');

describe('Comprobando que esten los miembros del grupo: ', function() {
    it('Comprobando que este Alan ', function() {
        miembro = index.task[0];
        assert.equal(miembro, 'alan');
    });
    it('Comprobando que este Dante ', function() {
        miembro = index.task[1];
        assert.equal(miembro, 'dante');
    });
    it('Comprobando que este Fernanda ', function() {
        miembro = index.task[2];
        assert.equal(miembro, 'fernanda');
    });
    it('Comprobando que este Nico ', function() {
        miembro = index.task[3];
        assert.equal(miembro, 'nico');
    });
});