'use strict';

/**
 * 50% das mensagens do bot estão aqui
 * Breve quem sabe, tenha mais mensagens futuramente
 * Cuidado ao modificar qualquer coisa
 * Beijos do Lm 💋
 */

//====================> Começo <======================\\

const MESSAGE_DONO = {
    donoMessage: `*Aqui está o Whats do meu mestre 💋*\n\n+#numero#`,
    alugarMessage: `• Oiee @#user#!! Aqui está o número do meu dono caso queira alugar o bot\n\nhttps://wa.me/#numero#\n`,
    bangpOnMessage: "⏤͟͟͞͞Chat banido com *sucesso*, o bot ficará indisponível para *uso* neste grupo🙇‍♀️",
    bangpOffMessage: `❀ Chat foi desbanido com *sucesso*, agora o bot está *livre para uso* neste grupo ✨`,
    prefixoMessage: `*Aqui está meu 𝑷𝒓𝒆𝒇𝒊𝒙𝒐 para uso de meus comandos 『 #prefixo# 』 💁‍♀️*`,
    dono_esta_off: "#now#, meu proprietário #owner# se encontra ausente no momento.\n↺Desde do Horário: #desde#\n–\n☇ Mensagem de Ausência: #motivo#",
};

const MESSAGE_ADMS = {
    linkgpMessage: `*Aqui esta o link do grupo🙇‍♀️💖*\n\nhttps://chat.whatsapp.com/#link#`,
    acceptRequestMessage: '✨ Solicitações aceitas com *sucesso* no grupo: 🙇‍♀️\n#groupName#',
    muteUserMessage: `Usuário mutado: @#user# - Ação do adm: [ #adm# ]`,
    desmuteUserMessage: `Usuário desmutado: @#user# - Ação do adm: [ #adm# ]\nAgr você pode falar a vontade no grupo!`,
    adverterMessage: `➮ 『 @#user# 』 - Tomou uma advertência com sucesso! 🙅‍♀️\n• Total de advertências: #total#/3`,
    auto_advertenciaMessage: `⚠️ ➮ 『 @#user# 』 ⚠️ - *VOCÊ USOU COMANDOS EM SEQUÊNCIA E AUTOMATICAMENTE TOMOU UMA ADVERTÊNCIA* 😾\n\nAdvertência: #total#/3`,
    anti_floodMessage: `@#user# *OPA!! SEM FLOODS DE COMANDOS AQUI🙅‍♀️*`,
    groupOpened: `*Grupo Aberto Com Sucesso Após #tempo# #unidade#!!!✨*\n\n#data#`,
    groupClosed: `*Grupo Fechado Com Sucesso Após #tempo# #unidade#!!!✨*\n\n#data#`,
    memberPromote: `*⏤͟͟͞͞O participante* -〘 @#promovido# 〙 *foi promovido a cargo de adm do grupo 👑 pelo admin* - 〘 @#adm# 〙`,
    adminDemote: `*⏤͟͟͞͞O adminstrador* -〘 @#rebaixado# 〙 *foi rebaixado para membro comum 💨 pelo admin* - 〘 @#adm# 〙`,
    rmAdv: "✨ Foram subtraídas -#advs# advertência de ( @#user# )\n\n• *Restantes*: #rest#/3",
    allClearAdv: "*Advertências limpas com sucesso. Agora esta pessoa não estará mais listado em minha lista de advertências! 💖*",
    seeAdv: "• *Usuario*: @#user#\n• *Total de advertencias*: #adv#/3",
    memberActivity: "░⃟⃛ ➮ *Participante*: @#user#\n❒᭄꥓〭 *Comandos usados*: #cmd#\n❒᭄꥓〭 *Mensagens enviadas*: #msg#\n\n",
    tabelaGp: "᭪➮ Grupo: #group#\n᭪➮ Criado em: #date#\n᭪➮ Hora: #time#\n\n↧ _TABELA_\n\n ➮ #tabela#",
    advList: "-\n#i# ↴\n • *Usuario*: @#user#\n • *Advertencias*: #adv#/3\n\n",
};

const MESSAGE_HORARIOS = {
    madrugada: ['boa madrugada💖', 'Boa madrugada ^-^'],
    dia: ['bom diaa💖', 'Bom dia UwU'],
    tarde: ['boa tarde💖', 'Boa tarde TwT'],
    noite: ['boa noite💖', 'Boa noite >_<'],
    openGpMessage: `*🔓 O grupo foi aberto a partir do horário estabelecido: #hora# ⏰*`,
    closeGpMessage: `*🔒 Fechando o grupo a partir do horário estabelecido: #hora# ⏰*`,

    OBS: 'Use #tempo# para o bot dar bom dia, tarde, noite e etc'
};

