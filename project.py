import json

class BudgetPlanner:
    def __init__(self):
        self.dict = {}
        
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
            print("Choose you option!!!")
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
                print
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
                user_percentage = int(input())
                saving = self.dict["income"] * user_percentage / 100
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
            exp_values = list()
            for v in user_input:
                exp_values.append(int(v))
            if sum(exp_values) is not 100:
                print("does not add up to 100")
                continue
            else:
                print(f"Rent:{exp_values[0]}\nGrocery:{exp_values[1]}\nLeisure:{exp_values[2]}\nOthers:{exp_values[3]}")
                self.dict["expenditures"] = dict()
                self.dict["expenditures"]["rent"] = exp_values[0] /100 * (self.dict["changed"])
                self.dict["expenditures"]["grocery"] = exp_values[1] /100 * (self.dict["changed"])
                self.dict["expenditures"]["leisure"] = exp_values[2] /100 * (self.dict["changed"])
                self.dict["expenditures"]["others"] = exp_values[3] /100 * (self.dict["changed"])
                break
    
    def saveinput(self):
        with open("budget.json", "w") as outfile:
            json.dump(self.dict, outfile)
    
    # def budgeplanning(self):
    #     break
bp = BudgetPlanner()
bp.welcomeMessage()
bp.View()