**Instalacja pod system Linux**

```sh
$ git clone https://github.com/Rejtan/discord-dla-szkoly.git

$ cd discord-dla-szkoly/Bot\ liczący\ czas\ pracy/

$ npm init               (wpisz dowolna nazwe i dalej przeklikaj enter)

$ npm install discord.js

$ node .
```

W tym momencie bot działa można go dodać za pomocą linku utworzonego tutaj (trzeba wybrać pole administrator):
[Discord Invite Calculator](https://discordapi.com/permissions.html)

**Instrukcja żeby bot działał po zamknięciu terminala (Debian/Ubuntu):**
```sh
$ sudo apt install screen

$ screen -S discord-bot node .
```
