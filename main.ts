DFRobotMaqueenPlus.I2CInit()
basic.forever(function () {
    if (DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2) > 60) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 75)
    } else if (DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2) > 50) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 60)
    } else if (DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2) > 30) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 50)
    } else if (DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2) > 1) {
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
    }
})
