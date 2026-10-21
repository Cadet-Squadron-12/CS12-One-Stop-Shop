# CS-12 One Stop Shop: Firebase setup (one time, about 15 minutes)

## 1. Create the Firebase project
1. Go to https://console.firebase.google.com and sign in with sophiekent04@gmail.com.
2. Click **Create a project** and name it `cs12-one-stop-shop`. Google Analytics: off. It stays on the free Spark plan.

## 2. Turn on sign-in
1. Left menu: **Build → Authentication → Get started**.
2. Under **Sign-in method**:
   - Enable **Google**, pick your email as the support email, and click **Save**.
   - Enable **Email/Password**, also switch on **Email link (passwordless sign-in)**, and click **Save**.
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

## 6. Move the data over
1. Open the site and choose **Sign in → Continue with Google** with sophiekent04@gmail.com. You're the owner automatically.
2. Open the **Access 🔑** tab, go to **Import squadron data**, and choose `cs12-data-import.json`.
3. The A4/6 passcode is the same as before.

## 7. Let people in
- Share the link. Cadets sign in with Google or an emailed link, then click **Request access**.
- Approve them on the Access tab. Choose **As staff** for command staff and anyone who should edit the schedules and roster.
