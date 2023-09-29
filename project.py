import json

class BudgetPlanner:
    def __init__(self):
        self.dict = {}
        self.exp_values = list()
        self.user_percentage = 0
        
    def welcomeMessage(self):
        print("——————————————-----------------")
        print(" Welcome to Budget Planner!!! ")
        print("——————————————-----------------")

    def View(self):
        while True:
            print("*" * 45)
            print("*1. Enter your monthly income               *")
            print("*2. Set your saving's percentage            *")
            print("*3. Set your expenditures' percentages      *")
            print("*4. Save your information                   *")
            print("*5. Exit                                    *")
            print("*" * 45)
            print("Choose your option!!!")
            user_option = int(input())
            if user_option == 1:
                self.addMonthlyIncome()
            elif user_option == 2:
                self.saving()
            elif user_option == 3:
                self.expense()
            elif user_option == 4:
                self.saveinput()
                print("Thank you for your input, your budget planning is completed")
                self.budgetplanning()
            elif user_option == 5:
                print("You've ended your program. Please come again")
                break
            else:
                print("Please enter correct input!")
    
   
    def addMonthlyIncome(self):
        while True:
            print("Please enter your current monthly income: ")
            try:
                user_income = int(input())
                self.dict["income"] = user_income
                print("Your income is ", self.dict["income"])
                self.dict["changed"] = self.dict["income"]
                break
            except ValueError:
                print("Please provide your income in a form of integer!")    

    def saving(self):
        while True:
            print("Choose your saving option: ")
            print("1. Percentage option")
            print("2. Exit the option")
            user_input = int(input())
            if user_input == 1:
                print("Enter the percentage you want to apply: ")
                self.user_percentage = int(input())
                saving = self.dict["income"] * self.user_percentage / 100
                if saving > self.dict["income"]:
                    print("Invalid input. Try with other value")
                    continue
                else:
                    self.dict["saving"] = saving
                    self.dict["changed"] = self.dict["income"] - self.dict["saving"]
                    print("Out of your total monthly income ", self.dict['income'])
                    print("Your monthly expenditure would be ", self.dict["changed"])
                    print("Your monthly savings would be ", self.dict['saving'])
            else:
                break

    def expense(self):
        while True:
            print("Please enter percentages for Rent, Grocery, Leisure, Others in integers to be added up to 100% in total\n")
            print("Format: R(Rent),G(Grocery),L(Leisure),O(Others)\n")
            print("Example: 30,20,25,25")
            #Please enter percentages for R, G, L, O to be added up to 100% in total
            user_input = input().split(",")
            for v in user_input:
                self.exp_values.append(int(v))
            if sum(self.exp_values) != 100:
                print("does not add up to 100")
                continue
            else:
                print(f"Rent:{self.exp_values[0]}\nGrocery:{self.exp_values[1]}\nLeisure:{self.exp_values[2]}\nOthers:{self.exp_values[3]}")
                self.dict["expenditures"] = dict()
                self.dict["expenditures"]["rent"] = self.exp_values[0] /100 * (self.dict["changed"])
                self.dict["expenditures"]["grocery"] = self.exp_values[1] /100 * (self.dict["changed"])
                self.dict["expenditures"]["leisure"] = self.exp_values[2] /100 * (self.dict["changed"])
                self.dict["expenditures"]["others"] = self.exp_values[3] /100 * (self.dict["changed"])
                break
    
    def saveinput(self):
        with open("budget.json", "w") as outfile:
            json.dump(self.dict, outfile)
    
    def budgetplanning(self):        
        print("This is your total summary.")

        print("Your total monthly income is", self.dict["income"])

        print("Your total saving is ", str(self.dict["saving"]) + " It is", str(self.user_percentage) + " percent of your total income.")

        print("Your Rental expenditure is", str(self.dict["expenditures"]["rent"]) + " It is", str(self.exp_values[0]) + " percent of your total income.")

        print("Your Grocery expenditure is", str(self.dict["expenditures"]["grocery"]) + " It is", str(self.exp_values[1]) + " percent of your total income.")

        print("Your Leisure expenditure is", str(self.dict["expenditures"]["leisure"]) + " It is", str(self.exp_values[2]) + " percent of your total income.")

        print("Your Others expenditure is ", str(self.dict["expenditures"]["others"]) + " It is", str(self.exp_values[3]) + " percent of your total income.")


bp = BudgetPlanner()
bp.welcomeMessage()
bp.View()
