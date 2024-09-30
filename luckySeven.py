# player info
player = {
"Name": "P1",
"Balance": 100,
}

# dice1
# dice2

# bet

allBets = ["7 up","7","7 down"]


# setting a function to annimate text
def animateText(text, time):
    #Animation code referred from Stack Overflow
    #https://stackoverflow.com/questions/19911346/create-a-typewriter-effect-animation-for-strings-in-python
    for x in text:
        print(x, end='')
        sys.stdout.flush()
        sleep(time)


#  function of classic dice rolling
def rollDice():
    diceResult = random.randint(1,6)
    return diceResult


# if player wins
def playerWon(amount):
    newBalance = player["Balance"] + amount
    playerWin = ("You won! 🍻 🥳 🍻")
    animateText(playerWin, 0.1)
    print ("")
    player["Balance"] = newBalance
    startGame()


# if player loses
def playerLost(amount):
    newBalance = player["Balance"] - amount
    playerLost = ("You lost! 🤡 💸 🤡")
    animateText(playerLost, 0.1)
    print ("")
    player["Balance"] = newBalance
    startGame()


# start game
def startGame():
    playerBalance = ("\nPlayer Balance = ", player["Balance"])    #players start balance
    animateText(playerBalance, 0.05)
    animateText("\nPlace your bet. Enter one of the following: \n0) for 7 up \n1) for 7 \n2) for 7 down\n",0.05)  # taking the users bet type
    betType = int(input())
    animateText("How much would you like to bet? Enter a whole number:",0.05)  # the amount the user would like to bet
    betValue = input()
    animateText("You selected:"+ allBets[betType] + "\nWager="+ betValue, 0.05)
    animateText("\n🎊 Let the games begin. Ready to roll hit enter! 🎊", 0.05)
    readyToRoll = input()
    if (readyToRoll == ""):
        dice1 = rollDice()
        dice2 = rollDice()
        sumOfDice = dice1 + dice2 
        totalValue = ("The wait is over \🎲 1=", dice1, "\🎲 2=", dice2,"\nTotal of the dice = ", sumOfDice, "\n")  # value of each dice and the sum of values
        animateText (totalValue, 0.5)
        # determining if the player has won or lost
        if(betType == 0 and sumOfDice > 7):
            playerWon(int(betValue))
        elif(betType == 1 and sumOfDice == 7):
            playerWon(int(betValue))
        elif(betType == 2 and sumOfDice < 7):
            playerWon(int(betValue))
        else:
            playerLost(int(betValue))
            
    else:
        gameOver()
        
        return

def gameOver():
    print ("Game ended 💀")
    return

#Code Start
from time import sleep
import sys
import random

welcomeMessage = "Welcome to Lucky 7 \nHOW TO PLAY \nLucky 7 is a dice based carnival game. \nStart with a bet—go big or go home! \nYour mission 👀: guess if the total on a pair of dice >7, =7 or <7 \nWin? You double your money 🤑. \nLose? Well, your wager is history 🤡! \nFeeling lucky? \nHit Enter and let the dice decide! 🎲"
animateText(welcomeMessage, 0.05)
playerCommand = input ()
if playerCommand == "":
    startGame()
else:
    gameOver()