const MESSAGE_FORCA = {
    winForcaNoRpg_ganhou: `PARABÉNS!!✨ Você adivinhou a palavra corretamente < *#palavra#* >, irei resetar o game...🙇‍♀️`,
    winForcaNoRpg_continua: `*Acertou uma letra!!✨ Continue até descobrir a palavra toda. 🙇‍♀️*`,
    winForcaWithRpg_ganhou: `PARABÉNS!!✨ Você adivinhou a palavra corretamente < *#palavra#* > e ganhou *#golds# golds* 💰 irei resetar o game...🙇‍♀️`,
    winForcaWithRpg_continua: `*Acertou uma letra!!✨ Continue até descobrir a palavra toda. 🙇‍♀️*`,
    loseForcaIncorrectWord: `*Infelizmente* essa não era a palavra correta❗, deveria ter tentado letra por letra né🤦‍♀️, irei resetar o game`,
    loseForca6Erros: `Que pena! Você completou 6 *erros*, irei resetar o jogo...🙇‍♀️`,
    loseForca: `*Você errou a letra e perdeu 😢*`,

    startForca: '      • 🎮⚔️ 𝙅𝙊𝙂𝙊-𝘿𝘼-𝙁𝙊𝙍𝘾𝘼 ✨ •\n\n' +
        `➮ Tema: #tema#\n` +
        `➮ Dica: #dica#\n` +
        `➮ Quantidade de letras: #quantidade#\n\n` +
        '|───𖡜̸｡᭭\n' +
        '       _¦_\n\n\n\n\n' +
        `╚➮ 『 #letrasX# 』\n\n` +
        '   ꫶───────────୬۟◍⭟\n\n' +
        '_- *🎮 JOGO INICIADO 🎮* -_\n\n' +
        '> Dica: Use o comando `fc` para adiconar uma letra;\n' +
        '> ou digite a palavra toda.\n\n' +
        '   ꫶───────────୬۟◍⭟\n\n',

    forcaRespond: '      • 🎮⚔️ 𝙅𝙊𝙂𝙊-𝘿𝘼-𝙁𝙊𝙍𝘾𝘼 ✨ •\n\n' +
        '➮ Tema: #tema#\n' +
        '➮ Dica: #dica#\n' +
        '➮ Quantidade de letras: #qtdLetras#\n\n' +
        '|───𖡜̸｡᭭\n' +
        '       _¦_\n' +
        '      #frame#\n\n\n\n\n' +
        '╚➮ 『 #letras# 』\n\n' +
        '   ꫶───────────୬۟◍⭟\n\n' +
        '⏤͟͟͞͞Letras jogadas: #letrasUsadas#\n' +
        ' ↳ Acertos: #acertos#  -  Erros: #erros#\n\n' +
        '> Dica: Use o comando `fc` para adicionar uma letra;\n' +
        '> ou digite a palavra toda.\n\n' +
        '   ꫶───────────୬۟◍⭟\n\n',

};

const MESSAGE_ALUGUEL = {
    renovandoAluguel: `*Aluguel de #nome# renovado com sucesso✨*

📆 Vence em  #dias# dias, #horas# horas, #minutos# minutos e #segundos# segundos.`,

    AluguelRegister: `*#tipo# registrado com sucesso!!!🙅‍♀️✨*

• Para deletar o registro, use *#prefixo#rm_aluguel*
• Ou *#prefixo#rm_aluguel #id#

⏳ *Vence em*: #dias# dias, #horas# horas, #minutos# minutos e #segundos# segundos.`,

    checkAluguel: `⚔️ [ *Status de Aluguel* ] ⌛

⛺ *Nome*: #nome#
⚖️ *Status*: #status#
📆 *Alugado em*: #data##vencimento#`,

    listAluguel: `[ #index# ] - *Nome*: #nome#
 ❒᭄꥓〭 *Id*: #id#
❒᭄꥓〭 *Alugado em*: #data#
❒᭄꥓〭 *Status*: #status#
#vencimento#`,

    vencimentoDesign: `❒᭄꥓〭 *Vencimento*:  #dias# dias, #horas# horas, #minutos# minutos e #segundos# segundos.\n\n`,
    checkAluguelVencimentoDesign: `\n⚠️ *Vencimento*: #dias# dias, #horas# horas, #minutos# minutos e #segundos# segundos.`,

    msgDonoAluguelEnded: `⚠️ [ *Aluguel finalizado* ] ⚠️

🏕 *Grupo*: #nome#
🔗 *ID*: #id#
📆 *Foi Alugado em*: #data#

• Se deseja renovar o aluguel do grupo, use: *#prefixo#rn*
• Ou você pode executar no próprio grupo mesmo, exemplo: *#prefixo#rn* |24h`,

    AluguelFinalizado: `• Visto que o tempo de aluguel foi *excedido*, para que o bot continue funcionando é necessário *renovar* o contrato com meu dono🙅‍♀️`,
    AluguelEmEspera: `• O aluguel ainda não foi *renovado*, para que o bot continue ativo no grupo, é necessário renová-lo com meu *dono* 🙅‍♀️`,
};

