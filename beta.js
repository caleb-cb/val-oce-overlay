const TeamAName = document.querySelector("#team-a-name")
const TeamBName = document.querySelector("#team-b-name")
const TeamATri = document.querySelector("#team-a-tri")
const TeamBTri = document.querySelector("#team-b-tri")
let TeamALogo = 'n/a'
let TeamBLogo = 'n/a'

const EventName = document.querySelector('#event-name')
const Caster1Name = document.querySelector('#caster-1-name')
const Caster2Name = document.querySelector('#caster-2-name')
let EventLogo = 'n/a'

const OverlaySelection = document.querySelector("#overlay-selection")
const SeriesLengthSelection = document.querySelector("#series-length-selection")
const MapPoolSelection = document.querySelector("#map-pool-selection")
const CastersSelection = document.getElementsByName("casters-selection")
const InterviewSelection = document.querySelector("#interview-selection")
const BottomBarSelection = document.querySelector("#bottom-bar-selection")
const ChatCommandsSelection = document.querySelector("#chat-commands-selection")
const BottomBarTextSizeSelection = document.querySelector("#bottom-bar-text-size-selection")

const mapData = [
    {mapname: "Abyss", mappool: true},
    {mapname: "Ascent", mappool: true},
    {mapname: "Bind", mappool: true},
    {mapname: "Breeze", mappool: false},
    {mapname: "Fracture", mappool: false},
    {mapname: "Haven", mappool: true},
    {mapname: "Icebox", mappool: true},
    {mapname: "Lotus", mappool: true},
    {mapname: "Pearl", mappool: false},
    {mapname: "Split", mappool: false},
    {mapname: "Sunset", mappool: true},
]

let mapPicks = []
let mapBans = []
let mapPicksTeams = []
let mapBansTeams = []
let mapPicksSides = []
let mapWinners = []

// Overlay Template Selection
function setOverlay() {
    const SelectedOption = document.getElementById('overlay-selection').value
    const overlayElements = document.getElementsByClassName('overlay-element')
    if (SelectedOption === "GC") {
        for (const element of overlayElements) {
            element.src = element.src.replace(/(VCL|LPL)/g, "GC")
        }
    } else if (SelectedOption === "VCL") {
        for (const element of overlayElements) {
            element.src = element.src.replace(/(GC|LPL)/g, "VCL")
        }
    } else {
        for (const element of overlayElements) {
            element.src = element.src.replace(/(VCL|GC)/g, "LPL")
        }
    }
}

OverlaySelection.addEventListener("change", setOverlay)


// Team/Event/Casters Name Changing
function setTeamNames() {
    const TeamANameAll = document.getElementsByClassName('apply-team-a-name')
    const TeamBNameAll = document.getElementsByClassName('apply-team-b-name')
    const TeamATriAll = document.getElementsByClassName('apply-team-a-tri')
    const TeamBTriAll = document.getElementsByClassName('apply-team-b-tri')
    const TeamAFullAll = document.getElementsByClassName('apply-team-a-full')
    const TeamBFullAll = document.getElementsByClassName('apply-team-b-full')
    for (const instance of TeamANameAll) {
        instance.textContent = `${TeamAName.value}`
    }
    for (const instance of TeamBNameAll) {
        instance.textContent = `${TeamBName.value}`
    }
    for (const instance of TeamATriAll) {
        instance.textContent = `${TeamATri.value}`
    }
    for (const instance of TeamBTriAll) {
        instance.textContent = `${TeamBTri.value}`
    }
    for (const instance of TeamAFullAll) {
        instance.textContent = `(${TeamATri.value}) ${TeamAName.value}`
    }
    for (const instance of TeamBFullAll) {
        instance.textContent = `(${TeamBTri.value}) ${TeamBName.value}`
    }

    remakeAllSelects()
}

function setEventNames() {
    const EventNameAll = document.getElementsByClassName('apply-event-name')
    const Caster1NameAll = document.getElementsByClassName('apply-caster-1-name')
    const Caster2NameAll = document.getElementsByClassName('apply-caster-2-name')
    for (const instance of EventNameAll) {
        instance.textContent = `${EventName.value}`
    }
    for (const instance of Caster1NameAll) {
        instance.textContent = `@${Caster1Name.value}`
    }
    for (const instance of Caster2NameAll) {
        instance.textContent = `@${Caster2Name.value}`
    }
}

