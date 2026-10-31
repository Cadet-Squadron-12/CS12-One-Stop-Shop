# CS-12 One Stop Shop: Firebase setup (one time, about 15 minutes)

## 1. Create the Firebase project
1. Go to https://console.firebase.google.com and sign in with your Google account.
2. Click **Create a project** and name it `cs12-one-stop-shop`. Google Analytics: off. It stays on the free Spark plan.

## 2. Turn on sign-in
1. Left menu: **Build → Authentication → Get started**.
2. Under **Sign-in method**:
   - Enable **Google**, pick your email as the support email, and click **Save**.
   - Enable **Email/Password** (the first switch) and click **Save**. Leave **Email link** off: the free plan sends only 5 of those per day.
3. Go to **Authentication → Settings → Authorized domains → Add domain** and enter `YOURGITHUBNAME.github.io`.

## 3. Create the database and lock it down
1. Left menu: **Build → Firestore Database → Create database**. Choose **Production mode**, location `nam5 (United States)`.
2. Open the **Rules** tab, delete everything, paste in the whole `firestore.rules` file, and click **Publish**.

## 4. Connect the website
1. Click the gear icon, then **Project settings → General → Your apps → Web app (`</>`)**. Name it `CS12 site`. Don't turn on Hosting.
2. Copy the six values from `firebaseConfig` into `config.js` (replace each `PASTE_…`).

## 5. Upload to GitHub
1. In your `cs12` repo, upload `index.html`, `config.js`, `logo.png`, `letterhead.jpg`, `form99.pdf`, `form10.pdf` and `fpplan.pdf`. Replace the old ones.
2. Do **not** upload `cs12-data-import.json`. It holds the roster, phone numbers and the door code.

## 6. Make yourself the first admin, then move the data over
1. Firestore Database → **Data** → **Start collection** `members` → Document ID = your email (lowercase) → fields `role` = `admin`, `name` = your name. (This is also how anyone fixes "no admins left" later.)
2. Open the site, create your password (or use **Or sign in with a Google account**), and open **Admin 🔑**.
3. Under **People & access → Import squadron data**, choose `cs12-data-import.json` (first setup only).
4. The A4/6 passcode is the same as before.

## 7. Let people in
- On **Admin → People & access**, paste everyone's squadron emails into **Add a list of people** (add "staff" to a line for edit rights).
- Share the link. The first time, each person clicks **First time? Create your password**, then confirms their email from the message Firebase sends. After that they just sign in.
- Firebase allows about 100 new accounts per hour from one network. Roll it out a class at a time.

## 8. Hand it off
See `HANDOVER.md` and `MAINTAINING.md`. In short: two or more admins from different classes, the same for Firebase and GitHub owners,
and the **Admin → New semester** checklist every turnover. No email address is written into the code or the rules.

## Capacity on the free plan (about 100 users)
- Daily limits: 50,000 reads, 20,000 writes, 1,000 confirmation emails, 150 password resets.
- Each tab downloads only what it shows, and only when it's opened. Opening the site costs about 10 reads.
- The eSSS tracker streams only trips that aren't over yet; the calendar fetches an older month once when you open it.
- My Squadron loads only open leader tasks and action items.
- A browser tab left in the background for 10 minutes stops listening until the person comes back.
- Staff browsers tidy the CQ and tasker records once a day so they stay small.
- If the day's allowance ever runs out, the site shows the last saved copy and says so, then recovers overnight.
- If you outgrow the free plan, switching the project to Blaze (pay as you go) keeps the same free allowance and only charges past it. Set a budget alert if you do.

## Security checklist
- Every Firebase and GitHub owner should turn on **2-Step Verification** (myaccount.google.com/security). Whoever controls those accounts controls the site.
- Keep the staff and admin lists short, and change people on Admin → People & access the day they leave a position. Removal ends their session immediately.
- Tell everyone: the only real address is **cadet-squadron-12.github.io**, and staff will never ask for a password.
- Built in:
  - 12+ character passwords, with common ones blocked.
  - A wait after repeated wrong passwords.
  - Staff signed out after 12 hours away, members after 30 days.
  - Sign-out wipes saved drafts and offline data from that computer.
  - The page won't run inside another site's frame.
  - A content security policy, link and photo filtering, and database rules checked on Google's servers.
- Optional: in Firebase, use **Firestore → Rules → Rules Playground** to confirm a member can't delete the roster.
