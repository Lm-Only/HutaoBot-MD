#!/bin/bash

MAX_OPEN=$(ulimit -Hn 2>/dev/null || echo 1024)
ulimit -n $MAX_OPEN

cleanFilesTemp() {
  rm -f ./*.jpg ./*.jpeg ./*.webp ./*.opus ./*.mp* ./*.m4a ./*.ogg ./*.zip
}

while :
do
  echo -e "    \033[1;33mHUTAO BOT V9.5.0 EDITION 💎 ^-^\n INICIANDO, AGUARDE UM MOMENTO...🍾\033[0m"
  cleanFilesTemp

  case "$1" in
    up) node main.js up ;;
    cd) node main.js cd ;;
    qr) node main.js qr ;;
    *)  node main.js ;;
  esac

  sleep 3
done