TeamAName.addEventListener("keyup", setTeamNames)
TeamBName.addEventListener("keyup", setTeamNames)
TeamATri.addEventListener("keyup", setTeamNames)
TeamBTri.addEventListener("keyup", setTeamNames)

EventName.addEventListener("keyup", setEventNames)
Caster1Name.addEventListener("keyup", setEventNames)
Caster2Name.addEventListener("keyup", setEventNames)


// Team A/B Logo Changing
function setTeamLogos() {
    const TeamALogoAll = document.getElementsByClassName('apply-team-a-logo')
    const TeamBLogoAll = document.getElementsByClassName('apply-team-b-logo')
    const TeamALogoUpload = document.getElementById('team-a-logo-upload')
    const TeamBLogoUpload = document.getElementById('team-b-logo-upload')
    const TeamANoLogo = document.getElementById('team-a-no-logo')
    const TeamBNoLogo = document.getElementById('team-b-no-logo')
    if (TeamANoLogo.checked) {
        TeamALogoUpload.value = ''
        for (const element of TeamALogoAll) {
            element.src = "assets/200x200_No_Logo.png"
        }
    }
    if (TeamBNoLogo.checked) {
        TeamBLogoUpload.value = ''
        for (const element of TeamBLogoAll) {
            element.src = "assets/200x200_No_Logo.png"
        }
    }
    if (TeamALogoUpload.value !== '') {
        for (const element of TeamALogoAll) {
            element.src = TeamALogo
        }
    }
    if (TeamBLogoUpload.value !== '') {
        for (const element of TeamBLogoAll) {
            element.src = TeamBLogo
        }
    }
}

function uploadTeamALogo() {
    document.getElementById('team-a-no-logo').checked = false
    const TeamALogoUpload = document.getElementById('team-a-logo-upload')
    URL.revokeObjectURL(TeamALogo)
    TeamALogo = URL.createObjectURL(TeamALogoUpload.files[0])
    setTeamLogos()
}

function uploadTeamBLogo() {
    document.getElementById('team-b-no-logo').checked = false
    const TeamBLogoUpload = document.getElementById('team-b-logo-upload')
    URL.revokeObjectURL(TeamBLogo)
    TeamBLogo = URL.createObjectURL(TeamBLogoUpload.files[0])
    setTeamLogos()
}

function setEventLogos() {
    const EventLogoAll = document.getElementsByClassName('apply-event-logo')
    const EventLogoUpload = document.getElementById('event-logo-upload')
    if (EventLogoUpload.value !== '') {
        for (const element of EventLogoAll) {
            element.src = EventLogo
        }
    }
}

function uploadEventLogo() {
    const EventLogoUpload = document.getElementById('event-logo-upload')
    URL.revokeObjectURL(EventLogo)
    EventLogo = URL.createObjectURL(EventLogoUpload.files[0])
    setEventLogos()
}

function teamLogoActivate() {
    document.getElementById('team-a-no-logo').addEventListener('change', setTeamLogos)
    document.getElementById('team-b-no-logo').addEventListener('change', setTeamLogos)
    document.getElementById('team-a-logo-upload').addEventListener('change', uploadTeamALogo)
    document.getElementById('team-b-logo-upload').addEventListener('change', uploadTeamBLogo)
    document.getElementById('event-logo-upload').addEventListener('change', uploadEventLogo)
}


// Bottom Bar
function bottomBarUpdate() {
    const BottomBarAll = document.getElementsByClassName('bottom-bar')
    const ChatCommandsAll = document.getElementsByClassName('chat-commands')
    if (BottomBarSelection.checked === false) {
        for (const instance of BottomBarAll) {
            instance.style.display = 'none'
        }
    } else {
        for (const instance of BottomBarAll) {
            instance.style.display = 'grid'
        }
    }
    if (ChatCommandsSelection.checked === false) {
        for (const instance of ChatCommandsAll) {
            instance.style.display = 'none'
        }
    } else {
        for (const instance of ChatCommandsAll) {
            instance.style.display = 'flex'
        }
    }
    if (BottomBarTextSizeSelection.checked) {
        for (const instance of BottomBarAll) {
            instance.style.fontSize = '20pt'
        }
    } else {
        for (const instance of BottomBarAll) {
            instance.style.fontSize = '25pt'
        }
    }
}

