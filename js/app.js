const teamselect = document.querySelector('.teamselect')
let playerNumber = document.querySelector('.playernumber')
let playersnamep
let playersname1 = document.querySelector('.playersname1')
let playdate = document.querySelector('.playdate')
let textdate = "0"
let kepszovegalap
let selectedTeam = null
let teamsData
let textarea = document.querySelector('.textarea')
const resetBtn = document.querySelector('.reset-btn')
const copyBtn = document.querySelector('.copy-btn')
let hometeam = document.querySelector('.hometeam')
let guestteam = document.querySelector('.guestteam')
let hometeamplayers = document.querySelector('.hometeamplayers')
let teamslist

fetch('./team.json')
    .then((response) => response.json())
    .then((json) => {
        teamsData = json
        // for (let i = 0; i < teamsData.home.length; i++) {
        //     hometeamplayers.innerHTML += `<div class=playernamediv><p class=playersnamep>${teamsData.home[i].name}</p><p> - ${teamsData.home[i].nr}</p></div>`
        // };
        // playersnamep = document.querySelectorAll('.playersnamep')
        // playersnamep.forEach(player => {
        //     player.addEventListener('click', function (e) {
        //         navigator.clipboard.writeText(e.currentTarget.innerText)
        //     })
        // })
    })


fetch('./teams.json')
    .then((response) => response.json())
    .then((json) => {
        teamslist = json
        console.log(teamslist.home[2])
        playerNumber.addEventListener('change', () => {
            console.log(playerNumber.value)
            console.log(teamslist.home[playerNumber.value])
            playersname1.innerText = teamslist.home[playerNumber.value]
        })
    })


playersname1.addEventListener('click', () => {
    navigator.clipboard.writeText(playersname1.innerText)
})


playdate.addEventListener('change', () => {
    textdate = playdate.value
    kepszovegalap = ` , a ${hometeam} (b) és  , a ${guestteam} játékosa a férfi kézilabda Európa-liga csoportkörének 6. fordulójában játszott MOL Tatabánya KC - KGHM Chrobry Glogów mérkőzésen a Tatabányai Multifunkciós Csarnokban ${textdate}.`
    textarea.value = kepszovegalap
})

hometeam.addEventListener('change', () => {
    hometeam = hometeam.value
    kepszovegalap = ` , a ${hometeam} (b) és  , a ${guestteam} játékosa a férfi kézilabda Európa-liga csoportkörének 6. fordulójában játszott ${hometeam} - ${guestteam} mérkőzésen a Tatabányai Multifunkciós Csarnokban ${textdate}.`
    textarea.value = kepszovegalap
})

guestteam.addEventListener('change', () => {
    guestteam = guestteam.value
    kepszovegalap = ` , a ${hometeam} (b) és  , a ${guestteam} játékosa a férfi kézilabda Európa-liga csoportkörének 6. fordulójában játszott ${hometeam} - ${guestteam} mérkőzésen a Tatabányai Multifunkciós Csarnokban ${textdate}.`
    textarea.value = kepszovegalap
})

teamselect.addEventListener('click', () => {
    selectedTeam = teamselect.value
})

resetBtn.addEventListener('click', () => {
    textarea.value = kepszovegalap
})

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(textarea.value)
})