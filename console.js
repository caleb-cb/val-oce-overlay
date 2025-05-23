const defaultSettings = {
    menuSelection: 1,
    // Teams Config
    teamAName: "Team A",
    teamATri: "TMA",
    teamARegionSeed: "OCE #1",
    teamALogo: "assets/200x200_No_Logo.png",
    teamANoLogo: 1,
    teamAPlayers: [
        {
            riotID: "Player1A",
            riotIDTag: "#001A",
            preferredName: "",
            OBSNumber: "",
        },
        {
            riotID: "Player2A",
            riotIDTag: "#002A",
            preferredName: "",
            OBSNumber: "",
        },
        {
            riotID: "Player3A",
            riotIDTag: "#003A",
            preferredName: "",
            OBSNumber: "",
        },
        {
            riotID: "Player4A",
            riotIDTag: "#004A",
            preferredName: "",
            OBSNumber: "",
        },
        {
            riotID: "Player5A",
            riotIDTag: "#005A",
            preferredName: "",
            OBSNumber: "",
        },
    ],
    teamBName: "Team B",
    teamBTri: "TMB",
    teamBRegionSeed: "NA #5",
    teamBLogo: "assets/200x200_No_Logo.png",
    teamBNoLogo: 1,
    teamBPlayers: [
        {
            riotID: "Player1B",
            riotIDTag: "#001B",
            preferredName: "",
            OBSNumber: "",
        },
        {
            riotID: "Player2B",
            riotIDTag: "#002B",
            preferredName: "",
            OBSNumber: "",
        },
        {
            riotID: "Player3B",
            riotIDTag: "#003B",
            preferredName: "",
            OBSNumber: "",
        },
        {
            riotID: "Player4B",
            riotIDTag: "#004B",
            preferredName: "",
            OBSNumber: "",
        },
        {
            riotID: "Player5B",
            riotIDTag: "#005B",
            preferredName: "",
            OBSNumber: "",
        },
    ],
    // Map Veto Config
    seriesLengthSelection: 1,
    mapPoolSelection: 0,
    teamIdentifierSelection: 0,
    mapBans: ['Abyss', 'Abyss', 'Abyss', 'Abyss'],
    mapPicks: ['Abyss', 'Abyss', 'Abyss'],
    mapBansTeams: ['team-a', 'team-b', 'team-a', 'team-b'],
    mapPicksTeams: ['team-a', 'team-b'],
    mapPicksSides: ['team-a', 'team-a', 'team-a'],
    // Live Game
    mapScores: [0, 0, 0, 0, 0, 0],
    mapWinners: [],
    teamASeriesScore: 0,
    teamBSeriesScore: 0,
    mapNumber: 0,
    currentMap: "Bind",
    intermissionState: 0,
    deadline: null,
    // Event/Casters Config
    eventName: "Event Name",
    eventLogo: "",
    eventNoLogo: 1,
    castersSelection: 0,
    caster1Name: "",
    caster2Name: "",
    // Overlay Config
    overlaySelection: 0,
    bg1: "#007477",
    bg2: "#00262a",
    bg3: "#0297b5",
    bg4: "#00f0f8",
    bga1: "#204546",
    bga2: "#257878",
    frames: "#0D9093",
    bottomBarSelection: 1,
    chatCommandsSelection: 1,
    bottomBarTextSizeSelection: 1,
    // Intermission Config
    scheduleSelection: 0,
    numberOfMatches: 1,
    sbg1: "#1a1a1a",
    sbg2: "#3a3a3a",
    matchEnd: "Ending Soon",
    matchSchedule: [
        // Match 1
        {
            // Team A
            teamASelection: 0,
            teamALogo: "assets/200x200_No_Logo.png",
            teamANoLogo: 1,
            teamATri: "TMA",
            // Team B
            teamBSelection: 0,
            teamBLogo: "assets/200x200_No_Logo.png",
            teamBNoLogo: 1,
            teamBTri: "TMB",
            // Misc
            seriesLengthSelection: 0,
            teamAScore: 0,
            teamBScore: 0,
            matchHeading: "",
        },
        // Match 2
        {
            // Team A
            teamASelection: 0,
            teamALogo: "assets/200x200_No_Logo.png",
            teamANoLogo: 1,
            teamATri: "TMA",
            // Team B
            teamBSelection: 0,
            teamBLogo: "assets/200x200_No_Logo.png",
            teamBNoLogo: 1,
            teamBTri: "TMB",
            // Misc
            seriesLengthSelection: 0,
            teamAScore: 0,
            teamBScore: 0,
            matchHeading: "",
        },
        // Match 3
        {
            // Team A
            teamASelection: 0,
            teamALogo: "assets/200x200_No_Logo.png",
            teamANoLogo: 1,
            teamATri: "TMA",
            // Team B
            teamBSelection: 0,
            teamBLogo: "assets/200x200_No_Logo.png",
            teamBNoLogo: 1,
            teamBTri: "TMB",
            // Misc
            seriesLengthSelection: 0,
            teamAScore: 0,
            teamBScore: 0,
            matchHeading: "",
        },
        // Match 4
        {
            // Team A
            teamASelection: 0,
            teamALogo: "assets/200x200_No_Logo.png",
            teamANoLogo: 1,
            teamATri: "TMA",
            // Team B
            teamBSelection: 0,
            teamBLogo: "assets/200x200_No_Logo.png",
            teamBNoLogo: 1,
            teamBTri: "TMB",
            // Misc
            seriesLengthSelection: 0,
            teamAScore: 0,
            teamBScore: 0,
            matchHeading: "",
        },
        // Match 5
        {
            // Team A
            teamASelection: 0,
            teamALogo: "assets/200x200_No_Logo.png",
            teamANoLogo: 1,
            teamATri: "TMA",
            // Team B
            teamBSelection: 0,
            teamBLogo: "assets/200x200_No_Logo.png",
            teamBNoLogo: 1,
            teamBTri: "TMB",
            // Misc
            seriesLengthSelection: 0,
            teamAScore: 0,
            teamBScore: 0,
            matchHeading: "",
        },
        // Match 6
        {
            // Team A
            teamASelection: 0,
            teamALogo: "assets/200x200_No_Logo.png",
            teamANoLogo: 1,
            teamATri: "TMA",
            // Team B
            teamBSelection: 0,
            teamBLogo: "assets/200x200_No_Logo.png",
            teamBNoLogo: 1,
            teamBTri: "TMB",
            // Misc
            seriesLengthSelection: 0,
            teamAScore: 0,
            teamBScore: 0,
            matchHeading: "",
        },
    ],
}

const exampleSettings = {
    menuSelection: 1,
    // Teams Config
    teamAName: "Team Heretics",
    teamATri: "TH",
    teamARegionSeed: "Seed #1",
    teamALogo: "https://files.catbox.moe/gx2wtj.png",
    teamANoLogo: 0,
    teamAPlayers: [
        {
            riotID: "Boo",
            riotIDTag: "#TH01",
            preferredName: "",
            OBSNumber: "",
        },
        {
            riotID: "RieNs",
            riotIDTag: "#TH02",
            preferredName: "",
            OBSNumber: "",
        },
        {
            riotID: "benjyfishy",
            riotIDTag: "#TH03",
            preferredName: "",
            OBSNumber: "",
        },
        {
            riotID: "MiniBoo",
            riotIDTag: "#TH04",
            preferredName: "",
            OBSNumber: "",
        },
        {
            riotID: "Wo0t",
            riotIDTag: "#TH05",
            preferredName: "",
            OBSNumber: "",
        },
    ],
    teamBName: "Team Vitality",
    teamBTri: "VIT",
    teamBRegionSeed: "Seed #4",
    teamBLogo: "https://files.catbox.moe/r2r9ri.png",
    teamBNoLogo: 0, 
    teamBPlayers: [
        {
            riotID: "trexx",
            riotIDTag: "#VIT01",
            preferredName: "",
            OBSNumber: "",
        },
        {
            riotID: "Sayf",
            riotIDTag: "#VIT02",
            preferredName: "",
            OBSNumber: "",
        },
        {
            riotID: "Kicks",
            riotIDTag: "#VIT03",
            preferredName: "",
            OBSNumber: "",
        },
        {
            riotID: "runneR",
            riotIDTag: "#VIT04",
            preferredName: "",
            OBSNumber: "",
        },
        {
            riotID: "ceNder",
            riotIDTag: "#VIT05",
            preferredName: "",
            OBSNumber: "",
        },
    ],
    // Map Veto Config
    seriesLengthSelection: 1,
    mapPoolSelection: 1,
    teamIdentifierSelection: 0,
    mapBans: ['Abyss', 'Ascent', 'Haven', 'Lotus'],
    mapPicks: ['Icebox', 'Sunset', 'Bind'],
    mapBansTeams: ['team-b', 'team-a', 'team-b', 'team-a'],
    mapPicksTeams: ['team-b', 'team-a'],
    mapPicksSides: ['team-a', 'team-b', 'team-a'],
    // Live Game
    mapScores: [14, 12, 10, 13, 0, 0],
    mapWinners: [],
    teamASeriesScore: 0,
    teamBSeriesScore: 0,
    mapNumber: 0,
    currentMap: "Bind",
    intermissionState: 0,
    deadline: null,
    // Event/Casters Config
    eventName: "VCT EMEA Stage 2 Playoffs",
    eventLogo: "https://files.catbox.moe/suc0fy.png",
    eventNoLogo: 0,
    castersSelection: 1,
    caster1Name: "MitchMan",
    caster2Name: "Tombizz",
    // Overlay Config
    overlaySelection: 0,
    bg1: "#007477",
    bg2: "#00262a",
    bg3: "#0297b5",
    bg4: "#00f0f8",
    bga1: "#204546",
    bga2: "#257878",
    frames: "#0D9093",
    bottomBarSelection: 1,
    chatCommandsSelection: 1,
    bottomBarTextSizeSelection: 1,
    // Intermission Config
    scheduleSelection: 0,
    numberOfMatches: 3,
    sbg1: "#1a1a1a",
    sbg2: "#3a3a3a",
    matchEnd: "Ending Soon",
    matchSchedule: [
        // Match 1
        {
            // Team A
            teamASelection: 1,
            teamALogo: "https://files.catbox.moe/gx2wtj.png",
            teamANoLogo: 0,
            teamATri: "TH",
            // Team B
            teamBSelection: 1,
            teamBLogo: "https://files.catbox.moe/r2r9ri.png",
            teamBNoLogo: 0,
            teamBTri: "VIT",
            // Misc
            seriesLengthSelection: 1,
            teamAScore: 1,
            teamBScore: 2,
            matchHeading: "Upper Semifinal 1",
        },
        // Match 2
        {
            // Team A
            teamASelection: 1,
            teamALogo: "https://files.catbox.moe/a3vmrr.png",
            teamANoLogo: 0,
            teamATri: "FUT",
            // Team B
            teamBSelection: 1,
            teamBLogo: "https://files.catbox.moe/jpsglx.png",
            teamBNoLogo: 0,
            teamBTri: "FNC",
            // Misc
            seriesLengthSelection: 1,
            teamAScore: 0,
            teamBScore: 2,
            matchHeading: "Upper Semifinal 2",
        },
        // Match 3
        {
            // Team A
            teamASelection: 0,
            teamALogo: "assets/200x200_No_Logo.png",
            teamANoLogo: 1,
            teamATri: "TMA",
            // Team B
            teamBSelection: 0,
            teamBLogo: "assets/200x200_No_Logo.png",
            teamBNoLogo: 1,
            teamBTri: "TMB",
            // Misc
            seriesLengthSelection: 0,
            teamAScore: 0,
            teamBScore: 0,
            matchHeading: "",
        },
        // Match 4
        {
            // Team A
            teamASelection: 0,
            teamALogo: "assets/200x200_No_Logo.png",
            teamANoLogo: 1,
            teamATri: "TMA",
            // Team B
            teamBSelection: 0,
            teamBLogo: "assets/200x200_No_Logo.png",
            teamBNoLogo: 1,
            teamBTri: "TMB",
            // Misc
            seriesLengthSelection: 0,
            teamAScore: 0,
            teamBScore: 0,
            matchHeading: "",
        },
        // Match 5
        {
            // Team A
            teamASelection: 0,
            teamALogo: "assets/200x200_No_Logo.png",
            teamANoLogo: 1,
            teamATri: "TMA",
            // Team B
            teamBSelection: 0,
            teamBLogo: "assets/200x200_No_Logo.png",
            teamBNoLogo: 1,
            teamBTri: "TMB",
            // Misc
            seriesLengthSelection: 0,
            teamAScore: 0,
            teamBScore: 0,
            matchHeading: "",
        },
        // Match 6
        {
            // Team A
            teamASelection: 0,
            teamALogo: "assets/200x200_No_Logo.png",
            teamANoLogo: 1,
            teamATri: "TMA",
            // Team B
            teamBSelection: 0,
            teamBLogo: "assets/200x200_No_Logo.png",
            teamBNoLogo: 1,
            teamBTri: "TMB",
            // Misc
            seriesLengthSelection: 0,
            teamAScore: 0,
            teamBScore: 0,
            matchHeading: "",
        },
    ],
}

function restoreFromSettings(settings) {
    for (menu of document.getElementsByName('menu-selection')) {
        if (Number(menu.value) === settings.menuSelection) {
            menu.checked = true
        }
    }
    restoreTeams(settings)
    restoreMapVeto(settings)
    restoreLiveGame(settings)
    restoreEventCasters(settings)
    restoreOverlay(settings)
    restoreIntermission(settings)
}

