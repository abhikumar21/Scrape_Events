# Scrape Events App

A full-stack web application built using **Django (Backend)** and **React.js (Frontend)** that scrapes event listings from **Eventbrite** for **Sydney, Australia**, and displays them in a clean, user-friendly interface.

---

## 🚀 Features

- 🌐 Scrapes real-time event data from [eventbrite.com.au](https://www.eventbrite.com.au/)
- 📍 Filters events specific to **Sydney, Australia**
- ⚛️ Responsive and interactive React frontend
- 🧰 API built with Django REST Framework

---

## 🛠️ Tech Stack

### Frontend:
- **React.js**
- Axios (for API calls)

### Backend:
- **Django**
- Django REST Framework
- BeautifulSoup + Requests (for scraping)

---

## 🧩 Setup Instructions

### 🔧 Backend (Django)

1. Clone the repo:
```bash
   git clone https://github.com/abhikumar21/Scrape_Events.git
   cd Scrape_Events/Backend
```

2. Create virtual environment & install dependencies:

```bash
python -m venv env
source env/bin/activate  # For Windows: env\Scripts\activate
pip install -r requirements.txt
```

3. Run migrations and start server:

```bash
python manage.py migrate
python manage.py runserver
```


### 🌐 Frontend (React)

1. Open a new terminal and navigate to frontend:
```bash
cd Scrape_Events/Frontend/client
```

2. Install dependencies:
```bash
npm install
```

3. Start the React development server:

```bash
npm start
```

## ⚙️ Scraping Logic
- The Django backend uses BeautifulSoup to parse HTML content from Eventbrite's Sydney page.
- Scraped data includes: event name, date, time, venue, link, and description.

## Future Enhancements
- Add options to choose desired city for getting events
- Add user login and favorite/save event features.