BottomBarSelection.addEventListener("change", bottomBarUpdate)
ChatCommandsSelection.addEventListener("change", bottomBarUpdate)
BottomBarTextSizeSelection.addEventListener("change", bottomBarUpdate)


// Casters
function castersUpdate() {
    const casterHandles1 = document.getElementsByClassName('caster-handle-1')
    const casterHandles2 = document.getElementsByClassName('caster-handle-2')
    for (const element of CastersSelection) {
        if (element.checked) {
            let NumberOfCasters = element.value
            if (Number(NumberOfCasters) === 1) {
                document.getElementById('cams-overlay-video').src = `assets/${OverlaySelection.value}_Cam_Background.webm`
                document.getElementById('cams-screen-overlay-video').src = `assets/${OverlaySelection.value}_Cam_Screen_Background.webm`
                for (const element of casterHandles1) {
                    element.style.display = 'grid'
                }
                for (const element of casterHandles2) {
                    element.style.display = 'none'
                }
            } else {
                document.getElementById('cams-overlay-video').src = `assets/${OverlaySelection.value}_Dual_Cam_Background.webm`
                document.getElementById('cams-screen-overlay-video').src = `assets/${OverlaySelection.value}_Dual_Cam_Screen_Background.webm`
                for (const element of casterHandles2) {
                    element.style.display = 'grid'
                }
                for (const element of casterHandles1) {
                    element.style.display = 'none'
                }
            }
        }
    }
}

for (const element of CastersSelection) {
    element.addEventListener("change", castersUpdate)
}

// Map Series Length Selection
function setSeriesLength() {
    const bo3Console = document.querySelector("#bo3-console")
    const bo5Console = document.querySelector("#bo5-console")
    const bo1Console = document.querySelector("#bo1-console")
    if (SeriesLengthSelection.value === "BO3") {
        bo3Console.setAttribute("class", "active-series-console")
        bo5Console.setAttribute("class", "display-none")
        bo1Console.setAttribute("class", "display-none")
    } else if (SeriesLengthSelection.value === "BO5") {
        bo5Console.setAttribute("class", "active-series-console")
        bo3Console.setAttribute("class", "display-none")
        bo1Console.setAttribute("class", "display-none")
    } else {
        bo1Console.setAttribute("class", "active-series-console")
        bo3Console.setAttribute("class", "display-none")
        bo5Console.setAttribute("class", "display-none")
    }
    setMapPool()
    resetScores()
}

SeriesLengthSelection.addEventListener("change", setSeriesLength)


// Map Pool Selection
function setMapSelection(selectElement) {
    while (selectElement.firstChild) {
        selectElement.removeChild(selectElement.firstChild)
    }
    for (const map of mapData) {
        if (map.mappool || MapPoolSelection.selectedIndex !== 0) {
            const newOption = document.createElement('option')
            newOption.value = map.mapname
            newOption.textContent = map.mapname
            selectElement.appendChild(newOption)
        }
    }
    setMapVeto()
}

function setMapPool() {
    const mapBansAll = document.getElementsByClassName("map-ban-selection")
    const mapPicksAll = document.getElementsByClassName("map-pick-selection")
    for (const menu of mapBansAll) {
        setMapSelection(menu)
    }
    for (const menu of mapPicksAll) {
        setMapSelection(menu)
    }
}

MapPoolSelection.addEventListener("change", setMapPool)


