'use strict';

/**
 * Parte da função de otimização do bot
 * Criado por Lm Only
 */

/**
 * Função main -> principal que verifica se algum membro saiu ou não
 *
 * @param {Object} objeto - Recebe todo os elementos de um grupo
 * @param {Array} groupMembers - Array de membros atuais
 * @returns {Object} Retorna um objeto com o consumo e os membros que saíram
 */
const main = (objeto, groupMembers) => {
     let tamanho = 0; //Tamanho do consumo
     const array = []; //Membros que saíram

     for (let element of Object.keys(objeto)) {
     
         //verifica se a pessoa não tá no grupo
         if (!groupMembers.includes(element) && element !== "name") {
             tamanho += JSON.stringify(objeto).toString().length;
             array.push(element);
         }
     }
     
     return { tamanho, array };
};

module.exports = main;

            