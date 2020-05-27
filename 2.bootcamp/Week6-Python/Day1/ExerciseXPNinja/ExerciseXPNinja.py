#Exercise1

# 3 <= 3 < 9 gives True
# 3 == 3 == 3 gives True
# bool(0) gives False
# bool(5 == "5") gives False
# bool(4 == 4) == bool("4" == "4") gives True
# bool(bool(None)) gives False

#Exercise2

a = int(input("Give me a first digit: "))
b = int(input("Give me a second digit: "))

if a > b:
    print("Hello World")

#Exercise3

month = int(input("Give me a month (number between 1(January) to 12(December)): "))
if 3<=month<=5:
    print("Spring")
elif 6<=month<=8:
    print("Summer")
elif 9<=month<=11:
    print("Autumn")
elif 12<=month<=2:
    print("Winter")