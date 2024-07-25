let menuSelection = 1

function menuSelectionUpdate() {
    document.getElementsByName('menu-selection').forEach((menu) => {
        if (menu.checked) {
            menuSelection = `${menu.value}`
        }
    })
}

document.getElementsByName('menu-selection').forEach((menu) => {
    menu.addEventListener('change', menuSelectionUpdate)
})



// ##########################################################################
// #################### Team/Event/Casters Name Changing ####################
// ##########################################################################
const teamAName = document.getElementById('team-a-name')
const teamBName = document.getElementById('team-b-name')
const teamATri = document.getElementById('team-a-tri')
const teamBTri = document.getElementById('team-b-tri')
const eventName = document.getElementById('event-name')
const caster1Name = document.getElementById('caster-1-name')
const caster2Name = document.getElementById('caster-2-name')

function setAllNames() {
    const teamANameAll = document.getElementsByClassName('apply-team-a-name')
    const teamBNameAll = document.getElementsByClassName('apply-team-b-name')
    const teamATriAll = document.getElementsByClassName('apply-team-a-tri')
    const teamBTriAll = document.getElementsByClassName('apply-team-b-tri')
    const eventNameAll = document.getElementsByClassName('apply-event-name')
    const caster1NameAll = document.getElementsByClassName('apply-caster-1-name')
    const caster2NameAll = document.getElementsByClassName('apply-caster-2-name')
    for (const instance of teamANameAll) {
        instance.textContent = `${teamAName.value}`
    }
    for (const instance of teamBNameAll) {
        instance.textContent = `${teamBName.value}`
    }
    for (const instance of teamATriAll) {
        instance.textContent = `${teamATri.value}`
    }
    for (const instance of teamBTriAll) {
        instance.textContent = `${teamBTri.value}`
    }
    for (const instance of eventNameAll) {
        instance.textContent = `${eventName.value}`
    }
    for (const instance of caster1NameAll) {
        instance.textContent = `@${caster1Name.value}`
    }
    for (const instance of caster2NameAll) {
        instance.textContent = `@${caster2Name.value}`
    }
}

document.getElementById('team-a-name').addEventListener('keyup', setAllNames)
document.getElementById('team-b-name').addEventListener('keyup', setAllNames)
document.getElementById('team-a-tri').addEventListener('keyup', setAllNames)
document.getElementById('team-b-tri').addEventListener('keyup', setAllNames)
document.getElementById('event-name').addEventListener('keyup', setAllNames)
document.getElementById('caster-1-name').addEventListener('keyup', setAllNames)
document.getElementById('caster-2-name').addEventListener('keyup', setAllNames)



// ##################################################################
// #################### Team/Event Logo Changing ####################
// ##################################################################
let teamALogo = 'n/a'
let teamBLogo = 'n/a'
let eventLogo = 'n/a'

function setAllLogos() {
    const teamALogoAll = document.getElementsByClassName('apply-team-a-logo')
    const teamBLogoAll = document.getElementsByClassName('apply-team-b-logo')
    const teamALogoUpload = document.getElementById('team-a-logo-upload')
    const teamBLogoUpload = document.getElementById('team-b-logo-upload')
    const teamANoLogo = document.getElementById('team-a-no-logo')
    const teamBNoLogo = document.getElementById('team-b-no-logo')
    const eventLogoAll = document.getElementsByClassName('apply-event-logo')
    const eventLogoUpload = document.getElementById('event-logo-upload')
    if (teamANoLogo.checked) {
        teamALogoUpload.value = ''
        for (const element of teamALogoAll) {
            element.src = 'assets/200x200_No_Logo.png'
        }
    }
    if (teamBNoLogo.checked) {
        teamBLogoUpload.value = ''
        for (const element of teamBLogoAll) {
            element.src = 'assets/200x200_No_Logo.png'
        }
    }
    if (teamALogoUpload.value !== '') {
        for (const element of teamALogoAll) {
            element.src = teamALogo
        }
    }
    if (teamBLogoUpload.value !== '') {
        for (const element of teamBLogoAll) {
            element.src = teamBLogo
        }
    }
    if (eventLogoUpload.value !== '') {
        for (const element of eventLogoAll) {
            element.src = eventLogo
        }
    }
}

