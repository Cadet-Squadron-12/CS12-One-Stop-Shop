# CS-12 One Stop Shop: handover guide

This site is built to keep running after the people who made it graduate, with no paid tools, no coding and no
AI assistant. Nothing about it belongs to one person. Three things keep it alive, and each has more than one key holder:

| What | Where | Who holds the keys |
|---|---|---|
| **Who can get in and who runs it** | The site's own access list (Admin → People & access) | **Admins** (at least 2, from 2+ classes) |
| **The data and sign-in** | Firebase project `cs12-website` (free plan) | **Firebase owners** (2+ cadets from different classes + 1 permanent-party backstop) |
| **The web address and files** | GitHub org `cadet-squadron-12` | **GitHub org owners** (same rule) |

Plus one thing only people can carry: the **A4/6 passcode**. It's passed in person at every turnover and can't be recovered.

## Every semester (or whenever command staff changes)

Open **Admin 🔑 → New semester → Start a new checklist** and work the 10 steps:

1. Download a backup (save it to the squadron's private Teams files).
2. Paste the new UMD from Excel. The site checks that key jobs and sections are still named the way it expects.
3. Staff access follows the UMD: Squadron Command Staff get staff, everyone else member. Review and apply.
4. Remove the graduated class (Admin → People & access → By class).
5. Hand off site admin: two or more admins, from at least two classes.
6. Reset last semester's CQ sign-ups, tasker check-offs, SDO schedule and pairings.
7. Outgoing staff write their page in **Squadron Info → Continuity book**.
8. A4/6 passcode handed over in person, then changed by the new A4/6.
9. Update leadership contacts and links.
10. Outside the site: add new admins as Firebase **Owners** and GitHub org **Owners**; remove graduates.

## If something goes wrong

- **Someone deleted something:** Admin → Backups → Restore, tick only that area.
- **No admins left:** a Firebase owner opens Firestore → `members` → a person's email → set `role` to `admin`.
- **No one can open the Firebase project:** create a new free Firebase project, turn on Email/Password sign-in
  and Firestore, paste its settings into `config.js`, publish `firestore.rules`, add yourself in Firestore →
  `members` (document id = your email, fields `role: admin`, `name: Your Name`), sign in, then restore the latest backup.
- **"Used today's free allowance" banner:** nothing is lost. It resets about 1 AM Mountain. If it happens often,
  move the project to Blaze with a $5 budget alert (the free allowance stays free).

## Updating or fixing the site

See `MAINTAINING.md`. Everything is done in a web browser with free accounts; no coding, paid tools or AI assistant needed.
Most changes happen inside the site (Admin 🔑 → Site settings handles UMD name changes, flight names and deadlines).
After any change, run **Admin 🔑 → Site health & handbook → Run a self-test**.
