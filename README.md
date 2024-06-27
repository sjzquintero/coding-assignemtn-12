# React Component Library

This is a React component library created using React and Storybook. It contains a set of reusable UI components.

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

You need to have Node.js and npm (or yarn) installed on your machine.

### Installing

1. Clone the repository to your local machine.

```
git clone https://github.com/sjzquintero/coding-assignemtn-12
```

2. Install dependencies using npm.

```
npm install
```

### Running Storybook

To run Storybook and view the components in isolation, use the following command:

```
npm run storybook
```

This will start the Storybook server and open it in your default web browser.

### Running Tests

To run tests, use the following command:

```
npm test
```

This will execute all tests in the project.

### Building

To build the component library for production, use the following command:

```
npm run build
```
### Running the Application with Docker

To run the web application on `localhost:8083` using Docker, follow these steps:

1. Build the Docker image.

docker build -t jimenez_santiago_coding_assignment12 .

2. Run the Docker container.

docker run -d -p 8083:8083 --name jimenez_santiago_coding_assignment12 jimenez_santiago_coding_assignment12