#A poorly written example of a program in Python. It prompts the user for the number of elements to sum, takes those integers as input, and handles some basic error cases

MAX = 100

def get_valid_input(prompt, validation_fn, error_message):
   while True:
      try:
         value = int(input(prompt))
         if validation_fn(value):
            return value
         else:
            print(error_message)
      except ValueError:
         print("Invalid input. Please enter a valid integer.")

def get_number_of_elements():
   return get_valid_input(
      "Enter the number of elements (1-100): ",
      lambda x: 1 <= x <= MAX,
      "Invalid input. Please provide a number between 1 and 100."
   )

def get_elements(n):
   arr = []
   print(f"Enter {n} integers:")
   for _ in range(n):
      arr.append(get_valid_input(
         "",
         lambda x: True,
         "Invalid input. Please enter a valid integer."
      ))
   return arr

def calculate_sum(arr):
   return sum(arr)

def main():
   try:
      n = get_number_of_elements()
      arr = get_elements(n)
      total = calculate_sum(arr)
      print("Sum of the numbers:", total)
   except KeyboardInterrupt:
      print("\nProgram terminated by user.")
      exit(1)

if __name__ == "__main__":
   main()
