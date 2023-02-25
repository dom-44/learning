# Quote App
Diese Web App wurde durch ChatGPT erstellt. 
Die App zeigt jeweis ein bekanntes Zitat an. Das Zitat kann mittels Button geändert werden.
Als Quelle dient das Textfile quote.txt, welches ebenfalls von ChatGPT erstellt wurde.

---
## Zitate
Für die Erstellung der Zitate habe ich folgende Frage an chatGPT gestellt: 
> Nenne mir 20 berühmte Zitate

Das Resultat habe ich dann in das File quotes.txt kopiert.

## App
Für die Erstellung der APP habe ich folgende Frage an chatGPT gestellt (fragt mich nicht wieso ich nun plötzlich in Englisch formuliert habe):
> build an express web app which takes a random line from the file quotes.txt and shows it. The app should have some nice styling and a headline "Berühmte Zitate". Additionally there should be a button which replaces the displayed quote with another line from the text file


Das Resultat war ein Code Snippet in JavaScript welches ich als app.js abgespeichert habe.
Anschliessend habe ich `npm init -y`ausgeührt um ein Node.js Projekt zu initalisieren und anschliessend noch `npm install express` ausgeführt um alle Express Abhängikeiten zu erstellen.

### Start

Die Applikation kann mittels Command  `node app.js` gestartet werden und kann via  Port 3000 aufgerufen werden.

 [http://localhost:3000](http://localhost:3000) 


