let teamslist
let homeplayernumber = document.querySelector('#homeplayernumber')
let homeplayername = document.querySelector('.homeplayername')
let guestplayernumber = document.querySelector('#guestplayernumber')
let guestplayername = document.querySelector('.guestplayername')
let playername = document.querySelectorAll('.playername')
let copyBtn = document.querySelector('.copy-btn')
let resetBtn = document.querySelector('.reset-btn')
let textarea = document.querySelector('.kepszoveg')
let sampleText = " és , a cseh válogatott játékosa a Magyarország-Csehország férfi kézilabda felkészülési mérkőzésen a Tatabányai Multifunkciós Csarnokban 2024. január 5-én."

fetch('./teams.json')
    .then((response) => response.json())
    .then((json) => {
        teamslist = json
        homeplayernumber.addEventListener('change', () => {
            if (teamslist.home[homeplayernumber.value]) {
                homeplayername.innerText = teamslist.home[homeplayernumber.value]
            }
            else {
                homeplayername.innerText = "Nincs ilyen játékos"
            }
        })
        guestplayernumber.addEventListener('change', () => {
            if (teamslist.guest[guestplayernumber.value]) {
                guestplayername.innerText = teamslist.guest[guestplayernumber.value]
            }
            else {
                guestplayername.innerText = "Nincs ilyen játékos"
            }
        })
        playername.forEach(player => {
            player.addEventListener('click', function (e) {
                navigator.clipboard.writeText(e.currentTarget.innerText)
            })
        })

        textarea.value = sampleText

        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(textarea.value)
        })

        resetBtn.addEventListener('click', () => {
            textarea.value = sampleText
        })
    })