const MESSAGE_BRINCADEIRAS = {
    personalidade: `   • Resultados da personalidade de: @#user# ✨ ↴
-
 ░⃟⃛ ➮ Está pessoa provavelmente é *#genero#*
 ░⃟⃛ ➮ Gosta de *#hobbie#*
 ░⃟⃛ ➮ Sua profissão é ser *#job#*
 ░⃟⃛ ➮ A hora do dia preferida é de *#clima#*
 ░⃟⃛ ➮ Seu estilo de música é: *#estilo_musical#*
 ░⃟⃛ ➮ Temperatura favorita é *#temperatura#*
-

  • Espero ter acertado pelo menos uma hein!!  @#user# 👀`,

    golpista: `*MDS GOLPISTA ENTRE NÓS 😱🙅‍♀️*

⸺͟͞ꪶGOLPISTA⧽ "@#user#⁩"

✰ۣۜۜ͜͡PORCENTAGEM DO GOLPE⧽  ✰#porcentagem#%✰

Idiota gosta de ferir sentimentos💔🤡`,

    textoJogoV: "*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*\n\n❌ : @#X#\n⭕ : @#O#\n᭪➮ Sua vez : @#turn#\n\n\n#matrix#",
    textoJogoV2: "*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*\n\n❌ : @#X#\n⭕ : @#O#\n\n᭪➮ Sua vez : @#turn#\n\n\n#matrix#",
    haveASession_JOGOV: "*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*\n\nHá uma sessão de jogo neste grupo\n\n@#X# VS @#O#\n\n❌ : @#X#\n⭕ : @#O#\n\n᭪➮ Sua vez : @#turn#\n\n#matrix#",
    WaitOPV2: "*✰❄️ᎬՏᏢᎬᎡᎪΝᎠϴ ϴ ϴᏢϴΝᎬΝͲᎬ❄️✰*\n\n『 @#sender# 』 está te desafiando para uma partida de jogo da velha 🎮\n〘 @#opponent# 〙 Use *『Y』* para aceitar ou *『N』* para rejeitar o jogo ✨...",
};

