def on_button_pressed_a():
    basic.show_string("richtig")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    basic.show_string("a ist richtig b ist falsch")
    basic.show_string("ist alba eine super mutter")
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    basic.show_string("falsch")
input.on_button_pressed(Button.B, on_button_pressed_b)