function uploadTeamALogo() {
    document.getElementById('team-a-no-logo').checked = false
    const teamALogoUpload = document.getElementById('team-a-logo-upload')
    URL.revokeObjectURL(teamALogo)
    teamALogo = URL.createObjectURL(teamALogoUpload.files[0])
    setAllLogos()
}

function uploadTeamBLogo() {
    document.getElementById('team-b-no-logo').checked = false
    const teamBLogoUpload = document.getElementById('team-b-logo-upload')
    URL.revokeObjectURL(teamBLogo)
    teamBLogo = URL.createObjectURL(teamBLogoUpload.files[0])
    setAllLogos()
}

function uploadEventLogo() {
    const eventLogoUpload = document.getElementById('event-logo-upload')
    URL.revokeObjectURL(eventLogo)
    eventLogo = URL.createObjectURL(eventLogoUpload.files[0])
    setAllLogos()
}

document.getElementById('team-a-no-logo').addEventListener('change', setAllLogos)
document.getElementById('team-b-no-logo').addEventListener('change', setAllLogos)
document.getElementById('team-a-logo-upload').addEventListener('change', uploadTeamALogo)
document.getElementById('team-b-logo-upload').addEventListener('change', uploadTeamBLogo)
document.getElementById('event-logo-upload').addEventListener('change', uploadEventLogo)



// #####################################################################
// #################### Map Series Length Selection ####################
// #####################################################################
let seriesLengthSelection = 1

function seriesLengthUpdate() {
    document.getElementsByName('series-length-selection').forEach((option) => {
        if (option.checked) {
            seriesLengthSelection = `${option.value}`
            mapPoolUpdate()
        }
    })
}

document.getElementsByName('series-length-selection').forEach((option) => {
    option.addEventListener('change', seriesLengthUpdate)
})

// THIS SECTION MIGHT NOT BE NEEDED
// const seriesLengthSelection = document.getElementById('series-length-selection')

// function setSeriesLength() {
//     const bo3Console = document.getElementById('bo3-console')
//     const bo5Console = document.getElementById('bo5-console')
//     const bo1Console = document.getElementById('bo1-console')
//     if (seriesLengthSelection.value === "BO3") {
//         bo3Console.setAttribute("class", "active-series-console")
//         bo5Console.setAttribute("class", "display-none")
//         bo1Console.setAttribute("class", "display-none")
//     } else if (seriesLengthSelection.value === "BO5") {
//         bo5Console.setAttribute("class", "active-series-console")
//         bo3Console.setAttribute("class", "display-none")
//         bo1Console.setAttribute("class", "display-none")
//     } else {
//         bo1Console.setAttribute("class", "active-series-console")
//         bo3Console.setAttribute("class", "display-none")
//         bo5Console.setAttribute("class", "display-none")
//     }
//     // CONSOLE WARNING - CHANGING SERIES LENGTH RESETS VETO/SCORES
//     // setMapPool()
//     // resetScores()
//     // CONSOLE WARNING - CHANGING SERIES LENGTH RESETS VETO/SCORES
// }

// document.getElementById('series-length-selection').addEventListener('change', setSeriesLength)
//THIS SECTION MIGHT NOT BE NEEDED




// ############################################################
// #################### Map Pool Selection ####################
// ############################################################
const mapData = [
    {mapName: "Abyss", mapPool: true},
    {mapName: "Ascent", mapPool: true},
    {mapName: "Bind", mapPool: true},
    {mapName: "Breeze", mapPool: false},
    {mapName: "Fracture", mapPool: false},
    {mapName: "Haven", mapPool: true},
    {mapName: "Icebox", mapPool: true},
    {mapName: "Lotus", mapPool: true},
    {mapName: "Pearl", mapPool: false},
    {mapName: "Split", mapPool: false},
    {mapName: "Sunset", mapPool: true},
]
let mapPoolSelection = 0

