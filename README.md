# **File Storage Web App**

This is a file storage web application that enables users to securely upload, manage, and archive files using Google Cloud Storage. The app provides an easy-to-use interface with two file states (archive and regular file saving) and a clean design using TailwindCSS.

## **Features**

- Upload, download, and delete files.
- Two file states: **Regular File Saving** and **Archive State**.
- Google Cloud Storage integration for file management.
- File metadata management (name, size, type, etc.) using **PostgreSQL** with **Drizzle ORM**.
- **Light and dark mode** theme support with **Burnt Orange** as the central color.
- User authentication with JWT.
- Responsive design for mobile and desktop.

---

## **Tech Stack**

- **Frontend**: Next.js, TailwindCSS
- **Backend**: Node.js, Google Cloud Storage
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: JWT (JSON Web Tokens)
- **Hosting**: Vercel (for deployment)
  
---

## **Installation & Setup**

### Prerequisites

Ensure you have the following tools installed on your local machine:

- **Node.js** (v16+)
- **PostgreSQL** database
- **Google Cloud account** (for storage)
- **Git** (for version control)

### 1. Clone the repository

```bash
git clone https://github.com/your-username/file-storage-app.git
cd file-storage-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory and configure the following environment variables:

```bash
NEXT_PUBLIC_GOOGLE_STORAGE_BUCKET=<Your Google Cloud Storage bucket name>
DATABASE_URL=<Your PostgreSQL database URL>
JWT_SECRET=<Your JWT secret key>
```

### 4. Database Setup

Make sure your PostgreSQL database is running and set up the schema using **Drizzle ORM**.

```bash
npm run db:setup
```

### 5. Run the development server

```bash
npm run dev
```

Navigate to `http://localhost:3000` in your browser to view the app.

---

## **Usage**

1. **Sign Up/Login**: Create a new account or log in using your credentials.
2. **Upload Files**: Use the file upload feature to save files. Choose between regular saving and archiving.
3. **File Management**: Browse uploaded files, filter by tags, and switch between archived and regular files.
4. **Download/Delete Files**: Download your files or remove unwanted files directly from the app.

---

## **Deployment**

To deploy this project, follow the [Vercel deployment guide](https://vercel.com/docs/concepts/deployments), or simply push your changes to the **main** branch on GitHub, and the app will automatically deploy via the Vercel integration.

---

## **Contributing**

Feel free to fork the repository, submit issues, or contribute features via pull requests. Ensure that all code changes are well-tested before submitting.

---

## **License**

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

## **Contact**

If you have any questions or need further assistance, please reach out to the maintainer at [thedevelophantom097@gmail.com].
