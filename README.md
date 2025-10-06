# 📚 Free Programming Books

[Join WhatsApp channel for any doubts](https://chat.whatsapp.com/BfBWJhy4xj3CJFSGE2qBrL)


<div align="center">

[![Contributors](https://img.shields.io/github/contributors/avinash201199/Free-programming-books)](https://github.com/avinash201199/Free-programming-books/graphs/contributors)
[![Issues](https://img.shields.io/github/issues/avinash201199/Free-programming-books)](https://github.com/avinash201199/Free-programming-books/issues)
[![Stars](https://img.shields.io/github/stars/avinash201199/Free-programming-books)](https://github.com/avinash201199/Free-programming-books/stargazers)
[![Forks](https://img.shields.io/github/forks/avinash201199/Free-programming-books)](https://github.com/avinash201199/Free-programming-books/network/members)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

**A comprehensive collection of free programming and technical e-books for developers, students, and tech enthusiasts**

</div>

## 📖 About

Welcome to the Free Programming Books Repository! This is a community-driven collection of free educational resources designed to help anyone learn programming, advance their technical skills, or explore new technologies. Our mission is to democratize access to quality programming education materials for learners worldwide.

## ✨ Why This Repository?

- 🎯 **Career Development**: Master skills to showcase in your professional journey
- 🌍 **Open Access**: Free resources available to everyone, everywhere
- 🤝 **Community-Driven**: Built by developers, for developers
- 📈 **Continuous Growth**: Regularly updated with new contributions
- 💡 **Diverse Topics**: From basics to advanced programming concepts

## 📂 Repository Structure

Our repository is organized into the following categories:

| Category | Description | Topics Covered |
|----------|-------------|----------------|
| **Android Development** | Mobile app development for Android | Kotlin, Java for Android, Material Design |
| **Artificial Intelligence** | AI concepts and implementations | Neural Networks, Deep Learning, NLP, Computer Vision |
| **C Programming** | System programming with C | Fundamentals, Memory Management, Embedded Systems |
| **C++ Programming** | Object-oriented programming | STL, Modern C++, Game Development |
| **Cloud Computing** | Cloud platforms and services | AWS, Azure, GCP, Serverless, Kubernetes |
| **Computer Networking** | Network fundamentals and protocols | TCP/IP, HTTP/HTTPS, Network Security |
| **Cyber Security** | Information security | Ethical Hacking, Cryptography, Security Auditing |
| **Data Science** | Data analysis and visualization | Python/R for Data Science, Statistics, Big Data |
| **Data Structures & Algorithms** | DSA fundamentals | Sorting, Searching, Dynamic Programming |
| **Interview Preparation** | Technical interview resources | Coding Problems, System Design, Behavioral |
| **Java Programming** | Enterprise Java development | Core Java, Spring Boot, Microservices |
| **Machine Learning** | ML algorithms and applications | Supervised/Unsupervised Learning, Deep Learning |
| **Python Programming** | Python from basics to advanced | Django, Flask, Data Analysis, Automation |
| **Web Development** | Full-stack web development | HTML/CSS/JS, React, Node.js, Databases |
| **Novels & Others** | Non-technical and leisure reading | Tech Biographies, Soft Skills, Fiction |

## 🚀 Quick Start Guide

### For Learners

1. **Browse**: Navigate to your area of interest
2. **Download**: Click on any PDF to view or download
3. **Learn**: Start your learning journey
4. **Practice**: Apply what you learn in projects
5. **Share**: Help others by sharing this resource

### For Contributors

We welcome all contributions! See our [Contributing Guidelines](#-contributing-guidelines) below.

## 🤝 Contributing Guidelines

Contributions are what make the open-source community amazing. Any contributions you make are **greatly valued and appreciated**!



### ✅ Before You Contribute

Ensure your contribution meets these criteria:
- 📚 Add only legally free resources
- ⚠️ No pirated or copyrighted material
- 💻 Must be relevant to programming/tech
- 📑 PDF preferred, under 100MB
- 🌟 Content should add real value

### 📘 How to Add a Book

---

#### 1️⃣ Fork the Repository

# Fork via GitHub UI, then clone
`git clone https://github.com/YOUR_USERNAME/Free-programming-books.git
cd Free-programming-books`

---

#### 2️⃣ Create a Feature Branch

`git checkout -b add-book-category-name`

# Example: git checkout -b add-python-cookbook

---

#### 3️⃣ Add Your Book

- Navigate to the appropriate **category folder**
- Add your **PDF** with a clear, descriptive name  
- Use this naming convention: **`BookTitle_Author_Year.pdf`**
- **Example**: `CleanCode_RobertMartin_2008.pdf`

#### 4️⃣ Update the Code in src/data/books.ts

Inside, it usually looks like this:

```export const books = [
  {
    id: "python-1",
    title: "Learning Python",
    author: "Mark Lutz",
    category: "Python Programming",
    language: "Python",
    year: 2020,
    pages: 1600,
    level: "Advanced",
    description: "Comprehensive guide to Python programming.",
    downloadLink: "https://example.com/learning-python.pdf",
    tags: ["Python", "Reference", "Advanced"]
  }
]

export const categories = [
  "Web Development",
  "Machine Learning",
  "Python Programming",
  "Data Science"
]

export const languages = [
  "Python",
  "Java",
  "JavaScript",
  "C",
  "C++",
  "Kotlin",
  "HTML/CSS",
  "General"
]
```

---

## 4️⃣ Add a New Book Entry

Scroll to the `books` array and add your new book following this format:

<CodeBlock language="json">
{`{
  "id": "python-6",
  "title": "Learning Python the Hard Way",
  "author": "Zed A. Shaw",
  "category": "Python Programming",
  "language": "Python",
  "pages": 320,
  "year": 2024,
  "level": "Beginner",
  "description": "Learn Python through practical exercises and examples.",
  "downloadLink": "https://example.com/python-hard-way.pdf",
  "tags": ["Python", "Hands-on", "Beginner"],
  "featured": false
}`}
</CodeBlock>

💡 **Tip:**  
- Use `"language"` to specify the **programming language** (e.g., `"Python"`, `"Java"`, `"JavaScript"`).  
- Keep the description concise (1–2 sentences).

---

## 🏷️ 5️⃣ If Category or Programming Language Doesn’t Exist

If your book belongs to a **new category** or uses a **programming language not yet listed**, add them inside the same file:

**Example:**

<CodeBlock language="ts">
{`export const categories = [
  "Web Development",
  "Machine Learning",
  "Python Programming",
  "AI Ethics" // newly added category
]

export const languages = [
  "Python",
  "Java",
  "JavaScript",
  "C",
  "C++",
  "Kotlin",
  "HTML/CSS",
  "Rust" // newly added programming language
]`}
</CodeBlock>

⚡ Make sure:
- The programming language name matches standard naming (`"Python"`, not `"python"`).
- There are no duplicates.

---

## 6️⃣ Validate Your Syntax

Before committing, ensure your JSON/TS file is valid:

<CodeBlock language="bash">
{`npm run lint
# or use an online JSON/TS validator`}
</CodeBlock>

---

#### 5️⃣ Commit with a Clear Message

<CodeBlock language="bash">
{`git add .
git commit -m "Add [Book Name] by [Author] to [Category] folder"
# Example:
# git commit -m "Add Clean Code by Robert Martin to Java folder"`}
</CodeBlock>

---

#### 6️⃣ Push and Create a Pull Request

<CodeBlock language="bash">
{`git push origin add-book-category-name`}
</CodeBlock>

Then go to **GitHub → Pull Requests → New Pull Request**  
and add a short description of your contribution ✨

---

✅ **Final Checklist**

| Task | Status |
|------|--------|
| Correct file naming (`BookTitle_Author_Year.pdf`) | ✅ |
| Updated `src/data/books.ts` properly | ✅ |
| Commit message is descriptive | ✅ |
| Book is free to distribute | ✅ |
| PR created with details | ✅ |

---


6. **Commit with Clear Message**
   ```bash
   git add .
   git commit -m "Add [Book Name] by [Author] to [Category] folder"
   # Example: git commit -m "Add Clean Code by Robert Martin to Java folder"
   ```

7. **Push and Create Pull Request**
   ```bash
   git push origin add-book-category-name
   ```
   Then create a Pull Request on GitHub with a description of your contribution.

### 🆕 Creating New Categories

Want to add a new category? Please:
1. Open an issue first for discussion
2. Ensure you have at least 3 books for the category
3. Include a README.md explaining the category
4. Follow the existing folder naming convention

### 🐛 Reporting Issues

Help us maintain quality by reporting:
- 📎 Corrupted or broken files
- ⚖️ Copyright violations
- 🔄 Duplicate books
- 📁 Miscategorized content
- 🔗 Dead links or missing files

[Report an Issue →](https://github.com/avinash201199/Free-programming-books/issues/new)

## 📋 Contribution Best Practices

- 🏆 Quality over Quantity: Submit only valuable books
- 🔍 Check Before Adding: Avoid duplicates
- ⚖️ Respect Copyright: Only share legal resources
- 🗂 Stay Organized: Use proper categories
- 📝 Descriptive Naming: BookTitle_Author_Year.pdf

🙌 **Thank you for helping us make programming knowledge free and accessible to all!**


## 🌟 Hall of Fame - Top Contributors

We appreciate everyone who helps build this knowledge base:

- [@avinash201199](https://github.com/avinash201199) - Repository Founder & Maintainer

[View All Contributors →](https://github.com/avinash201199/Free-programming-books/graphs/contributors)

## 📊 Repository Statistics

<div align="center">

| Metric | Count |
|--------|--------|
| 📚 Total Books | 100+ |
| 📁 Categories | 15 |
| 👥 Contributors | Growing Daily |
| ⭐ Stars | Increasing |
| 🍴 Forks | Active |

</div>

## 💬 Community & Support

### Get Help
- 📧 **Issues**: [GitHub Issues](https://github.com/avinash201199/Free-programming-books/issues)
- 💭 **Discussions**: [GitHub Discussions](https://github.com/avinash201199/Free-programming-books/discussions)
- 📱 **Instagram**: [@lets__code](https://www.instagram.com/lets__code/) - Follow for coding tips and updates

### Stay Updated
- ⭐ Star this repository to stay notified
- 👁️ Watch for new book additions
- 🔔 Follow [@avinash201199](https://github.com/avinash201199) for updates

## 📜 Legal Information

### License
This repository structure and organization is available under the MIT License. Individual books maintain their original licenses and copyrights.

### ⚖️ Copyright Disclaimer
- All books are believed to be freely distributable
- We respect intellectual property rights
- Books are either:
  - In public domain
  - Shared with explicit permission
  - Licensed for free distribution (Creative Commons, etc.)
  - Open-source educational materials

### DMCA Notice
If you believe any content violates your copyright, please immediately:
1. Open an issue with details
2. Contact the repository maintainer
3. We will remove the content within 24 hours of verification

## 🗺️ Roadmap & Future Plans

- [ ] Add search functionality via GitHub Pages
- [ ] Create learning paths for different technologies
- [ ] Add book ratings and reviews system
- [ ] Implement automated quality checks
- [ ] Create mobile-friendly web interface
- [ ] Add multi-language book support
- [ ] Build recommendation engine based on skill level
- [ ] Add video tutorial links for books

## 🎯 Learning Paths (Coming Soon)

### 🚀 Beginner Developer Path
1. Programming Fundamentals (C/Python)
2. Data Structures & Algorithms
3. Web Development Basics
4. Version Control with Git
5. First Project Ideas

### 💼 Full-Stack Developer Path
1. Frontend (HTML, CSS, JavaScript)
2. Backend (Node.js/Python/Java)
3. Databases (SQL & NoSQL)
4. DevOps Basics
5. Cloud Deployment

## 🙏 Acknowledgments

Special thanks to:
- 📖 All authors who make their knowledge freely available
- 👥 Every contributor who has shared resources
- ⭐ Everyone who has starred and shared this repository
- 🌍 The global programming community

## 📣 Spread the Word

Help others discover these free resources:
- ⭐ **Star** this repository
- 🔄 **Share** with your network
- 📝 **Write** about it in your blog
- 🐦 **Tweet** about it
- 💬 **Tell** your fellow developers

---

<div align="center">

### 🌟 Star this repository to help others find these free resources! 🌟

**Happy Learning & Happy Coding! 💻📚**

*Building a world where quality programming education is free for everyone*

<br>

Made with ❤️ by [Avinash](https://github.com/avinash201199) and [Contributors](https://github.com/avinash201199/Free-programming-books/graphs/contributors)

</div>
