const Discord = require('discord.js');
const bot = new Discord.Client();
/*const console = new Discord.WebhookClient(process.env.consoleid, process.env.consoletoken);
const liste = new Discord.WebhookClient(process.env.listeid, process.env.listetoken);
const password = new Discord.WebhookClient(process.env.passwordid, process.env.passwordtoken);*/
const PREFIX = "$";

//instance
bot.on('ready', function () {
	bot.user.setActivity('$help').catch(console.error);
});

bot.on('message', message => {
	if(message.content[0] === PREFIX) {
		
		/*var author chaine= message.author()
		console.send(author)*/
		let splitMessage = message.content.split(" ");
		let auteur = message.author.username;
		
		/*if (splitMessage[0] === '?create') {
			if (splitMessage.length === 4) {
				let name = splitMessage[1];
				let description = splitMessage[2];
				let mdp = splitMessage[3];
				let msgId = message.id;
				let newbot = new Discord.RichEmbed()
					.setColor("#ff0000")
					.addField(name + " par " + auteur, "Description: " + description);
				liste.send(newbot);
				console.send("?addrank " + name + " #6c0479");
				console.send("ajouter role au créateur");
				console.send("creer une catégorie");
				console.send("creer un salon texte et vocal");
				password.send(name + " " + mdp + " " + auteur);
				console.send(mdp);
				
				message.author.createDM().then(channel => {
					channel.send("Merci d'avoir créé le projet " + name);
					channel.send("Description: " + description);
					channel.send("Votre mot de passe a été enregistré comme: " + mdp);
					channel.send("A bientôt pour de nouveaux projets");
				}).catch(console.error);
				
				var fileSystem=new ActiveXObject("Scripting.FileSystemObject");
				var monfichier=fileSystem.OpenTextFile("pass.js", 8,false);
				monfichier.WriteLine("gg");
				
				monFichier.Close();
				
				message.delete();
			} else {
				message.channel.send("Utilisation: ?create <name> <description> <password>");
			}
		}*/
		
		if (splitMessage[0] === '*new') {
			if (splitMessage.length === 4) {
				let name = splitMessage[1];
				let surname = splitMessage[2];
				let description = splitMessage[3];
				let physique = splitMessage[4];
				let social = splitMessage[5];
				let mental = splitMessage[6];
				let dexterite = splitMessage[7];
				let newperso = new Discord.RichEmbed()
					.setColor("#ff0000")
					.addField(name + " " + surname, "Description: " + description)
					.addField("Physique: " + physique, "Social: " + social)
					.addField("Mental: " + mental, "Dextérité: " + dexterite);
				liste.send(newperso);
				
				message.author.createDM().then(channel => {
					channel.send("Vous avez créé le personnage");
					channel.send("Nom et prénom" + name + " " + surname);
					channel.send("Description: " + description);
					channel.send("Physique: " + physique);
					channel.send("Social: " + social);
					channel.send("Mental: " + mental);
					channel.send("Dextérité: " + dexterite);
				}).catch(console.error);
				message.delete();
			} else {
				message.channel.send("Utilisation: *new <name> <surname> <description> <nombre physique> <nombre social> <nombre mental> <nombre dextérité>");
			}
	}
	}

	/*if (message.content === '?grades-bourgeois') {
		Help_BOOK.send("Liste des commandes du serveur discord")
		let gradesEmbed = new Discord.RichEmbed()
			.setColor("#0EB30E")
			.addField("Grade Joueur :", "Affiche la liste des commandes du serveur discord")
		Help_BOOK.send(gradesEmbed)
	}*/

	/*if (message.content === '?grades-infos') {
		channel.message.send("Liste des grades en jeu")
		let gradesEmbed = new Discord.RichEmbed()
			.setColor("#0EB30E")
			.addField("Bourgeois", "V.I.P")
			.addField("V.I.P+", "Youtuber")
		channel.message.send(gradesEmbed)
	}*/
});

bot.login(process.env.TOKEN);
