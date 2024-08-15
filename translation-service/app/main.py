# app/main.py
from fastapi import FastAPI
from app.routes.translation import router as translation_router
from app.routes.health_check import router as health_check_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Your React app's origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Include routes
app.include_router(translation_router)
app.include_router(health_check_router)

@app.get("/")
def read_root():
    return {"message": "Welcome to the Translation Service API"}
