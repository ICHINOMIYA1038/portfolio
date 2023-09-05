# next-app

これはNextのアプリをつくるための手順です。

## 環境構築

初回起動時
```
docker-compose build
docker-compose run --rm  front npx create-next-app next-app
docker-compose up --build
```

以降
```
docker-compose up --build
```

