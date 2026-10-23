# sparklesite
Repo for files relating to the new site

## Installation

Lektor requires Python 3. You can install it using any of the following methods:

### Option 1: Using pipx (Recommended)
```bash
pipx install lektor
```

### Option 2: Official installer script (macOS / Linux)
```bash
curl -sf https://www.getlektor.com/installer.py | python3
```

### Option 3: In a Python virtual environment
```bash
python3 -m venv .venv
source .venv/bin/activate
pip install lektor
```

---

## Running Locally

1. Navigate to the project directory:
   ```bash
   cd lektorsite/sparklelabs
   ```
2. Start the local development server:
   ```bash
   lektor server
   ```
3. Open your browser and go to `http://127.0.0.1:50000` (or `http://127.0.0.1:5000`).

---

## `lektorsite/sparklelabs/` Directory Overview

This directory contains the core components of the Lektor static site project.

*   **`assets/`**: Holds static assets like compiled CSS, images, and fonts that are directly copied to the final build.
*   **`configs/`**: Contains configuration files for Lektor plugins and other project-wide settings.
*   **`content/`**: Stores the website's raw content in `.lr` (Lektor Markdown) files, organized in a folder hierarchy that defines the site structure.
*   **`models/`**: Defines the data schemas or "models" for different types of pages (e.g., a product, a lesson) using `.ini` files.
*   **`templates/`**: Contains the Jinja2 HTML templates that render the content from the `content/` directory into web pages.
*   **`lektorpath.sh`**: A utility shell script to open the project's build output directory.
*   **`sparklesitelek.lektorproject`**: The main Lektor project file, identifying the directory as a Lektor project and holding top-level configuration.
*   **`test.css`**: A cascading style sheet likely used for isolated style tests.