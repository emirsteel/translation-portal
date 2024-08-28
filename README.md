# translation-portal


First of all, download the Pyhton libraries if needed.


To run the Python server:

uvicorn app.main:app --reload --host 0.0.0.0 --port 8000


After that, download the dependencies of React.

To run the React server:

npm start


FOLDER STRUCTURE:

translation-portal/
├── backend/
├── frontend/
├── translation-service/
├── scripts/
├── docker/
├── docs/
├── .env
├── .gitignore
├── docker-compose.yml
├── README.md


backend/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── translationController.js
│   ├── middlewares/
│   │   ├── authMiddleware.js
│   │   └── errorMiddleware.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── translationRoutes.js
│   ├── utils/
│   │   ├── rateLimiter.js
│   │   └── validators.js
│   ├── app.js
│   └── server.js
├── tests/
│   ├── auth.test.js
│   ├── translation.test.js
│   └── utils.test.js
├── package.json
└── package-lock.json


frontend/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── Auth/
│   │   │   ├── Login.js
│   │   │   └── Register.js
│   │   ├── Translation/
│   │   │   ├── Translate.js
│   │   │   └── TranslationHistory.js
│   │   └── Layout/
│   │       ├── Header.js
│   │       └── Footer.js
│   ├── contexts/
│   │   └── AuthContext.js
│   ├── hooks/
│   │   └── useAuth.js
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── LoginPage.js
│   │   └── TranslationPage.js
│   ├── services/
│   │   └── apiService.js
│   ├── styles/
│   │   ├── main.css
│   │   └── theme.css
│   ├── App.js
│   ├── index.js
│   └── serviceWorker.js
├── package.json
└── package-lock.json


translation-service/
├── app/
│   ├── models/
│   │   └── translation.py
│   ├── routes/
│   │   ├── translation.py
│   │   └── health_check.py
│   ├── services/
│   │   └── translation_service.py
│   ├── utils/
│   │   └── text_preprocessing.py
│   ├── main.py
│   └── config.py
├── tests/
│   ├── test_translation.py
│   └── test_health_check.py
├── Dockerfile
├── requirements.txt
└── README.md


scripts/
├── deploy.sh
├── start.sh
└── backup.sh

docker/
├── backend/
│   └── Dockerfile
├── frontend/
│   └── Dockerfile
├── translation-service/
│   └── Dockerfile
└── nginx/
    ├── Dockerfile
    └── nginx.conf


docs/
├── architecture.md
├── api_documentation.md
└── setup_guide.md








