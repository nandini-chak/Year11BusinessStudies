# Year 11 Business Studies

Static classroom site for My Dream Australian Academy. Hosted with GitHub Pages from the repository root.

## Course shape

NESA Preliminary Business Studies has three topics. Each topic is **one HTML presentation**.

| Topic | Folder | Status |
| --- | --- | --- |
| 1 Nature of Business | `topics/topic-1-nature-of-business/` | Presentation ready for review |
| 2 Business Management | `topics/topic-2-business-management/` | Structure only |
| 3 Business Planning | `topics/topic-3-business-planning/` | Structure only |

Chapter order follows Cambridge Business Studies Stage 6 Year 11, Fifth Edition, which is grouped to match the NESA topics.

## How to add the next topic

1. Copy `topics/topic-1-nature-of-business/index.html` as the pattern.
2. Keep the chrome (home link, chapter jumps, previous / next, study view).
3. Link the shared files: `../../assets/deck.css` and `../../assets/deck.js`.
4. For each chapter, in this order:
   - key words first
   - teaching slides with a picture or diagram that explains the point
   - a short chapter summary
   - original HSC-style questions: multiple choice, a short answer, and a case study, each with a show/hide answer
5. Write original wording. Do not paste the textbook.
6. On the course home (`index.html`), change that topic’s button from “Preview structure” to “Open Topic …”.

## Slide controls

Arrow keys, Space, Page Up / Page Down, and the on-screen buttons move between slides. **Study view** shows every slide on one scrolling page so students can revise. **Presentation view** shows one slide at a time.

## Pages

GitHub Pages should serve the `main` branch from `/` (the repository root). The public address is `https://nandini-chak.github.io/Year11BusinessStudies/`.