const MESSAGE_INFOS = {
    checkAtivo: `╭━✰°❀•°✮•| ⊱✿⊰ |•°•❀°✾✰━╮
║⋆⃟ۣۜ᭪➮ 𝐂𝐨𝐧𝐬𝐮𝐥𝐭𝐚 𝐝𝐞 𝐚𝐭𝐢𝐯𝐢𝐝𝐚𝐝𝐞᭄
╰━✰°❀•°✮•| ⊱✿⊰ |•°•❀°✾✰━╯
│╭━━─ ≪ •❈• ≫ ─━━╮ 
│╎░⃟⃛ ➮𝚄𝚂𝚄𝙰𝚁𝙸𝙾 -  @#user#
│╎░⃟⃛ ➮𝙼𝙴𝙽𝚂𝙰𝙶𝙴𝙼𝚂 - #mensagens#
│╎░⃟⃛ ➮𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 - #comandos#
│╎░⃟⃛ ➮𝙲𝙾𝙽𝙴𝙲𝚃𝙰𝙳𝙾 𝙴𝙼 - #aparelho#
│╎░⃟⃛ ➮𝚂𝚃𝙸𝙲𝙺𝙴𝚁𝚂 -  #stickers#
│╎░⃟⃛ ➮𝚃𝙾𝚃𝙰𝙻 - #total#
│╰━━─ ≪ •❈• ≫ ─━━╯
╚═✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ═╝`,

    rankativo: `『 #posicao# 』 ↴
  ╔═✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ═╗
  │╭━━─ ≪ •❈• ≫ ─━━╮ 
  │╎░⃟⃛ ➮𝚄𝚂𝚄𝙰𝚁𝙸𝙾 - @#user#
  │╎░⃟⃛ ➮𝙼𝙴𝙽𝚂𝙰𝙶𝙴𝙼𝚂 - #mensagens#
  │╎░⃟⃛ ➮𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 - #comandos#
  │╎░⃟⃛ ➮𝙲𝙾𝙽𝙴𝙲𝚃𝙰𝙳𝙾 𝙴𝙼 - #aparelho#
  │╎░⃟⃛ ➮𝚂𝚃𝙸𝙲𝙺𝙴𝚁𝚂 -  #stickers#
  │╎░⃟⃛ ➮𝚃𝙾𝚃𝙰𝙻 - #total#
  │╰━━─ ≪ •❈• ≫ ─━━━╯
  ╚═✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ═╝

`,

    rankinativo: `╔═════════════╗
║⋆⃟ۣۜ᭪➮  #posicao#º ⧽  @#user#
╚═════════════╝
 ➮ ⸺͟͞ꪶ𝑀𝑒𝑛𝑠𝑎𝑔𝑒𝑛𝑠⧽ #mensagens#
 ➮ ⸺͟͞ꪶ𝐶𝑜𝑚𝑎𝑛𝑑𝑜𝑠 𝑑𝑎𝑑𝑜𝑠⧽ #cmd#
╚═════════════╝

`,

    sorteioNum: `╭────────────
╎  S𝐎𝐑T𝐄I𝐎⧽ #sorteio# 
╎
╎ ⸺͟͞ꪶNÚMERO - [ #numero# ] 
╎n︎ılı.lıllılı.ıllı..ılı.lıllılı.ıllı
╰────────────`,

    noHaveGolds: `*Você não tem dinheiro suficiente para usar este comando*

💰 Valor ➮ #valor#`,

    payCommand: `Você usou o comando *#comando#* e automaticamente foram descontados $#valor# de seu saldo. 💰

Saldo restante: #saldo#$ 💸`,

    sorteioMember: `*✨UHUU PARABÉNS SORTUDO(A), VOCÊ ACABA DE GANHAR O SORTEIO*🍾🥳

🏆PREMIO⧽ ➬ "#premio#"

⸺͟͞ꪶ@#user#🥂`,

    marryWithMe: `*#tempo#*
 ✧͜͡҉  @#mec#
 
_@#sender# está lhe pedindo em casamento... Digite 『 aceito 』 caso queira aceitar, ou 『 recuso 』 caso queira recusar_ 🫴🏽💍✨

@#sender# para cancelar seu pedido use: *#prefixo#cancelar*`,

    myCouple: `『😍』 @#usu1#
*Casado (a) com* ↴
〘❤️‍🩹〙 @#usu2#

  • 『 *Há #tempoCasado#* 』 •

⏤͟͟͞📆 *Casados em* #data#`,

    rankingGold: `#posicao#° 🏅 ↴
╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸
❒ ➮ Nome: @#user#
❒ ➮ Dinheiro: _#dinheiro#_💰
❒ ➮ Roubos: _#roubos#/5_
❒ ➮ Escudo: _#escudo#_
❒ ➮ Picareta: _#picareta#_
❒ ➮ Quiznumero: _#quiz#/3_
❒ ➮ Enviar cachaça: _#cachaca#/1_
❒ ➮ Vingaçagold: _#vinganca#/1_
❒ ➮ Cassino: _#cassino#/5_
❒ ➮ Minerar: _#minerar#/3_
╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸

`,

    shipo: `*AINN Q FOFOH VEYY🥰🥺*
                   *EU SHIPO ESSES 2*👩‍❤️‍👨

⸺͟͞ꪶ😼⧽ #user1#
💞
 ⸺͟͞ꪶ😻⧽ #user2#

Com uma porcentagem de⧽ ✰#porcentagem#%✰❣`,

    listaGp: `〘 #posicao# 〙↴
  ᭪➮ *Grupo*: #grupo#
  ᭪➮ *ID*: #id#
  ᭪➮ *Link de Convite*: #link#
  ᭪➮ *Criado por*: #criador#
  ᭪➮ *Criado em*: #data#
  ᭪➮ *Membros*: #membros#
  ꫶─────୬۟◍⭟
`,

    ping: `• Olá @#user#  #timetoday#
-
⚡ *Velocidade* ➮ #latensie# *segundos*
⚙️ *Sistema operacional* ➮ #systemtype#
🏷 *Versão* ➮ #systemrelease#

📈 *Memoria RAM livre* ➮ #freemem#GB/MB
🔗 *Memória RAM total* ➮ #totalmem#GB/MB

💎 *Tempo de atividade do bot* ➮ #uptime#
-
⏤͟͟͞͞#nomedobot#`,

    regrasGp: `┏┉✯┉━═『アカメ』═━┉✯┉┓
║が斬る𝐈𝐍𝐅𝐎/𝐆𝐑𝐔𝐏𝐎が斬る
┗┉✯┉━═『アカメ』═━┉✯┉┛
*💫NOME⧽* #nome#
*👥MEMBROS⧽* #membros#

*📌DESCRIÇÃO* : 
#descricao#`,

    status: `╭━✰°❀•°✮•| ⊱✿⊰ |•°•❀°✾✰━╮
┣⋆⃟ۣۜ᭪➮ 𖡦 𝐒𝐓𝐀𝐓𝐔𝐒 𝐃𝐎 𝐆𝐑𝐔𝐏𝐎 ✨ 
╰━✰°❀•°✮•| ⊱✿⊰ |•°•❀°✾✰━╯
│╭━━───────━━╮ 
│╎𖤛 BEM-VINDO⧽ #bemvindo#
│╎𖤛 BEM-VINDO2⧽ #bemvindo2#
│╎𖤛 ANTI-LINK⧽ #antilink#
│╎𖤛 ANTI-BOT⧽ #antibot#
│╎𖤛 ANTI-LINKGP⧽ #antilinkgp#
│╎𖤛 ALUGUEL⧽ #aluguel#
│╎𖤛 ANTI-FAKE⧽ #antifake#
│╎𖤛 X9-VIEWONCE⧽ #antiview#
│╎𖤛 ANTI-IMAGEM⧽ #antiimg#
│╎𖤛 AUTO-BAIXAR⧽ #autodl#
│╎𖤛 ANTI-ARQUIVAMENTO⧽ #antiarqv#
│╎𖤛 ANTI-VIDEO⧽ #antivid#
│╎𖤛 ANTI-AUDIO⧽ #antiaudio#
│╎𖤛 ANTI-STICKER⧽ #antisticker#
│╎𖤛 ANTI-MARCAR⧽ #antimrc#
│╎𖤛 LIMITE-CMD⧽ #lmtcmd#
│╎𖤛 SO-ADM⧽ #soadm#
│╎𖤛 AUTO-FIGURINHA⧽ #autostk#
│╎𖤛 ANTI-DOCUMENTO⧽ #antidoc#
│╎𖤛 ANTI-LOC⧽ #antiloc#
│╎𖤛 ANTI-CONTATO⧽ #antictt#
│╎𖤛 ANTI-NOTAS⧽ #antinotas#
│╎𖤛 ANTI-CATALOGO⧽ #anticatalogo#
│╎𖤛 ANTI-PALAVRA⧽ #antipalavra#
│╎𖤛 ANTI-FLOOD⧽ #antiflood#
│╎𖤛 MODO-GAMER⧽ #modogm#
│╎𖤛 AUTO-RESPOSTA⧽ #autores#
│╎𖤛 +18⧽ #mais18#
│╎𖤛 X9-ADM⧽ #x9adm#
│╎𖤛 MODO-RPG⧽ #modorpg#
│╎𖤛 SIMIH⧽ #simi#
│╎𖤛 SIMIH2⧽ #simi2#
╰━━━✰°❀•°✮°•❀°✾✰━━━╯`,

    status2: `╭━✰°❀•°✮•| ⊱✿⊰ |•°•❀°✾✰━╮
┣⋆⃟ۣۜ᭪➮ 𖡦 𝐒𝐓𝐀𝐓𝐔𝐒 𝐃𝐎 𝐁𝐎𝐓 🌙 
╰━✰°❀•°✮•| ⊱✿⊰ |•°•❀°✾✰━╯
│╭━━───────━━╮ 
│╎➮ BOT⧽ #bot#
│╎➮ ANTI-CALL⧽ #anticall#
│╎➮ ANTI-PV⧽ #antipv#
│╎➮ ANTI-PV2⧽ #antipv2#
│╎➮ ANTI-PV3⧽ #antipv3#
│╎➮ VERIFICADO⧽ #verified#
│╎➮ ALUGUEL-GLOBAL⧽ #aluguel#
│╎➮ CONSOLE⧽ #console#
│╎➮ ANTI-DELETE⧽ #delete#
│╎➮ AUTO-READ⧽ #autoread#
│╰━━───────━━╯
╰━━━✰°❀•°✮°•❀°✾✰━━━╯`,

    idiomas: `Veja a lista de idiomas disponíveis em: 
↳ [ https://cloud.google.com/translate/docs/languages ]
-
• Modo de uso do GTTS e Google Tradutor:
-
↳ *#prefixo#falar*: - Use para falar um texto em um idioma específico, exemplo:
• *#prefixo#falar* pt Olá! 
*[pt]* - Se refere ao idioma "Português";
*[Olá!]* - É o texto para a fala.
-
↳ *#prefixo#traduzir*: - Usado para traduzir um texto pelo idioma desejado, exemplo:
• *#prefixo#traduzir* pt/Hi! 
*[pt]* - Se refere ao idioma "Português" que será traduzido;
*[Hi!]* - É o texto para a tradução "Olá!"

• Você também pode mencionar uma mensagem para tradução ( *#prefixo#traduzir* pt/ ).`,

    shazam: `✨ 𝙈𝙐𝙎𝙄𝘾𝘼 𝙀𝙉𝘾𝙊𝙉𝙏𝙍𝘼𝘿𝘼 ✨

  • *Título*: #titulo#
  • *Autor*: #autor#
  • *Duração*: #duracao#
  • *Views*: #views#
  • *Postado em*: #postado#`,

    midias: `*⸺͟͞ꪶ𝐈𝐍𝐅𝐎𝐑𝐌𝚫𝐂𝐎𝐄𝐒᭄ ↴*
--
❒᭄꥓〭  *Titulo*: #titulo#
❒᭄꥓〭  *Tempo*: #tempo#
❒᭄꥓〭  *Postado*: #postado#
❒᭄꥓〭  *Descrição*: #descricao#
--
■■■■■ 100% 
--
✨𝒆𝒏𝒗𝒊𝒂𝒏𝒅𝒐... 𝒂𝒈𝒖𝒂𝒓𝒅𝒆 𝒖𝒎 𝒑𝒐𝒖𝒄𝒐🌙

#tempo_envio#
ılı.lıllılı.ıllı..ılı.lıllılı.ıllı`,

    animeinfo: `✨   • 𝘼𝙉𝙄𝙈𝙀 𝙎𝙀𝘼𝙍𝘾𝙃 •   ✨
-
        『 𝙸𝚗𝚏𝚘𝚛𝚖𝚊𝚌̧𝚘̃𝚎𝚜 𝙳𝚘 𝙰𝚗𝚒𝚖𝚎 』 ↴
-
    ➮ 𝙽𝚘𝚖𝚎: 🎴
    ↳ 『 #nome# 』
-
    ➮ 𝙰𝚟𝚊𝚕𝚒𝚊𝚌̧𝚊̃𝚘: 💖
    ↳ 『 ✰ #avaliacao# 』
-
    ➮ 𝙴𝚙𝚒𝚜𝚘́𝚍𝚒𝚘𝚜: 🎞
    ↳ 『 #episodios# 』
-
    ➮ 𝙻𝚒𝚗𝚔: 📎
    ↳ 『 #link# 』
-
    ➮ 𝙳𝚎𝚜𝚌𝚛𝚒𝚌̧𝚊̃𝚘: 📃
    ↳ 『 #descricao# 』
-
⏤͟͟͞͞#nomedobot#`,

    tiktok_stalker: `✨   • 𝙏𝙄𝙆𝙏𝙊𝙆 𝙎𝙏𝘼𝙇𝙆𝙀𝙍 •   ✨
-
        『 𝙸𝚗𝚏𝚘𝚛𝚖𝚊𝚌̧𝚘̃𝚎𝚜 𝙳𝚘 𝙿𝚎𝚛𝚏𝚒𝚕 』
-
  ↝ 𝑵𝒐𝒎𝒆: #idname#
  ↝ 𝑭𝒖𝒍𝒍𝑵𝒂𝒎𝒆: #fullname#
  ↝ 𝑺𝒆𝒈𝒖𝒊𝒅𝒐𝒓𝒆𝒔: #seguidores#
  ↝ 𝑺𝒆𝒈𝒖𝒊𝒏𝒅𝒐: #seguindo#
  ↝ 𝑽𝒊𝒅𝒆𝒐𝒔: #videos#
  ↝ 𝑪𝒖𝒓𝒕𝒊𝒅𝒂𝒔: #likes#
  ↝ 𝑽𝒆𝒓𝒊𝒇𝒊𝒄𝒂𝒅𝒐: #verificado#
  ↝ 𝑳𝒊𝒏𝒌: #link#
  ↝ 𝑫𝒆𝒔𝒄𝒓𝒊𝒄̧𝒂̃𝒐: ↴
  ↳ 〘 #descricao# 〙
-
        『 𝙸𝚗𝚏𝚘𝚛𝚖𝚊𝚌̧𝚘̃𝚎𝚜 𝙰𝚟𝚊𝚗𝚌̧𝚊𝚍𝚊𝚜 』
-
  ↝ 𝑹𝒆𝒈𝒊𝒂̃𝒐: #regiao#
  ↝ 𝑪𝒐𝒏𝒕𝒂 𝒑𝒓𝒊𝒗𝒂𝒅𝒂: #conta_privada#
  ↝ 𝑷𝒆𝒓𝒇𝒊𝒍 𝒄𝒓𝒊𝒂𝒅𝒐 𝒆𝒎: #data_criacao#
-

⏤͟͟͞͞#nomedobot#`,


    clima: `⚠️️ Sobre o clima de agora no local.
-
→ *Local:* #local#
→ *Temperatura atual:* #tempC# C° - [#tempF# F°]
→ *Sensação térmica:* #sensC# C° = [#sensF# F°]
→ *Umidade do Ar / Ventos:* #umidade#%
→ *Chuva em polegadas:* #chuvaPol# Pol - [#chuvaMM# MM]
→ *Cobertura de nuvens:* #nuvens#%
→ *Indice de Ultra-Violeta (UV):* #uv#
→ *Nivel de visibilidade:* #visKm# KM - [#visMi# M.]
→ *Descrição do clima:* #descricao# - [ID #codigo#]
→ *Direção do vento:* #ventoDir# - [#ventoGraus#°]
→ *Velocidade dos ventos em KM:* #ventoKm# KM - [#ventoMi# M.]
→ *Pressão do ar:* #presshPa# hPa - [#pressMm# mmHg]
-
️🏘 Algumas informações do local.
-
→ *Tipo de requisição:* #reqTipo#
→ *Local da requisição:* #reqLocal#
→ *Local mais aproximado:* #lat# Lat. | #lon# Lon.
→ *Total de Habitantes:* #habitantes#
→ *Data agora no local:* #dataLocal#
→ *Tempo de observação:* #tempoObs#`,

};



