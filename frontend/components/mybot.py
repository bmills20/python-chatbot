from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer, ChatterBotCorpusTrainer

bot2 = ChatBot (
    'John',
    storage_adapter='chatterbot.storage.SQLStorageAdapter',
    database_uri='sqlite:///database.sqlite3_2',
    logic_adapters=[
        'chatterbot.logic.BestMatch',
        'chatterbot.logic.MathematicalEvaluation']
)



trainer = ListTrainer(bot2)

trainer2 = ChatterBotCorpusTrainer(bot2)

# Training via list data
# Each line is an answer to the previous
trainer.train([
    'Hello',
    'Hi',
    'I need help finding a dog',
    'Okay what breed of dog are you looking for?',
    'I am looking for a golden retriever',
    'Let me see if we have any of that breed...',
    'How long it will take to receive a dog?',
    'A dog takes 3-5 Business days to get delivered.',
    'Okay Thanks',
    'No Problem! Is there anything else I can help you with?'
    'Hello',
    'Hi there!',
    'How are you doing!',
    'I\'m doing great',
    'That is good to hear',
    'Thank you.',
    'You\'re welcome',
    'Can I give you a smooch?',
    'No go away.'
])


# Corpus of quick examples to help the AI learn
# Using the entire english corpus of ChatterBot
trainer2.train(
    "chatterbot.corpus.english"
)

while True:
    try:
        user_input = input()

        bot_response = bot2.get_response(user_input)

        print(bot_response)

    except ([KeyboardInterrupt, EOFError, SystemExit]):
        break