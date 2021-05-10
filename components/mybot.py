from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer, ChatterBotCorpusTrainer

bot = ChatBot (
    'Timmy',
    storage_adapter='chatterbot.storage.SQLStorageAdapter',
    database_uri='sqlite:///database.sqlite3',
    logic_adapters=[
        'chatterbot.logic.BestMatch',
        'chatterbot.logic.TimeLogicAdapter']
)



""" trainer = ListTrainer(bot)

trainer2 = ChatterBotCorpusTrainer(bot)

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

trainer2.train(
    "chatterbot.corpus.english"
) """

while True:
    try:
        user_input = input()

        bot_response = bot.get_response(user_input)

        print(bot_response)

    except ([KeyboardInterrupt, EOFError, SystemExit]):
        break