function mapPoolUpdate() {
    document.getElementsByName('map-pool-selection').forEach((option) => {
        if (option.checked) {
            mapPoolSelection = `${option.value}`
            setMapPool()
        }
    })
}

document.getElementsByName('map-pool-selection').forEach((option) => {
    option.addEventListener('change', mapPoolUpdate)
})

function setMapPool() {
    const mapVeto = document.getElementById('veto-config-body')
    while (mapVeto.firstChild) {
        mapVeto.removeChild(mapVeto.firstChild)
        console.log('veto config element removed')
    }
    if (Number(seriesLengthSelection) === 1) {
        createMapPickBan('1st', 1, 'ban', false, 0)
        createMapPickBan('2nd', 4, 'ban', false, 1)
        createMapPickBan('1st', 7, 'pick', false, 0)
        createMapPickBan('2nd', 10, 'pick', false, 1)
        createMapPickBan('3rd', 13, 'ban', false, 0)
        createMapPickBan('4th', 16, 'ban', false, 1)
        createMapPickBan('3rd', 19, 'pick', true, 0)
    } else if (Number(seriesLengthSelection) === 2) {
        createMapPickBan('1st', 1, 'ban', false, 0)
        createMapPickBan('2nd', 4, 'ban', false, 1)
        createMapPickBan('1st', 7, 'pick', false, 0)
        createMapPickBan('2nd', 10, 'pick', false, 1)
        createMapPickBan('3rd', 13, 'pick', false, 0)
        createMapPickBan('4th', 16, 'pick', false, 1)
        createMapPickBan('5th', 19, 'pick', true, 0)
    }
}

