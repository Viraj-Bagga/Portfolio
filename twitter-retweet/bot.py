import tweepy
import os 
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.dotenv('twitter_api_key')
API_SECRET = os.dotenv('twitter_api_secret')
ACCESS_TOKEN = os.dotenv('twitter_access_token')
TOKEN_SECRET = os.dotenv('twitter_token_secret')
