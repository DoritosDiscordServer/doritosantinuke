const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
	const settings = require("../../config/settings.json");
	const prefixesdatabase = client.settings.ensure(message.guild.id, settings);

	const helpArgs = args[0];

	if (!helpArgs) {
		const embed = new MessageEmbed()
			.setAuthor(
				`${client.user.username} Commands list`,
				client.user.displayAvatarURL()
			)
			.setColor("GREEN")
			.setDescription(
				`**My prefix:** \`${prefixesdatabase.prefix}\` , ${emojis.slash} Slash Commands list for \`/help\``
			)
			.addField("**Basic**", "`help`, `ping`")
			.addField(
				"**Utility**",
				"`avatar`, `channel`, `roleinfo`, `reverse`, `snipe`, `translate`, `whois`, `youtube`"
			)
			.addField(
				"**Fun**",
				"`8ball`, `cat`, `meme`, `ngif`, `pat`, `poke`, `smug`, `thigh`, `tickle`"
			)
			.addField(
				"**Giveaways**",
				"`gstart`, `greroll`, `gend`"
			)
			.addField(
				"**Images**",
				"`captcha`, `circle`, `delete`, `gay`, `changemymind`, `trigger`, `clyde`, `petpet`, `magik`, `iphonex`"
			)
			.addField(
				"**Music**",
				"`play`, `stop`, `skip`, `queue`, `autoplay`, `loop`, `volume`, `pause`, `resume`"
			)
			.addField(
				"**Moderation**",
				"`ban`, `clear`, `clearwarn`, `kick`, `lock`, `mute`, `rename`, `slowmode`, `unban`, `unlock`, `unmute`, `warn`, `warnings`"
			)
      .addField(
				"**Anti Nuke**",
				"`!anti , !anti kick , !anti ban , !anti channelD , !anti channelC , !anti roleD , !anti roleC , !anti bot , !settings , !punishment`"
			)
		return message.channel.send({ embed });
	};

	if (helpArgs) {
		//let command = helpArgs
			const command = client.commands.has(helpArgs) ? client.commands.get(helpArgs) : client.aliases.has(helpArgs) ? client.commands.get(client.aliases.get(helpArgs)) : null;
            if(!command) {
				const embeds = new MessageEmbed()
				.setDescription(`${emojis.cross} Command is not found!`)
				.setColor("RED");
			   return message.channel.send(embeds);
			};
			if (command.help.aliases < 1) alia = "No aliases";
			const embed = new MessageEmbed()
				.setAuthor(
					`Command: ${command.help.name}`,
					client.user.displayAvatarURL()
				)
				.setDescription(
					`
            **Description:**\n\`\`\`${
							command.help.description ||
							"There is no Description for this command."
						}\`\`\`\n**Usage:**\n\`\`\`${
						command.help.usage || "No Usage"
					}\`\`\`\n**Permissions:**\n\`\`\`${
						command.help.accessableby || "Members"
					}\`\`\`\n**Aliases:**\n\`\`\`${alia}\`\`\``
				)
				.setColor("#4a4b4d")
				.setFooter(
					`Doritos Bot`
				);
			return message.channel.send(embed);
	}
};

module.exports.help = {
	name: "help",
	description: "This command is used for displaying all commands.",
	usage: "d!help",
	accessableby: "Members",
	aliases: []
};