function restoreTeams(settings) {
    document.getElementById('team-a-name').value = settings.teamAName
    document.getElementById('team-a-tri').value = settings.teamATri
    document.getElementById('team-a-region-seed').value = settings.teamARegionSeed
    teamALogo = settings.teamALogo
    if (settings.teamANoLogo === 0) {
        document.getElementById('team-a-no-logo').checked = false
    } else {
        document.getElementById('team-a-no-logo').checked = true
    }
    settings.teamAPlayers.forEach((player, i) => {
        document.getElementById(`team-a-player-${i+1}-riot-id`).value = player.riotID
        document.getElementById(`team-a-player-${i+1}-riot-id-tag`).value = player.riotIDTag
        document.getElementById(`team-a-player-${i+1}-preferred-name`).value = player.preferredName
        document.getElementById(`team-a-player-${i+1}-obs-position`).value = player.OBSNumber
    })
    document.getElementById('team-b-name').value = settings.teamBName
    document.getElementById('team-b-tri').value = settings.teamBTri
    document.getElementById('team-b-region-seed').value = settings.teamBRegionSeed
    teamBLogo = settings.teamBLogo
    if (settings.teamBNoLogo === 0) {
        document.getElementById('team-b-no-logo').checked = false
    } else {
        document.getElementById('team-b-no-logo').checked = true
    }
    settings.teamBPlayers.forEach((player, i) => {
        document.getElementById(`team-b-player-${i+1}-riot-id`).value = player.riotID
        document.getElementById(`team-b-player-${i+1}-riot-id-tag`).value = player.riotIDTag
        document.getElementById(`team-b-player-${i+1}-preferred-name`).value = player.preferredName
        document.getElementById(`team-b-player-${i+1}-obs-position`).value = player.OBSNumber
    })
    setAllLogos()
    setAllNames()
}

function restoreMapVeto(settings) {
    for (option of document.getElementsByName('series-length-selection')) {
        if (Number(option.value) === settings.seriesLengthSelection) {
            option.checked = true
        }
    }
    for (option of document.getElementsByName('map-pool-selection')) {
        if (Number(option.value) === settings.mapPoolSelection) {
            option.checked = true
        }
    }
    for (option of document.getElementsByName('team-identifier-selection')) {
        if (Number(option.value) === settings.teamIdentifierSelection) {
            option.checked = true
        }
    }
    seriesLengthUpdate()
    teamIdentifierUpdate()
    // BO1 Map Veto
    if (settings.seriesLengthSelection === 0) {
        for (map of document.getElementsByName('map-pick-map')) {
            if (map.value === settings.mapPicks[0]) {
                map.checked = true
            }
        }
        if (settings.mapPicksTeams[0] === 'team-a') {
            document.getElementById('map-pick-team').checked = false
        } else {
            document.getElementById('map-pick-team').checked = true
        }
        if (settings.mapPicksSides[0] === 'team-a') {
            document.getElementById('map-pick-def').checked = false
        } else {
            document.getElementById('map-pick-def').checked = true
        }
    }
    // BO3 Map Veto
    if (settings.seriesLengthSelection === 1) {
        // Bans
        for (map of document.getElementsByName('1st-ban-map')) {
            if (map.value === settings.mapBans[0]) {
                map.checked = true
            }
        }
        if (settings.mapBansTeams[0] === 'team-a') {
            document.getElementById('1st-ban-team').checked = false
        } else {
            document.getElementById('1st-ban-team').checked = true
        }
        for (map of document.getElementsByName('2nd-ban-map')) {
            if (map.value === settings.mapBans[1]) {
                map.checked = true
            }
        }
        if (settings.mapBansTeams[1] === 'team-a') {
            document.getElementById('2nd-ban-team').checked = false
        } else {
            document.getElementById('2nd-ban-team').checked = true
        }
        for (map of document.getElementsByName('3rd-ban-map')) {
            if (map.value === settings.mapBans[2]) {
                map.checked = true
            }
        }
        if (settings.mapBansTeams[2] === 'team-a') {
            document.getElementById('3rd-ban-team').checked = false
        } else {
            document.getElementById('3rd-ban-team').checked = true
        }
        for (map of document.getElementsByName('4th-ban-map')) {
            if (map.value === settings.mapBans[3]) {
                map.checked = true
            }
        }
        if (settings.mapBansTeams[3] === 'team-a') {
            document.getElementById('4th-ban-team').checked = false
        } else {
            document.getElementById('4th-ban-team').checked = true
        }
        // Picks
        for (map of document.getElementsByName('1st-pick-map')) {
            if (map.value === settings.mapPicks[0]) {
                map.checked = true
            }
        }
        if (settings.mapPicksTeams[0] === 'team-a') {
            document.getElementById('1st-pick-team').checked = false
        } else {
            document.getElementById('1st-pick-team').checked = true
        }
        if (settings.mapPicksSides[0] === 'team-a') {
            document.getElementById('1st-pick-def').checked = false
        } else {
            document.getElementById('1st-pick-def').checked = true
        }
        for (map of document.getElementsByName('2nd-pick-map')) {
            if (map.value === settings.mapPicks[1]) {
                map.checked = true
            }
        }
        if (settings.mapPicksTeams[1] === 'team-a') {
            document.getElementById('2nd-pick-team').checked = false
        } else {
            document.getElementById('2nd-pick-team').checked = true
        }
        if (settings.mapPicksSides[1] === 'team-a') {
            document.getElementById('2nd-pick-def').checked = false
        } else {
            document.getElementById('2nd-pick-def').checked = true
        }
        for (map of document.getElementsByName('3rd-pick-map')) {
            if (map.value === settings.mapPicks[2]) {
                map.checked = true
            }
        }
        if (settings.mapPicksSides[2] === 'team-a') {
            document.getElementById('3rd-pick-def').checked = false
        } else {
            document.getElementById('3rd-pick-def').checked = true
        }
    }
    // BO5 Map Veto
    if (settings.seriesLengthSelection === 2) {
        // Bans
        for (map of document.getElementsByName('1st-ban-map')) {
            if (map.value === settings.mapBans[0]) {
                map.checked = true
            }
        }
        if (settings.mapBansTeams[0] === 'team-a') {
            document.getElementById('1st-ban-team').checked = false
        } else {
            document.getElementById('1st-ban-team').checked = true
        }
        for (map of document.getElementsByName('2nd-ban-map')) {
            if (map.value === settings.mapBans[1]) {
                map.checked = true
            }
        }
        if (settings.mapBansTeams[1] === 'team-a') {
            document.getElementById('2nd-ban-team').checked = false
        } else {
            document.getElementById('2nd-ban-team').checked = true
        }
        // Picks
        for (map of document.getElementsByName('1st-pick-map')) {
            if (map.value === settings.mapPicks[0]) {
                map.checked = true
            }
        }
        if (settings.mapPicksTeams[0] === 'team-a') {
            document.getElementById('1st-pick-team').checked = false
        } else {
            document.getElementById('1st-pick-team').checked = true
        }
        if (settings.mapPicksSides[0] === 'team-a') {
            document.getElementById('1st-pick-def').checked = false
        } else {
            document.getElementById('1st-pick-def').checked = true
        }
        for (map of document.getElementsByName('2nd-pick-map')) {
            if (map.value === settings.mapPicks[1]) {
                map.checked = true
            }
        }
        if (settings.mapPicksTeams[1] === 'team-a') {
            document.getElementById('2nd-pick-team').checked = false
        } else {
            document.getElementById('2nd-pick-team').checked = true
        }
        if (settings.mapPicksSides[1] === 'team-a') {
            document.getElementById('2nd-pick-def').checked = false
        } else {
            document.getElementById('2nd-pick-def').checked = true
        }
        for (map of document.getElementsByName('3rd-pick-map')) {
            if (map.value === settings.mapPicks[2]) {
                map.checked = true
            }
        }
        if (settings.mapPicksTeams[2] === 'team-a') {
            document.getElementById('3rd-pick-team').checked = false
        } else {
            document.getElementById('3rd-pick-team').checked = true
        }
        if (settings.mapPicksSides[2] === 'team-a') {
            document.getElementById('3rd-pick-def').checked = false
        } else {
            document.getElementById('3rd-pick-def').checked = true
        }
        for (map of document.getElementsByName('4th-pick-map')) {
            if (map.value === settings.mapPicks[3]) {
                map.checked = true
            }
        }
        if (settings.mapPicksTeams[3] === 'team-a') {
            document.getElementById('4th-pick-team').checked = false
        } else {
            document.getElementById('4th-pick-team').checked = true
        }
        if (settings.mapPicksSides[3] === 'team-a') {
            document.getElementById('4th-pick-def').checked = false
        } else {
            document.getElementById('4th-pick-def').checked = true
        }
        for (map of document.getElementsByName('5th-pick-map')) {
            if (map.value === settings.mapPicks[4]) {
                map.checked = true
            }
        }
        if (settings.mapPicksSides[4] === 'team-a') {
            document.getElementById('5th-pick-def').checked = false
        } else {
            document.getElementById('5th-pick-def').checked = true
        }
    }
    teamIdentifierToggle()
    mapVetoUpdate()
}

function restoreLiveGame(settings) {
    mapScores = settings.mapScores
    intermissionState = 0
    setScores()
    scoreUpdate()
    intermissionDefault()
}

function restoreEventCasters(settings) {
    document.getElementById('event-name').value = settings.eventName
    eventLogo = settings.eventLogo
    if (settings.eventNoLogo === 0) {
        document.getElementById('event-no-logo').checked = false
    } else {
        document.getElementById('event-no-logo').checked = true
    }
    for (option of document.getElementsByName('casters-selection')) {
        if (Number(option.value) === settings.castersSelection) {
            option.checked = true
        }
    }
    document.getElementById('caster-1-name').value = settings.caster1Name
    document.getElementById('caster-2-name').value = settings.caster2Name
    castersUpdate()
    setAllLogos()
    setAllNames()
}

function restoreOverlay(settings) {
    for (option of document.getElementsByName('overlay-selection')) {
        if (Number(option.value) === settings.overlaySelection) {
            option.checked = true
        }
    }
    document.getElementById('bg1').value = settings.bg1
    document.getElementById('bg2').value = settings.bg2
    document.getElementById('bg3').value = settings.bg3
    document.getElementById('bg4').value = settings.bg4
    document.getElementById('bga1').value = settings.bga1
    document.getElementById('bga2').value = settings.bga2
    document.getElementById('frames').value = settings.frames
    if (settings.bottomBarSelection === 0) {
        document.getElementById('bottom-bar-selection').checked = false
    } else {
        document.getElementById('bottom-bar-selection').checked = true
    }
    if (settings.chatCommandsSelection === 0) {
        document.getElementById('chat-commands-selection').checked = false
    } else {
        document.getElementById('chat-commands-selection').checked = true
    }
    if (settings.bottomBarTextSizeSelection === 0) {
        document.getElementById('bottom-bar-text-size-selection').checked = false
    } else {
        document.getElementById('bottom-bar-text-size-selection').checked = true
    }

    if (settings.sponsorLogo) {
      document.getElementById('sponsor-logo').value = settings.sponsorLogo
    } else {
      document.getElementById('sponsor-logo').value = ""
    }
    setOverlay()
    bottomBarUpdate()
    setGradient()
}

function restoreIntermission(settings) {
    for (option of document.getElementsByName('schedule-selection')) {
        if (Number(option.value) === settings.scheduleSelection) {
            option.checked = true
        }
    }
    document.getElementById('number-of-matches').value = settings.numberOfMatches
    document.getElementById('sbg1').value = settings.sbg1
    document.getElementById('sbg2').value = settings.sbg2
    document.getElementById('match-end-replace').value = settings.matchEnd

    function restoreMatchConfig(matchNumber) {
        for (option of document.getElementsByName(`match-${matchNumber+1}-team-a-selection`)) {
            if (Number(option.value) === settings.matchSchedule[matchNumber].teamASelection) {
                option.checked = true
            }
        }
        for (option of document.getElementsByName(`match-${matchNumber+1}-team-b-selection`)) {
            if (Number(option.value) === settings.matchSchedule[matchNumber].teamBSelection) {
                option.checked = true
            }
        }
        for (option of document.getElementsByName(`match-${matchNumber+1}-series-length-selection`)) {
            if (Number(option.value) === settings.matchSchedule[matchNumber].seriesLengthSelection) {
                option.checked = true
            }
        }
        if (settings.matchSchedule[matchNumber].teamANoLogo === 0) {
            document.getElementById(`match-${matchNumber+1}-team-a-no-logo`).checked = false
        } else {
            document.getElementById(`match-${matchNumber+1}-team-a-no-logo`).checked = true
        }
        if (settings.matchSchedule[matchNumber].teamBNoLogo === 0) {
            document.getElementById(`match-${matchNumber+1}-team-b-no-logo`).checked = false
        } else {
            document.getElementById(`match-${matchNumber+1}-team-b-no-logo`).checked = true
        }
        document.getElementById(`match-${matchNumber+1}-team-a-tri`).value = settings.matchSchedule[matchNumber].teamATri
        document.getElementById(`match-${matchNumber+1}-team-b-tri`).value = settings.matchSchedule[matchNumber].teamBTri
        document.getElementById(`match-${matchNumber+1}-team-a-score`).value = settings.matchSchedule[matchNumber].teamAScore
        document.getElementById(`match-${matchNumber+1}-team-b-score`).value = settings.matchSchedule[matchNumber].teamBScore
        document.getElementById(`match-${matchNumber+1}-heading`).value = settings.matchSchedule[matchNumber].matchHeading
        matchSchedule[matchNumber].teamALogo = settings.matchSchedule[matchNumber].teamALogo
        matchSchedule[matchNumber].teamBLogo = settings.matchSchedule[matchNumber].teamBLogo
        matchSchedule[matchNumber].teamATri = settings.matchSchedule[matchNumber].teamATri
        matchSchedule[matchNumber].teamBTri = settings.matchSchedule[matchNumber].teamBTri
        for (instance of document.getElementsByClassName(`apply-match-${matchNumber+1}-team-a-logo`)) {
            instance.src = matchSchedule[matchNumber].teamALogo
        }
        for (instance of document.getElementsByClassName(`apply-match-${matchNumber+1}-team-b-logo`)) {
            instance.src = matchSchedule[matchNumber].teamBLogo
        }
        for (instance of document.getElementsByClassName(`apply-match-${matchNumber+1}-team-a-tri`)) {
            instance.textContent = matchSchedule[matchNumber].teamATri
        }
        for (instance of document.getElementsByClassName(`apply-match-${matchNumber+1}-team-b-tri`)) {
            instance.textContent = matchSchedule[matchNumber].teamBTri
        }
    }
    restoreMatchConfig(0)
    restoreMatchConfig(1)
    restoreMatchConfig(2)
    restoreMatchConfig(3)
    restoreMatchConfig(4)
    restoreMatchConfig(5)
    setMatchScheduleData(0)
    setMatchScheduleData(1)
    setMatchScheduleData(2)
    setMatchScheduleData(3)
    setMatchScheduleData(4)
    setMatchScheduleData(5)
    setMatchSchedule()
}


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
    teamATri.value = teamATri.value.toUpperCase()
    teamBTri.value = teamBTri.value.toUpperCase()
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
let teamALogo = 'assets/200x200_No_Logo.png'
let teamBLogo = 'assets/200x200_No_Logo.png'
let eventLogo = 'assets/Event_Logo_Preview.png'

