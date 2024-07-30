# EliteCode: https://elite-code-tau.vercel.app/

EliteCode is a web platform designed to provide a seamless coding experience similar to LeetCode. Developed using Next.js, Tailwind CSS, TypeScript, and Firebase, it offers functionalities such as user authentication, data storage, and an integrated compiler.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Login and Signup**: Secure user authentication using Firebase.
- **User Data Storage**: Utilize Firebase database for storing user information and progress.
- **Integrated Compiler**: Code directly on the platform with real-time feedback.
- **User Interface**: Designed to closely resemble LeetCode for a familiar user experience.

## Tech Stack

- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Backend**: Firebase

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm or yarn
- Firebase account

### Installation

1. Clone the repository
    ```sh
    git clone https://github.com/Soulistic/elitecode.git
    ```
2. Navigate to the project directory
    ```sh
    cd elitecode
    ```
3. Install dependencies
    ```sh
    npm install
    ```
    or
    ```sh
    yarn install
    ```

### Setup Firebase

1. Create a Firebase project on the [Firebase Console](https://console.firebase.google.com/).
2. Add your Firebase configuration to the project.
3. Create a `.env.local` file and add your Firebase credentials:
    ```env
    NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
    ```

## Usage

1. Start the development server
    ```sh
    npm run dev
    ```
    or
    ```sh
    yarn dev
    ```
2. Open your browser and navigate to `http://localhost:3000`.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Your Name - [@your_twitter](https://twitter.com/your_twitter) - your_email@example.com

Project Link: [https://github.com/Soulistic/elitecode](https://github.com/Soulistic/elitecode)
![Homepage](/Image/image.png)
![SignIn](/Image/Signin.png)
![Forgot Password](/Image/ForgotPassword.png)
![SignUp](/Image/SignUp.png)
![LoggedInHomepage](/Image/LoggedInHomePage.png)
![ProblemPlayground](/Image/ProblemPlayground.png)
![playgroundAction](/Image/Playgroundaction.png)
![video solution](/Image/VideoSolution.png)