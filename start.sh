#!/bin/bash

cleanFilesTemp() {
  rm -f ./*.jpg ./*.jpeg ./*.webp ./*.opus ./*.mp* ./*.m4a ./*.ogg ./*.zip ./*.gz
}

updateBot() {
  node main.js up
}

startWithCode() {
  node main.js cd
}

startWithQr() {
  node main.js qr
}

defaultStart() {
  node main.js
}

while :
do
  echo -e "    \033[1;33mHUTAO BOT V9.5.0 EDITION 💎 ^-^\n INICIANDO, AGUARDE UM MOMENTO...🍾\033[0m"
  cleanFilesTemp

  case "$1" in
    up) updateBot ;;
    cd) startWithCode ;;
    qr) startWithQr ;;
    *)  defaultStart ;;
  esac

  sleep 5
done
