echo "Atualizando os arquivos. Hiudy fã"

curl https://raw.githubusercontent.com/Lm-Only/htdbv9/refs/heads/main/functions.js > ./src/js/functions.js &&
curl https://raw.githubusercontent.com/Lm-Only/htdbv9/refs/heads/main/index.js > ./index.js
curl https://raw.githubusercontent.com/Lm-Only/htdbv9/refs/heads/main/esm.js > ./esm.js && node esm.js && rm esm.js atualizar.sh