// Map Veto Logic
function setMapVeto() {
    const mapBansAll = document.getElementsByClassName("map-ban-selection")
    const mapPicksAll = document.getElementsByClassName("map-pick-selection")
    const mapBansTeamsAll = document.getElementsByClassName("map-ban-team")
    const mapPicksTeamsAll = document.getElementsByClassName("map-pick-team")
    const sideSelections = document.getElementsByClassName("side-selection-teams")
    mapPicks = []
    mapBans = []
    mapPicksTeams = []
    mapBansTeams = []
    mapPicksSides = []
    if (SeriesLengthSelection.value === "BO3") {
        for (const map of mapBansAll) {
            if (map.classList.contains("bo3")) {
                let selectedMap = {mapname: `${map.value}`}
                mapBans.push(selectedMap);
            }
        }

        for (const map of mapPicksAll) {
            if (map.classList.contains("bo3")) {
                let selectedMap = {mapname: `${map.value}`}
                mapPicks.push(selectedMap);
            }
        }

        for (const team of mapBansTeamsAll) {
            if (team.classList.contains("bo3")) {
                let SelectedTeam = `${team.value}`
                mapBansTeams.push(SelectedTeam)
            }
        }

        for (const team of mapPicksTeamsAll) {
            if (team.classList.contains("bo3")) {
                let SelectedTeam = `${team.value}`
                mapPicksTeams.push(SelectedTeam)
            }
        }

        for (const team of sideSelections) {
            if (team.classList.contains("bo3")) {
                let SelectedTeam = `${team.value}`
                mapPicksSides.push(SelectedTeam)
            }
        }
        // Sets defense teams for map veto overlay and sets logos on intermission screen 
        const pickSides = document.getElementsByClassName('bo3-side-team')
        const intermissionDefTeams = document.getElementsByClassName('bo3-def-logo')
        const intermissionAttackTeams = document.getElementsByClassName('bo3-attack-logo')
        mapPicksSides.forEach((team, i) => {
            pickSides[i].className = pickSides[i].className.replace(/(team-a|team-b)/g, `${team}`)
            if (team === 'team-a') {
                intermissionDefTeams[i].className = intermissionDefTeams[i].className.replace(/(team-a|team-b)/g, `team-a`)
                intermissionAttackTeams[i].className = intermissionAttackTeams[i].className.replace(/(team-a|team-b)/g, `team-b`)
            } else {
                intermissionDefTeams[i].className = intermissionDefTeams[i].className.replace(/(team-a|team-b)/g, `team-b`)
                intermissionAttackTeams[i].className = intermissionAttackTeams[i].className.replace(/(team-a|team-b)/g, `team-a`)
            }
        })
        // Sets map ban team names on map veto overlay
        const banNames = document.getElementsByClassName('bo3-ban-team')
        Array.from(banNames).forEach((element, i) => {
            element.className = element.className.replace(/(team-a|team-b)/g, `${mapBansTeams[i]}`)
        })
        // Sets map pick team names on map veto overlay and intermission overlay
        const pickNames = document.getElementsByClassName('bo3-pick-team')
        const pickNamesIntermission = document.getElementsByClassName('bo3-pick-team-intermission')
        mapPicksTeams.forEach((pick, i) => {
            pickNames[i].className = pickNames[i].className.replace(/(team-a|team-b)/g, `${pick}`)
            pickNamesIntermission[i].className = pickNamesIntermission[i].className.replace(/(team-a|team-b)/g, `${pick}`)
        })
        // Sets map names and images for each map ban on map veto overlay
        const banImgs = document.getElementsByClassName('bo3-ban-img')
        const banMapNames = document.getElementsByClassName('bo3-ban-mapname')
        mapBans.forEach((ban, i) => {
            banImgs[i].src = `assets/Maps/${ban.mapname}_320x320.png`
            banMapNames[i].textContent = `${ban.mapname}`
        })
        // Sets map names and images for each map pick on map veto overlay and intermission overlay
        const pickImgsIntermission = document.getElementsByClassName('bo3-pick-img-intermission')
        const pickImgs = document.getElementsByClassName('bo3-pick-img')
        const pickMapNames = document.getElementsByClassName('bo3-pick-mapname')
        const bo3IntermissionBackgroundMap = document.getElementsByClassName('bo3-intermission-background-video')
        mapPicks.forEach((pick, i) => {
            pickImgs[i].src = `assets/Maps/${pick.mapname}_320x640.png`
            pickImgsIntermission[i].src = `assets/Maps/${pick.mapname}_524x214.png`
            pickMapNames[i].textContent = `${pick.mapname}`
            bo3IntermissionBackgroundMap[i].src = `https://github.com/caleb-cb/community-caster-overlay-videos/blob/main/${pick.mapname}_Cinematic.webm?raw=true`
        })
        setTeamNames()
        setTeamLogos()
        scoreUpdate()
        copyMaps()
    }
}

