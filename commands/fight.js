
import { battleManager } from '../MyAPI/BattleBotSysteam/BattleSysteam/BattleManager'


export function run(message, userId, Classes, getD, getC, getI, getPi, playerInventory, getCd, getCl, Skillablity, SkillName, Skilllist, getS, getSI, ShopItems, getIS, user, botlogs, bots, botInfo, defaltchannel, Commands, CommandName, Client, contents, commandlist, pPI) {

	

	if (message.channel.type !== 'dm') {
		message.delete()
	}
	if (pPI[getD.PermissonId.GuildID + getD.PermissonId.RoleID].Command.fight.UseableCommands == false & Client.guilds.find('id', getD.PermissonId.GuildID).ownerID !== getD.PlayerId == true)
		return message.author.send(`${getD.PlayerName} you do not have permisson to use this command. Kupo.`)
	if (message.content.match(/(\S*) /i) && (String(message.content.match(/(\S*) /i)[1])) === '')
		if (user.bot === false) {
			return message.channel.send('You can not make others people fight.')
		}
	battleManager(message, getD, getC, user, botlogs, bots, botInfo, defaltchannel, Client)
}

export function help(Commands, CommandName) {
	const Commanddata = {
		CommandName: '>Fight [@bot]',
		CommandInfo: 'Allows you to fight the enemy'
	}
	if (Commands[Commanddata.CommandName]) {
	}
	else {
		Commands[Commanddata.CommandName] = Commands[Commanddata.CommandName] || Commanddata
		CommandName.push(Commanddata.CommandName)
	}
}

export function permission (Client, playerPermissionInfo, saveData) {
	for (let i = 0; i < Client.guilds.array().length; i++) {
		for (let j = 0; j < Client.guilds.array()[i].roles.array().length; j++) {
			playerPermissionInfo[Client.guilds.array()[i].id + Client.guilds.array()[i].roles.array()[j].id].Command.fight = { UseableCommands: true, }

		}
		saveData()
	}
}

export function getCommand() { return [['fight', 'box', 'dual'], /(.*)/] }