import tweepy
import time

auth = tweepy.OAuthHandler('zggEzGYTQBPcH93Tx5AVpwXDU','vpEQBFrxbvxgMQglNNjIS5pUhfSBuZcKfTnl3nZwuqxdzBGjfx')

auth.set_access_token('1477658366956781571-UrYmVnDqwqR8vIuf7VmZ7u7uqa9UR7','L0tfwrGICnygWQZ9G51yoStkdRKfs1gH78zEt1Y5kkjnB')

api = tweepy.API(auth, wait_on_rate_limiy=True, wait_on_rate_limit_notify=True)

user = api.me()

search = '#plane'|'#planes'|'#airport'

nrtweets = 100

while (1 < 10):

    for tweet in tweepy.Cursor(api.search, q=search).items(nrtweets):
        try:
            print('Tweet Like')
            tweet.farotite()
            tweet.retweet()
            time.sleep(1080)
    

