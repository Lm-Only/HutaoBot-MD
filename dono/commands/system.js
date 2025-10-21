'use strict';
const { mencFunction } = require('../../exports.js');
let hutao = {};

const defineParams = (sock) => {
    hutao = sock;
};
exports.defineParams = defineParams;

class HutaoBotMD {
    sendMessage(message = '', opts) {
        return hutao.sendMessage(opts.id, {
            text: message,
            mentions: message.includes('@') ? mencFunction(message) : []
        }, opts.quoted ? {
            quoted: opts.quoted
        } : {});
    }

    sendImage(message = '', opts) {
        const content = {
            image: Buffer.isBuffer(opts.image) ? opts.image : {
                url: opts.image
            }
        };

        return hutao.sendMessage(
            opts.id, {
                ...content,
                caption: message,
                mentions: message.includes('@') ? mencFunction(message) : []
            },
            opts.quoted ? {
                quoted: opts.quoted
            } : {}
        );
    }


}

exports.HutaoBotMD = HutaoBotMD;