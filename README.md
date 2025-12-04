<div align="center">

  <img src="https://rebelliousx.github.io/Hex-Editor-Pro/icon.svg" alt="Hex Editor Pro Logo" width="120" height="120" onerror="this.src='https://rebelliousx.github.io/Hex-Editor-Pro/icon.svg'"/>

  # Hex Editor Pro

  **A High-Performance, Professional Grade Hex Editor built as PWA (Progressive Web Application)**

  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  [![Platform](https://img.shields.io/badge/Platform-Web%20%7C%20PWA%20%7C%20Windows-blueviolet)](https://rebelliousx.github.io/Hex-Editor-Pro/)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

  <p align="center">
    <a href="#features">Features</a> •
    <a href="#installation--usage">Installation</a> •
    <a href="#keyboard-shortcuts">Shortcuts</a> •
    <a href="#technical-details">Architecture</a>
  </p>
</div>

---

## 📖 Overview

**Hex Editor Pro** is a powerful, browser-based binary file editor designed for performance and precision. Unlike standard web text editors, Hex Editor Pro utilizes a **Piece Table** data structure, allowing it to handle large files efficiently without consuming massive amounts of memory.

Built as a **Progressive Web App (PWA)**, it offers a native desktop experience with offline capabilities, very lightweight on system resources, and advanced features like side-by-side file comparison and complex pattern searching. All of that while having a very pleasing UI visuals.

## ✨ Features

### 🚀 Core Capabilities
*   **Large File Support:** Open and edit files efficiently using piece-table buffer management.
*   **Side-by-Side Comparison:** Compare two binary files visually with highlighted differences.
*   **Insert & Overwrite Modes:** seamless toggling between insertion and strict overwriting.
*   **Virtual Scrolling:** Smooth rendering performance regardless of file size.

### 🛠️ Editing & Analysis
*   **Advanced Search:** Find data using Hex sequences or ASCII text (case-sensitive options available).
*   **Search Scope:** Search within the active file, the comparison file, or both simultaneously.
*   **Replace All:** Pattern matching and bulk replacement.
*   **Jump to Offset:** Quickly navigate to specific memory addresses.
*   **Clipboard Management:** Intelligent Copy/Paste for Hex, Text, and Offsets.

##### ℹ️ NOTE: We put a limitation on the clipboard to be 128MB. If you attempt to select range of bytes then copy or cut those selected bytes, you will get error message. 

### 🎨 Customization
*   **Theming:** Toggle between Dark and Light modes. Both themes utilize glassmorphism visuals (CSS Glass UI).
*   **Visual Control:** Adjustable font sizes, row heights padding, and bytes-per-row.
*   **Color Grading:** Customizable gradients for selection, hover, and diff highlighting.
*   **Encoding Support:** Decode text as Windows-1252 (Windows ANSI), CP437 (DOS-ASCII), Macintosh, or EBCDIC.

---

## 📥 Installation & Usage

Hex Editor Pro is designed to be installed as a PWA for the best experience, but it can also be run locally for development.

### 1. Progressive Web App (Recommended)
For the full native experience (independent window, offline support, start menu icon), install the app via your browser.

1.  Navigate to my **[Github Page for Hex Editor Pro](https://rebelliousx.github.io/Hex-Editor-Pro/)** using Chrome, Edge, or Brave.
2.  Look for the **"App Available"** icon in the address bar (or check the browser menu).
3.  Click **"Install Hex Editor Pro"**.

### 2. Microsoft Store (Coming Soon)
We are currently working on packaging Hex Editor Pro for the Microsoft Store for seamless updates and Windows integration. Stay tuned! 🚀

### 3. Run Locally (Development)
If you wish to run the app without installing it or for development purposes:
1.  Clone this repository or just download the `index.html` file.
2.  Simply open the `index.html` file in any modern web browser.

##### ℹ️ NOTE: The app is designed to be fully working in offline mode. Everything is self contained, HTML/JavaScript/CSS in one file and even the icon of the app. The manifest and Service Worker (`manifest.json` and `sw.js`) files are for installing the app as PWA, they are not needed to run locally and offline.

---

## ⌨️ Keyboard Shortcuts

| Action | Shortcut | Description |
| :--- | :--- | :--- |
| **Undo** | `Ctrl` + `Z` &nbsp;&nbsp;&nbsp;| Undo the last action |
| **Redo** | `Ctrl` + `Y` | Redo the last undone action |
| **Find** | `Ctrl` + `F` | Open the Find dialog |
| **Find Next** | `F3` | Repeat previous search |
| **Replace** | `Ctrl` + `R` | Open the Replace dialog |
| **Go To** | `Ctrl` + `G` | Jump to specific offset |
| **Save As** | `Ctrl` + `S` | Save current file to disk |
| **Open** | `Ctrl` + `O` | Open a file |
| **Copy Hex** | `Ctrl` + `C` | Copy selected bytes as Hex string |
| **Copy Text** | `Ctrl` + `T` | Copy selected bytes as Text |
| **Paste Overwrite** | `Ctrl` + `V` | Paste and overwrite existing data in current selected pane (Hex or Text) |
| **Paste Insert** | `Ctrl` + `I` | Paste and insert data at selected byte offset (Hex or Text)  |
| **Delete** | `DEL` | Deletes selected byte or range of bytes.  |


#### ℹ️ NOTE: Paste Insert and Delete will change the file size.

#### ℹ️ NOTE: You can select multiple bytes by holding `SHIFT` key while clicking.

---

## 🔧 Technical Details

**The Piece Table Data Structure**
Hex Editor Pro solves the problem of editing large strings/files in a browser by implementing a Piece Table. Instead of holding the entire file in a single mutable string (which is slow), the file is represented as a sequence of "pieces" pointing to either:
1.  The original immutable file buffer (read-only).
2.  An append-only add buffer (for new edits).

This allows for insertion and deletion operations to be extremely fast, regardless of the file size, as we only modify the table of pointers, not the massive data blob itself.

---

## 📜 License

This project is licensed under the **MIT License**.
Copyright © 2026 Thaer Razeq.

---

<div align="center">
  <sub>Built with ❤️ by <a href="https://github.com/RebelliousX">RebelliousX</a></sub>
</div>