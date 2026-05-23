#!/bin/bash

ulimit -n 1024

cleanFilesTemp() {
  rm -f ./*.jpg ./*.jpeg ./*.webp ./*.opus ./*.mp* ./*.m4a ./*.ogg ./*.zip ./*.bak ./*.png
}

while :
do
  echo -e "    \033[1;33mHUTAO BOT V9.5.5 UPDATE 💎 ^-^\n INICIANDO, AGUARDE UM MOMENTO...🍾\033[0m"
  cleanFilesTemp

  case "$1" in
    up) node main.js up ;;
    cd) node main.js cd ;;
    qr) node main.js qr ;;
    *)  node main.js ;;
  esac

  EXIT_CODE=$?

  if [ $EXIT_CODE -ne 0 ]; then
    echo "Parece que o bot esta com problemas, tente executar 'npm run help' para tentar corrigir o erro."
  fi

  sleep 3
done