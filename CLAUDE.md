# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Required Reading
Before starting any task, Claude should review these key documents:
- **PRD.md**: Complete product requirements and user stories
- **DESIGN.md**: System architecture and technical specifications
- **BACKLOG.md**: Development tasks, priorities, and sprint planning

## Workflow Guidelines
- Upon start - check Backlog status and be ready to proceed with next task as per priority
- Once each individual task is complete, update @BACKLOG.md and commit changes separate for each backlog task ID

## Project Overview
DogO is a dog obedience training platform that connects dog owners with professional trainers for structured online training. This is currently in the planning phase with no code implementation yet.

## Development Commands
This project is in the planning phase. No build, test, or development commands are available yet. Based on the design documents, the planned tech stack will include:

- **Frontend**: React with TypeScript, Vite, Tailwind CSS
- **Backend**: Node.js/Express with TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Development**: Docker Compose for local environment

Once implemented, typical commands will likely be:
- `npm run dev` - Start development servers
- `npm run build` - Build production assets
- `npm run test` - Run test suite
- `npm run lint` - Code linting
- `npm run typecheck` - TypeScript checking

## Architecture Overview
The platform follows a client-server architecture:

### Core Components
- **Authentication System**: JWT-based with role-based access control (Owner, Trainer, Admin)
- **Lesson Management**: Hierarchical structure with YouTube video integration
- **Progress Tracking**: Session recording with success/failure metrics and rich notes
- **Communication**: Real-time messaging between trainers and students using Socket.io
- **File Storage**: AWS S3/Cloudinary for user uploads and media

### Database Schema (Planned)
Key entities include:
- Users with role-based permissions
- Dogs (associated with owners)
- Categories and Lessons (linear structure, not hierarchical)
- Progress tracking with detailed session data
- Achievements and notifications system
- Reviews and feedback mechanisms

### Implementation Phases
1. **Phase 1**: Project setup and authentication
2. **Phase 2**: Core lesson system and progress tracking
3. **Phase 3**: Communication features and trainer tools
4. **Phase 4**: Analytics and payment system

## Key Design Decisions
- **Linear lesson structure**: Categories are flat, not hierarchical for simplicity
- **YouTube integration**: Lessons use embedded YouTube videos rather than custom video hosting
- **Role-based access**: Three distinct user types with different permissions
- **Real-time communication**: Socket.io for trainer-student messaging
- **Progress granularity**: Detailed session tracking with success/failure counts and notes

## Development Priorities
According to the backlog, priorities are:
- **P0**: Authentication, lesson management, progress tracking (249 story points total)
- **P1**: Communication features, trainer content management
- **P2**: Analytics and reporting
- **P3**: Payment and subscription system

## Security Considerations
- HTTPS enforcement with input validation
- File upload restrictions and virus scanning
- Rate limiting on API endpoints
- RBAC for all sensitive operations
- GDPR compliance for data handling
