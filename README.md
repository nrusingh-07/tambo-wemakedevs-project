# tambo-wemakedevs-project

This repository contains a **Tambo.ai experiment built during the WeMakeDevs hackathon**.

The project focuses on **component-level UI rendering controlled by AI through chat interactions**.  
Instead of building pages or dashboards, the goal is to understand how **Tambo orchestrates real React components** based on user conversation and structured schemas.

---

## Project Overview

This project was created to explore **how AI can control UI at the component level**, not just generate text or code.

Using **Tambo.ai**, the application allows a user to interact through a chat interface, where the AI decides **which React component to render** based on the conversation. The UI is driven by intent, not by routes or navigation.

The focus of this project is learning:
- how Tambo integrates with a real Next.js app
- how UI components behave when rendered by AI
- where things break and why

---

## What Is Implemented

This project intentionally keeps the scope small and focused.

### 1. UserCard Component
A simple and flexible UI component that displays basic user information such as:
- name
- role
- short description

This component is easy for AI to render and worked reliably during testing.

### 2. Graph Component
A data visualization component used to render structured numerical data.

This component is stricter and helped reveal real-world challenges such as:
- schema mismatch
- incorrect data types from AI output
- array length inconsistencies

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

## Demo Flow

### Run the project locally

```bash
npm install
npm run dev

Open the application in your browser:
http://localhost:3000/chat

Try interacting with the chat

Example interactions:

Asking about a user → renders the UserCard component

Asking for data visualization → attempts to render the Graph component

The UI updates dynamically based on conversation.
Real Issues Faced & Learning

This project documents real problems and real learning, not just success.

Issue 1: UserCard worked, Graph failed

UserCard rendered without issues

Graph caused validation or runtime errors

Reason:

Graph expects strict numeric data

AI responses sometimes returned strings instead of numbers

Data shape did not always match expectations

Learning:

AI-generated data must be validated

Data-heavy components need stricter schemas

Not all UI components are equally AI-friendly

Issue 2: Confusion about structure

Initial confusion around pages vs components

Resolved by focusing only on components

Learning:

Tambo controls components, not application routing

Thinking in components aligns better with Tambo’s design

Issue 3: Git identity confusion

Incorrect commit author due to multiple Git accounts

Fix:

Corrected Git configuration

Cleaned repository setup

Learning:

Commit hygiene matters, especially in hackathons

Tech Stack

Next.js (App Router)

React

TypeScript

Tambo.ai

Tailwind CSS

Zod (for schema validation)

Project Structure (Relevant Parts)
src/
├── app/
│   └── chat/              # Chat-based entry point
├── components/
│   ├── ui/
│   │   └── UserCard.tsx
│   └── graph.tsx
├── lib/
│   └── tambo.ts
Purpose of This Project

This project is:

a learning experiment

a practical exploration of Tambo.ai

a hackathon-ready prototype

It is not intended to be a full application or production system.

Future Improvements

Normalize AI output before rendering Graph

Improve schema validation and error handling

Add one more AI-controlled UI component

Improve prompt-to-component reliability

Final Note

This repository represents hands-on learning with Tambo.ai, including real challenges, mistakes, and understanding gained during development.

The focus was not on building many features, but on understanding how AI-driven UI actually behaves in practice.