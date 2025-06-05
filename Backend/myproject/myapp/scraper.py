import requests
from bs4 import BeautifulSoup
from .models import Event

def scrape_events():
    url = "https://www.eventbrite.com.au/d/australia--sydney/events/"
    headers = {
        "User-Agent": "Mozilla/5.0"
    }
    response = requests.get(url, headers=headers)
    soup = BeautifulSoup(response.text, "html.parser")

    # Remove old entries
    Event.objects.all().delete()

    cards = soup.select('section.discover-vertical-event-card')

    print(f"Found {len(cards)} event cards.")

    for card in cards:
        try:
            # Title
            title_el = card.select_one("h3")
            title = title_el.get_text(strip=True) if title_el else "Untitled"

            # Date/Time
            date_el = card.find("p", string=lambda text: "AM" in text or "PM" in text)
            date = date_el.get_text(strip=True) if date_el else "TBD"

            # Venue
            venue_el = card.find("p", class_="Typography_body-md__487rx")
            venue = venue_el.get_text(strip=True) if venue_el else "Sydney"

            # Link
            link_el = card.find("a", class_="event-card-link")
            link = link_el["href"] if link_el and "href" in link_el.attrs else "#"

            # Image
            image_el = card.select_one("img.event-card-image")
            image = image_el["src"] if image_el else ""

            # Save event
            Event.objects.create(
                title=title,
                date=date,
                venue=venue,
                link=link,
                image=image
            )

            print(f"Saved: {title}")
        except Exception as e:
            print("Error scraping card:", e)
