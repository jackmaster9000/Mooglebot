const Discord = require('discord.js')
const util = require('util')
const fs = require('fs')

let moogle = {}

moogle.botInfo = JSON.parse(fs.readFileSync('botInfo.json')) || {}
moogle.playerInfo = JSON.parse(fs.readFileSync('playerInfo.json')) || {}
moogle.classeslist = JSON.parse(fs.readFileSync('classeslist.json')) || {}
moogle.monsterlist = JSON.parse(fs.readFileSync('monsterslist.json')) || {}
moogle.defaltchannel = JSON.parse(fs.readFileSync('defaltchannel.json')) || {}
moogle.Itemlist = JSON.parse(fs.readFileSync('Itemlist.json')) || {}
moogle.playerInventory = JSON.parse(fs.readFileSync('playerinventory.json')) || {}

module.exports.run = function (message, client, contents, userId, masterLevel, getD, getC, getI, getPi, playerInventory) {
  if (message.content.match(/>takeitem (.*)/i) && (String(message.content.match(/>takeitem (.*)/i)[1])) === ``) var regex = String(message.content.match(/>takeitem (.*)/i)[1])
  else if (message.content.match(/>takeitem (.*)/i) && regex !== `null`) regex = message.content.match(/>takeitem (.*)/i)[1]
  else return message.channel.send(`You must add a Item Name >TakeItem [Item_name]`)

  const itemIn = regex
  const quantity = 1
  getD.Items[itemIn] = moogle.playerInventory
  console.log(itemIn + ` ` + quantity)

    // check for errors in function call.
  if (typeCheck('takeItem', itemIn, 'string') || typeCheck('takeItem', quantity, 'number')) return
  if (quantity === 0) {
    message.channel.send("You can't take 0 items.")
    return
  }
  if (!getD.Items[itemIn]) {
    message.channel.send(playerInventory[message.guild.id + message.member.user.id + itemIn].ItemName + ' does not have any ' + itemIn + 's.')
    return
  }
  if (quantity > playerInventory[message.guild.id + message.member.user.id + itemIn].Amount[0]) {
    message.channel.send(playerInventory[message.guild.id + message.member.user.id + itemIn].ItemName + ' does not have enough ' + itemIn + 's.')
    return
  }
  playerInventory[message.guild.id + message.member.user.id + itemIn].Amount[0] -= quantity
  message.channel.send(quantity + '  ' + itemIn + 's.' + ' has been removed ')
  fs.writeFileSync('playerinventory.json', JSON.stringify(playerInventory))
  if (playerInventory[message.guild.id + message.member.user.id + itemIn].Amount[0] === 0) {
    message.channel.send(quantity + '  ' + itemIn + 's.' + ' has been removed ')
    playerInventory[message.guild.id + message.member.user.id + itemIn] = undefined
    getD.Items.splice(itemIn)
    fs.writeFileSync('playerinventory.json', JSON.stringify(playerInventory))
  }
}
moogle.notMe = function (message) {
  message.channel.send('Hey! You are not my master!')
}
function typeCheck (source, input, expected) {
  if (typeof input !== expected) {
    console.log('Error in ' + source + '. ' + input + ' is not of type ' + expected + '.')
    return true
  } else return false
}

module.exports.help = function (Commands, CommandName) {
  // const Commanddata = {
  //   CommandName: `????`,
  //   CommandInfo: `????`
  // }
  // if (Commands[Commanddata.CommandName]) {
  // } else {
  //   Commands[Commanddata.CommandName] = Commands[Commanddata.CommandName] || Commanddata
  //   CommandName.push(Commanddata.CommandName)
  // }
}

module.exports.getCommand = () => { return [['takeitem', 'takei', 'removeitem', 'removei'], /(.*)/] }
