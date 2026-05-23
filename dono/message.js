"use strict";
/**
 * Aqui você pode editar mensagems do bot a vontade!
 * Muita atenção ao mexer em algo, para não dar problema depois.
 * Apenas mude os textos, menos outra coisa.
 */

const txt = {
    Owner: "*COMANDO APENAS PARA MEU DONO. 🤦‍♀️*",

    only_leaders: "*SOMENTE MEUS LÍDERES PODEM USAR ESTE COMANDO. 🤦‍♀️*",

    only_adm: "*VOCÊ NÃO É ADM PARA EXECUTAR ESSE COMANDO! 😾*",

    only_vip: "*COMANDO É EXCLUSIVO APENAS PARA OS VIP. 🍸💸*",

    add_parceria: "*Sucesso*!! Agora @#nmr# poderá enviar links #quantidade#... ✨️",

    ANTI_STATUS: {
        message: "• ⚠️ `MESSAGEM PROIBIDA!` ⚠️ •\n\n-> Menção de status é proibido neste grupo! ❌️\n-> Você sera removido por quebrar as regras. 😡", // '0', //Para não responder
        deleteMessage: true, // false,
        banUser: true, //false,
    },

    del_parceria: "*Sucesso*!! Agora @#nmr# não poderá enviar links neste grupo... ✨️",

    reached_limit: "@#nmr# seu limite diário de divulgações esgotou, volte no próximo dia para divulgar novamente ou contrate um ADM! 🙇‍♀️",

    mess_parceria: "Tudo certo, @#nmr#!\n Você ainda pode divulgar #quantidade#... ✨️",

    not_parceria: "@#nmr# você não tem parceria com o nosso grupo, contrate algum adm para que você possa divulgar aqui! ❣️",

    only_group: "🔒 *COMANDO DISPONÍVEL APENAS PARA GRUPOS. 🙇‍♀️*",

    LinkGrupoDetect: "0",

    LinkDetect: "0",

    isBotAdm: "*Eu preciso ser ADM do grupo* 🥺",

    aluguelVencidoGrupo: "⚠️᪶ᩧᰰ ૭ ׄ *ALUGUEL EXPIRADO*\n\n```O período de uso deste grupo foi encerrado 😢.\nPara continuar com o acesso, é necessário renovar 💸.\nfale diretamente com meu responsável 💬.```\n> wa.me/#dono#\n\n✰ۣۜۜ͜͡#nomebot#",

    packname: "➮ 𝑪𝒓𝒊𝒂𝒅𝒂 𝒑𝒐𝒓: 💖\n↳ 『 #nomedobot# 』\n\n➮ 𝑵𝒊𝒄𝒌 𝑫𝒐𝒏𝒐: 👑\n↳ 『 #nomedodono# 』⁩\n─────",

    authorname: "─────\n➮ 𝑭𝒆𝒊𝒕𝒂 𝑷𝒐𝒓: 💎\n↳ 『 #user# 』\n\n➮ 𝑮𝒓𝒖𝒑𝒐: 🌌\n↳ 『 #lugar# 』",

    command_blocked: "*COMANDO INDISPONÍVEL PARA USO NESTE GRUPO!! 🙅‍♀️*",

    highTimestamp: "*Não foi possível realizar o download, pois a mídia é superior à 1h ⏱️😔*",

    global_command_blocked: "🔒 *COMANDO INDISPONÍVEL PARA USO!! 🙅‍♀️*",

    member_marked_everyone: "*Marca não fdp 😡 vai tirar o sossego de outro*",

    Anti_Bot: "*NÃO É PERMITIDO OUTROS BOTS AQUI!! 😠*",

    antilink_group: "*PROIBIDO LINKS DE OUTROS GRUPOS AQUI!!! 😡🗡*",

    anti_sticker: "*😡 PROIBIDO FIGURINHAS NO GRUPO 🚫*",

    anti_notas: "*METE O PÉ DAQUI SEU IMUNDO😡*",

    anti_audio: "*🎙 -> 🚫 PROIBIDO ÁUDIOS AQUI 😡*",

    anti_link: "*PROIBIDO LINKS AQUI, IREI BANI-LO!!! 😡🗡*",

    anti_palavra: "*SEM PALAVRAS OFENSIVAS AQUI SEU IMUNDO!!!😡*",

    message_proibida: "*MENSAGEM PROIBIDA NO GRUPO, IREI BANIR!!!🙅‍♀️*",

    gamer_mode: "*O MODO-GAMER PRECISA ESTAR ATIVO...⚔️*\n> Comando de ativação: `ModoGamer`",

    modorpg: "*O MODO-RPG PRECISA ESTAR ATIVO... ❗*\n> Comando de ativação: `ModoRpg`",

    promote: "#user# *PROMOVIDO A CARGO DE ADMINISTRADOR COM SUCESSO✨!! PELO ADM* #sender# 🙅‍♀️",

    demote: "*OKAY ADM... AGORA #user# É UM MEMBRO COMUM* 🙅‍♀️",

    remove: "#user#\n〘 *FOI REMOVIDO COM SUCESSO* 〙- 『 _por motivos justos_ 』 - 🙅‍♀",

    openGroup: "*Grupo aberto com sucesso pelo ADM #adm# agora vocês podem interagir!!! 😼*\n\n#horario#✨",

    closedGroup: "*Grupo fechado com sucesso pelo ADM #adm# 🙅‍♀️*\n\n#horario#🍂",

    Ban_Listanegra_global: "*Olha só quem deu as cara #nmr# 😈 agora mete o pé daqui vagabundo(a)*",

    simi_palavras_proibidas: ["puta","gay","lixo","viado","macaco","preto"],

    message_play: "    ⸺͟͞ꪶ𝐁𝐄𝐌 ꪜ𝐈𝐍𝐃𝚯 (𝚫)᭄\n  ↳ 『 @#nmr# 』 - ♪\n-\n     ⸺͟͞ꪶ𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲̧𝙾̃𝙴𝚂᭄ 🎶 ↴\n-\n ஓீ፝͜͡🌃 ➮ 𝚃𝚒𝚝𝚞𝚕𝚘⧽ #titulo#\n ஓீ፝͜͡⏳ ➮ 𝚃𝚎𝚖𝚙𝚘⧽ #tempo#\n ஓீ፝͜͡🌌 ➮ 𝚅𝚒𝚎𝚠𝚜⧽ #views#\n ஓீ፝͜͡🌸 ➮ 𝙰𝚞𝚝𝚑𝚘𝚛⧽ #author#\n ஓீ፝͜͡✨ ➮ 𝙿𝚞𝚋𝚕𝚒𝚌𝚊𝚍𝚘⧽ #publicado#\n ஓீ፝͜͡🌠 ➮ 𝙳𝚎𝚜𝚌𝚛𝚒𝚌̧𝚊̃𝚘⧽ #desc#\n\n-\n     ✨𝑬𝒏𝒗𝒊𝒂𝒏𝒅𝒐... 𝑨𝒈𝒖𝒂𝒓𝒅𝒆 𝒖𝒎 𝒑𝒐𝒖𝒄𝒐...🌙\n-\n  #time#\nılı.lıllılı.ıllı..ılı.lıllılı.ıllı",

    message_perfil: "╭━✰°❀•°✮•| ⊱✿⊰ |•°•❀°✾✰━╮\n┝⋆⃟ۣۜ᭪➮ 𝐌𝐄𝐔 𝐏𝐄𝐑𝐅𝐈𝐋 『🥂』\n╰━✰°❀•°✮•| ⊱✿⊰ |•°•❀°✾✰━╯\n│╭━━───────━━╮\n│╎➮ 🌌 𝐍𝐎𝐌𝐄 - 『 #nome# 』\n│╎➮ 📱𝐍𝐔𝐌𝐄𝐑𝐎 - 『 #nmr# 』\n│╎➮ 💖 𝐁𝐈𝐎 - 『 #bio# 』\n│╎➮ 🔮 𝐂𝐎𝐍𝐄𝐂𝐓𝐀𝐃𝐎 𝐄𝐌 - 『 #aparelho# 』\n│┝─✰°❀•°✮•─✰°❀•°✮•𖦹५ॱ\n│╎➮ 👑 𝐃𝐎𝐍𝐎 -➮〘#dono#〙\n│╎➮ 🩸 𝐋𝐈𝐃𝐄𝐑 -➮〘#lider#〙\n│╎➮ 🔱 𝐀𝐃𝐌 -➮〘#adm#〙\n│╎➮ 💸 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 -➮〘#premium#〙\n│╎➮ 💰 𝐒𝐀𝐋𝐃𝐎 -➮ 〘 #saldo# 〙\n│╎➮ 💌 𝐄𝐒𝐓𝐀 𝐂𝐀𝐒𝐀𝐃𝐎 -➮ 〘 #casado# 〙\n│╰━━───────━━╯\n╰━━━✰°❀•°✮°•❀°✾✰━━━╯\n╎\n╭━✰°❀•°✮•| ⊱✿⊰ |•°•❀°✾✰━╮\n┝⋆⃟ۣۜ᭪➮ 𝐏𝐄𝐑𝐒𝐎𝐍𝐀𝐋𝐈𝐃𝐀𝐃𝐄 『💋』\n╰━✰°❀•°✮•| ⊱✿⊰ |•°•❀°✾✰━╯\n│╭━━───────━━╮\n│╎🐂𝙉𝙄𝙑𝙀𝙇-𝙂𝘼𝘿𝙊⧽ #lvlgado#\n│╎🌸𝙉𝙄𝙑𝙀𝙇-𝙋𝙐𝙏𝘼⧽ #lvlputa#\n│╎🥵𝙉𝙄𝙑𝙀𝙇-𝙂𝙊𝙓𝙏𝙊𝙎𝙐𝙍𝘼⧽ #lvlgostosa#\n│╎😍𝙉𝙄𝙑𝙀𝙇-𝘽𝙀𝙇𝙀𝙕𝘼⧽ #lvlbeleza#\n│╎🍼𝙋𝙍𝙊𝙂𝙍𝘼𝙈𝘼⧽ ( R$#programa# )\n│╰━━───────━━╯\n╰━━━✰°❀•°✮°•❀°✾✰━━━╯\n╎\n╭━✰°❀•°✮•| ⊱✿⊰ |•°•❀°✾✰━╮\n┝⋆⃟ۣۜ᭪➮ 𝐒𝐄𝐔𝐒 𝐃𝐀𝐃𝐎𝐒 『✨』\n╰━✰°❀•°✮•| ⊱✿⊰ |•°•❀°✾✰━╯\n│╭━━───────━━╮\n│╎░⃟⃛ ➮𝙼𝙴𝙽𝚂𝙰𝙶𝙴𝙼𝚂 #msgs# - 💬\n│╎░⃟⃛ ➮𝙲𝙾𝙈𝙰𝙉𝙳𝙊𝚂 #cmds# - ♨️\n│╎░⃟⃛ ➮𝚂𝚃𝙸𝙲𝙺𝙴𝚁𝚂 #stickers# - 💖\n│╰━━───────━━╯\n╰━━━✰°❀•°✮°•❀°✾✰━━━╯\n\n📜 𝑪𝒐𝒏𝒔𝒆𝒍𝒉𝒐 ↴ \n\n#conselho#\n\n𝐁𝐨𝐭: #bot#\n\n✰✰✰✰✰",

    texto_casal: "*OWHHT*😻🥺......\n            *❣️EU SHIPO ELES 2❣️*\n\n ⸺͟͞ꪶ🌙⧽ #nmr1#\n💞\n ⸺͟͞ꪶ☀️⧽ #nmr2#\n\n*Com uma porcentagem de⧽ ✰ #porcentagem#% ✰*🙅‍♀️",

    imagem_link_casal: "https://telegra.ph/file/debbf41ea4d964fde17cc.jpg",

    comando_invalido: "┏═•❃༺✿༻❃•═┓\n├✯ 𝐂𝐨𝐦𝐚𝐧𝐝𝐨: *#prefixo##comando#*\n│𝐍𝐚̃𝐨 𝐄𝐧𝐜𝐨𝐧𝐭𝐫𝐚𝐝𝐨\n├✯ 𝐃𝐢𝐠𝐢𝐭𝐞 *#prefixo#menu*\n│𝐄 𝐯𝐞𝐣𝐚 𝐨𝐬 𝐜𝐨𝐦𝐚𝐧𝐝𝐨\n│𝐂𝐨𝐦 𝐚𝐭𝐞𝐧ç𝐚𝐨!\n┗═•❃༺✿༻❃•═┛‎",

    erros: {
        api_error: "*Awnn! 🤧 Houve um pequeno erro ao processar o comando, tente novamente mais tarde!!* 💖🙇‍♀️",
        command_error_executor: "*Awnn! 🤧 Houve um pequeno erro ao processar o comando, tente novamente mais tarde!!* 💖🙇‍♀️"
    },

    waiting_message: ["Seu nome é Wi-Fi? Porque eu estou sentindo uma conexão aqui rsrs🙄😍 Enviando...","Seu nome é Google? Porque você tem tudo o que eu procurava 😳👉 👈 Enviando....","Oii!! Espera aí, já estou processando seu pedido!! ✨","Queria desejar (noite), porque para ser boa teríamos que estar juntos🙄💖 Enviando...","Eu pareço ser simples, mas guardo uma infinidade de mistérios!! 👀 Enviando pedido...","⏳ Aguarde um momento...","Fui criada em agosto de 2023, 📆 e hoje permaneço firme e forte! 💖 Enviando seu pedido...","Em meio as dificuldades da vida, mantenha o foco e não desista por nada! 🤗 Já estou enviando seu pedido...","Oi oi, já foi tomar água hoje? 🤨 Não? Então vá beber um gole de água 💧 enquanto termino seu pedido... 😍","Sinto que estamos mais próximos a cada pedido seu... 😔👉👈 Enviando....","Oi fofuxo(a) 💖 Já estou processando seu pedido...","Sou um projeto que abre portas para um novo futuro... 🔮 Aguarde um momento!!","União flasco, mando sem K.o batendo😏.. Enviando seu pedido🥰","Opa! Já estou enfiand... Ops!! Enviando rsrs 😳","A vida é apenas uma, então aproveite cada segundo dela... 💖 Enviando...","Um momento, estou enviando seu pedido...⏱️","Oii princesa💋 Já estou enviando seu pedido...","Jaja está na mão amiga, aguarde um instante!🌸","Oi criatura de Deus,  🙏 já estou enviando seu pedido! ✨","Aguarde até ano que vem. Meme 😅 Já estou enviando...","☝🏻 Manda quem pode, obedece quem tem juízo. Já tô enviando...🥀","Pisa no freio, ja estou enfiando... Oops enviando* ksksks😌","Eii Está calor, né? Mas não é de hoje que eu me derreto por você rsrs🌚🔥 Enviando...","2 reais ou um presente misterioso? 😳🎁 Se você escolheu o presente, já estou enviando... 😍","📆 Em 365 dias úteis termino o comando 😂 meme, to enviando!😻","Tão dura e grossa como minha... Enviando seu pedido rsrs...","Quem espera, sempre alcança!* ✨ Tô enviando já amigão!🙇‍♀️","Qual é o número da polícia? Infelizmente, terei que te denunciar por roubar meu coração🤭❤️ Enviando...","A vida é boa, mas seria perfeita se fosse com você junto... 🌷💝 Enviando...","Qual é o número da polícia? Infelizmente, terei que te denunciar por roubar meu coração🤭❤️ Enviando....","Enviando na velocidade da luz🙅‍♀️","👺 Não precisa gritar, já ouvi e tô enviando seu pedido!","Eiii Tem alguma coisa errada com meu celular. Não consigo encontrar seu número nele🙄❤️ Enviando..","Então, além de me deixar sem ar, o que mais você faz?🤭 Enviando...","Qual é o número da polícia? Infelizmente, terei que te denunciar por roubar meu coração🤭❤️ Enviando....","Realizando ação...🔗","Manoo você já tomou água hoje? Pfv vai tomar 3 copos d'água corree enquanto envio seu pedido😳❤️","Tão dura e grossa como minha... Enviando seu pedido rsrs...","Aguarde ate ano que vem rsrs^-^","eii🙄 você não é verão mais você deixa o clima entre nois esquentar 😻 Eviando...","Um momento, estou eviando..."," Calma, respira, relaxa novinha...😼","Calma aí que a surpresa vem🙀","Espere um pouquinho que vou enviar o que você pediu🙇‍♀️","Calma os ânimos, meu boizinho, estou eviando...😻","Tô pegando aqui... achei!💨","Tá chegando... chegou? Se chegou, me diz se está feliz 🤭❤","Vem vem sambando... só não pisa onde é valioso✨","Espere sentando, estou enviando seu pedido🙇‍♀️","Ja bebeu agua hoje criatura?🤨\nSe não, vá beber ums 3 copo d'agua enquanto envio seu pedido❣","Realizando seu pedido, aguarde um pouco✨","Eitah😳!! eu sabia que você iria me notar um dia rsrs💖","[❗] Aguarde amigo, estou fazendo...","Vai beber uma água💦, ja estou terminando de enviar..🤗","🙄 Opa, calma ae, tô enviando já!!","❬❗❭ Aguarde 5 segundos...","Hoi gatinha💖! Já estou terminando seu comando😘","ههههه𓅂 Oi filho de Deus, calma ae, tô terminando de fazer..","Oi princesa, já estou preparando pra enviar, Aguarde..","🤗 Aguarde um pouquinho que já estou enviando!!","Aquieta o coração amigo, já estou enviando! 💨","Espere sentado que estou enviando!💬","💨💨 Pisa no freio aí amigo, tô enviando já!","Foi daqui que pediram comando? Ta chegando...🏃‍♀️","📆 Em 365 dias úteis termino o comando 😂 meme, to enviando!😻","Aproveita que tô terminando aqui e beba água, hidrate-se!💦🥵","Seu pedido é uma ordem, terminando patrão!✨","☝🏻 Manda quem pode, obedece quem tem juízo. Já tô enviando...🥀","*Quem espera, sempre alcança!* ✨","Tô enviando já amigão!🙇‍♀️"],
    wait() {
        return this.waiting_message[Math.floor(Math.random() * this.waiting_message.length)];
    }
};

exports.txt = txt;
