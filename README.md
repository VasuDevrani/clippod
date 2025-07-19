# clippod

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python](https://img.shields.io/badge/python-v3.12+-blue.svg)](https://www.python.org/downloads/)
[![Next.js](https://img.shields.io/badge/Next.js-15.2.3-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue)](https://www.typescriptlang.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-latest-green)](https://fastapi.tiangolo.com/)

<img width="1225" height="722" alt="image" src="https://github.com/user-attachments/assets/6d1bb8a6-5e7e-42f5-89ed-454f8cbca447" />

<img width="1225" height="722" alt="image" src="https://github.com/user-attachments/assets/af0e581c-af9c-4473-841f-c8c8663b8f64" />

<img width="1225" height="722" alt="image" src="https://github.com/user-attachments/assets/d5b56f2b-dcd0-4b61-9bd1-018b25b8ef12" />

## 

clippod is an AI-powered podcast clipping platform that automatically extracts engaging moments from podcast videos and transforms them into vertical, social media-ready clips with subtitles.

## ✨ Features

- 🎬 **Automatic Clip Generation**: Uses AI to identify interesting moments and Q&A segments from podcast videos
- 🗣️ **Active Speaker Detection**: Advanced computer vision to focus on the speaking person
- 📱 **Vertical Video Format**: Converts clips to 1080x1920 for social media platforms
- 🎯 **Smart Subtitles**: Automatically generates stylized subtitles with word-level timing
- 🎨 **Dynamic Framing**: Intelligently crops video based on speaker location or creates cinematic backgrounds
- ⚡ **GPU Acceleration**: Powered by Modal's cloud infrastructure with NVIDIA L40S GPUs
- 🔐 **Secure Processing**: JWT authentication and AWS S3 integration for secure file handling

## 🏗️ Architecture

### Backend (`clippod-backend/`)
- **Framework**: FastAPI with Modal for serverless deployment
- **AI Models**: 
  - WhisperX for transcription and word-level alignment
  - Google Gemini 2.5 Flash for content analysis
  - Active Speaker Detection (ASD) model for speaker tracking
- **Video Processing**: FFmpeg with OpenCV for video manipulation
- **Storage**: AWS S3 for input/output video storage
- **GPU**: NVIDIA L40S for ML inference acceleration

### Frontend (`clippod-frontend/`)
- **Framework**: Next.js 15.2.3 with TypeScript
- **UI**: Tailwind CSS with Radix UI components
- **Authentication**: NextAuth.js with Prisma adapter
- **Database**: Prisma ORM
- **Deployment**: Optimized for Vercel
- **Payment**: Stripe integration
- **Background Jobs**: Inngest for async processing

## 🚀 Getting Started

### Prerequisites

- Python 3.12+
- Node.js 18+
- Docker (optional)
- AWS Account with S3 access
- Modal account for backend deployment
- Google AI API key for Gemini

### Backend Setup

1. **Navigate to backend directory**:
   ```bash
   cd clippod-backend
   ```

2. **Create virtual environment**:
   ```bash
   python -m venv .venv
   source .venv/bin/activate  # On Windows: .venv\Scripts\activate
   ```

3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables**:
   Create Modal secrets with:
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`
   - `GEMINI_API_KEY`
   - `AUTH_TOKEN`

5. **Deploy to Modal**:
   ```bash
   modal deploy main.py
   ```

### Frontend Setup

1. **Navigate to frontend directory**:
   ```bash
   cd clippod-frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Copy `.env.example` to `.env` and configure:
   ```env
   NEXTAUTH_SECRET=your-secret
   DATABASE_URL=your-database-url
   AWS_ACCESS_KEY_ID=your-aws-key
   AWS_SECRET_ACCESS_KEY=your-aws-secret
   STRIPE_SECRET_KEY=your-stripe-key
   # Add other required variables
   ```

4. **Set up database**:
   ```bash
   npm run db:push
   ```

5. **Start development server**:
   ```bash
   npm run dev
   ```

## 🎯 Usage

1. **Upload Video**: Upload your podcast video through the web interface
2. **Processing**: The AI analyzes the content and identifies clip-worthy moments
3. **Generation**: Clips are automatically created with:
   - Vertical format conversion
   - Active speaker tracking
   - Subtitle generation
   - Smart cropping/background blurring
4. **Download**: Access your processed clips from the dashboard

## 🛠️ API Endpoints

### POST `/process_video`
Process a video file stored in S3

**Request Body**:
```json
{
  "s3_key": "path/to/your/video.mp4"
}
```

**Headers**:
```
Authorization: Bearer <your_auth_token>
Content-Type: application/json
```

## 🔧 Configuration

### Video Processing Settings
- **Clip Duration**: 30-60 seconds (configurable)
- **Max Words per Subtitle**: 5 words
- **Output Resolution**: 1080x1920 (vertical)
- **Framerate**: 25 FPS
- **Audio**: AAC 128kbps
- **Video Codec**: H.264

### AI Model Configuration
- **Transcription**: WhisperX Large-v2
- **Language**: English (configurable)
- **Compute Type**: float16 for GPU optimization
- **Content Analysis**: Gemini 2.5 Flash

## 📁 Project Structure

```
clippod/
├── clippod-backend/           # Python FastAPI backend
│   ├── main.py               # Main application and Modal deployment
│   ├── ytdownload.py         # YouTube download utilities
│   ├── requirements.txt      # Python dependencies
│   └── asd/                  # Active Speaker Detection model
│       ├── Columbia_test.py  # ASD inference script
│       ├── model/           # Neural network models
│       └── weight/          # Pre-trained model weights
├── clippod-frontend/         # Next.js React frontend
│   ├── src/                 # Source code
│   ├── components.json      # UI component configuration
│   ├── package.json         # Node.js dependencies
│   └── prisma/             # Database schema
└── README.md               # This file
