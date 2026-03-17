from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers.text_api import router as text_router
from routers.image_api import router as image_router
from routers.audio_api import router as audio_router
from routers.video_api import router as video_router

app = FastAPI(title="FakeCheck AI")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(text_router)
app.include_router(image_router)
app.include_router(audio_router)
app.include_router(video_router)