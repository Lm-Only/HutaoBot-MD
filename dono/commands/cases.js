'use strict';

const { HutaoBotMD } = require('./system.js');
const hutao = new HutaoBotMD();

const commands = async (opts) => {
    try {
        const { from, info, command, body, sender } = opts;
        
        switch (command) {
            case 'menu2':
                hutao.sendMessage('Enviando menu', {
                    id: from,
                });
                hutao.sendImage(`Menu2 - Mencionando @${sender.split('@')[0]}`, {
                    id: from,
                    image: 'https://i.pinimg.com/736x/23/d9/d5/23d9d528e60db86a5f46a26cac8e4035.jpg',
                    quoted: info
                });
                break;
        }
    } catch (erro) {
        console.error(erro);
    }
};

module.exports = commands;