const MESSAGE_GOLDS = {
    addGold: `*Parabéns @#usuario#! Você recebeu #valor#$ golds extras💎💰*`,
    rmGold: `*#valor# golds💰 foram tirados de @#usuario# com sucesso✨🙅‍♀️*`,
    sorteioGold: `*PARABENS✨!!! VOCÊ FOI SORTEADO COM #valor#$ golds* 💰💎\n\n⸺͟͞ꪶ@#user#🥂`,

    goldDaily: `${"‎‎‎‎‎‎‎‎‎‎‎‎".repeat(100)} 
•  ⏤͟͞#time# ➮ @#user#
 ↳ Você ganhou *20 Golds* 💰 pela mensagem do dia 🌟✨
-
░⃟⃛ ➮ Use 『 *#prefixo#MenuRpg* 』 para saber mais... ⚔️`,

    Cassino: `Consiga 3 iguais para ganhar
          ✰#nome#✰
╭╾╾╾╾ ≪ •❈• ≫ ╾╾╾╾╗
║         [💰SLOT💰 | 777 ]        
║                                             
║           #slot1#
║           #slot1#  ◄━━┛
║           #slot1# 
║
║           *#resultado#*    
║          [💰SLOT💰 | 777 ]        
╚╾╾╾╾ ≪ •❈• ≫ ╾╾╾╾╝
•Você tem #chances#/5 chances restartes•`,

    statusGold: `╭━◌━━💰『𝙲𝙰𝚂𝙷』💰━━◌━╮
┃╭━━━ ≪ •❈• ≫ ━━╮
┃┃☆ۜۜ͜͡💰 *Nome*: @#nome#
┃┃☆ۜۜ͜͡💰 *Numero*: #numero#
┃┃
┃┃☆ۜۜ͜͡💰 *Saldo disponivel*: *#saldo#$ Golds*
┃╰━━━─『💵』─━━━╯
╰━◌━━💰『𝙲𝙰𝚂𝙷』💰━━◌━╯
╎
╭━◌━━💎『𝙸𝚃𝙴𝙼𝚂』💎━━◌━╮
┃╭━━━ ≪ •❈• ≫ ━━╮
┃┃☆ۜۜ͜͡⛏️ *Picareta*: #picareta#
┃┃➮ Durability: #picareta_dur#
┃┃➮Chances: #picareta_chances#/3
┃┃
┃┃☆ۜۜ͜͡🎰 *Cassino*:
┃┃➮Chances: #cassino_chances#/5
┃┃
┃┃☆ۜۜ͜͡🛡 *Escudo*: #escudo#
┃┃
┃┃☆ۜۜ͜͡🍺 *Cachaça*: #cachaca#
┃┃➮ Chances: #cachaca_chances#/1
┃┃
┃┃☆ۜۜ͜͡🩸 *Vingançagold*: #vinganca#
┃┃➮ Chances: #vinganca_chances#/1
┃┃
┃┃☆ۜۜ͜͡🎲 *Quiz*:
┃┃➮ Chances: #quiz_chances#/3
┃╰━━━─『♨️』─━━━╯
╰━◌━━💎『𝙸𝚃𝙴𝙼𝚂』💎━━◌━╯
╎
╭━◌━━✨『𝚁𝙾𝚄𝙱𝙾𝚂』✨━━◌━╮
┃╭━━━ ≪ •❈• ≫ ━━╮
┃┃➮ *Já roubou*: #roubos#/5
┃┃
┃┃➮ *Lista dos que te tentaram roubo*: ↴
┃┃
┃┃ ➮ #roubo_lista#
┃┃
┃╰━━━─『♨️』─━━━╯
└══════════════━•••`,

    listaRoubos: `\n┃┃\n┃┃${"─".repeat(11)}\n┃┃\n┃┃➮ `,

    comprovante: `╭─❒ 『 Comprovante 』 ❒
├✧͜͡҉✅ - Pagamento feito
│↳ 『 #data# às #hora# 』
│
├✧͜͡҉💸 - Valor:
│↳ 『 #valor# 』
│
├✧͜͡҉👤️ - De:
│↳ 『 #remetente# 』
│
├✧͜͡҉💰 - Banco:
│↳ 『 #banco# 』
│
├✧͜͡҉📥 Para: @#destino#
│
├✧͜͡҉📱 @#origem# - Saldo restante: #saldo#
└❏`,

    lojaGold: `🛍️ *Loja Da #NomeDoBot#* 🛍️

『 PRODUTOS 』

× ESCUDO 🛡
Comando: #prefixo#Comprar escudo
VALOR =〘 *R$ 50.00*💰 〙
Vantagens = _Feito para você se proteger de intrusos que irão tentar roubar seus golds💸_
-_-_-_-_-_-_-_-_-_-_
× CACHAÇA 🍺
Comando: #prefixo#Comprar cachaça
VALOR =〘 *R$ 50.00*💰 〙
Vantagens = _Obtenha chances de roubar golds de usuarios usando #prefixo#Enviar_Cachaça @xpessoa_
-_-_-_-_-_-_-_-_-_-_
× VINGANÇA 🩸
Comando: #prefixo#Comprar vingaçagold
VALOR =〘 *R$ 50.00*💰 〙
Vantagens = _Usado para vingar golds de pessoas que te roubaram no dia... Use: #prefixo#Vingar @xpessoa_
-_-_-_-_-_-_-_-_-_-_
× PICARETA ⛏️
Comando: #prefixo#Comprar picareta
VALOR =〘 *R$ 20.00*💰 〙
Vantagens = _Usado para mineração. Use o comando #prefixo#Minerar_

-_-_-_-_-_-_-_-_-_-_`
};


module.exports = {
    ...MESSAGE_ADMS,
    ...MESSAGE_GOLDS,
    ...MESSAGE_FORCA,
    ...MESSAGE_HORARIOS,
    ...MESSAGE_BRINCADEIRAS,
    ...MESSAGE_INFOS,
    ...MESSAGE_DONO,
    ...MESSAGE_ALUGUEL
};