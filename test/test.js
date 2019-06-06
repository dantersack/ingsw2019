var assert = require('chai').assert;
var index = require('../src/index');

describe('Comprobando que esten los miembros del grupo: ', function() {
    it('Comprobando que este Alan ', function() {
        miembro = index.miembros[0];
        assert.equal(miembro, 'Alan');
    });
    it('Comprobando que este Dante ', function() {
        miembro = index.miembros[1];
        assert.equal(miembro, 'Dante');
    });
    it('Comprobando que este Fernanda ', function() {
        miembro = index.miembros[2];
        assert.equal(miembro, 'Fernanda');
    });
    it('Comprobando que este Nico ', function() {
        miembro = index.miembros[3];
        assert.equal(miembro, 'Nico');
    });
    it('Comprobando que este Fede ', function() {
        miembro = index.miembros[4];
        assert.equal(miembro, 'Fede');
    });
});