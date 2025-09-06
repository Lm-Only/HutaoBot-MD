#!/bin/bash

updateBot() {
  node main.js up
}

startWithCode() {
  node main.js main.js cd
}


startWithQr() {
  node main.js main.js qr
}

defaultStart() {
  node main.js
}

while :
do
  echo -e "    \033[1;33mHUTAO BOT V9.5.0 EDITION 💎 ^-^\n INICIANDO, AGUARDE UM MOMENTO...🍾\033[0m"
  if [ "$1" = "up" ]; then
    updateBot
  elif [ "$1" = "cd" ]; then
    startWithCode
  elif [ "$1" = "qr" ]; then
    startWithQr
  else 
    defaultStart
  fi
  sleep 1
done
