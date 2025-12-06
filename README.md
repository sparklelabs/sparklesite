# sparklesite
Repo for files relating to the new site

1. Run "lektor server" from lektorsite/sparklelabs/
2. Point browser to 127.0.0.1:50000

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