# Maintaining the CS-12 One Stop Shop (no coding or AI needed)

This guide assumes you have a web browser and the free accounts listed in HANDOVER.md, and nothing else.
No programming, no paid tools, no AI assistant.

## 1. Almost everything is changed inside the site

| To change… | Go to |
|---|---|
| Who can sign in, staff, admins | Admin 🔑 → People & access |
| The roster (one person) | Roster tab → Edit on that row |
| The whole roster at the start of a semester | Admin 🔑 → New semester → step 2 (paste the UMD from Excel) |
| A UMD that names jobs or sections differently | Admin 🔑 → Site settings → UMD name translations |
| Flight names, OCONUS deadlines | Admin 🔑 → Site settings |
| Weekly outlook, SDO, CQ, taskers | Sq Staff tabs (paste from Excel) |
| A-staff weekly pattern | Sq Staff → Chief of Staff |
| Leadership names, phones, emails, links | Squadron Info → Edit |
| A4/6 rates, caps, POCs, passcode | A4/6 → Settings |
| Notes for the next person in a job | Squadron Info → Continuity book |

Class years and class colors roll over by themselves every June. Nothing has to be edited each year.

After any change, open **Admin 🔑 → Site health & handbook → Run a self-test**. It tells you in plain words
what's wrong and how to fix it.

## 2. The files on GitHub

The repository is `github.com/cadet-squadron-12/CS12-One-Stop-Shop`. GitHub Pages turns it into the website.

| File | What it is | Do you ever change it? |
|---|---|---|
| `index.html` | The whole site | Only to install an update or fix wording |
| `config.js` | Connects the site to the Firebase project | Only if you move to a new Firebase project |
| `firestore.rules` | The security rules (a copy; the live one is in Firebase) | Only with an update that says so |
| `logo.png`, `letterhead.jpg`, `form99.pdf`, `form10.pdf`, `fpplan.pdf` | Pictures and blank forms | If the logo or a blank form changes |
| `HANDOVER.md`, `SETUP.md`, `MAINTAINING.md` | These guides | Keep them current |

**Never upload** a backup file (`CS12 hub backup ….json`) or `cs12-data-import.json`. Everything in this repository is public.

## 3. Install an updated index.html

1. Sign in to github.com and open the repository.
2. Click **Add file → Upload files**. Drag in the new `index.html` (and any other changed files).
3. Under "Commit changes", type a short note (for example "Spring 2027 update"), then click **Commit changes**.
4. Wait 2–5 minutes, open the site, and press Ctrl+Shift+R (Cmd+Shift+R on a Mac) to load the new version.
5. Run the self-test (Admin 🔑 → Site health & handbook).

If an update also includes a new `firestore.rules`:
1. Open `firestore.rules` on GitHub, click the **copy** icon (top right of the file).
2. In console.firebase.google.com → your project → **Firestore Database → Rules**, select everything, paste, click **Publish**.

## 4. Undo a bad update

GitHub keeps every version ever uploaded.

1. On GitHub, click `index.html`, then **History** (clock icon, top right).
2. Find the last version that worked (check the dates and notes), click it, then click **…** → **View file**.
3. Click **Raw**, then save the page as `index.html` (right-click → Save as, or Ctrl+S).
4. Upload that file as in section 3.

Security rules: Firebase → Firestore Database → **Rules**. The list on the left holds every published version.
Click the last good one and publish it.

Data: Admin 🔑 → Backups → Restore, and tick only the area that went wrong.

## 5. Fix a typo or wording

1. On GitHub, click `index.html`, then the **pencil** icon (Edit).
2. Press Ctrl+F (Cmd+F) and search for the words you want to change.
3. Change only the words between the quote marks. Don't delete quote marks, commas or brackets.
4. Click **Commit changes**. If the site breaks afterwards, undo it (section 4).

## 6. Things that can't be changed from inside the site

These need someone comfortable reading code, using the guide comments inside `index.html` (search for `=====`):

- New tabs or features, or a change to how something is calculated.
- A new version of an official PDF form (the site fills in specific fields of form99.pdf, form10.pdf and fpplan.pdf).
  If the Air Force changes a form, the site will still fill the old one. Until someone updates it, people can fill
  in the new form by hand.

Any cadet who knows a bit of HTML/JavaScript can work on it. The code is plain JavaScript with no build tools,
frameworks or installs: edit `index.html`, upload, run the self-test.

## 7. Limits of the free plan

- About 50,000 record downloads and 20,000 saves a day for the whole squadron. The site is built to stay well
  under that. Check Firebase → Firestore Database → **Usage** now and then.
- About 100 new sign-ups per hour from one network, and 1,000 confirmation emails a day. Add a new class in batches.
- If a day's allowance runs out, the site shows the last saved copy until about 1 AM Mountain. Nothing is lost.
