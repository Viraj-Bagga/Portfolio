from tkinter import *
from tkinter.ttk import *
#Am immporting pythons standard GUI(Graphical User Interface) package

from time import strftime
#strftime is used to convert date and time objects into strings

root = Tk()
#Making the GUI canvas
root.title("Clock")
#Naming GUI base

def time():
  string = strftime("%H:%M:%S %p")
  #Making a string out of the time, and then giving its format
  label.config(text=string)
  #Assign the time to a label, which is a tkinter function 
  label.after(1000, time)
  #Saying that after every 1000ms(1 second), it will recall the time function, therefore rerendering the canvas
  
label = Label(root, font=("ds-digital", 80), background = "black", foreground = "cyan")
label.pack(anchor="center")
#Importing and aligning fonts stored locally

time()
mainloop()
#Calling our functions
