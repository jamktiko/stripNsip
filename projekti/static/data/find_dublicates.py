import json
from collections import Counter

# filepath: c:\Users\jerem\Koulu\stripNsip\projekti\static\data\kysymykset.json
file_path = r"c:\Users\jerem\Koulu\stripNsip\projekti\static\data\kysymykset.json"

# Lue JSON-tiedosto
with open(file_path, "r", encoding="utf-8") as file:
    data = json.load(file)

# Luo lista kaikista kysymyksistä
questions = [item["question"] for item in data if "question" in item]

# Laske kysymysten esiintymät
duplicates = [question for question, count in Counter(questions).items() if count > 1]

# Tulosta duplikaatit
if duplicates:
    print("Duplikaatit kysymykset:")
    for question in duplicates:
        print(f"- {question}")
else:
    print("Ei duplikaatteja löytynyt.")