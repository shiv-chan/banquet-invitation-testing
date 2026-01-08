# 💌 Banquet Invitation - QA Testing Project

This repository contains the full Quality Assurance lifecycle for the **Banquet Invitation** web application. It demonstrates a professional approach to manual and automated testing, covering everything from requirement analysis to bug reporting.

## 🚀 Quick Links
- **Live Application:** [View Site](https://kaho-and-jade-banquet-invitation.vercel.app/)
- **Test Plan:** [Read Strategy](./docs/test-plan.md)
- **Test Cases:** [View Step-by-Step Tests](./docs/test-cases.md)
- **Latest Execution Report:** [View Pass/Fail Results](./execution-reports)

---

## 🛠️ Testing Methodology
For this project, I implemented a **Risk-Based Testing (RBT)** strategy. I prioritized the core business logic—specifically the guest search and RSVP submission flows—to ensure maximum reliability for the end user.

### Key Focus Areas:
- **Data Integrity:** Ensuring RSVPs are correctly saved and pre-populated during edits.
- **Complex Logic:** Verifying state management for accompanying guests.
- **Accessibility:** Ensuring the event is inclusive via keyboard navigation and ARIA standards.

---

## 📂 Project Structure
To maintain a professional STLC (Software Testing Life Cycle) workflow, the project is organized as follows:

- `/docs`: Contains foundational documents including the Test Plan, Test Scenarios, and Test Cases.
- `/execution-reports`: Contains time-stamped reports showing actual results, evidence, and status (Pass/Fail) from specific test runs.
- `/automation`: Contains Playwright scripts for high-ROI regression tests.

---

## 🤖 Automation Overview
I utilized **Playwright** to automate the "Smoke Test" suite.
- **Goal:** To verify that the "Happy Path" remains functional after every code deployment.
- **Coverage:** Landing page load, valid guest search, and successful form submission.

*For instructions on how to run the automated tests locally, please see the [Automation README](./automation/README.md).*

---

## 👤 Contact & Author
**Kaho Shibuya** *Quality Assurance Engineer*<br>
[LinkedIn](https://www.linkedin.com/in/kaho-shibuya/)