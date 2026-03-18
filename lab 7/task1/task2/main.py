from models import Animal, Dog, Cat
def main():
    dog = Dog("Rex", 5, "Brown", "Labrador")
    cat = Cat("Murka", 3, "White", 9)
    animal = Animal("Unknown", 2, "Gray")

    animals = [dog, cat, animal]

    for a in animals:
        print(a)              # __str__
        print(a.speak())      # polymorphism
        print(a.info())       # общий метод
        print("-----")


if __name__ == "__main__":
    main()