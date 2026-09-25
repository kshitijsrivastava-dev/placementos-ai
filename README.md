# PlacementOS

**PlacementOS** is a placement-preparation workspace designed to bring DSA practice, aptitude preparation, resume readiness, mock interviews, roadmaps, goals, and performance analytics into one dashboard.

It is built as a portfolio project focused on creating a realistic, structured preparation experience for students preparing for software placement interviews.

🌐 **Live Demo:** https://placementos-ai.vercel.app/  
📦 **Repository:** https://github.com/kshitijsrivastava-dev/placementos-ai

---

## ✨ Overview

Preparing for placements often means switching between different platforms for DSA practice, aptitude tests, interview preparation, resumes, and progress tracking.

PlacementOS brings these preparation areas together in a single workspace.

The application provides:

- A placement preparation dashboard
- Topic-based DSA practice
- Difficulty, status, company, and importance filters
- DSA progress tracking
- Aptitude preparation sections
- Resume readiness and ATS-oriented analysis interface
- Mock interview workspace
- Placement roadmap
- Performance analytics
- Goal tracking
- User authentication and profile settings
- Responsive dashboard layouts
- Light/dark theme support

---

## 🚀 Key Features

### 📊 Placement Dashboard

The overview dashboard provides a centralized view of preparation progress, including:

- Daily preparation plan
- Next steps
- Focus insights
- Weak topics
- Activity overview
- Progress metrics
- Consistency tracking

The dashboard is organized into reusable sections so that different preparation signals can be viewed without navigating through multiple tools.

---

### 🧠 DSA Tracker

PlacementOS includes a structured DSA problem bank organized around common interview topics.

#### Topics include

- Arrays
- Strings
- Linked Lists
- Trees
- Graphs
- Dynamic Programming
- Greedy
- Binary Search
- Two Pointers
- Sliding Window
- Stack & Queue
- Heap
- Backtracking
- Bit Manipulation

#### DSA features

- Difficulty filtering
- Solved / attempted / reviewing / unsolved status
- Search
- Company-based filtering
- Importance tiers
- Interview frequency
- Sorting
- Pagination
- Bookmarking
- Progress statistics
- Topic-wise progress
- Acceptance-rate metadata
- Estimated solving time

Questions also contain interview-oriented metadata such as companies, frequency, tags, and importance.

---

### 🎯 Aptitude Preparation

The aptitude module organizes preparation into sections with progress and accuracy tracking.

It includes:

- Section-wise progress
- Solved question counts
- Accuracy metrics
- Recent mock-test results
- Quantitative, logical, and verbal preparation areas

---

### 📄 Resume Workspace

The resume module provides a dedicated workspace for resume readiness.

The current interface includes:

- Resume preview
- ATS score visualization
- Resume suggestions
- Job-description match information
- Resume improvement indicators

The module is structured so that a future resume-analysis backend can replace the current demonstration data.

---

### 🎤 Mock Interview

PlacementOS includes a mock interview workspace designed around structured interview sessions.

The interface includes:

- Interview scenario display
- AI-style interviewer experience
- Video/interview controls
- Live transcript interface
- Communication metrics
- Clarity score
- Depth score
- Structure score
- Communication score

The current implementation demonstrates the interview experience and UI using sample session data.

---

### 🗺️ Placement Roadmap

The roadmap provides a week-by-week preparation structure.

It displays:

- Preparation phases
- Current phase
- Completed phases
- Upcoming phases
- Phase tasks
- Overall progress

This is intended to give students a clear sequence for progressing toward placement readiness.

---

### 📈 Performance Analytics

The analytics dashboard visualizes preparation performance through:

- Overall readiness indicators
- Time distribution
- Strengths
- Focus areas
- Progress metrics
- Performance signals

Charts and progress visualizations are designed to make preparation patterns easier to understand.

---

### 🎯 Goals

Students can define placement-preparation objectives and track progress toward them.

The goals interface includes:

- Active goals
- Target values
- Current progress
- Deadlines
- Progress indicators
- Monthly due-date summaries

---

### 🔐 Authentication & Profiles

PlacementOS uses Supabase authentication for account management.

Users can:

- Create an account
- Sign in
- Maintain a profile
- Set a target company
- Update their profile information
- Sign out

User profile information is stored through Supabase.

---

### 🌓 Theme Support

The application includes light/dark theme support with a reusable theme provider and theme toggle.

The dashboard UI is designed to remain consistent across both themes.

---

## 🛠️ Tech Stack

### Frontend

- **React 19**
- **TypeScript**
- **Vite**
- **React Router**
- **Tailwind CSS**
- **Lucide React**

### UI & Components

- Radix UI
- Tailwind CSS
- Class Variance Authority
- Reusable dashboard components
- Responsive layout utilities

### Forms & Validation

- React Hook Form
- Zod
- `@hookform/resolvers`

### Data Visualization

- Recharts

### Backend / Authentication

- **Supabase**
  - Authentication
  - Profile data
  - Database access through Supabase client

### Deployment & Monitoring

- **Vercel**
- Vercel Analytics
- Vercel Speed Insights

