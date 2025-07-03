from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import os
from dotenv import load_dotenv

load_dotenv()

uri = os.getenv('MONGODB_URI')

class DataBase:
    def __init__(self):
        try:
            self.client = MongoClient(uri, server_api=ServerApi('1'))
            self.contactsBase = self.client.contactBook
            self.client.admin.command('ping')
            print("Pinged your deployment. You successfully connected to MongoDB!")
        except Exception as e:
            print(e)
    
    def get_contacts(self):
        contacts = []
        for contact in self.contactsBase.contacts.find():
            contacts.append(contact)
        print(contacts)

db = DataBase()

if __name__ == "__main__":
    db.get_contacts()