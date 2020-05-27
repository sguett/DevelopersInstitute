# hour = "20"
# hour = int(hour)
# if hour<12:
#     print("Morning")
# elif 12<hour<18:
#     print("afternoon")
# else:
#     print("evening")

# username = input("what is your name?")
# print("Hello", username)
# age = 17
# if age>=18:
#     print("you can buy the alcohol")
# else:
#     print("sorry, you're too young")

age = input("How old are you?\n$")
age = int(age)

hour = input("What time is it?\n$")
hour = int(hour)

if age>=18 and hour<23:
    print("you can buy alcohol")
else:
    print("Sorry, you cannot buy alcohol")