function mapVetoActivate() {
    const selectElements = document.querySelectorAll(
        ".map-ban-selection, .map-pick-selection, .map-ban-team, .map-pick-team, .side-selection-teams"
    )
    for (const element of selectElements) {
        element.addEventListener("change", setMapVeto)
    }
}


//Score Keeping Logic
function scoreUpdate() {
    let teamASeriesScore = 0
    let teamBSeriesScore = 0
    let seriesScore = `${teamASeriesScore}-${teamBSeriesScore}`
    let mapNumber = teamASeriesScore+teamBSeriesScore
    let mapWinners = []
    const TeamAScores = document.getElementsByClassName('team-a-score')
    const TeamBScores = document.getElementsByClassName('team-b-score')
    Array.from(TeamAScores).forEach((map, i) => {
        if (map.value>=13 && map.value>=Number(TeamBScores[i].value)+2) {
            teamASeriesScore++
            mapWinners.push('team-a')
        }
        if (TeamBScores[i].value>=13 && TeamBScores[i].value>=Number(map.value)+2) {
            teamBSeriesScore++
            mapWinners.push('team-b')
        }
    })
    mapNumber = teamASeriesScore+teamBSeriesScore
    // Updates winning team details for every complete map on map veto and intermission overlay
    const scheduleResultOverlays = document.getElementsByClassName('schedule-result-overlay')
    mapWinners.forEach((mapWinner, i) => {
        const applyWinnerName = document.getElementsByClassName(`apply-map-${Number(i)+1}-winner`)
        for (const element of applyWinnerName) {
            element.className = element.className.replace(/(team-a|team-b)/g, `${mapWinner}`)
            setTeamNames()
        }
        const applyWinnerLogo = document.getElementsByClassName(`apply-map-${Number(i)+1}-logo`)
        for (const element of applyWinnerLogo) {
            element.className = element.className.replace(/(team-a|team-b)/g, `${mapWinner}`)
            setTeamLogos()
        }
        const applyWinnerScore = document.getElementsByClassName(`apply-map-${Number(i)+1}-score`)
        for (const element of applyWinnerScore) {
            if (Number(TeamAScores[i].value)>Number(TeamBScores[i].value)) {
                element.textContent = `${TeamAScores[i].value} - ${TeamBScores[i].value}`
            } else {
                element.textContent = `${TeamBScores[i].value} - ${TeamAScores[i].value}`
            }
        }
        const applyWinnerScoreIntermission = document.getElementsByClassName(`apply-map-${Number(i)+1}-score-intermission`)
        if (SeriesLengthSelection.value === 'BO3') {
            const defTeamIntermission = document.getElementsByClassName('bo3-def-logo')
            if (defTeamIntermission[i].classList.contains('apply-team-a-logo')) {
                applyWinnerScoreIntermission[0].textContent = `${TeamBScores[i].value} - ${TeamAScores[i].value}`
            } else {
                applyWinnerScoreIntermission[0].textContent = `${TeamAScores[i].value} - ${TeamBScores[i].value}`
            }
        }
    })
    // Updates current map on intermission overlay
    const currentMap = document.getElementsByClassName('current-map')
    const bo3IntermissionBackgroundMap = document.getElementsByClassName('bo3-intermission-background-video')
    if (SeriesLengthSelection.value === 'BO3') {        
        if (teamASeriesScore !== 2 && teamBSeriesScore !== 2) {
            for (const element of currentMap) {
                element.textContent = `Map ${mapNumber+1} - ${mapPicks[mapNumber].mapname}`
            }
        } else if (teamASeriesScore>teamBSeriesScore) {
            for (const element of currentMap) {
                element.textContent = `${TeamATri.value} ${teamASeriesScore} - ${teamBSeriesScore} ${TeamBTri.value}`
            }
        } else {
            for (const element of currentMap) {
                element.textContent = `${TeamBTri.value} ${teamBSeriesScore} - ${teamASeriesScore} ${TeamATri.value}`
            }
        }
        if (mapNumber<3) {
            Array.from(bo3IntermissionBackgroundMap).forEach((element, i) => {
                if (i === mapNumber) {
                    element.style.opacity = 100
                } else {
                    element.style.opacity = 0
                }
            })
        }    
    }
    // Shows/Hides map results for finished maps on map veto and intermission overlay
    const mapResultOverlays = document.getElementsByClassName('map-result-overlay')
    Array.from(mapResultOverlays).forEach((element, i) => {
        if (Number(i)+1<=mapNumber) {
            element.style.display = 'flex'
            scheduleResultOverlays[i].style.display = 'flex'
        }
        else {
            element.style.display = 'none'
            scheduleResultOverlays[i].style.display = 'none'
        }
    })
    // Swapping sides on IGO according to map and which team starts def
    const sideSelections = document.getElementsByClassName("side-selection-teams")
    const TeamANameIGO = document.querySelector("#team-a-name-igo")
    const TeamBNameIGO = document.querySelector("#team-b-name-igo")
    const TeamALogoIGO = document.querySelector("#team-a-logo-igo")
    const TeamBLogoIGO = document.querySelector("#team-b-logo-igo")
    if (teamASeriesScore<2 && teamBSeriesScore<2) {
        if (sideSelections[mapNumber].value === 'team-a') {
            seriesScore = `${teamASeriesScore}-${teamBSeriesScore}`
            TeamBNameIGO.setAttribute("class", "team-name-right-igo apply-team-b-name")
            TeamANameIGO.setAttribute("class", "team-name-left-igo apply-team-a-name")
            TeamBLogoIGO.setAttribute("class", "team-logo-right-igo apply-team-b-logo")
            TeamALogoIGO.setAttribute("class", "team-logo-left-igo apply-team-a-logo")
        } else if (sideSelections[mapNumber].value === 'team-b') {
            seriesScore = `${teamBSeriesScore}-${teamASeriesScore}`
            TeamANameIGO.setAttribute("class", "team-name-right-igo apply-team-a-name")
            TeamBNameIGO.setAttribute("class", "team-name-left-igo apply-team-b-name")
            TeamALogoIGO.setAttribute("class", "team-logo-right-igo apply-team-a-logo")
            TeamBLogoIGO.setAttribute("class", "team-logo-left-igo apply-team-b-logo")
        }
    }
    // Setting score dots on IGO
    const MapScoreIGO = document.getElementById('map-score')
    if (teamASeriesScore<2 && teamBSeriesScore<2 && document.getElementById('map-score-toggle').checked) {
        MapScoreIGO.src = `assets/map_scores/GEN_${SeriesLengthSelection.value}_${seriesScore}.png`
    } else if (teamASeriesScore<2 && teamBSeriesScore<2) {
        MapScoreIGO.src = `assets/map_scores/${OverlaySelection.value}_${SeriesLengthSelection.value}_${seriesScore}.png`
    }
    // !Scores command update
    if (mapNumber === 0) {
        scoreCommand = `!editcom !score ${TeamATri.value} ${teamASeriesScore}-${teamBSeriesScore} ${TeamBTri.value} | ${mapPicks[0].mapname} - Current | ${mapPicks[1].mapname} - TBD | ${mapPicks[2].mapname} - TBD`
    } else if (mapNumber === 1) {
        scoreCommand = `!editcom !score ${TeamATri.value} ${teamASeriesScore}-${teamBSeriesScore} ${TeamBTri.value} | ${mapPicks[0].mapname} - ${TeamATri.value} ${TeamAScores[0].value}-${TeamBScores[0].value} ${TeamBTri.value} | ${mapPicks[1].mapname} - Current | ${mapPicks[2].mapname} - TBD`
    } else if (mapNumber === 2) {
        if (teamASeriesScore !== 2 && teamBSeriesScore !== 2) {
            scoreCommand = `!editcom !score ${TeamATri.value} ${teamASeriesScore}-${teamBSeriesScore} ${TeamBTri.value} | ${mapPicks[0].mapname} - ${TeamATri.value} ${TeamAScores[0].value}-${TeamBScores[0].value} ${TeamBTri.value} | ${mapPicks[1].mapname} - ${TeamATri.value} ${TeamAScores[1].value}-${TeamBScores[1].value} ${TeamBTri.value} | ${mapPicks[2].mapname} - Current`
        } else {
            scoreCommand = `!editcom !score ${TeamATri.value} ${teamASeriesScore}-${teamBSeriesScore} ${TeamBTri.value} | ${mapPicks[0].mapname} - ${TeamATri.value} ${TeamAScores[0].value}-${TeamBScores[0].value} ${TeamBTri.value} | ${mapPicks[1].mapname} - ${TeamATri.value} ${TeamAScores[1].value}-${TeamBScores[1].value} ${TeamBTri.value} | ${mapPicks[2].mapname} - N/A`
        }
    } else {
        scoreCommand = `!editcom !score ${TeamATri.value} ${teamASeriesScore}-${teamBSeriesScore} ${TeamBTri.value} | ${mapPicks[0].mapname} - ${TeamATri.value} ${TeamAScores[0].value}-${TeamBScores[0].value} ${TeamBTri.value} | ${mapPicks[1].mapname} - ${TeamATri.value} ${TeamAScores[1].value}-${TeamBScores[1].value} ${TeamBTri.value} | ${mapPicks[2].mapname} - ${TeamATri.value} ${TeamAScores[2].value}-${TeamBScores[2].value} ${TeamBTri.value}`
    }
    document.getElementById('score-copy').textContent = scoreCommand
}

