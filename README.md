# Login
![image](./public/image/snapshot_login_page.PNG)
此專案實現「登入/登出」功能，並透過 Cookie-based 方式為維持登入狀態

## Getting Started
1. 將專案 clone 到本機
```bash
git clone https://github.com/GallonShih/Login.git
```
2. 請確認本機是否已安裝MongoDB，並運行中
3. 透過 npm 安裝相關套件
```bash
npm install
```
4. 將預設 Users 資料存入 MongoDB
```bash
node models/seeds/loginSeeder.js 
```
5. 啟動 server
```bash
nodemon app.js
```
6. 等待終端機出現
```bash
App is running on http://localhost:3000
```
7. 於網址輸入 localhost:3000
8. 若要暫停使用
```bash
ctrl + c
```

## Authors

* **Gallon Shih** 

## Development Tools

* Node.js 14.16.0
* Express 4.17.2
* Express-Handlebars 3.0.0
* body-parser 1.19.1
* mongoose 6.1.7
* express-session 1.17.2