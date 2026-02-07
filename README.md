# tambo-wemakedevs-project

This repository contains a **Tambo.ai experiment built during the WeMakeDevs hackathon**.

The project focuses on **component-level UI rendering controlled by AI through chat interactions**.  
Instead of building pages or dashboards, the goal is to understand how **Tambo orchestrates real React components** using structured schemas and user conversations.

---

## Project Overview

This project explores **how AI can control UI at the component level**, not just generate text or code.

Using **Tambo.ai** with a **Next.js** application, users interact through a chat interface.  
Based on the conversation, the AI decides **which registered React component to render**.

The UI is driven by **intent**, not by routes or manual navigation.

---

## What Is Implemented

This project intentionally keeps the scope **small and focused**.

### UserCard Component
A simple and flexible UI component that displays:
- name
- role
- short description

This component worked reliably when rendered by AI.

### Graph Component
A data visualization component used to render structured numerical data.

This component is stricter and helped expose challenges such as:
- schema mismatch
- incorrect data types
- array length inconsistencies

---

## How to Run

## Install Dependencies
npm install

### Prerequisites
- Node.js (v18 or later recommended)
- npm
- A valid **Tambo.ai API key**

### Environment Setup

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_TAMBO_API_KEY=your_api_key_here

---

##Start Development Server
npm run dev

---

##Open in Browser
--Once the server is running, open the application in your browser:
http://localhost:3000/chat

---

## How the Application Works

There is **no traditional navigation flow**.

The entire UI is controlled through chat interaction:

1. User opens the chat interface
2. User types a message
3. Tambo.ai interprets the intent
4. Based on the intent, a registered UI component is rendered

The chat interface acts as the **single control surface** for the UI.

---


## Example Prompts

Try these in the chat UI:

- “Show a user profile”
- “Display a user card with name and role”
- “Visualize some sample data”
- “Render a graph using numbers”

Based on the prompt, **Tambo.ai attempts to render the appropriate registered component**.

---

## Issues Faced & Learning

This project intentionally documents **real issues and real learning**, not just successful outcomes.

### 1. UserCard worked, Graph failed

**What happened**
- The UserCard component rendered correctly through chat prompts.
- The Graph component often caused validation or runtime errors.

**Why it happened**
- Graph requires **strict numeric data**.
- AI responses sometimes returned strings instead of numbers.
- The data shape did not always match the expected schema.

**What I learned**
- AI-generated data must be validated before rendering.
- Data-heavy UI components need stricter schemas.
- Simpler components are more reliable when controlled by AI.

---
## Project Structure

The project follows a **simple and component-focused structure**, keeping only the parts relevant to AI-controlled UI rendering.

```text
src/
├── app/
│   └── chat/              # Chat-based entry point for AI interaction
├── components/
│   ├── ui/
│   │   └── UserCard.tsx   # AI-rendered user information component
│   └── graph.tsx          # AI-rendered data visualization component
├── lib/
│   └── tambo.ts           # Tambo configuration and component registration

## How to Add a New Component

To add a new AI-controlled UI component to the project:

1. **Create a React component**  
   Build a reusable React component with clearly defined props.

2. **Define a schema for the component**  
   Use **Zod** to describe the expected shape and data types of the component props.

3. **Register the component with Tambo**  
   Add the component and its schema to `lib/tambo.ts` so Tambo.ai can render it.

4. **Run the application**  
   Start the development server and open the chat interface.

5. **Test using chat prompts**  
   Interact with the chat UI and verify that the new component renders correctly based on user prompts.

This workflow ensures that new components remain **safe, predictable, and compatible with AI-driven rendering**.

## Purpose of the Project

The purpose of this project is to serve as a **learning-focused experiment** exploring how **AI can directly control real UI components** instead of only generating text or code.

This project aims to:
- Understand how **Tambo.ai integrates with a real Next.js application**
- Explore **component-level UI rendering** driven by chat interactions
- Identify limitations and edge cases when AI generates structured UI data
- Learn best practices for **schema-controlled AI rendering**

The project is designed as a **hackathon prototype and reference implementation**, not as a production-ready system.



---


##License
MIT License
---

### Final step (once)
git add README.md
git commit -m "docs: structure README for clear project flow"
git push