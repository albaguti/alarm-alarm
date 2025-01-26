input.onGesture(Gesture.TiltRight, function () {
    music.play(music.stringPlayable("C5 C C5 C C5 C C5 C ", 120), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.LogoUp, function () {
    music.play(music.stringPlayable("C5 C C5 C C5 C C5 C ", 120), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.ScreenDown, function () {
    music.play(music.stringPlayable("C5 C C5 C C5 C C5 C ", 120), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.FreeFall, function () {
    music.play(music.stringPlayable("C5 C C5 C C5 C C5 C ", 120), music.PlaybackMode.UntilDone)
})
input.onSound(DetectedSound.Loud, function () {
    music.play(music.stringPlayable("C5 C C5 C C5 C C5 C ", 120), music.PlaybackMode.UntilDone)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    music.play(music.stringPlayable("C5 C C5 C C5 C C5 C ", 120), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.A, function () {
    basic.showString("richtig")
})
input.onGesture(Gesture.TiltLeft, function () {
    music.play(music.stringPlayable("C5 C C5 C C5 C C5 C ", 120), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.Shake, function () {
    music.play(music.stringPlayable("C5 C C5 C C5 C C5 C ", 120), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.LogoDown, function () {
    music.play(music.stringPlayable("C5 C C5 C C5 C C5 C ", 120), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("a ist richtig b ist falsch")
    basic.showString("ist alba eine super mutter")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("falsch")
})
input.onGesture(Gesture.ScreenUp, function () {
    music.play(music.stringPlayable("C5 C C5 C C5 C C5 C ", 120), music.PlaybackMode.UntilDone)
})
music.setVolume(255)