function setAllLogos() {
    const teamALogoAll = document.getElementsByClassName('apply-team-a-logo')
    const teamBLogoAll = document.getElementsByClassName('apply-team-b-logo')
    const teamALogoUpload = document.getElementById('team-a-logo-upload')
    const teamBLogoUpload = document.getElementById('team-b-logo-upload')
    const teamANoLogo = document.getElementById('team-a-no-logo')
    const teamBNoLogo = document.getElementById('team-b-no-logo')
    const eventLogoAll = document.getElementsByClassName('apply-event-logo')
    const eventLogoUpload = document.getElementById('event-logo-upload')
    const eventNoLogo = document.getElementById('event-no-logo')
    if (teamANoLogo.checked) {
        teamALogoUpload.value = ''
        for (const element of teamALogoAll) {
            URL.revokeObjectURL(teamALogo)
            teamALogo = 'assets/200x200_No_Logo.png'
            element.src = teamALogo
        }
    }
    if (teamBNoLogo.checked) {
        teamBLogoUpload.value = ''
        for (const element of teamBLogoAll) {
            URL.revokeObjectURL(teamBLogo)
            teamBLogo = 'assets/200x200_No_Logo.png'
            element.src = teamBLogo
        }
    }
    if (eventNoLogo.checked) {
        eventLogoUpload.value = ''
        URL.revokeObjectURL(eventLogo)
        eventLogo = ''
        for (const element of eventLogoAll) {
            element.src = eventLogo
        }
        document.getElementById('event-logo-preview').src = 'assets/Event_Logo_Preview.png'
    }
    if (teamANoLogo.checked === false) {
        for (const element of teamALogoAll) {
            element.src = teamALogo
        }
    }
    if (teamBNoLogo.checked === false) {
        for (const element of teamBLogoAll) {
            element.src = teamBLogo
        }
    }
    if (eventNoLogo.checked === false) {
        for (const element of eventLogoAll) {
            element.src = eventLogo
        }
        if (eventLogo === "" || eventLogo === null) {
            document.getElementById('event-logo-preview').src = 'assets/Event_Logo_Preview.png'
        }
    }
}

function uploadTeamALogo() {
    document.getElementById('team-a-no-logo').checked = false
    teamALogo = prompt(`Please provide an img link for ${teamATri.value}'s logo. We recommend uploading the logo to Discord and copying the image link`)
    if (teamALogo !== '' && teamALogo !== null) {
        setAllLogos()
    } else {
        document.getElementById('team-a-no-logo').checked = true
        setAllLogos()
    }
}

function uploadTeamBLogo() {
    document.getElementById('team-b-no-logo').checked = false
    teamBLogo = prompt(`Please provide an img link for ${teamBTri.value}'s logo. We recommend uploading the logo to Discord and copying the image link`)
    if (teamBLogo !== '' && teamBLogo !== null) {
        setAllLogos()
    } else {
        document.getElementById('team-b-no-logo').checked = true
        setAllLogos()
    }
}

function uploadEventLogo() {
    document.getElementById('event-no-logo').checked = false
    eventLogo = prompt(`Please provide an img link for your event's logo. We recommend uploading the logo to Discord and copying the image link`)
    if (eventLogo !== '' && eventLogo !== null) {
        setAllLogos()
    } else {
        document.getElementById('event-no-logo').checked = true
        setAllLogos()
    }
}

document.getElementById('team-a-no-logo').addEventListener('change', setAllLogos)
document.getElementById('team-b-no-logo').addEventListener('change', setAllLogos)
document.getElementById('event-no-logo').addEventListener('change', setAllLogos)
document.getElementById('team-a-logo-upload').addEventListener('click', uploadTeamALogo)
document.getElementById('team-b-logo-upload').addEventListener('click', uploadTeamBLogo)
document.getElementById('event-logo-upload').addEventListener('click', uploadEventLogo)



// #####################################################################
// #################### Map Series Length Selection ####################
// #####################################################################
let seriesLengthSelection = 1

function seriesLengthUpdate() {
    document.getElementsByName('series-length-selection').forEach((option) => {
        if (option.checked) {
            seriesLengthSelection = Number(option.value)
            mapPoolUpdate()
        }
    })
}

document.getElementsByName('series-length-selection').forEach((option) => {
    option.addEventListener('change', seriesLengthUpdate)
})




// ###################################################################
// #################### Team Identifier Selection ####################
// ###################################################################
let teamIdentifierSelection = 0

function teamIdentifierUpdate() {
    document.getElementsByName('team-identifier-selection').forEach((option) => {
        if (option.checked) {
            teamIdentifierSelection = `${option.value}`
            const teamIdentifierMenus = document.getElementsByClassName('team-input-contents')
            Array.from(teamIdentifierMenus).forEach((menu) => {
                if (Number(teamIdentifierSelection) === 0) {
                    const teamLogo = document.createElement('img')
                        teamLogo.src = "assets/200x200_No_Logo.png"
                        if(menu.parentElement.children[0].checked) {
                            teamLogo.className = "apply-team-b-logo"
                        } else {
                            teamLogo.className = "apply-team-a-logo"
                        }
                    menu.children[1].replaceWith(teamLogo)
                    setAllLogos()
                } else {
                    const teamTri = document.createElement('span')
                        teamTri.style.fontSize = "10pt"
                        if(menu.parentElement.children[0].checked) {
                            teamTri.className = "apply-team-b-tri"
                        } else {
                            teamTri.className = "apply-team-a-tri"
                        }
                    menu.children[1].replaceWith(teamTri)
                    setAllNames()
                }
            })

        }
    })
}

document.getElementsByName('team-identifier-selection').forEach((option) => {
    option.addEventListener('change', teamIdentifierUpdate)
})