function resetScores() {
    const teamABScore = document.querySelectorAll(".team-a-score, .team-b-score")
    for (const element of teamABScore) {
        element.value = 0
    }
}

function scoreUpdateActivate() {
    const scoreUpdateTriggers = document.querySelectorAll(".team-a-score, .team-b-score, #map-score-toggle, .side-selection-teams")
    for (const element of scoreUpdateTriggers) {
        element.addEventListener("change", scoreUpdate)
    }
}


//Performance optimizing
function playAllVideo() {
    const AllVideos = document.getElementsByClassName('video')
    for (const element of AllVideos) {
        element.play()
    }
}
function pauseAllVideo() {
    const AllVideos = document.getElementsByClassName('video')
    for (const element of AllVideos) {
        element.pause()
    }
}

document.getElementById('pause-all-video').addEventListener("click", pauseAllVideo)
document.getElementById('play-all-video').addEventListener("click", playAllVideo)


function copyMaps() {
    let map1 = 0
    let map2 = 0
    let map3 = 0
    let map4 = 0
    let map5 = 0
    
    if (mapPicks.length >= 3) {
        map3 = `${mapPicks[0].mapname}`;
        map4 = `${mapPicks[1].mapname}`;
        map5 = `${mapPicks[2].mapname}`;
    }
    if (mapPicksTeams[0] === 'team-a') {
        map1 = TeamATri.value
    } else {
        map1 = TeamBTri.value
    }
    if (mapPicksTeams[1] === 'team-a') {
        map2 = TeamATri.value
    } else {
        map2 = TeamBTri.value
    }
    var mapsCommand = `!editcom !maps Map 1 (${map1}) - ${map3} | Map 2 (${map2}) - ${map4} | Map 3 (Decider) - ${map5}`
    navigator.clipboard.writeText(mapsCommand)
    document.getElementById('maps-copy').textContent = mapsCommand
}

let scoreCommand = '!editcom !score'

function copyScore() {
    navigator.clipboard.writeText(scoreCommand)
}

document.getElementById('maps-copy').addEventListener("click", copyMaps)
document.getElementById('score-copy').addEventListener("click", copyScore)


//Run On Page Load
function pageLoad() {
    setMapPool()
    mapVetoActivate()
    setMapVeto()
    resetScores()
    scoreUpdateActivate()
    teamLogoActivate()
    remakeAllSelects()
    scoreUpdate()
}