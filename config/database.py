import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()



# Get the Firebase credentials file path from environment variables
FIREBASE_CREDENTIALS = os.getenv('FIREBASE_CREDENTIALS')

print('Srtat')
print(os.getenv("FIREBASE_CREDENTIALS"))
print('Enddd')


if not FIREBASE_CREDENTIALS:
    raise ValueError("FIREBASE_CREDENTIALS environment variable not set")

from firebase_admin import credentials, firestore, initialize_app

# Use the path from the environment variable to initialize Firebase
cred = credentials.Certificate(FIREBASE_CREDENTIALS)

print(cred)
print('cred')
initialize_app(cred)

# Create Firestore client
db = firestore.client()