### Development

- Git
- GitHub
- ESLint
- TypeScript

---

## 🏗️ Project Architecture

The application follows a feature-oriented React structure.

```text
src/
├── components/
│   ├── auth/
│   ├── dashboard/
│   ├── dsa/
│   ├── landing/
│   ├── shared/
│   ├── theme/
│   └── ui/
│
├── content/
│   └── product-messaging.ts
│
├── data/
│   ├── analytics-mock.ts
│   ├── aptitude-mock.ts
│   ├── dsa-mock.ts
│   ├── goals-mock.ts
│   ├── overview-mock.ts
│   ├── resume-mock.ts
│   └── roadmap-mock.ts
│
├── features/
│   └── auth/
│
├── hooks/
│   └── dashboard/
│
├── layouts/
│   └── dashboard/
│
├── lib/
│   ├── dsa/
│   ├── storage/
│   └── ...
│
├── navigation/
│
├── pages/
│   └── dashboard/
│       ├── Analytics.tsx
│       ├── Aptitude.tsx
│       ├── DSA.tsx
│       ├── Goals.tsx
│       ├── MockInterview.tsx
│       ├── Overview.tsx
│       ├── Resume.tsx
│       ├── Roadmap.tsx
│       └── Settings.tsx
│
├── routes/
├── types/
└── App.tsx
```

---

## 🔄 Application Flow

```text
Landing Page
     │
     ├── Sign Up
     │      ↓
     │   Supabase Auth
     │      ↓
     │   User Profile
     │
     └── Sign In
            ↓
      Protected Dashboard
            │
            ├── Overview
            ├── DSA Tracker
            ├── Aptitude
            ├── Resume
            ├── Mock Interview
            ├── Roadmap
            ├── Analytics
            ├── Goals
            └── Settings
```

---

## 📱 Responsive Design

PlacementOS is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile

The dashboard uses responsive grid utilities and adaptive components to maintain usability across different screen sizes.

The DSA problem list also includes responsive table/card representations for smaller screens.

---

## 🧩 Data Architecture

The project currently combines two types of data:

### Persistent account data

Supabase is used for:

- Authentication
- User profiles
- Target company information

### Demonstration/product data

Several placement modules currently use structured local mock data to demonstrate the product experience.

This includes:

- DSA questions and metadata
- Dashboard metrics
- Aptitude statistics
- Resume analysis
- Roadmap phases
- Goals
- Analytics
- Mock interview content

The application is structured so these data sources can later be replaced with API/database-backed services without rebuilding the UI architecture.

---

## 🧪 Running Locally

### 1. Clone the repository

```bash
git clone https://github.com/kshitijsrivastava-dev/placementos-ai.git
cd placementos-ai
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Do not commit environment files or credentials to GitHub.

### 4. Start the development server

```bash
npm run dev
```

The application will be available through the local Vite development server.

### 5. Production build

```bash
npm run build
```

---

## ☁️ Deployment

The project is deployed using Vercel.

The production build uses Vite and the application can be deployed directly from the GitHub repository.

Environment variables required by Supabase should be configured in the Vercel project settings rather than committed to the repository.

---

## 🎨 Design Approach

PlacementOS follows a dashboard-first product design approach.

The interface emphasizes:

- Clear information hierarchy
- Modular dashboard cards
- Consistent spacing
- Responsive layouts
- Progress visualization
- Status indicators
- Minimal navigation friction
- Reusable UI components
- Light and dark themes

The goal is to make a large amount of preparation information feel organized rather than overwhelming.

---

## 📚 What I Learned

Building PlacementOS provided hands-on experience with:

- React application architecture
- TypeScript
- Component-based UI development
- React Router
- Responsive dashboard design
- State management and reusable hooks
- Data filtering and sorting
- Pagination
- Authentication with Supabase
- Database-backed user profiles
- Data visualization
- Responsive tables and mobile layouts
- Theme management
- Vercel deployment
- Structuring a larger frontend project for maintainability

---

## 🔮 Future Improvements

Potential future iterations include:

- Real DSA problem database
- Persistent DSA progress and bookmarks
- Real aptitude question engine
- AI-powered resume analysis
- Job-description based resume recommendations
- Real-time mock interviews
- AI interview feedback
- Personalized preparation plans
- Advanced analytics based on user activity
- Company-specific preparation tracks
- Notifications and reminders
- More persistent user progress across modules

---

## 🎯 Project Goal

PlacementOS was built to explore how multiple placement-preparation workflows can be combined into one focused product instead of requiring students to manage several disconnected tools.

The project emphasizes **product thinking, responsive frontend engineering, structured data, authentication, and scalable UI architecture** while leaving room for future AI and backend integrations.

---

## 👨‍💻 Author

**Kshitij Srivastava**

B.Tech Computer Science & Engineering (Data Science)

- GitHub: https://github.com/kshitijsrivastava-dev
- LinkedIn: https://www.linkedin.com/in/kshitij-srivastava-91a112407/

---

## 📄 License

This project is intended as a personal portfolio and educational project.