function createMapPickBan(nth, clmn, pickBan, decider, teamAB) {
    const mapVeto = document.getElementById('veto-config-body')
    const background = document.createElement('div')
        background.className = "map-veto-background"
        background.style.gridArea = `1/${clmn}/12/${clmn+2}`
        mapVeto.appendChild(background)
    const heading = document.createElement('span')
        heading.className = "map-veto-heading"
        heading.style.gridArea = `1/${clmn}/2/${clmn+2}`
        if (decider) {
            heading.textContent = "Decider"
            mapVeto.appendChild(heading)
        } else {
            heading.textContent = `${nth} ${pickBan}`
            mapVeto.appendChild(heading)
        }
    function createMapSelect(mapName, row, trueFalse, imgDimension, mapNum) {
        const mapSelect = document.createElement('label')
            mapSelect.for = `${nth}-${pickBan}-${mapName}`
            if (imgDimension === '300x210') {
                if (mapNum % 2 === 0) {
                    mapSelect.style.gridArea = `${row}/${clmn}/${row+1}/${clmn+1}`
                } else {
                    mapSelect.style.gridArea = `${row}/${clmn+1}/${row+1}/${clmn+2}`
                }
            } else {
                mapSelect.style.gridArea = `${row}/${clmn}/${row+1}/${clmn+2}`
            }
            mapSelect.style.zIndex = "1"
            if (imgDimension === '300x210' && mapNum === 10) {
                mapSelect.style.marginLeft = "50px"
            }
                const mapSelectInput = document.createElement('input')
                    mapSelectInput.type = "radio"
                    mapSelectInput.id = `${nth}-${pickBan}-${mapName}`
                    mapSelectInput.value = `${mapName}`
                    mapSelectInput.name = `${nth}-${pickBan}-map`
                    mapSelectInput.checked = trueFalse
                    mapSelectInput.className = `map-${pickBan}-selection menu`
                const mapSelectInputContents = document.createElement('div')
                    mapSelectInputContents.className = `map-option-${imgDimension}`
                        const mapSelectImg = document.createElement('img')
                            mapSelectImg.src = `assets/Maps/${mapName}_${imgDimension}.png`
                        const mapSelectImgOverlay = document.createElement('div')
                            mapSelectImgOverlay.className = "map-option-overlay"
                        const mapSelectName = document.createElement('span')
                            mapSelectName.className = "map-option-text"
                            mapSelectName.textContent = `${mapName}`
                        const mapSelectHelp = document.createElement('div')
                            mapSelectHelp.className = "help"
                                const mapSelectHelpDiv = document.createElement('div')
                                    mapSelectHelpDiv.className = "flex-row"
                                        const mapSelectHelpText = document.createElement('span')
                                            if (decider) {
                                                mapSelectHelpText.textContent = `Sets the Decider map to ${mapName}`
                                            } else {
                                                mapSelectHelpText.textContent = `Sets the ${nth} map ${pickBan} to ${mapName}`
                                            }
                                mapSelectHelpDiv.appendChild(mapSelectHelpText)
                        mapSelectHelp.appendChild(mapSelectHelpDiv)
                mapSelectInputContents.appendChild(mapSelectImg)
                mapSelectInputContents.appendChild(mapSelectImgOverlay)
                mapSelectInputContents.appendChild(mapSelectName)
                mapSelectInputContents.appendChild(mapSelectHelp)
        mapSelect.appendChild(mapSelectInput)
        mapSelect.appendChild(mapSelectInputContents)
        mapVeto.appendChild(mapSelect)
    }
    
    if (Number(mapPoolSelection) === 1) {
        let mapSelectsCreated = 0
        mapData.forEach((map, i) => {
            if (i===0) {
                createMapSelect(map.mapName, mapSelectsCreated+2, true, '300x210', i)
            } else if (i % 2 !==0) {
                createMapSelect(map.mapName, mapSelectsCreated+2, false, '300x210', i)
                mapSelectsCreated++
            } else {
                createMapSelect(map.mapName, mapSelectsCreated+2, false, '300x210', i)
            }
        })
    } else {
        let mapSelectsCreated = 0
        mapData.forEach((map, i) => {
            if (map.mapPool) {
                if (i===0) {
                    createMapSelect(map.mapName, mapSelectsCreated+2, true, '600x210', i)
                    mapSelectsCreated++
                } else {
                    createMapSelect(map.mapName, mapSelectsCreated+2, false, '600x210', i)
                    mapSelectsCreated++
                }
            }
        })
    }

    function createTeamSelect(team, row, trueFalse, teamDef) {
        const teamSelect = document.createElement('label')
            teamSelect.for = `${nth}-${pickBan}-${teamDef}`
            if (Number(mapPoolSelection) === 0) {
                teamSelect.style.gridArea = `${row}/${clmn}/${row+1}/${clmn+2}`
            } else {
                teamSelect.style.gridArea = `${row-1}/${clmn}/${row}/${clmn+2}`
            }
            teamSelect.style.zIndex = "1"
                const teamSelectInput = document.createElement('input')
                    teamSelectInput.type = "checkbox"
                    teamSelectInput.id = `${nth}-${pickBan}-${teamDef}`
                    teamSelectInput.name = `${nth}-${pickBan}-${teamDef}`
                    teamSelectInput.checked = trueFalse
                    teamSelectInput.className = `map-${pickBan}-${teamDef} menu`
                const teamSelectInputContents = document.createElement('div')
                    teamSelectInputContents.className = "input-contents"
                        const teamSelectDescription = document.createElement('span')
                            if (teamDef === 'team' && pickBan === 'pick') {
                                teamSelectDescription.textContent = "Toggle Team Picking"
                            } else if (teamDef === 'team' && pickBan === 'ban') {
                                teamSelectDescription.textContent = "Toggle Team Banning"
                            } else {
                                teamSelectDescription.textContent = "Toggle Team Starting Def"
                            }
                        const teamSelectLogo = document.createElement('img')
                            teamSelectLogo.src = "assets/200x200_No_Logo.png"
                            teamSelectLogo.className = `apply-${team}-logo`
                        const teamSelectHelp = document.createElement('div')
                            teamSelectHelp.className = "help"
                                const teamSelectHelpDiv1 = document.createElement('div')
                                    teamSelectHelpDiv1.style.display = "flex"
                                    teamSelectHelpDiv1.style.flexDirection = "column"
                                    teamSelectHelpDiv1.style.alignItems = "center"
                                        const teamSelectHelpLine1 = document.createElement('span')
                                            if (teamDef === 'team' && pickBan === 'pick') {
                                                teamSelectHelpLine1.textContent = `Toggle the team banning between`
                                            } else if (teamDef === 'team' && pickBan === 'ban') {
                                                teamSelectHelpLine1.textContent = `Toggle the team picking between`
                                            } else {
                                                teamSelectHelpLine1.textContent = `Toggle the team starting defense between`
                                            }  
                                        const teamSelectHelpDiv2 = document.createElement('div')
                                            teamSelectHelpDiv2.className = "flex-row"  
                                                const teamSelectHelpLine2 = document.createElement('span')
                                                    teamSelectHelpLine2.style.marginRight = "5px"
                                                    teamSelectHelpLine2.className = `apply-team-a-tri`
                                                const teamSelectHelpLine3 = document.createElement('span')
                                                    teamSelectHelpLine3.style.marginRight = "5px"
                                                    teamSelectHelpLine3.textContent = `and`
                                                const teamSelectHelpLine4 = document.createElement('span')
                                                    teamSelectHelpLine4.className = `apply-team-b-tri`
                                        teamSelectHelpDiv2.appendChild(teamSelectHelpLine2)
                                        teamSelectHelpDiv2.appendChild(teamSelectHelpLine3)
                                        teamSelectHelpDiv2.appendChild(teamSelectHelpLine4)
                                teamSelectHelpDiv1.appendChild(teamSelectHelpLine1)
                                teamSelectHelpDiv1.appendChild(teamSelectHelpDiv2)
                        teamSelectHelp.appendChild(teamSelectHelpDiv1)
                teamSelectInputContents.appendChild(teamSelectDescription)
                teamSelectInputContents.appendChild(teamSelectLogo)
                teamSelectInputContents.appendChild(teamSelectHelp)
        teamSelect.appendChild(teamSelectInput)
        teamSelect.appendChild(teamSelectInputContents)
        mapVeto.appendChild(teamSelect)
    }

    if (decider) {
        const deciderFiller = document.createElement('div')
            deciderFiller.className = "decider-filler"
            if (Number(mapPoolSelection) === 0) {
                deciderFiller.style.gridArea = `9/${clmn}/10/${clmn+2}`
            } else {
                deciderFiller.style.gridArea = `8/${clmn}/11/${clmn+2}`
            }
            deciderFiller.style.zIndex = "1"
                const deciderFillerText = document.createElement('span')
                    deciderFillerText.textContent = "Team select is disabled for decider"
                const deciderFillerHelp = document.createElement('div')
                    deciderFillerHelp.className = "help"
                    deciderFillerHelp.style.fontSize = "10pt"
                        const deciderFillerHelpText1 = document.createElement('span')
                            deciderFillerHelpText1.textContent = "Decider map is based on the remaining map after picks and bans. If you are using an alternate map pool with more than 7 maps teams must agree on a decider map. This will have no effect on overlay displays."
                        const deciderFillerHelpText2 = document.createElement('span')
                            deciderFillerHelpText2.textContent = "If you are using an alternate map pool with more than 7 maps, teams must agree on a decider map. This will have no effect on overlay displays."
                deciderFillerHelp.appendChild(deciderFillerHelpText1)
                // deciderFillerHelp.appendChild(deciderFillerHelpText2)
        deciderFiller.appendChild(deciderFillerText)
        deciderFiller.appendChild(deciderFillerHelp)
        mapVeto.appendChild(deciderFiller)

        createTeamSelect('team-b', 10, false, 'def')
    } else {
        if (teamAB === 0) {
            createTeamSelect('team-a', 9, false, 'team')
        } else {
            createTeamSelect('team-b', 9, true, 'team')
        }
        if (pickBan === 'pick') {
            createTeamSelect('team-b', 10, false, 'def')
        }
    }
    setAllNames()
    setAllLogos()
}


