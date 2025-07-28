📘 README.md
markdown
Copy
Edit
# 🔐 Catalog Placements Assignment - Shamir's Secret Recovery

This project implements a simplified version of **Shamir's Secret Sharing** algorithm using **Lagrange Interpolation** in JavaScript (Node.js). The goal is to recover the constant term `c` (secret) of an unknown polynomial, given encoded (x, y) points in various bases.

## 🧮 Problem Statement

You're given a polynomial of degree `m`, requiring `k = m + 1` points to reconstruct it.

Each input is provided in JSON format with:
- Keys representing the x-coordinate
- Encoded y-values in a given base

The task is to:
1. Read and parse the JSON
2. Decode y-values from their respective bases
3. Apply **Lagrange Interpolation** at x = 0 to recover the constant term `c`

---

## 📂 File Structure

├── main.js # Core logic (decoding + interpolation)
├── testcase1.json # First input file
├── testcase2.json # Second input file
└── README.md # Project explanation and usage

yaml
Copy
Edit

---

## 🧠 Concepts Used

- 🔢 Base conversion using `parseInt(value, base)`
- 📈 Lagrange Interpolation:
  
  \[
  f(0) = \sum_{j=0}^{k-1} y_j \cdot \prod_{\substack{0 \le m < k \\ m \ne j}} \frac{-x_m}{x_j - x_m}
  \]

---

## 🚀 How to Run

### 1. Clone or Download

```bash
git clone https://github.com/your-username/shamir-secret-recovery-js.git
cd shamir-secret-recovery-js
2. Add Input Files
Ensure the following files are present:

testcase1.json

testcase2.json

Use the provided JSON structure from the assignment.

3. Run the Code
bash
Copy
Edit
node main.js
🖨️ Example Output
rust
Copy
Edit
Secret for testcase1.json: 10
Secret for testcase2.json: 238128179693112534769
✅ Requirements
Node.js v14 or higher



👨‍💻 Author
Anubhav Shukla
Catalog Placements Assignment — 2025