// ############################################################
// #################### Map Pool Selection ####################
// ############################################################
const mapData = [
    {mapName: "Abyss", mapPool: false},
    {mapName: "Ascent", mapPool: true},
    {mapName: "Bind", mapPool: false},
    {mapName: "Breeze", mapPool: false},
    {mapName: "Fracture", mapPool: true},
    {mapName: "Haven", mapPool: true},
    {mapName: "Icebox", mapPool: true},
    {mapName: "Lotus", mapPool: true},
    {mapName: "Pearl", mapPool: true},
    {mapName: "Split", mapPool: true},
    {mapName: "Sunset", mapPool: false},
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
    }
    if (seriesLengthSelection === 0) {
        createMapPickBan('map', 1, 'pick', false, 0)
        mapTeamDefActivate()
        teamIdentifierToggle()
        mapVetoActivate()
        mapVetoUpdate()
        resetScores()
    } else if (seriesLengthSelection === 1) {
        createMapPickBan('1st', 1, 'ban', false, 0)
        createMapPickBan('2nd', 4, 'ban', false, 1)
        createMapPickBan('1st', 7, 'pick', false, 0)
        createMapPickBan('2nd', 10, 'pick', false, 1)
        createMapPickBan('3rd', 13, 'ban', false, 0)
        createMapPickBan('4th', 16, 'ban', false, 1)
        createMapPickBan('3rd', 19, 'pick', true, 0)
        mapTeamDefActivate()
        teamIdentifierToggle()
        mapVetoActivate()
        mapVetoUpdate()
        resetScores()
    } else if (seriesLengthSelection === 2) {
        createMapPickBan('1st', 1, 'ban', false, 0)
        createMapPickBan('2nd', 4, 'ban', false, 1)
        createMapPickBan('1st', 7, 'pick', false, 0)
        createMapPickBan('2nd', 10, 'pick', false, 1)
        createMapPickBan('3rd', 13, 'pick', false, 0)
        createMapPickBan('4th', 16, 'pick', false, 1)
        createMapPickBan('5th', 19, 'pick', true, 0)
        mapTeamDefActivate()
        teamIdentifierToggle()
        mapVetoActivate()
        mapVetoUpdate()
        resetScores()
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
            teamSelect.style.marginTop = "10px"
                const teamSelectInput = document.createElement('input')
                    teamSelectInput.type = "checkbox"
                    teamSelectInput.id = `${nth}-${pickBan}-${teamDef}`
                    teamSelectInput.name = `${nth}-${pickBan}-${teamDef}`
                    teamSelectInput.checked = trueFalse
                    teamSelectInput.className = `map-${pickBan}-${teamDef} menu`
                const teamSelectInputContents = document.createElement('div')
                    teamSelectInputContents.className = "team-input-contents"
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
                        const teamSelectTri = document.createElement('span')
                            teamSelectTri.className = `apply-${team}-tri`
                            teamSelectTri.style.fontSize = "10pt"
                        const teamSelectHelp = document.createElement('div')
                            teamSelectHelp.className = "help"
                                const teamSelectHelpDiv1 = document.createElement('div')
                                    teamSelectHelpDiv1.style.display = "flex"
                                    teamSelectHelpDiv1.style.flexDirection = "column"
                                    teamSelectHelpDiv1.style.alignItems = "center"
                                        const teamSelectHelpLine1 = document.createElement('span')
                                            if (teamDef === 'team' && pickBan === 'pick') {
                                                teamSelectHelpLine1.textContent = `Toggle the team picking between`
                                            } else if (teamDef === 'team' && pickBan === 'ban') {
                                                teamSelectHelpLine1.textContent = `Toggle the team banning between`
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
                if (Number(teamIdentifierSelection) === 0) {
                    teamSelectInputContents.appendChild(teamSelectLogo)
                } else {
                    teamSelectInputContents.appendChild(teamSelectTri)
                }
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
            deciderFiller.style.marginTop = "10px"
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

        createTeamSelect('team-a', 10, false, 'def')
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

// ########################################################
// #################### Map Veto Logic ####################
// ########################################################
let mapPicks = []
let mapBans = []
let mapPicksTeams = []
let mapBansTeams = []
let mapPicksSides = []

function teamIdentifierToggle() {
    Array.from(document.getElementsByClassName('team-input-contents')).forEach((menu) => {
        if(menu.parentElement.children[0].checked) {
            menu.children[1].className = menu.children[1].className.replace(/(team-a|team-b)/g, "team-b")
            setAllNames()
            setAllLogos()
        } else {
            menu.children[1].className = menu.children[1].className.replace(/(team-a|team-b)/g, "team-a")
            setAllNames()
            setAllLogos()
        }
    })
}

function mapTeamDefActivate() {
    Array.from(document.getElementsByClassName('team-input-contents')).forEach((menu) => {
        menu.parentElement.children[0].addEventListener('change', teamIdentifierToggle);
    })
}

function mapVetoUpdate() {
    mapPicks = []
    mapBans = []
    mapPicksTeams = []
    mapBansTeams = []
    mapPicksSides = []
    for (const map of document.getElementsByClassName('map-pick-selection')) {
        if (map.checked) {
            mapPicks.push(map.value)
        }
    }
    for (const map of document.getElementsByClassName('map-ban-selection')) {
        if (map.checked) {
            mapBans.push(map.value)
        }
    }
    for (const team of document.getElementsByClassName('map-pick-team')) {
        if (team.checked) {
            mapPicksTeams.push('team-b')
        } else {
            mapPicksTeams.push('team-a')
        }
    }
    for (const team of document.getElementsByClassName('map-ban-team')) {
        if (team.checked) {
            mapBansTeams.push('team-b')
        } else {
            mapBansTeams.push('team-a')
        }
    }
    for (const team of document.getElementsByClassName('map-pick-def')) {
        if (team.checked) {
            mapPicksSides.push('team-b')
        } else {
            mapPicksSides.push('team-a')
        }
    }
    createLiveScores()
    setScores()
    scoreUpdate()
}


function mapVetoActivate() {
    for (const option of document.querySelectorAll('.map-pick-selection, .map-ban-selection, .map-pick-team, .map-ban-team, .map-pick-def')) {
        option.addEventListener('change', mapVetoUpdate)
    }
}
// #############################################################
// #################### Score Keeping Logic ####################
// #############################################################
let mapWinners = []
let mapScores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let teamASeriesScore = 0
let teamBSeriesScore = 0
let mapNumber = teamASeriesScore+teamBSeriesScore
let currentMap = "abyss"

function createLiveScores() {
    const livePicks = document.getElementById('live-game-picks')
    while (livePicks.firstChild) {
        livePicks.removeChild(livePicks.firstChild)
    }
    mapPicks.forEach((map, i) => {
        const liveGamePick = document.createElement('div')
            liveGamePick.className = "live-game-pick"
                const mapPickImg = document.createElement('div')
                    mapPickImg.className = "live-game-pick-img"
                    mapPickImg.style.background = `linear-gradient(-90deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("assets/Maps/${map}_524x214.png") center center / cover`
                        const mapPickImgName = document.createElement('span')
                        if ((seriesLengthSelection === 0)) {
                            mapPickImgName.textContent = `${map}`
                            mapPickImg.appendChild(mapPickImgName)
                        } else if ((seriesLengthSelection === 1 && i === 2) || (seriesLengthSelection === 2 && i === 4)) {
                            mapPickImgName.textContent = `Decider - ${map}`
                            mapPickImg.appendChild(mapPickImgName)
                        } else {
                            const mapPickImgTeamLogo = document.createElement('img')
                                mapPickImgTeamLogo.src = "assets/200x200_No_Logo.png"
                                mapPickImgTeamLogo.className = `apply-${mapPicksTeams[i]}-logo`
                                mapPickImgTeamLogo.style.maxWidth = "100px"
                                mapPickImgTeamLogo.style.maxHeight = "100px"
                                mapPickImgTeamLogo.style.objectFit = "contain"
                                mapPickImg.appendChild(mapPickImgTeamLogo)
                            const mapPickImgDiv = document.createElement('div')
                                mapPickImgDiv.className = "flex-column"
                                    mapPickImgName.textContent = `Map ${i+1} - ${map}`    
                                    const mapPickImgTeamName = document.createElement('span')
                                        mapPickImgTeamName.className = `apply-${mapPicksTeams[i]}-tri`
                            mapPickImgDiv.appendChild(mapPickImgName)
                            mapPickImgDiv.appendChild(mapPickImgTeamName)
                            mapPickImg.appendChild(mapPickImgDiv)
                        }
                const liveGameTeamALogo = document.createElement('img')
                    liveGameTeamALogo.src = "assets/200x200_No_Logo.png"
                    liveGameTeamALogo.className = "apply-team-a-logo"
                    liveGameTeamALogo.style.maxWidth = "100px"
                    liveGameTeamALogo.style.maxHeight = "100px"
                    liveGameTeamALogo.style.objectFit = "contain"
                const liveGameTeamAName = document.createElement('span')
                    liveGameTeamAName.className = "apply-team-a-tri"
                    liveGameTeamAName.style.fontSize = "30pt"
                const liveGameTeamAScore = document.createElement('input')
                    liveGameTeamAScore.id = `map-${i}-team-a-score`
                    liveGameTeamAScore.type = "number"
                    liveGameTeamAScore.min = "0"
                    liveGameTeamAScore.value = "0"
                    liveGameTeamAScore.className = "team-a-score menu"
                const liveGameTeamAScoreHelp = document.createElement('div')
                    liveGameTeamAScoreHelp.className = "help"
                        const liveGameTeamAScoreHelpDiv = document.createElement('div')
                            liveGameTeamAScoreHelpDiv.className = "flex-row"
                                const liveGameTeamAScoreHelp1 = document.createElement('span')
                                    liveGameTeamAScoreHelp1.textContent = `Set the score on ${map} for`
                                    liveGameTeamAScoreHelp1.style.marginRight = "5px"
                                const liveGameTeamAScoreHelp2 = document.createElement('span')
                                    liveGameTeamAScoreHelp2.className = `apply-team-a-tri`
                        liveGameTeamAScoreHelpDiv.appendChild(liveGameTeamAScoreHelp1)
                        liveGameTeamAScoreHelpDiv.appendChild(liveGameTeamAScoreHelp2)
                liveGameTeamAScoreHelp.appendChild(liveGameTeamAScoreHelpDiv)
                const liveGameScoreHyphen = document.createElement('span')
                    liveGameScoreHyphen.textContent = "-"
                    liveGameScoreHyphen.style.fontSize = "40pt"
                const liveGameTeamBScore = document.createElement('input')
                    liveGameTeamBScore.id = `map-${i}-team-b-score`
                    liveGameTeamBScore.type = "number"
                    liveGameTeamBScore.min = "0"
                    liveGameTeamBScore.value = "0"
                    liveGameTeamBScore.className = "team-b-score menu"
                const liveGameTeamBScoreHelp = document.createElement('div')
                    liveGameTeamBScoreHelp.className = "help"
                        const liveGameTeamBScoreHelpDiv = document.createElement('div')
                            liveGameTeamBScoreHelpDiv.className = "flex-row"
                                const liveGameTeamBScoreHelp1 = document.createElement('span')
                                    liveGameTeamBScoreHelp1.textContent = `Set the score on ${map} for`
                                    liveGameTeamBScoreHelp1.style.marginRight = "5px"
                                const liveGameTeamBScoreHelp2 = document.createElement('span')
                                    liveGameTeamBScoreHelp2.className = `apply-team-b-tri`
                        liveGameTeamBScoreHelpDiv.appendChild(liveGameTeamBScoreHelp1)
                        liveGameTeamBScoreHelpDiv.appendChild(liveGameTeamBScoreHelp2)
                liveGameTeamBScoreHelp.appendChild(liveGameTeamBScoreHelpDiv)
                const liveGameTeamBName = document.createElement('span')
                    liveGameTeamBName.className = "apply-team-b-tri"
                    liveGameTeamBName.style.fontSize = "30pt"
                const liveGameTeamBLogo = document.createElement('img')
                    liveGameTeamBLogo.src = "assets/200x200_No_Logo.png"
                    liveGameTeamBLogo.className = "apply-team-b-logo"
                    liveGameTeamBLogo.style.maxWidth = "100px"
                    liveGameTeamBLogo.style.maxHeight = "100px"
                    liveGameTeamBLogo.style.objectFit = "contain"
        liveGamePick.appendChild(mapPickImg)
        liveGamePick.appendChild(liveGameTeamALogo)
        liveGamePick.appendChild(liveGameTeamAName)
        liveGamePick.appendChild(liveGameTeamAScore)
        liveGamePick.appendChild(liveGameTeamAScoreHelp)
        liveGamePick.appendChild(liveGameScoreHyphen)
        liveGamePick.appendChild(liveGameTeamBScore)
        liveGamePick.appendChild(liveGameTeamBScoreHelp)
        liveGamePick.appendChild(liveGameTeamBName)
        liveGamePick.appendChild(liveGameTeamBLogo)
        livePicks.appendChild(liveGamePick)
    })
    setAllNames()
    setAllLogos()
    scoreUpdateActivate()
}

function scoreUpdate() {
    mapWinners = []
    mapScores = []
    teamASeriesScore = 0
    teamBSeriesScore = 0
    mapNumber = teamASeriesScore+teamBSeriesScore
    const teamAScores = document.getElementsByClassName('team-a-score')
    const teamBScores = document.getElementsByClassName('team-b-score')
    Array.from(teamAScores).forEach((map, i) => {
        if (map.value>=13 && map.value>=Number(teamBScores[i].value)+2) {
            teamASeriesScore++
            mapWinners.push('team-a')
        }
        if (teamBScores[i].value>=13 && teamBScores[i].value>=Number(map.value)+2) {
            teamBSeriesScore++
            mapWinners.push('team-b')
        }
    })
    mapNumber = teamASeriesScore+teamBSeriesScore
    currentMap = mapPicks[mapNumber]
    // mapScores update
    Array.from(document.querySelectorAll('.team-a-score, .team-b-score')).forEach((score) => {
        mapScores.push(Number(score.value))
    })
    // Updates Side Bar
    setLiveGameSideBar()
}

function scoreUpdateActivate() {
    const scoreUpdateTriggers = document.querySelectorAll('.team-a-score, .team-b-score')
    for (const element of scoreUpdateTriggers) {
        element.addEventListener('change', scoreUpdate)
        element.addEventListener('change', settingsSend)
    }
}

function setScores() {
    Array.from(document.querySelectorAll('.team-a-score, .team-b-score')).forEach((score, i) => {
        score.value = mapScores[i]
    })
}

function resetScores() {
    mapScores = []
    Array.from(document.querySelectorAll('.team-a-score, .team-b-score')).forEach((score) => {
        mapScores.push(0)
    })
    setScores()
    scoreUpdate()
}

document.getElementById('reset-scores').addEventListener("click", resetScores)



// ########################################################################
// #################### Intermission/Live Game Sidebar ####################
// ##########################################################$#############
let mapsCommand = '!editcom !maps'
let scoreCommand = '!editcom !score'
let intermissionState = 0
let timer = null

function copyMaps() {
    function teamTriMap(num) {
        if (mapPicksTeams[num] === 'team-a') {
            return(teamATri.value)
        } else {
            return(teamBTri.value)
        }
    }

    if (seriesLengthSelection === 0) {
        mapsCommand = `!editcom !maps BO1 Map - ${mapPicks[0]}`
        navigator.clipboard.writeText(mapsCommand)
    } else if (seriesLengthSelection === 1) {
        mapsCommand = `!editcom !maps Map 1 (${teamTriMap(0)}) - ${mapPicks[0]}`
        mapPicks.forEach((map, i) => {
            if (i === 2) {
                mapsCommand = mapsCommand + ` | Map 3 (Decider) - ${map}`
            } else if (i !== 0) {
                mapsCommand = mapsCommand + ` | Map ${i+1} (${teamTriMap(i)}) - ${map}`
            }
        })
        navigator.clipboard.writeText(mapsCommand)
    } else if (seriesLengthSelection === 2) {
        mapsCommand = `!editcom !maps Map 1 (${teamTriMap(0)}) - ${mapPicks[0]}`
        mapPicks.forEach((map, i) => {
            if (i === 4) {
                mapsCommand = mapsCommand + ` | Map 3 (Decider) - ${map}`
            } else if (i !== 0) {
                mapsCommand = mapsCommand + ` | Map ${i+1} (${teamTriMap(i)}) - ${map}`
            }
        })
        navigator.clipboard.writeText(mapsCommand)
    }    
}

function copyScore() {
    function scoreAddCurrentMap(num) {
        scoreCommand = scoreCommand + ` | Map ${num+1}, ${mapPicks[num]} - Current` 
    }
    function scoreAddFinishedMap(num, score) {
        scoreCommand = scoreCommand + ` | Map ${num+1}, ${mapPicks[num]} - ${teamATri.value} ${mapScores[score]}-${mapScores[score+1]} ${teamBTri.value}`
    }
    function scoreAddTBDMap(num) {
        scoreCommand = scoreCommand + ` | Map ${num+1}, ${mapPicks[num]} - TBD`
    }
    function scoreAddNAMap(num) {
        scoreCommand = scoreCommand + ` | Map ${num+1}, ${mapPicks[num]} - N/A`
    }

    if (seriesLengthSelection === 0) {
        if (mapNumber === 0) {
            scoreCommand = `!editcom !score BO1 Map ${mapPicks[0]} - Current`
        } else {
            scoreCommand = `!editcom !score BO1 Map ${mapPicks[0]} - ${teamATri.value} ${mapScores[0]}-${mapScores[1]} ${teamBTri.value}`
        }
        navigator.clipboard.writeText(scoreCommand)
    } else if (seriesLengthSelection === 1) {
        scoreCommand = `!editcom !score Series Score - ${teamATri.value} ${teamASeriesScore}-${teamBSeriesScore} ${teamBTri.value}`
        mapPicks.forEach((map, i) => {
            if ((i === mapNumber) && (teamASeriesScore < 2 && teamBSeriesScore < 2)) {
                scoreAddCurrentMap(i)
            } else if (i < mapNumber) {
                scoreAddFinishedMap(i, (i*2))
            } else if (teamASeriesScore > 1 || teamBSeriesScore > 1) {
                scoreAddNAMap(i)
            } else {
                scoreAddTBDMap(i)
            }
        })
        navigator.clipboard.writeText(scoreCommand)
    } else if (seriesLengthSelection === 2) {
        scoreCommand = `!editcom !score Series Score - ${teamATri.value} ${teamASeriesScore}-${teamBSeriesScore} ${teamBTri.value}`
        mapPicks.forEach((map, i) => {
            if ((i === mapNumber) && (teamASeriesScore < 3 && teamBSeriesScore < 3)) {
                scoreAddCurrentMap(i)
            } else if (i < mapNumber) {
                scoreAddFinishedMap(i, (i*2))
            } else if (teamASeriesScore > 2 || teamBSeriesScore > 2) {
                scoreAddNAMap(i)
            } else {
                scoreAddTBDMap(i)
            }
        })
        navigator.clipboard.writeText(scoreCommand)
    }
}

document.getElementById('maps-command-copy').addEventListener("click", copyMaps)
document.getElementById('score-command-copy').addEventListener("click", copyScore)


document.getElementById('intermission-default').addEventListener("click", () => {intermissionState = 0; intermissionDefault()})
document.getElementById('intermission-tech').addEventListener("click", () => {intermissionState = 1; intermissionTech()})
document.getElementById('intermission-3').addEventListener("click", () => {intermissionState = 2; intermission3()})
document.getElementById('intermission-5').addEventListener("click", () => {intermissionState = 3; intermission5()})
document.getElementById('intermission-10').addEventListener("click", () => {intermissionState = 4; intermission10()})

function intermissionDefault() {
    const intermissionHeading = document.getElementById('side-bar-intermission')
    if (timer !=null) {
        clearTimeout(timer)
        timer = null
    }
    if (countdown !=null) {
        clearInterval(countdown)
        countdown = null
    }
    if (mapNumber === 0) {
        if (intermissionHeading.innerHTML.includes('Starting Soon') === false) {
            intermissionHeading.innerHTML = 'Starting Soon'
        } else if (intermissionHeading.innerHTML.length > 15) {
            intermissionHeading.innerHTML = 'Starting Soon'
        } else {
            intermissionHeading.innerHTML += '.'
        }
        timer = setTimeout(intermissionDefault, 500)
    } else if ((((seriesLengthSelection === 0) && (teamASeriesScore === 1 || teamBSeriesScore === 1)) || ((seriesLengthSelection === 1) && (teamASeriesScore === 2 || teamBSeriesScore === 2)) || ((seriesLengthSelection === 2) && (teamASeriesScore === 3 || teamBSeriesScore === 3)))
    && (((Number(document.getElementById('number-of-matches').value) !== 1) && (matchSchedule[Number(document.getElementById('number-of-matches').value)-1].teamAScore +  matchSchedule[Number(document.getElementById('number-of-matches').value)-1].teamBScore === 0)))) {
        if (intermissionHeading.innerHTML.includes('Setting Up Next Match') === false) {
            intermissionHeading.innerHTML = `Setting Up Next Match`
        } else if (intermissionHeading.innerHTML.includes('...')) {
            intermissionHeading.innerHTML = `Setting Up Next Match`
        } else {
            intermissionHeading.innerHTML += '.'
        }
        timer = setTimeout(intermissionDefault, 500)
    } else if (((seriesLengthSelection === 0) && (teamASeriesScore === 1 || teamBSeriesScore === 1)) || ((seriesLengthSelection === 1) && (teamASeriesScore === 2 || teamBSeriesScore === 2)) || ((seriesLengthSelection === 2) && (teamASeriesScore === 3 || teamBSeriesScore === 3))
    ) {
        if (intermissionHeading.innerHTML.includes('Ending Soon') === false) {
            intermissionHeading.innerHTML = 'Ending Soon'
        } else if (intermissionHeading.innerHTML.includes('...')) {
            intermissionHeading.innerHTML = 'Ending Soon'
        } else {
            intermissionHeading.innerHTML += '.'
        }
        timer = setTimeout(intermissionDefault, 500)
    } else {
        if (intermissionHeading.innerHTML.includes('Waiting For Players') === false) {
            intermissionHeading.innerHTML = 'Waiting For Players'
        } else if (intermissionHeading.innerHTML.length > 21) {
            intermissionHeading.innerHTML = 'Waiting For Players'
        } else {
            intermissionHeading.innerHTML += '.'
        }
        timer = setTimeout(intermissionDefault, 500)
    }
}

function intermissionTech() {
    const intermissionHeading = document.getElementById('side-bar-intermission')
    if (timer !=null) {
        clearTimeout(timer)
        timer = null
    }
    if (countdown !=null) {
        clearInterval(countdown)
        countdown = null
    }
    if (intermissionHeading.innerHTML.includes('Tech Pause') === false) {
        intermissionHeading.innerHTML = 'Tech Pause'
    } else if (intermissionHeading.innerHTML.length > 12) {
        intermissionHeading.innerHTML = 'Tech Pause'
    } else {
        intermissionHeading.innerHTML += '.'
    }
    timer = setTimeout(intermissionTech, 500)
}

let deadline = null
let countdown = null

function countdownTimer() {
    const intermissionHeading = document.getElementById('side-bar-intermission')
    let t = deadline - Date.now() + 500
    // console.log(t)
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0')
    let seconds = Math.floor((t % (1000 * 60)) / 1000).toString().padStart(2, '0')

    // minutes = `${minutes}`
    // seconds = `${seconds}`
    // minutes = minutes.padStart(2, '0')
    // seconds = seconds.padStart(2, '0')

    intermissionHeading.innerHTML = "Intermission - " + minutes + ":" + seconds

    if (minutes === '-1' && seconds === '-1') {
        clearInterval(countdown)
        countdown = null
        intermissionState = 0
        intermissionDefault()
        settingsSend()
    }
}

function intermission3() {
    if (timer !=null) {
        clearTimeout(timer)
        timer = null
    }
    if (countdown !=null) {
        clearInterval(countdown)
        countdown = null
    }
    deadline = Date.now() + 3*60000
    countdownTimer()
    countdown = setInterval(countdownTimer, 1000)
}

function intermission5() {
    if (timer !=null) {
        clearTimeout(timer)
        timer = null
    }
    if (countdown !=null) {
        clearInterval(countdown)
        countdown = null
    }
    deadline = Date.now() + 5*60000
    countdownTimer()
    countdown = setInterval(countdownTimer, 1000)
}

function intermission10() {
    if (timer !=null) {
        clearTimeout(timer)
        timer = null
    }
    if (countdown !=null) {
        clearInterval(countdown)
        countdown = null
    }
    deadline = Date.now() + 10*60000
    countdownTimer()
    countdown = setInterval(countdownTimer, 1000)
}


function setLiveGameSideBar() {
    const sideBarMapImg = document.getElementById('side-bar-map-img')
    const sideBarMapName = document.getElementById('side-bar-map-name')
    const sideBarDefLogo = document.getElementById('side-bar-def-logo')
    const sideBarAtkLogo = document.getElementById('side-bar-atk-logo')
    const sideBarDefTeam = document.getElementById('side-bar-def-team')
    const sideBarAtkTeam = document.getElementById('side-bar-atk-team')
    
    function sideBarTeamsDefAtk() {
        if (mapPicksSides[mapNumber] === 'team-a') {
            sideBarDefTeam.className = "apply-team-a-tri"
            sideBarDefLogo.className = "apply-team-a-logo"
            sideBarAtkTeam.className = "apply-team-b-tri"
            sideBarAtkLogo.className = "apply-team-b-logo"
        } else {
            sideBarDefTeam.className = "apply-team-b-tri"
            sideBarDefLogo.className = "apply-team-b-logo"
            sideBarAtkTeam.className = "apply-team-a-tri"
            sideBarAtkLogo.className = "apply-team-a-logo"
        }
    }
    
    function sideBarValues(deciderNum, scoreWin) {
        if (mapNumber<deciderNum) {
            sideBarMapImg.src = `assets/Maps/${mapPicks[mapNumber]}_320x640.png`
            sideBarMapName.textContent = `Map ${mapNumber+1} - ${mapPicks[mapNumber]}`
            sideBarTeamsDefAtk()
        } else if ((teamASeriesScore !== scoreWin && teamBSeriesScore !== scoreWin) && (mapNumber === deciderNum)) {
            sideBarMapImg.src = `assets/Maps/${mapPicks[mapNumber]}_320x640.png`
            sideBarMapName.textContent = `Decider - ${mapPicks[mapNumber]}`
            sideBarTeamsDefAtk()
        }
    }
    
    if (seriesLengthSelection === 1) {
        sideBarValues(2, 2)
    } else if (seriesLengthSelection === 2) {
        sideBarValues(4, 3)
    } else if (seriesLengthSelection === 0 && mapNumber === 0) {
        sideBarMapImg.src = `assets/Maps/${mapPicks[mapNumber]}_320x640.png`
        sideBarMapName.textContent = `BO1 Map - ${mapPicks[mapNumber]}`
        sideBarTeamsDefAtk()
    }
    setAllLogos()
    setAllNames()
}




// #################################################
// #################### Casters ####################
// #################################################
let castersSelection = 0
function castersUpdate() {
    const casterHandles1 = document.getElementsByClassName('caster-handle-1')
    const casterHandles2 = document.getElementsByClassName('caster-handle-2')
    const castersSelectionMenu = document.getElementsByName('casters-selection')
    for (const element of castersSelectionMenu) {
        if (element.checked) {
            castersSelection = Number(element.value)
            if (Number(element.value) === 0) {
                document.getElementById('cams-screen-background').setAttribute('style', '-webkit-mask-image: url(assets/Mask_Cam_Screen.png)') 
                document.getElementById('cams-screen-caster-handle-1').style.display = "flex"
                document.getElementById('cams-screen-caster-handle-2-1').style.display = "none"
                document.getElementById('cams-screen-caster-handle-2-2').style.display = "none"
                document.getElementById('cams-screen-cam-1').style.display = "flex"
                document.getElementById('cams-screen-cam-2-1').style.display = "none"
                document.getElementById('cams-screen-cam-2-2').style.display = "none"

                document.getElementById('cams-background').setAttribute('style', '-webkit-mask-image: url(assets/Mask_Cam.png)') 
                document.getElementById('cams-caster-handle-1').style.display = "flex"
                document.getElementById('cams-caster-handle-2-1').style.display = "none"
                document.getElementById('cams-caster-handle-2-2').style.display = "none"
                document.getElementById('cams-cam-1').style.display = "flex"
                document.getElementById('cams-cam-2-1').style.display = "none"
                document.getElementById('cams-cam-2-2').style.display = "none"

            } else {
                document.getElementById('cams-screen-background').setAttribute('style', '-webkit-mask-image: url(assets/Mask_Dual_Cam_Screen.png)')
                document.getElementById('cams-screen-caster-handle-1').style.display = "none"
                document.getElementById('cams-screen-caster-handle-2-1').style.display = "flex"
                document.getElementById('cams-screen-caster-handle-2-2').style.display = "flex"
                document.getElementById('cams-screen-cam-1').style.display = "none"
                document.getElementById('cams-screen-cam-2-1').style.display = "flex"
                document.getElementById('cams-screen-cam-2-2').style.display = "flex"
            
                document.getElementById('cams-background').setAttribute('style', '-webkit-mask-image: url(assets/Mask_Dual_Cam.png)')
                document.getElementById('cams-caster-handle-1').style.display = "none"
                document.getElementById('cams-caster-handle-2-1').style.display = "flex"
                document.getElementById('cams-caster-handle-2-2').style.display = "flex"
                document.getElementById('cams-cam-1').style.display = "none"
                document.getElementById('cams-cam-2-1').style.display = "flex"
                document.getElementById('cams-cam-2-2').style.display = "flex"
            
            }
        }
    }
}

for (const element of document.getElementsByName('casters-selection')) {
    element.addEventListener("change", castersUpdate)
}



// ##############################################################################
// #################### Overlay/Intermission Display Options ####################
// ##############################################################################

function setOverlay() {
    for (option of document.getElementsByName('overlay-selection')) {
        if (Number(option.value) === 0 && option.checked) {
            document.getElementById('bg1').value = '#007477'
            document.getElementById('bg2').value = '#00262a'
            document.getElementById('bg3').value = '#0297b5'
            document.getElementById('bg4').value = '#00f0f8'
            document.getElementById('bga1').value = '#204546'
            document.getElementById('bga2').value = '#257878'
            document.getElementById('frames').value = '#0D9093'
            setGradient()
        }
        
        if (Number(option.value) === 1 && option.checked) {
            document.getElementById('bg1').value = '#fcb401'
            document.getElementById('bg2').value = '#b36200'
            document.getElementById('bg3').value = '#b58200'
            document.getElementById('bg4').value = '#f8cf00'
            document.getElementById('bga1').value = '#eda507'
            document.getElementById('bga2').value = '#fbd992'
            document.getElementById('frames').value = '#e09600'
            setGradient()
        }
    }   
}

document.getElementsByName('overlay-selection').forEach((menu) => {
    menu.addEventListener('change', setOverlay)
})

function customGradient() {
    document.getElementsByName('overlay-selection')[2].checked = true
}

Array.from(document.getElementsByClassName('overlay-color')).forEach((menu) => {
    menu.addEventListener('change', customGradient)
})

function setGradient() {
    document.documentElement.style.setProperty('--bg1', `${document.getElementById('bg1').value}`)
    document.documentElement.style.setProperty('--bg2', `${document.getElementById('bg2').value}`)
    document.documentElement.style.setProperty('--bg3', `${document.getElementById('bg3').value}`)
    document.documentElement.style.setProperty('--bg4', `${document.getElementById('bg4').value}`)
    document.documentElement.style.setProperty('--bga1', `${document.getElementById('bga1').value}`)
    document.documentElement.style.setProperty('--bga2', `${document.getElementById('bga2').value}`)
    document.documentElement.style.setProperty('--frames', `${document.getElementById('frames').value}`)
}


document.getElementById('bg1').addEventListener('change', setGradient)
document.getElementById('bg2').addEventListener('change', setGradient)
document.getElementById('bg3').addEventListener('change', setGradient)
document.getElementById('bg4').addEventListener('change', setGradient)
document.getElementById('bga1').addEventListener('change', setGradient)
document.getElementById('bga2').addEventListener('change', setGradient)
document.getElementById('frames').addEventListener('change', setGradient)

let matchSchedule = [
    // Match 1
    {
        // Team A
        teamASelection: 0,
        teamALogo: "assets/200x200_No_Logo.png",
        teamANoLogo: 1,
        teamATri: "TMA",
        // Team B
        teamBSelection: 0,
        teamBLogo: "assets/200x200_No_Logo.png",
        teamBNoLogo: 1,
        teamBTri: "TMB",
        // Misc
        seriesLengthSelection: 0,
        teamAScore: 0,
        teamBScore: 0,
        matchHeading: "",
    },
    // Match 2
    {
        // Team A
        teamASelection: 0,
        teamALogo: "assets/200x200_No_Logo.png",
        teamANoLogo: 1,
        teamATri: "TMA",
        // Team B
        teamBSelection: 0,
        teamBLogo: "assets/200x200_No_Logo.png",
        teamBNoLogo: 1,
        teamBTri: "TMB",
        // Misc
        seriesLengthSelection: 0,
        teamAScore: 0,
        teamBScore: 0,
        matchHeading: "",
    },
    // Match 3
    {
        // Team A
        teamASelection: 0,
        teamALogo: "assets/200x200_No_Logo.png",
        teamANoLogo: 1,
        teamATri: "TMA",
        // Team B
        teamBSelection: 0,
        teamBLogo: "assets/200x200_No_Logo.png",
        teamBNoLogo: 1,
        teamBTri: "TMB",
        // Misc
        seriesLengthSelection: 0,
        teamAScore: 0,
        teamBScore: 0,
        matchHeading: "",
    },
    // Match 4
    {
        // Team A
        teamASelection: 0,
        teamALogo: "assets/200x200_No_Logo.png",
        teamANoLogo: 1,
        teamATri: "TMA",
        // Team B
        teamBSelection: 0,
        teamBLogo: "assets/200x200_No_Logo.png",
        teamBNoLogo: 1,
        teamBTri: "TMB",
        // Misc
        seriesLengthSelection: 0,
        teamAScore: 0,
        teamBScore: 0,
        matchHeading: "",
    },
    // Match 5
    {
        // Team A
        teamASelection: 0,
        teamALogo: "assets/200x200_No_Logo.png",
        teamANoLogo: 1,
        teamATri: "TMA",
        // Team B
        teamBSelection: 0,
        teamBLogo: "assets/200x200_No_Logo.png",
        teamBNoLogo: 1,
        teamBTri: "TMB",
        // Misc
        seriesLengthSelection: 0,
        teamAScore: 0,
        teamBScore: 0,
        matchHeading: "",
    },
    // Match 6
    {
        // Team A
        teamASelection: 0,
        teamALogo: "assets/200x200_No_Logo.png",
        teamANoLogo: 1,
        teamATri: "TMA",
        // Team B
        teamBSelection: 0,
        teamBLogo: "assets/200x200_No_Logo.png",
        teamBNoLogo: 1,
        teamBTri: "TMB",
        // Misc
        seriesLengthSelection: 0,
        teamAScore: 0,
        teamBScore: 0,
        matchHeading: "",
    },
]

function setMatchScheduleData(matchNumber) {
    for (option of document.getElementsByName(`match-${matchNumber+1}-team-a-selection`)) {
        if (option.checked) {
            matchSchedule[matchNumber].teamASelection = Number(option.value)
        }
    }
    for (option of document.getElementsByName(`match-${matchNumber+1}-team-b-selection`)) {
        if (option.checked) {
            matchSchedule[matchNumber].teamBSelection = Number(option.value)
        }
    }
    if (document.getElementById(`match-${matchNumber+1}-team-a-no-logo`).checked) {
        matchSchedule[matchNumber].teamANoLogo = 1
        matchSchedule[matchNumber].teamALogo = "assets/200x200_No_Logo.png"
        for (instance of document.getElementsByClassName(`apply-match-${matchNumber+1}-team-a-logo`)) {
            instance.src = matchSchedule[matchNumber].teamALogo
        }
    } else {
        matchSchedule[matchNumber].teamANoLogo = 0
    }
    if (document.getElementById(`match-${matchNumber+1}-team-b-no-logo`).checked) {
        matchSchedule[matchNumber].teamBNoLogo = 1
        matchSchedule[matchNumber].teamBLogo = "assets/200x200_No_Logo.png"
        for (instance of document.getElementsByClassName(`apply-match-${matchNumber+1}-team-b-logo`)) {
            instance.src = matchSchedule[matchNumber].teamBLogo
        }
    } else {
        matchSchedule[matchNumber].teamBNoLogo = 0
    }
    document.getElementById(`match-${matchNumber+1}-team-a-tri`).value = document.getElementById(`match-${matchNumber+1}-team-a-tri`).value.toUpperCase()
    document.getElementById(`match-${matchNumber+1}-team-b-tri`).value = document.getElementById(`match-${matchNumber+1}-team-b-tri`).value.toUpperCase()
    matchSchedule[matchNumber].teamATri = document.getElementById(`match-${matchNumber+1}-team-a-tri`).value    
    matchSchedule[matchNumber].teamBTri = document.getElementById(`match-${matchNumber+1}-team-b-tri`).value    
    for (instance of document.getElementsByClassName(`apply-match-${matchNumber+1}-team-a-tri`)) {
        instance.textContent = matchSchedule[matchNumber].teamATri
    }
    for (instance of document.getElementsByClassName(`apply-match-${matchNumber+1}-team-b-tri`)) {
        instance.textContent = matchSchedule[matchNumber].teamBTri
    }
    for (option of document.getElementsByName(`match-${matchNumber+1}-series-length-selection`)) {
        if (option.checked) {
            matchSchedule[matchNumber].seriesLengthSelection = Number(option.value)
        }
    }
    matchSchedule[matchNumber].teamAScore = Number(document.getElementById(`match-${matchNumber+1}-team-a-score`).value)
    matchSchedule[matchNumber].teamBScore = Number(document.getElementById(`match-${matchNumber+1}-team-b-score`).value)
    matchSchedule[matchNumber].matchHeading = document.getElementById(`match-${matchNumber+1}-heading`).value
}

for (menu of document.getElementsByClassName('match-1-menu')) {
    menu.addEventListener('change', () => {setMatchScheduleData(0); setMatchSchedule()})
}
for (menu of document.getElementsByClassName('match-2-menu')) {
    menu.addEventListener('change', () => {setMatchScheduleData(1); setMatchSchedule()})
}
for (menu of document.getElementsByClassName('match-3-menu')) {
    menu.addEventListener('change', () => {setMatchScheduleData(2); setMatchSchedule()})
}
for (menu of document.getElementsByClassName('match-4-menu')) {
    menu.addEventListener('change', () => {setMatchScheduleData(3); setMatchSchedule()})
}
for (menu of document.getElementsByClassName('match-5-menu')) {
    menu.addEventListener('change', () => {setMatchScheduleData(4); setMatchSchedule()})
}
for (menu of document.getElementsByClassName('match-6-menu')) {
    menu.addEventListener('change', () => {setMatchScheduleData(5); setMatchSchedule()})
}

function uploadMatchTeamALogo(matchNumber) {
    document.getElementById(`match-${matchNumber+1}-team-a-no-logo`).checked = false
    matchSchedule[matchNumber].teamALogo = prompt(`Please provide an img link for ${document.getElementById(`match-${matchNumber+1}-team-a-tri`).value}'s logo. We recommend uploading the logo to Discord and copying the image link`)
    if (matchSchedule[matchNumber].teamALogo !== '' && matchSchedule[matchNumber].teamALogo !== null) {
        for (instance of document.getElementsByClassName(`apply-match-${matchNumber+1}-team-a-logo`)) {
            instance.src = matchSchedule[matchNumber].teamALogo
        }
        setMatchScheduleData(matchNumber)
    } else {
        document.getElementById(`match-${matchNumber+1}-team-a-no-logo`).checked = true
        setMatchScheduleData(matchNumber)
    }
}

function uploadMatchTeamBLogo(matchNumber) {
    document.getElementById(`match-${matchNumber+1}-team-b-no-logo`).checked = false
    matchSchedule[matchNumber].teamBLogo = prompt(`Please provide an img link for ${document.getElementById(`match-${matchNumber+1}-team-b-tri`).value}'s logo. We recommend uploading the logo to Discord and copying the image link`)
    if (matchSchedule[matchNumber].teamBLogo !== '' && matchSchedule[matchNumber].teamBLogo !== null) {
        for (instance of document.getElementsByClassName(`apply-match-${matchNumber+1}-team-b-logo`)) {
            instance.src = matchSchedule[matchNumber].teamBLogo
        }
        setMatchScheduleData(matchNumber)
    } else {
        document.getElementById(`match-${matchNumber+1}-team-b-no-logo`).checked = true
        setMatchScheduleData(matchNumber)
    }
}

document.getElementById('match-1-team-a-logo-upload').addEventListener('click', () => {uploadMatchTeamALogo(0); setMatchSchedule()})
document.getElementById('match-1-team-b-logo-upload').addEventListener('click', () => {uploadMatchTeamBLogo(0); setMatchSchedule()})
document.getElementById('match-2-team-a-logo-upload').addEventListener('click', () => {uploadMatchTeamALogo(1); setMatchSchedule()})
document.getElementById('match-2-team-b-logo-upload').addEventListener('click', () => {uploadMatchTeamBLogo(1); setMatchSchedule()})
document.getElementById('match-3-team-a-logo-upload').addEventListener('click', () => {uploadMatchTeamALogo(2); setMatchSchedule()})
document.getElementById('match-3-team-b-logo-upload').addEventListener('click', () => {uploadMatchTeamBLogo(2); setMatchSchedule()})
document.getElementById('match-4-team-a-logo-upload').addEventListener('click', () => {uploadMatchTeamALogo(3); setMatchSchedule()})
document.getElementById('match-4-team-b-logo-upload').addEventListener('click', () => {uploadMatchTeamBLogo(3); setMatchSchedule()})
document.getElementById('match-5-team-a-logo-upload').addEventListener('click', () => {uploadMatchTeamALogo(4); setMatchSchedule()})
document.getElementById('match-5-team-b-logo-upload').addEventListener('click', () => {uploadMatchTeamBLogo(4); setMatchSchedule()})
document.getElementById('match-6-team-a-logo-upload').addEventListener('click', () => {uploadMatchTeamALogo(5); setMatchSchedule()})
document.getElementById('match-6-team-b-logo-upload').addEventListener('click', () => {uploadMatchTeamBLogo(5); setMatchSchedule()})



function setMatchSchedule() {
    document.documentElement.style.setProperty('--numberOfMatches', Number(document.getElementById('number-of-matches').value))
    document.documentElement.style.setProperty('--sbg1', `${document.getElementById('sbg1').value}`)
    document.documentElement.style.setProperty('--sbg2', `${document.getElementById('sbg2').value}`)

    function setMatchScheduleContent(matchNumber) {
        let matchLength = ''
        if (matchSchedule[matchNumber].seriesLengthSelection === 0) {
            matchLength = 'BO1'
        } else if (matchSchedule[matchNumber].seriesLengthSelection === 1) {
            matchLength = 'BO3'
        } else if (matchSchedule[matchNumber].seriesLengthSelection === 2) {
            matchLength = 'BO5'
        }

        document.getElementById(`match-${matchNumber+1}-schedule-heading-top`).textContent = `Match ${matchNumber+1} - ${matchLength}`
        document.getElementById(`match-${matchNumber+1}-schedule-heading-bottom`).textContent = `${matchSchedule[matchNumber].matchHeading}`

        if (matchSchedule[matchNumber].teamAScore === 0 && matchSchedule[matchNumber].teamBScore === 0) {
            document.getElementById(`match-${matchNumber+1}-schedule-score-vs`).textContent = 'VS'
            document.getElementById(`match-${matchNumber+1}-schedule-score-vs`).style.width = '150px'
        } else if (matchSchedule[matchNumber].teamAScore !== 0 || matchSchedule[matchNumber].teamBScore !== 0) {
            document.getElementById(`match-${matchNumber+1}-schedule-score-vs`).textContent = `${matchSchedule[matchNumber].teamAScore} - ${matchSchedule[matchNumber].teamBScore}`
            document.getElementById(`match-${matchNumber+1}-schedule-score-vs`).style.width = 'fit-content'
        }
        
        if (matchSchedule[matchNumber].teamASelection === 0) {
            document.getElementById(`match-${matchNumber+1}-schedule-team-a-tbd`).style.display = 'flex'
            document.getElementById(`match-${matchNumber+1}-schedule-team-a`).style.display = 'none'
        } else {
            document.getElementById(`match-${matchNumber+1}-schedule-team-a-tbd`).style.display = 'none'
            document.getElementById(`match-${matchNumber+1}-schedule-team-a`).style.display = 'flex'
        }
        if (matchSchedule[matchNumber].teamBSelection === 0) {
            document.getElementById(`match-${matchNumber+1}-schedule-team-b-tbd`).style.display = 'flex'
            document.getElementById(`match-${matchNumber+1}-schedule-team-b`).style.display = 'none'
        } else {
            document.getElementById(`match-${matchNumber+1}-schedule-team-b-tbd`).style.display = 'none'
            document.getElementById(`match-${matchNumber+1}-schedule-team-b`).style.display = 'flex'
        }
    }

    setMatchScheduleContent(0)
    setMatchScheduleContent(1)
    setMatchScheduleContent(2)
    setMatchScheduleContent(3)
    setMatchScheduleContent(4)
    setMatchScheduleContent(5)

    if (Number(document.getElementById('number-of-matches').value) === 1) {
        document.documentElement.style.setProperty('--logoMaxSize', '130px')
        document.documentElement.style.setProperty('--matchScheduleDisplay', 'block')
        document.documentElement.style.setProperty('--matchScheduleTeamsFontSize', '30pt')
        document.documentElement.style.setProperty('--matchScheduleInfoFontSize', '17pt')
        document.documentElement.style.setProperty('--matchScheduleScoresFontSize', '50pt')
        document.documentElement.style.setProperty('--matchScheduleHeadingMarginTop', '270px')
        document.documentElement.style.setProperty('--matchScheduleHeadingMarginBottom', '272px')

        document.getElementById('match-2-schedule-content').style.display = 'none'
        document.getElementById('match-3-schedule-content').style.display = 'none'
        document.getElementById('match-4-schedule-content').style.display = 'none'
        document.getElementById('match-5-schedule-content').style.display = 'none'
        document.getElementById('match-6-schedule-content').style.display = 'none'
    } else if (Number(document.getElementById('number-of-matches').value) === 2) {
        document.documentElement.style.setProperty('--logoMaxSize', '130px')
        document.documentElement.style.setProperty('--matchScheduleDisplay', 'block')
        document.documentElement.style.setProperty('--matchScheduleTeamsFontSize', '30pt')
        document.documentElement.style.setProperty('--matchScheduleInfoFontSize', '17pt')
        document.documentElement.style.setProperty('--matchScheduleScoresFontSize', '50pt')
        document.documentElement.style.setProperty('--matchScheduleHeadingMarginTop', '105px')
        document.documentElement.style.setProperty('--matchScheduleHeadingMarginBottom', '110px')

        document.getElementById('match-2-schedule-content').style.display = 'grid'
        document.getElementById('match-3-schedule-content').style.display = 'none'
        document.getElementById('match-4-schedule-content').style.display = 'none'
        document.getElementById('match-5-schedule-content').style.display = 'none'
        document.getElementById('match-6-schedule-content').style.display = 'none'
    } else if (Number(document.getElementById('number-of-matches').value) === 3) {
        document.documentElement.style.setProperty('--logoMaxSize', '120px')
        document.documentElement.style.setProperty('--matchScheduleDisplay', 'block')
        document.documentElement.style.setProperty('--matchScheduleTeamsFontSize', '24pt')
        document.documentElement.style.setProperty('--matchScheduleInfoFontSize', '13pt')
        document.documentElement.style.setProperty('--matchScheduleScoresFontSize', '50pt')
        document.documentElement.style.setProperty('--matchScheduleHeadingMarginTop', '57px')
        document.documentElement.style.setProperty('--matchScheduleHeadingMarginBottom', '59px')

        document.getElementById('match-2-schedule-content').style.display = 'grid'
        document.getElementById('match-3-schedule-content').style.display = 'grid'
        document.getElementById('match-4-schedule-content').style.display = 'none'
        document.getElementById('match-5-schedule-content').style.display = 'none'
        document.getElementById('match-6-schedule-content').style.display = 'none'
    } else if (Number(document.getElementById('number-of-matches').value) === 4) {
        document.documentElement.style.setProperty('--logoMaxSize', '100px')
        document.documentElement.style.setProperty('--matchScheduleDisplay', 'block')
        document.documentElement.style.setProperty('--matchScheduleTeamsFontSize', '20pt')
        document.documentElement.style.setProperty('--matchScheduleInfoFontSize', '13pt')
        document.documentElement.style.setProperty('--matchScheduleScoresFontSize', '50pt')
        document.documentElement.style.setProperty('--matchScheduleHeadingMarginTop', '33px')
        document.documentElement.style.setProperty('--matchScheduleHeadingMarginBottom', '36px')

        document.getElementById('match-2-schedule-content').style.display = 'grid'
        document.getElementById('match-3-schedule-content').style.display = 'grid'
        document.getElementById('match-4-schedule-content').style.display = 'grid'
        document.getElementById('match-5-schedule-content').style.display = 'none'
        document.getElementById('match-6-schedule-content').style.display = 'none'
    } else if (Number(document.getElementById('number-of-matches').value) === 5) {
        document.documentElement.style.setProperty('--logoMaxSize', '100px')
        document.documentElement.style.setProperty('--matchScheduleDisplay', 'none')
        document.documentElement.style.setProperty('--matchScheduleTeamsFontSize', '20pt')
        document.documentElement.style.setProperty('--matchScheduleInfoFontSize', '10pt')
        document.documentElement.style.setProperty('--matchScheduleScoresFontSize', '30pt')
        document.documentElement.style.setProperty('--matchScheduleHeadingMarginTop', '26px')
        document.documentElement.style.setProperty('--matchScheduleHeadingMarginBottom', '30px')

        document.getElementById('match-2-schedule-content').style.display = 'grid'
        document.getElementById('match-3-schedule-content').style.display = 'grid'
        document.getElementById('match-4-schedule-content').style.display = 'grid'
        document.getElementById('match-5-schedule-content').style.display = 'grid'
        document.getElementById('match-6-schedule-content').style.display = 'none'
    } else if (Number(document.getElementById('number-of-matches').value) === 6) {
        document.documentElement.style.setProperty('--logoMaxSize', '80px')
        document.documentElement.style.setProperty('--matchScheduleDisplay', 'none')
        document.documentElement.style.setProperty('--matchScheduleTeamsFontSize', '20pt')
        document.documentElement.style.setProperty('--matchScheduleInfoFontSize', '10pt')
        document.documentElement.style.setProperty('--matchScheduleScoresFontSize', '30pt')
        document.documentElement.style.setProperty('--matchScheduleHeadingMarginTop', '16px')
        document.documentElement.style.setProperty('--matchScheduleHeadingMarginBottom', '20px')

        document.getElementById('match-2-schedule-content').style.display = 'grid'
        document.getElementById('match-3-schedule-content').style.display = 'grid'
        document.getElementById('match-4-schedule-content').style.display = 'grid'
        document.getElementById('match-5-schedule-content').style.display = 'grid'
        document.getElementById('match-6-schedule-content').style.display = 'grid'
    }
}

document.getElementById('number-of-matches').addEventListener('change', setMatchSchedule)
document.getElementById('sbg1').addEventListener('change', setMatchSchedule)
document.getElementById('sbg2').addEventListener('change', setMatchSchedule)

function bottomBarUpdate() {
    const bottomBarSelection = document.getElementById('bottom-bar-selection')
    const chatCommandsSelection = document.getElementById('chat-commands-selection')
    const bottomBarTextSizeSelection = document.getElementById('bottom-bar-text-size-selection')
    const bottomBarPreview = document.getElementById('bottom-bar-preview')
    const chatCommandsAll = document.getElementsByClassName('chat-commands')
    const bottomBarAll = document.getElementsByClassName('bottom-bar')
    if (bottomBarSelection.checked === false) {
        bottomBarPreview.style.display = 'none'
        document.getElementById('bottom-bar-preview-heading').textContent = 'Bottom Bar is currently hidden'
        for (const instance of bottomBarAll) {
            instance.style.display = 'none'
        }
    } else {
        bottomBarPreview.style.display = 'grid'
        document.getElementById('bottom-bar-preview-heading').textContent = '▼ Bottom Bar Preview ▼'
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
        bottomBarPreview.style.fontSize = '25pt'
        for (const instance of bottomBarAll) {
            instance.style.fontSize = '25pt'
        }
    } else {
        bottomBarPreview.style.fontSize = '20pt'
        for (const instance of bottomBarAll) {
            instance.style.fontSize = '20pt'
        }
    }
}

document.getElementById('bottom-bar-selection').addEventListener('change', bottomBarUpdate)
document.getElementById('chat-commands-selection').addEventListener('change', bottomBarUpdate)
document.getElementById('bottom-bar-text-size-selection').addEventListener('change', bottomBarUpdate)



// #########################################################
// #################### Saving Settings ####################
// #########################################################
const currentSettings = {
    accountUser: null,
    menuSelection: 1,
    // Teams Config
    teamAName: "Team A",
    teamATri: "TMA",
    teamARegionSeed: "OCE #1",
    teamALogo: "assets/200x200_No_Logo.png",
    teamANoLogo: 1,
    teamAPlayers: [
        {
            riotID: "Player1A",
            riotIDTag: "#001A",
            preferredName: "",
            OBSNumber: "",
        },
        {
            riotID: "Player2A",
            riotIDTag: "#002A",
            preferredName: "",
            OBSNumber: "",
        },
        {
            riotID: "Player3A",
            riotIDTag: "#003A",
            preferredName: "",
            OBSNumber: "",
        },
        {
            riotID: "Player4A",
            riotIDTag: "#004A",
            preferredName: "",
            OBSNumber: "",
        },
        {
            riotID: "Player5A",
            riotIDTag: "#005A",
            preferredName: "",
            OBSNumber: "",
        },
    ],
    teamBName: "Team B",
    teamBTri: "TMB",
    teamBRegionSeed: "NA #5",
    teamBLogo: "assets/200x200_No_Logo.png",
    teamBNoLogo: 1,
    teamBPlayers: [
        {
            riotID: "Player1B",
            riotIDTag: "#001B",
            preferredName: "",
            OBSNumber: "",
        },
        {
            riotID: "Player2B",
            riotIDTag: "#002B",
            preferredName: "",
            OBSNumber: "",
        },
        {
            riotID: "Player3B",
            riotIDTag: "#003B",
            preferredName: "",
            OBSNumber: "",
        },
        {
            riotID: "Player4B",
            riotIDTag: "#004B",
            preferredName: "",
            OBSNumber: "",
        },
        {
            riotID: "Player5B",
            riotIDTag: "#005B",
            preferredName: "",
            OBSNumber: "",
        },
    ],
    // Map Veto Config
    seriesLengthSelection: 1,
    mapPoolSelection: 0,
    teamIdentifierSelection: 0,
    mapBans: ['Abyss', 'Ascent', 'Icebox', 'Lotus'],
    mapPicks: ['Bind', 'Haven', 'Sunset'],
    mapBansTeams: ['team-a', 'team-b', 'team-a', 'team-b'],
    mapPicksTeams: ['team-a', 'team-b'],
    mapPicksSides: ['team-a', 'team-a', 'team-a'],
    // Live Game
    mapScores: [0, 0, 0, 0, 0, 0],
    mapWinners: [],
    teamASeriesScore: 0,
    teamBSeriesScore: 0,
    mapNumber: 0,
    currentMap: "Bind",
    intermissionState: 0,
    deadline: null,
    // Event/Casters Config
    eventName: "Event Name",
    eventLogo: "",
    eventNoLogo: 0,
    castersSelection: 0,
    caster1Name: "",
    caster2Name: "",
    // Overlay Config
    overlaySelection: 0,
    bg1: "#007477",
    bg2: "#00262a",
    bg3: "#0297b5",
    bg4: "#00f0f8",
    bga1: "#204546",
    bga2: "#257878",
    frames: "#0D9093",
    bottomBarSelection: 1,
    chatCommandsSelection: 1,
    bottomBarTextSizeSelection: 1,
    // Intermission Config
    scheduleSelection: 0,
    numberOfMatches: 1,
    sbg1: "#1a1a1a",
    sbg2: "#3a3a3a",
    matchEnd: "Ending Soon",
    matchSchedule: [
        // Match 1
        {
            // Team A
            teamASelection: 0,
            teamALogo: "assets/200x200_No_Logo.png",
            teamANoLogo: 1,
            teamATri: "TMA",
            // Team B
            teamBSelection: 0,
            teamBLogo: "assets/200x200_No_Logo.png",
            teamBNoLogo: 1,
            teamBTri: "TMB",
            // Misc
            seriesLengthSelection: 0,
            teamAScore: 0,
            teamBScore: 0,
            matchHeading: "",
        },
        // Match 2
        {
            // Team A
            teamASelection: 0,
            teamALogo: "assets/200x200_No_Logo.png",
            teamANoLogo: 1,
            teamATri: "TMA",
            // Team B
            teamBSelection: 0,
            teamBLogo: "assets/200x200_No_Logo.png",
            teamBNoLogo: 1,
            teamBTri: "TMB",
            // Misc
            seriesLengthSelection: 0,
            teamAScore: 0,
            teamBScore: 0,
            matchHeading: "",
        },
        // Match 3
        {
            // Team A
            teamASelection: 0,
            teamALogo: "assets/200x200_No_Logo.png",
            teamANoLogo: 1,
            teamATri: "TMA",
            // Team B
            teamBSelection: 0,
            teamBLogo: "assets/200x200_No_Logo.png",
            teamBNoLogo: 1,
            teamBTri: "TMB",
            // Misc
            seriesLengthSelection: 0,
            teamAScore: 0,
            teamBScore: 0,
            matchHeading: "",
        },
        // Match 4
        {
            // Team A
            teamASelection: 0,
            teamALogo: "assets/200x200_No_Logo.png",
            teamANoLogo: 1,
            teamATri: "TMA",
            // Team B
            teamBSelection: 0,
            teamBLogo: "assets/200x200_No_Logo.png",
            teamBNoLogo: 1,
            teamBTri: "TMB",
            // Misc
            seriesLengthSelection: 0,
            teamAScore: 0,
            teamBScore: 0,
            matchHeading: "",
        },
        // Match 5
        {
            // Team A
            teamASelection: 0,
            teamALogo: "assets/200x200_No_Logo.png",
            teamANoLogo: 1,
            teamATri: "TMA",
            // Team B
            teamBSelection: 0,
            teamBLogo: "assets/200x200_No_Logo.png",
            teamBNoLogo: 1,
            teamBTri: "TMB",
            // Misc
            seriesLengthSelection: 0,
            teamAScore: 0,
            teamBScore: 0,
            matchHeading: "",
        },
        // Match 6
        {
            // Team A
            teamASelection: 0,
            teamALogo: "assets/200x200_No_Logo.png",
            teamANoLogo: 1,
            teamATri: "TMA",
            // Team B
            teamBSelection: 0,
            teamBLogo: "assets/200x200_No_Logo.png",
            teamBNoLogo: 1,
            teamBTri: "TMB",
            // Misc
            seriesLengthSelection: 0,
            teamAScore: 0,
            teamBScore: 0,
            matchHeading: "",
        },
    ],
}

function settingsSend() {
    liveGameSend()
    teamsConfigSend()
    mapVetoSend()
    eventCastersSend()
    overlaySend()
    intermissionSend()
    api.writeOverlaySetup(currentSettings)
}

function liveGameSend() {
    currentSettings.mapScores = mapScores
    currentSettings.mapWinners = mapWinners
    currentSettings.teamASeriesScore = teamASeriesScore
    currentSettings.teamBSeriesScore = teamBSeriesScore
    currentSettings.mapNumber = mapNumber
    currentSettings.currentMap = currentMap
    currentSettings.intermissionState = intermissionState
    currentSettings.deadline = deadline
    console.log(currentSettings)
}

for (element of document.querySelectorAll('#intermission-default, #intermission-tech, #intermission-3, #intermission-5, #intermission-10, #reset-scores')) {
    element.addEventListener('click', settingsSend)
}

function teamsConfigSend() {
    currentSettings.teamAName = teamAName.value
    currentSettings.teamATri = teamATri.value
    currentSettings.teamARegionSeed = document.getElementById('team-a-region-seed').value
    currentSettings.teamALogo = teamALogo
    if (document.getElementById('team-a-no-logo').checked) {
        currentSettings.teamANoLogo = 1
    } else {
        currentSettings.teamANoLogo = 0
    }
    function setTeamAPlayer(playerNumber) {
        currentSettings.teamAPlayers[playerNumber-1].riotID = document.getElementById(`team-a-player-${playerNumber}-riot-id`).value
        currentSettings.teamAPlayers[playerNumber-1].riotIDTag = document.getElementById(`team-a-player-${playerNumber}-riot-id-tag`).value
        currentSettings.teamAPlayers[playerNumber-1].preferredName = document.getElementById(`team-a-player-${playerNumber}-preferred-name`).value
        currentSettings.teamAPlayers[playerNumber-1].OBSNumber = document.getElementById(`team-a-player-${playerNumber}-obs-position`).value
    }
    setTeamAPlayer(1)
    setTeamAPlayer(2)
    setTeamAPlayer(3)
    setTeamAPlayer(4)
    setTeamAPlayer(5)
    currentSettings.teamBName = teamBName.value
    currentSettings.teamBTri = teamBTri.value
    currentSettings.teamBLogo = teamBLogo
    if (document.getElementById('team-b-no-logo').checked) {
        currentSettings.teamBNoLogo = 1
    } else {
        currentSettings.teamBNoLogo = 0
    }
    currentSettings.teamBRegionSeed = document.getElementById('team-b-region-seed').value
    function setTeamBPlayer(playerNumber) {
        currentSettings.teamBPlayers[playerNumber-1].riotID = document.getElementById(`team-b-player-${playerNumber}-riot-id`).value
        currentSettings.teamBPlayers[playerNumber-1].riotIDTag = document.getElementById(`team-b-player-${playerNumber}-riot-id-tag`).value
        currentSettings.teamBPlayers[playerNumber-1].preferredName = document.getElementById(`team-b-player-${playerNumber}-preferred-name`).value
        currentSettings.teamBPlayers[playerNumber-1].OBSNumber = document.getElementById(`team-b-player-${playerNumber}-obs-position`).value
    }
    setTeamBPlayer(1)
    setTeamBPlayer(2)
    setTeamBPlayer(3)
    setTeamBPlayer(4)
    setTeamBPlayer(5)
}

function mapVetoSend() {
    for (option of document.getElementsByName('series-length-selection')) {
        if (option.checked) {
            currentSettings.seriesLengthSelection = Number(option.value)
        }
    }
    for (option of document.getElementsByName('map-pool-selection')) {
        if (option.checked) {
            currentSettings.mapPoolSelection = Number(option.value)
        }
    }
    for (option of document.getElementsByName('team-identifier-selection')) {
        if (option.checked) {
            currentSettings.teamIdentifierSelection = Number(option.value)
        }
    }
    currentSettings.mapBans = mapBans
    currentSettings.mapPicks = mapPicks
    currentSettings.mapBansTeams = mapBansTeams
    currentSettings.mapPicksTeams = mapPicksTeams
    currentSettings.mapPicksSides = mapPicksSides

}

function eventCastersSend() {
    currentSettings.eventName = eventName.value
    currentSettings.eventLogo = eventLogo
    if (document.getElementById('event-no-logo').checked) {
        currentSettings.eventNoLogo = 1
    } else {
        currentSettings.eventNoLogo = 0
    }
    for (option of document.getElementsByName('casters-selection')) {
        if (option.checked) {
            currentSettings.castersSelection = Number(option.value)
        }
    }
    currentSettings.caster1Name = caster1Name.value
    currentSettings.caster2Name = caster2Name.value
}

function overlaySend() {
    for (option of document.getElementsByName('overlay-selection')) {
        if (option.checked) {
            currentSettings.overlaySelection = Number(option.value)
        }
    }
    currentSettings.bg1 = document.getElementById('bg1').value
    currentSettings.bg2 = document.getElementById('bg2').value
    currentSettings.bg3 = document.getElementById('bg3').value
    currentSettings.bg4 = document.getElementById('bg4').value
    currentSettings.bga1 = document.getElementById('bga1').value
    currentSettings.bga2 = document.getElementById('bga2').value
    currentSettings.frames = document.getElementById('frames').value
    if (document.getElementById('bottom-bar-selection').checked) {
        currentSettings.bottomBarSelection = 1
    } else {
        currentSettings.bottomBarSelection = 0
    }
    if (document.getElementById('chat-commands-selection').checked) {
        currentSettings.chatCommandsSelection = 1
    } else {
        currentSettings.chatCommandsSelection = 0
    }
    if (document.getElementById('bottom-bar-text-size-selection').checked) {
        currentSettings.bottomBarTextSizeSelection = 1
    } else {
        currentSettings.bottomBarTextSizeSelection = 0
    }

    if (document.getElementById('sponsor-logo').value !== "") {
      currentSettings.sponsorLogo = document.getElementById('sponsor-logo').value
    }
}

for (element of document.getElementsByClassName('save-button')) {
    element.addEventListener('click', settingsSend)
}

function intermissionSend() {
    setMatchScheduleData(0)
    setMatchScheduleData(1)
    setMatchScheduleData(2)
    setMatchScheduleData(3)
    setMatchScheduleData(4)
    setMatchScheduleData(5)
    for (option of document.getElementsByName('schedule-selection')) {
        if (option.checked) {
            currentSettings.scheduleSelection = Number(option.value)
        }
    }
    currentSettings.numberOfMatches = Number(document.getElementById('number-of-matches').value)
    currentSettings.sbg1 = document.getElementById('sbg1').value
    currentSettings.sbg2 = document.getElementById('sbg2').value
    currentSettings.matchEnd = document.getElementById('match-end-replace').value
    currentSettings.matchSchedule = matchSchedule
}


function onPageLoad() {
    if (!auth.qmValidTokenInStorage()) {
        console.log('Not logged in')
        document.getElementById('account-menu').checked = true
        document.getElementById('live-game-menu').disabled = true
        document.getElementById('teams-menu').disabled = true
        document.getElementById('map-veto-menu').disabled = true
        document.getElementById('event-casters-menu').disabled = true
        document.getElementById('overlay-menu').disabled = true
        document.getElementById('intermission-menu').disabled = true
        document.getElementById('modules-menu').disabled = true
        document.getElementById('sign-in-button-contents').children[0].innerHTML = 'Sign In/Create Account' + '<br>' + 'This is required for the console to link to the overlay modules'
        document.getElementById('sign-in-button').addEventListener('click', auth.login)
    } else {
        const tokens = auth.qmGetTokensFromStorage();
        const access_token = tokens.access_token;
        const accessTokenContent = auth.parseJWTPayload(access_token);
        var userName = accessTokenContent.username;
        currentSettings.accountUser = userName
        api.setAccessToken(access_token);

        document.getElementById('sign-in-button-contents').children[0].innerHTML = `Log out` + '<br>' + `Currently signed in to ${userName}`
        document.getElementById('sign-in-button').addEventListener('click', auth.logout)
        getOverlaySetup()
    }
}

async function getOverlaySetup() {
    let setupData
    setupData = await api.readOverlaySetup()
    if (!setupData.overlaySetup) {
        api.writeOverlaySetup(defaultSettings)
        setupData = await api.readOverlaySetup()
    }
    restoreFromSettings(setupData.overlaySetup)
    document.getElementById('gradient-background-link').href = `https://val-community-caster-overlay.pages.dev/overlay-background?token=${setupData.token}`                            
    document.getElementById('in-game-overlay-link').href = `https://val-community-caster-overlay.pages.dev/overlay-in-game?token=${setupData.token}`                            
    document.getElementById('map-veto-overlay-link').href =`https://val-community-caster-overlay.pages.dev/overlay-map-veto?token=${setupData.token}`
    document.getElementById('intermission-overlay-link').href = `https://val-community-caster-overlay.pages.dev/overlay-intermission?token=${setupData.token}`
    document.getElementById('cams-overlay-link').href = `https://val-community-caster-overlay.pages.dev/overlay-cams?token=${setupData.token}`
    document.getElementById('cams-screen-overlay-link').href = `https://val-community-caster-overlay.pages.dev/overlay-cams-screen?token=${setupData.token}`
    document.getElementById('in-game-overlay-advanced-link').href = `https://val-community-caster-overlay.pages.dev/overlay-in-game-advanced?token=${setupData.token}`                            
    console.log(setupData.token)
}

document.getElementById('reset-team-config').addEventListener('click', () => {restoreTeams(defaultSettings)})
document.getElementById('reset-map-veto').addEventListener('click', () => {restoreMapVeto(defaultSettings)})
document.getElementById('reset-event-casters-config').addEventListener('click', () => {restoreEventCasters(defaultSettings)})
document.getElementById('reset-overlay-config').addEventListener('click', () => {restoreOverlay(defaultSettings)})
document.getElementById('reset-intermission-config').addEventListener('click', () => {restoreIntermission(defaultSettings)})
document.getElementById('reset-console').addEventListener('click', () => {restoreFromSettings(defaultSettings)})
restoreFromSettings(defaultSettings)


// Exsto Athena Series Temp

const exstoSetup = '{"sponsorLogo":"https://files.catbox.moe/z02g2z.png","accountUser":"testaccount","menuSelection":1,"teamAName":"Exsto Gaming GC","teamATri":"EXG","teamARegionSeed":"","teamALogo":"https://files.catbox.moe/tcjrzh.png","teamANoLogo":0,"teamAPlayers":[{"riotID":"","riotIDTag":"","preferredName":"","OBSNumber":""},{"riotID":"","riotIDTag":"","preferredName":"","OBSNumber":""},{"riotID":"","riotIDTag":"","preferredName":"","OBSNumber":""},{"riotID":"","riotIDTag":"","preferredName":"","OBSNumber":""},{"riotID":"","riotIDTag":"","preferredName":"","OBSNumber":""}],"teamBName":"Noob Esports","teamBTri":"NOOB","teamBRegionSeed":"","teamBLogo":"https://files.catbox.moe/l48wnl.png","teamBNoLogo":0,"teamBPlayers":[{"riotID":"","riotIDTag":"","preferredName":"","OBSNumber":""},{"riotID":"","riotIDTag":"","preferredName":"","OBSNumber":""},{"riotID":"","riotIDTag":"","preferredName":"","OBSNumber":""},{"riotID":"","riotIDTag":"","preferredName":"","OBSNumber":""},{"riotID":"","riotIDTag":"","preferredName":"","OBSNumber":""}],"seriesLengthSelection":1,"mapPoolSelection":0,"teamIdentifierSelection":0,"mapBans":["Haven","Pearl","Split","Icebox"],"mapPicks":["Ascent","Lotus","Fracture"],"mapBansTeams":["team-a","team-b","team-a","team-b"],"mapPicksTeams":["team-a","team-b"],"mapPicksSides":["team-a","team-a","team-a"],"mapScores":[13,11,11,13,0,0],"mapWinners":["team-a","team-b"],"teamASeriesScore":1,"teamBSeriesScore":1,"mapNumber":2,"currentMap":"Fracture","intermissionState":0,"deadline":null,"eventName":"Exsto Athena Series","eventLogo":"https://files.catbox.moe/wrvev8.png","eventNoLogo":0,"castersSelection":1,"caster1Name":"Atlas","caster2Name":"CthulhuANZ","overlaySelection":2,"bg1":"#170202","bg2":"#4b1111","bg3":"#231515","bg4":"#462b35","bga1":"#a80000","bga2":"#cc0029","frames":"#e2032c","bottomBarSelection":1,"chatCommandsSelection":1,"bottomBarTextSizeSelection":1,"scheduleSelection":0,"numberOfMatches":4,"sbg1":"#1a1a1a","sbg2":"#3a3a3a","matchEnd":"Ending Soon","matchSchedule":[{"teamASelection":1,"teamALogo":"assets/200x200_No_Logo.png","teamANoLogo":1,"teamATri":"TMA","teamBSelection":1,"teamBLogo":"assets/200x200_No_Logo.png","teamBNoLogo":1,"teamBTri":"TMB","seriesLengthSelection":0,"teamAScore":0,"teamBScore":0,"matchHeading":""},{"teamASelection":0,"teamALogo":"assets/200x200_No_Logo.png","teamANoLogo":1,"teamATri":"TMA","teamBSelection":0,"teamBLogo":"assets/200x200_No_Logo.png","teamBNoLogo":1,"teamBTri":"TMB","seriesLengthSelection":0,"teamAScore":0,"teamBScore":0,"matchHeading":""},{"teamASelection":0,"teamALogo":"assets/200x200_No_Logo.png","teamANoLogo":1,"teamATri":"TMA","teamBSelection":0,"teamBLogo":"assets/200x200_No_Logo.png","teamBNoLogo":1,"teamBTri":"TMB","seriesLengthSelection":0,"teamAScore":0,"teamBScore":0,"matchHeading":""},{"teamASelection":0,"teamALogo":"assets/200x200_No_Logo.png","teamANoLogo":1,"teamATri":"TMA","teamBSelection":0,"teamBLogo":"assets/200x200_No_Logo.png","teamBNoLogo":1,"teamBTri":"TMB","seriesLengthSelection":0,"teamAScore":0,"teamBScore":0,"matchHeading":""},{"teamASelection":0,"teamALogo":"assets/200x200_No_Logo.png","teamANoLogo":1,"teamATri":"TMA","teamBSelection":0,"teamBLogo":"assets/200x200_No_Logo.png","teamBNoLogo":1,"teamBTri":"TMB","seriesLengthSelection":0,"teamAScore":0,"teamBScore":0,"matchHeading":""},{"teamASelection":0,"teamALogo":"assets/200x200_No_Logo.png","teamANoLogo":1,"teamATri":"TMA","teamBSelection":0,"teamBLogo":"assets/200x200_No_Logo.png","teamBNoLogo":1,"teamBTri":"TMB","seriesLengthSelection":0,"teamAScore":0,"teamBScore":0,"matchHeading":""}]}'

document.getElementById('apply-athena-series-theme').addEventListener('click', () => {restoreFromSettings(JSON.parse(exstoSetup))})