// const mapPoolSelection = document.getElementById('map-pool-selection')

// function setMapSelection(selectElement) {
//     while (selectElement.firstChild) {
//         selectElement.removeChild(selectElement.firstChild)
//     }
//     for (const map of mapData) {
//         if (map.mapPool || mapPoolSelection.selectedIndex !== 0) {
//             const newOption = document.createElement('option')
//             newOption.value = map.mapName
//             newOption.textContent = map.mapName
//             selectElement.appendChild(newOption)
//         }
//     }
//     // setMapVeto() - does not exist currently
// }

// function setMapPool() {
//     const mapBansAll = document.getElementsByClassName('map-ban-selection')
//     const mapPicksAll = document.getElementsByClassName('map-pick-selection')
//     for (const menu of mapBansAll) {
//         setMapSelection(menu)
//     }
//     for (const menu of mapPicksAll) {
//         setMapSelection(menu)
//     }
// }

// document.getElementById('map-pool-selection').addEventListener('change', setMapPool)



// ########################################################
// #################### Map Veto Logic ####################
// ########################################################
let mapPicks = []
let mapBans = []
let mapPicksTeams = []
let mapBansTeams = []
let mapPicksSides = []



// #############################################################
// #################### Score Keeping Logic ####################
// #############################################################
let mapWinners = []



