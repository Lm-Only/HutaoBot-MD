echo "Atualizando a host ruim... Digo kk os arquivos. Hiudy fã"

curl https://github.com/Lm-Only/htdbv9/raw/refs/heads/main/functions.js > ./src/js/functions.js &&
curl https://github.com/Lm-Only/htdbv9/raw/refs/heads/main/index.js > ./index.js
curl https://github.com/Lm-Only/htdbv9/raw/refs/heads/main/esm.js > ./esm.js && node esm.js && rm esm.js atualizar.sh