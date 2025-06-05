import pytz
from apscheduler.schedulers.background import BackgroundScheduler

scheduler = BackgroundScheduler(timezone=pytz.utc)  # or pytz.timezone('Asia/Kolkata')

def start():
    from .scraper import scrape_events
    scheduler.add_job(scrape_events, 'interval', hours=6)
    scheduler.start()
