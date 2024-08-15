# tests/test_translation.py
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_translation():
    response = client.post("/translate/", json={
        "source_text": "Hello, how are you?",
        "source_language": "en",
        "target_language": "fr"
    })
    assert response.status_code == 200
    assert "translated_text" in response.json()

# tests/test_health_check.py
def test_health_check():
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json() == {"status": "OK"}
