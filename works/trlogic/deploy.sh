#!/usr/bin/env sh

# остановить публикацию при ошибках
set -e

# сборка
npm run build

# переход в каталог сборки
cd dist

# если вы публикуете на пользовательский домен
# echo 'www.example.com' > CNAME

# git init
git add -A
git commit -m 'deploy TRLogic'

# если вы публикуете по адресу https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:z-igor/z-igor.github.io.git master

cd -