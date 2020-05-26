# ‘Build’ the string up: print the first character, then the first 2, then the first 3, etc., until you print the entire string.
def build_word(word):
    word = ''
    for x in string:
        word += x
        print(word)
    return

# Swap some of the characters around, then print out this jumbled-up string to the user. Be sure to label it appropriately.
def swap_letters(word):
    arr = list(word)
    arr[1], arr[3] = arr[3], arr[1]
    print(''.join(arr))
    return


# Get a string from the user. The user must provide a string that is 10 characters long.
string = input("Give me a word (10 characters max): ")
if len(string) > 10:
    print("Error! Only 10 characters allowed!")
# inform the user what the first and last characters of the string are
else:
    print("The first character of the string is", string[0], "and the last character of the string is", string[-1])
    build_word(string)
    swap_letters(string)