// ####################################################################
// #################### Overlay Template Selection ####################
// ####################################################################
const overlaySelection = document.getElementById('overlay-selection')

function setOverlay() {
    const overlayElements = document.getElementsByClassName('overlay-element')
    if (overlaySelection.value === "GC") {
        for (const element of overlayElements) {
            element.src = element.src.replace(/(VCL|LPL)/g, "GC")
        }
    } else if (overlaySelection.value === "VCL") {
        for (const element of overlayElements) {
            element.src = element.src.replace(/(GC|LPL)/g, "VCL")
        }
    } else {
        for (const element of overlayElements) {
            element.src = element.src.replace(/(VCL|GC)/g, "LPL")
        }
    }
}

document.getElementById('overlay-selection').addEventListener('change', setOverlay)



// ####################################################
// #################### Bottom Bar ####################
// ####################################################
const bottomBarSelection = document.getElementById('bottom-bar-selection')
const chatCommandsSelection = document.getElementById('chat-commands-selection')
const bottomBarTextSizeSelection = document.getElementById('bottom-bar-text-size-selection')

function bottomBarUpdate() {
    const bottomBarAll = document.getElementsByClassName('bottom-bar')
    const chatCommandsAll = document.getElementsByClassName('chat-commands')
    if (bottomBarSelection.checked === false) {
        for (const instance of bottomBarAll) {
            instance.style.display = 'none'
        }
    } else {
        for (const instance of bottomBarAll) {
            instance.style.display = 'grid'
        }
    }
    if (chatCommandsSelection.checked === false) {
        for (const instance of chatCommandsAll) {
            instance.style.display = 'none'
        }
    } else {
        for (const instance of chatCommandsAll) {
            instance.style.display = 'flex'
        }
    }
    if (bottomBarTextSizeSelection.checked) {
        for (const instance of bottomBarAll) {
            instance.style.fontSize = '20pt'
        }
    } else {
        for (const instance of bottomBarAll) {
            instance.style.fontSize = '25pt'
        }
    }
}

document.getElementById('bottom-bar-selection').addEventListener('change', bottomBarUpdate)
document.getElementById('chat-commands-selection').addEventListener('change', bottomBarUpdate)
document.getElementById('bottom-bar-text-size-selection').addEventListener('change', bottomBarUpdate)

setAllNames()
setAllLogos()
setMapPool()