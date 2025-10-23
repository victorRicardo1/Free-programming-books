export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  language: string;
  pages?: number;
  year?: number;
  description: string;
  downloadLink: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  tags: string[];
  featured?: boolean;
}

export const books: Book[] = [
  // Python Books
  {
    id: "python-1",
    title: "Python Crash Course",
    author: "Eric Matthes",
    category: "Python Programming",
    language: "Python",
    pages: 544,
    year: 2019,
    description: "A hands-on, project-based introduction to programming with Python. Perfect for beginners.",
    downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/Python",
    level: "Beginner",
    tags: ["Python", "Basics", "Projects", "Beginner-Friendly"],
    featured: true
  },
  {
    id: "python-2",
    title: "Automate the Boring Stuff with Python",
    author: "Al Sweigart",
    category: "Python Programming",
    language: "Python",
    pages: 504,
    year: 2020,
    description: "Learn how to use Python to write programs that do in minutes what would take you hours to do by hand.",
    downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/Python",
    level: "Beginner",
    tags: ["Python", "Automation", "Scripting", "Practical"],
    featured: true
  },
  {
    id: "python-3",
    title: "Python for Data Analysis",
    author: "Wes McKinney",
    category: "Python Programming",
    language: "Python",
    pages: 544,
    year: 2022,
    description: "Get complete instructions for manipulating, processing, cleaning, and crunching datasets in Python.",
    downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/Python",
    level: "Intermediate",
    tags: ["Python", "Data Analysis", "Pandas", "NumPy"]
  },
  {
    id: "python-4",
    title: "Learning Python",
    author: "Mark Lutz",
    category: "Python Programming",
    language: "Python",
    pages: 1648,
    year: 2013,
    description: "Comprehensive guide to Python programming covering all aspects from basics to advanced.",
    downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/Python",
    level: "All Levels",
    tags: ["Python", "Comprehensive", "Reference"]
  },
  {
    id: "python-5",
    title: "Flask Web Development",
    author: "Miguel Grinberg",
    category: "Python Programming",
    language: "Python",
    pages: 316,
    year: 2018,
    description: "Learn to build web applications using Python and the Flask framework.",
    downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/Python",
    level: "Intermediate",
    tags: ["Python", "Flask", "Web Development", "Backend"]
  },
  {
    id: "python-6",
    title: "Think Python Book",
    author: "Allen B.Downey",
    category: "Python Programming",
    language: "Python",
    pages: 240,
    year: 2015,
    description: "How to Think Like a Computer Scientist.",
    downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/Python",
    level: "Intermediate",
    tags: ["Python", "Basic Definition","OOPs","Intermediate"]
  },{
  id: "python-7",
  title: "Getting Started with Python: From Basics to Applications",
  author: "Hans-Petter",
  category: "Python Programming",
  language: "Python",
  pages: 140,
  year: 2019,
  description: "Comprehensive Python guide covering installation, basic programming, control flow, functions, classes, modules, error handling, environments (Anaconda/Jupyter), editors, and math applications. Focuses on beginner to intermediate-level learning and repository structuring for GitHub-based projects.",
  downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/Python",
  level: "Intermediate",
  tags: [

    "Installation",
    "Beginner",
    "Intermediate",
    "Functions",
    "OOP",
    "Modules",
    "File Handling",
    "Error Handling",
    "Debugging",

  ]
},
  {
    id: "python-8",
    title: "Learn Python 3",
    author: "Ankit Mahato",
    category: "Python Programming",
    language: "Python",
    pages: 149,
    year: 2022,
    description: "Open Source Book",
    downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/Python",
    level: "Beginner",
    tags: ["Python", "Comprehensive", "Beginner"]
  }
,
  // Java Books
  {
    id: "java-1",
    title: "Effective Java",
    author: "Joshua Bloch",
    category: "Java Programming",
    language: "Java",
    pages: 416,
    year: 2018,
    description: "Best practices and design patterns for Java programming with 90 new rules.",
    downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/Java",
    level: "Intermediate",
    tags: ["Java", "Best Practices", "Design Patterns"],
    featured: true
  },
  {
    id: "java-2",
    title: "Head First Java",
    author: "Kathy Sierra, Bert Bates",
    category: "Java Programming",
    language: "Java",
    pages: 720,
    year: 2005,
    description: "A brain-friendly guide to learning Java with engaging visuals and activities.",
    downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/Java",
    level: "Beginner",
    tags: ["Java", "Beginner-Friendly", "OOP"]
  },
  {
    id: "java-3",
    title: "Spring in Action",
    author: "Craig Walls",
    category: "Java Programming",
    language: "Java",
    pages: 520,
    year: 2022,
    description: "Comprehensive guide to Spring Framework and Spring Boot for enterprise applications.",
    downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/Java",
    level: "Advanced",
    tags: ["Java", "Spring", "Spring Boot", "Enterprise"]
  },
  {
    id: "java-4",
    title: "Java: The Complete Reference",
    author: "Herbert Schildt",
    category: "Java Programming",
    language: "Java",
    pages: 1248,
    year: 2021,
    description: "The definitive guide to Java programming covering Java SE 17.",
    downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/Java",
    level: "All Levels",
    tags: ["Java", "Reference", "Comprehensive"]
  },

  // Web Development Books
  {
    id: "web-1",
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    category: "Web Development",
    language: "JavaScript",
    pages: 472,
    year: 2018,
    description: "A modern introduction to programming with JavaScript, including DOM manipulation and Node.js.",
    downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/Web%20Development",
    level: "Beginner",
    tags: ["JavaScript", "Web", "Programming Fundamentals"],
    featured: true
  },
  {
    id: "web-2",
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    category: "Web Development",
    language: "JavaScript",
    pages: 278,
    year: 2020,
    description: "Deep dive into the core mechanisms of JavaScript language.",
    downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/Web%20Development",
    level: "Intermediate",
    tags: ["JavaScript", "Advanced", "Deep Dive"]
  },
  {
    id: "web-3",
    title: "React Up & Running",
    author: "Stoyan Stefanov",
    category: "Web Development",
    language: "JavaScript",
    pages: 233,
    year: 2021,
    description: "Build web applications with React and modern JavaScript.",
    downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/Web%20Development",
    level: "Intermediate",
    tags: ["React", "JavaScript", "Frontend", "SPA"]
  },
  {
    id: "web-4",
    title: "HTML and CSS: Design and Build Websites",
    author: "Jon Duckett",
    category: "Web Development",
    language: "HTML/CSS",
    pages: 512,
    year: 2011,
    description: "Beautiful visual guide to HTML and CSS for beginners.",
    downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/Web%20Development",
    level: "Beginner",
    tags: ["HTML", "CSS", "Web Design", "Beginner"]
  },
  {
    id: "Flutter-1",
    title: "Beginning Flutter A hands on guide to app development",
    author: "Marco L. Napoli",
    category: "Flutter Development",
    language: "dart",
    pages: 531,
    year: 2020,
    description: "A hands on guide to app development",
    downloadLink: "https://digilib.stekom.ac.id/assets/dokumen/ebook/feb_3872ce7467cbdc7beedfcdc12b2b607b0ba36429_1649057575.pdf",
    level: "Beginner",
    tags: ["app development", "dart", "Flutter", "Beginner"]
  },
  {
    id: "web-5",
    title: "Node.js Design Patterns",
    author: "Mario Casciaro",
    category: "Web Development",
    language: "JavaScript",
    pages: 526,
    year: 2020,
    description: "Master best practices to build modular and scalable server-side applications.",
    downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/Web%20Development",
    level: "Advanced",
    tags: ["Node.js", "Backend", "Design Patterns", "JavaScript"]
  },

  // Data Structures & Algorithms
  {
    id: "dsa-1",
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    category: "Data Structure & Algorithm",
    language: "General",
    pages: 1312,
    year: 2009,
    description: "The comprehensive guide to algorithms, often called the 'CLRS' book.",
    downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/Data%20Structure%20%26%20Algorithm",
    level: "All Levels",
    tags: ["Algorithms", "Data Structures", "Academic", "Reference"],
    featured: true
  },
  {
    id: "dsa-2",
    title: "Cracking the Coding Interview",
    author: "Gayle Laakmann McDowell",
    category: "Data Structure & Algorithm",
    language: "General",
    pages: 708,
    year: 2015,
    description: "189 programming questions and solutions for technical interviews.",
    downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/Data%20Structure%20%26%20Algorithm",
    level: "Intermediate",
    tags: ["Interview Prep", "Coding Problems", "Algorithms"],
    featured: true
  },
  {
    id: "dsa-3",
    title: "Algorithms Unlocked",
    author: "Thomas H. Cormen",
    category: "Data Structure & Algorithm",
    language: "General",
    pages: 222,
    year: 2013,
    description: "An accessible introduction to algorithms for non-experts.",
    downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/Data%20Structure%20%26%20Algorithm",
    level: "Beginner",
    tags: ["Algorithms", "Beginner-Friendly", "Fundamentals"]
  },
  {
    id: "dsa-4",
    title: "Data Structures And Algorithms Made Easy In JAVA",
    author: "Narasimha Karumanchi",
    category: "Data Structure & Algorithm",
    language: "Java",
    pages: 412,
    year: 2020,
    description: "An accessible introduction to algorithms for non-experts.",
    downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/Data%20Structure%20%26%20Algorithm",
    level: "Beginner",
    tags: ["Algorithms", "Beginner-Friendly", "Fundamentals", "Java"]
  },

  {
    id: "dsa-5",
    title: "Data Structures And Algorithms Made Easy In C",
    author: "Narasimha Karumanchi",
    category: "Data Structure & Algorithm",
    language: "C",
    pages: 828,
    year: 2017,
    description: "An accessible introduction to algorithms for non-experts.",
    downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/Data%20Structure%20%26%20Algorithm",
    level: "Beginner",
    tags: ["Algorithms", "Beginner-Friendly", "Fundamentals", "C"]
  },

  // Machine Learning
 {
  id: "ml-1",
  title: "Hands-On Machine Learning",
  author: "Aurélien Géron",
  category: "Machine Learning",
  language: "Python",
  pages: 856,
  year: 2022,
  description: "Practical guide to ML with Scikit-Learn, Keras, and TensorFlow.",
  downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/Machine%20Learning",
  level: "Intermediate",
  tags: ["Machine Learning", "Python", "TensorFlow", "Scikit-Learn"],
  featured: true
},
{
  id: "ml-2",
  title: "Pattern Recognition and Machine Learning",
  author: "Christopher Bishop",
  category: "Machine Learning",
  language: "General",
  pages: 738,
  year: 2006,
  description: "Comprehensive introduction to the fields of pattern recognition and machine learning.",
  downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/Machine%20Learning",
  level: "Advanced",
  tags: ["Machine Learning", "Pattern Recognition", "Theory"]
},
{
  id: "ml-3",
  title: "Deep Learning",
  author: "Ian Goodfellow, Yoshua Bengio, Aaron Courville",
  category: "Machine Learning",
  language: "General",
  pages: 801,
  year: 2016,
  description: "Deep Learning is one of the most widely recognized and authoritative books covering modern deep learning theory, algorithms, and applications.",
  downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/Machine%20Learning",
  level: "Advanced",
  tags: ["Deep Learning", "Neural Networks", "AI"]
},
{
  id: "ml-4",
  title: "Machine Learning",
  author: "Saikat Dutt, Subramanian Chandramouli, Amit Kumar Das",
  category: "Machine Learning",
  language: "General",
  pages: 741,
  year: 2016,
  description: "The Beginner textbook on Machine Learning from Pearson.",
  downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/Machine%20Learning",
  level: "Beginner",
  tags: ["Machine Learning", "ML", "DS"]
},
{
  id: "ml-5",
  title: "Mathematics for Machine Learning",
  author: "Marc Peter Deisenroth, A. Aldo Faisal, Cheng Soon Ong",
  category: "Machine Learning",
  language: "General",
  pages: 417,
  year: 2020,
  level: "All Levels",
  description: "the foundational tools and concepts of mathematics needed to understand and develop machine learning algorithms",
  downloadLink: "https://github.com/avinash201199/Free-programming-books/blob/main/Machine%20Learning/mathematics%20for%20ml.pdf",
  tags: ["MachineLearning", "Mathematics", "Optimization", "MLAlgorithms"],
  featured: true
},
{
  id: "ml-6",
  title: "The Little Book of Deep Learning",
  author: "François Fleuret",
  category: "Machine Learning",
  language: "General",
  pages: 129,
  year: 2023,
  level: "Intermediate",
  description: "A concise and practical introduction to deep learning, covering fundamental concepts, architectures, and techniques in a clear and accessible manner for practitioners and students.",
  downloadLink: "https://fleuret.org/public/lbdl.pdf",
  tags: ["DeepLearning", "NeuralNetworks", "MachineLearning", "AI", "Practical"],
  featured: true
},
{
  id: "ml-7",
  title: "Neural Networks",
  author: "Simon Haykin",
  category: "Machine Learning",
  language: "General",
  pages: 823,
  year: 2005,
  description: "Neural Networks: A Comprehensive Foundation is a complete guide to understanding, designing, and applying neural networks in theory and practice.",
  downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/Machine%20Learning",
  level: "Advanced",
  tags: ["Deep Learning", "Neural Networks", "AI"]
},
{
  id: "ml-8",
  title: "Neural Network Design",
  author: "Martin T. Hagan",
  category: "Machine Learning",
  language: "General",
  pages: 1012,
  year: 1995,
  description: "Neural Network Design by Martin T. Hagan is a practical guide to designing, training, and implementing neural networks for real-world applications.",
  downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/Machine%20Learning",
  level: "Advanced",
  tags: ["Deep Learning", "Neural Networks", "AI"]
},
{
  id: "ml-9",
  title: "Natural Language Processing with Python",
  author: "Steven Bird, Ewan Klein, Edward Loper",
  category: "Machine Learning",
  language: "Python",
  pages: 504,
  year: 2009,
  description: "Analyzing text with the Natural Language Toolkit. Covers text processing, classification, and information extraction.",
  downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/Machine%20Learning",
  level: "Beginner",
  tags: ["NLP", "Python", "NLTK", "Text Processing"]
},

  // AI Books
  {
    id: "ai-1",
    title: "Artificial Intelligence: A Modern Approach",
    author: "Stuart Russell, Peter Norvig",
    category: "Artificial Intelligence",
    language: "General",
    pages: 1152,
    year: 2020,
    description: "The most comprehensive and authoritative textbook on AI.",
    downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/Aritificial%20Intelligence",
    level: "All Levels",
    tags: ["AI", "Comprehensive", "Theory", "Practice"],
    featured: true
  },
  {
    id: "ai-2",
    title: "Life 3.0: Being Human in the Age of AI",
    author: "Max Tegmark",
    category: "Artificial Intelligence",
    language: "General",
    pages: 384,
    year: 2017,
    description: "Explores the future of AI and its impact on humanity.",
    downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/Aritificial%20Intelligence",
    level: "Beginner",
    tags: ["AI", "Future", "Philosophy", "Society"]
  },

  // Data Science
  {
    id: "ds-1",
    title: "Python for Data Science Handbook",
    author: "Jake VanderPlas",
    category: "Data Science",
    language: "Python",
    pages: 548,
    year: 2016,
    description: "Essential tools for working with data: NumPy, Pandas, Matplotlib, Scikit-Learn.",
    downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/Data%20Science",
    level: "Intermediate",
    tags: ["Data Science", "Python", "NumPy", "Pandas"]
  },
  {
    id: "ds-2",
    title: "Data Science from Scratch",
    author: "Joel Grus",
    category: "Data Science",
    language: "Python",
    pages: 406,
    year: 2019,
    description: "Learn data science fundamentals by implementing from scratch.",
    downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/Data%20Science",
    level: "Beginner",
    tags: ["Data Science", "Python", "Fundamentals"]
  },
  {
    id: "ds-3",
    title: "sofware-engineering-9th-edition",
    author: "Ian Sommerville",
    category: "Data Science",
    language: "General",
    pages: 832,
    year: 2015,
    description: "Comprehensive guide to software engineering principles and practices.",
    downloadLink: "https://engineering.futureuniversity.com/BOOKS%20FOR%20IT/Software-Engineering-9th-Edition-by-Ian-Sommerville.pdf",
    level: "All Levels",
    tags: ["Software Engineering", "Principles", "Practices", "Data Science"]
  }

  // C Programming
  {
    id: "c-1",
    title: "The C Programming Language",
    author: "Brian Kernighan, Dennis Ritchie",
    category: "C Programming",
    language: "C",
    pages: 272,
    year: 1988,
    description: "The definitive guide to C, written by the language's creators.",
    downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/C",
    level: "All Levels",
    tags: ["C", "Classic", "Fundamentals"],
    featured: true
  },
  {
    id: "c-2",
    title: "C Programming: A Modern Approach",
    author: "K. N. King",
    category: "C Programming",
    language: "C",
    pages: 832,
    year: 2008,
    description: "Modern and comprehensive introduction to C programming.",
    downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/C",
    level: "Beginner",
    tags: ["C", "Modern", "Comprehensive"]
  },

  // C++ Programming
  {
    id: "cpp-1",
    title: "The C++ Programming Language",
    author: "Bjarne Stroustrup",
    category: "C++ Programming",
    language: "C++",
    pages: 1376,
    year: 2013,
    description: "The definitive guide to C++ by its creator.",
    downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/C%2B%2B",
    level: "All Levels",
    tags: ["C++", "Comprehensive", "Reference"]
  },
  {
    id: "cpp-2",
    title: "Effective Modern C++",
    author: "Scott Meyers",
    category: "C++ Programming",
    language: "C++",
    pages: 336,
    year: 2014,
    description: "42 specific ways to improve your use of C++11 and C++14.",
    downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/C%2B%2B",
    level: "Intermediate",
    tags: ["C++", "Modern C++", "Best Practices"]
  },

  // Android Development
  {
    id: "android-1",
    title: "Android Programming: The Big Nerd Ranch Guide",
    author: "Bill Phillips",
    category: "Android Development",
    language: "Kotlin",
    pages: 720,
    year: 2021,
    description: "Hands-on guide to Android app development with Kotlin.",
    downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/Android%20development",
    level: "Beginner",
    tags: ["Android", "Kotlin", "Mobile", "App Development"]
  },
  {
    id: "android-2",
    title: "Head First Android Development",
    author: "Dawn Griffiths",
    category: "Android Development",
    language: "Java",
    pages: 704,
    year: 2017,
    description: "Brain-friendly guide to building Android apps.",
    downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/Android%20development",
    level: "Beginner",
    tags: ["Android", "Java", "Beginner-Friendly"]
  },

  // Cloud Computing
  {
    id: "cloud-1",
    title: "AWS Certified Solutions Architect Study Guide",
    author: "Ben Piper",
    category: "Cloud Computing",
    language: "General",
    pages: 912,
    year: 2020,
    description: "Comprehensive guide to AWS cloud services and architecture.",
    downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/Cloud",
    level: "Intermediate",
    tags: ["AWS", "Cloud", "Architecture", "Certification"]
  },
  {
    id: "cloud-2",
    title: "Kubernetes in Action",
    author: "Marko Luksa",
    category: "Cloud Computing",
    language: "General",
    pages: 624,
    year: 2017,
    description: "Learn Kubernetes container orchestration from the ground up.",
    downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/Cloud",
    level: "Intermediate",
    tags: ["Kubernetes", "DevOps", "Containers"]
  },

  // Cyber Security
  {
    id: "security-1",
    title: "The Web Application Hacker's Handbook",
    author: "Dafydd Stuttard",
    category: "Cyber Security",
    language: "General",
    pages: 912,
    year: 2011,
    description: "Finding and exploiting security flaws in web applications.",
    downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/Cyber%20Security",
    level: "Advanced",
    tags: ["Security", "Hacking", "Web Security"]
  },
  {
    id: "security-2",
    title: "Hacking: The Art of Exploitation",
    author: "Jon Erickson",
    category: "Cyber Security",
    language: "General",
    pages: 488,
    year: 2008,
    description: "Introduction to hacking techniques and security concepts.",
    downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/Cyber%20Security",
    level: "Intermediate",
    tags: ["Security", "Ethical Hacking", "Exploitation"]
  },

  // Computer Networking
  {
    id: "network-1",
    title: "Computer Networking: A Top-Down Approach",
    author: "James Kurose",
    category: "Computer Networking",
    language: "General",
    pages: 864,
    year: 2021,
    description: "Modern approach to computer networking with internet focus.",
    downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/Computer%20Networking",
    level: "All Levels",
    tags: ["Networking", "TCP/IP", "Internet", "Protocols"]
  },
  {
    id: "network-2",
    title: "TCP/IP Illustrated",
    author: "W. Richard Stevens",
    category: "Computer Networking",
    language: "General",
    pages: 1024,
    year: 2011,
    description: "Detailed explanation of TCP/IP protocols with examples.",
    downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/Computer%20Networking",
    level: "Advanced",
    tags: ["Networking", "TCP/IP", "Protocols", "Deep Dive"]
  },
  // Interview Preparation
  {
    id: "interview-1",
    title: "System Design Interview",
    author: "Alex Xu",
    category: "Interview Preparation",
    language: "General",
    pages: 280,
    year: 2020,
    description: "Insider's guide to system design interviews at tech companies.",
    downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/Interview",
    level: "Intermediate",
    tags: ["Interview", "System Design", "Architecture"],
    featured: true
  },
  {
    id: "interview-2",
    title: "Elements of Programming Interviews",
    author: "Adnan Aziz",
    category: "Interview Preparation",
    language: "General",
    pages: 528,
    year: 2012,
    description: "The insiders' guide to coding interviews with solutions.",
    downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/Interview",
    level: "Intermediate",
    tags: ["Interview", "Coding", "Problem Solving"]
  },
  {
    id: "interview-3",
    title: "Cracking the Machine Learning Interview",
    author: "Nitin Suri",
    category: "Interview Preparation",
    language: "Python",
    pages: 135,
    year: 2018,
    description: "225 Machine Learning Interview Questions with Solutions.",
    downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/Interview",
    level: "Intermediate",
    tags: ["Interview", "Coding", "Problem Solving", "Python"]
  },
  {
    id: "interview-4",
    title: "Javascript Interview Questions",
    author: "Sudheer Jonna",
    category: "Interview Preparation",
    language: "javascript",
    pages: 90,
    year: 2019,
    description: "476 Javascript Interview Questions with Solutions.",
    downloadLink:
      "https://github.com/avinash201199/Free-programming-books/tree/main/Interview",
    level: "Intermediate",
    tags: ["Interview", "Coding", "Problem Solving", "Javascript"],
  },
  // Competitive Programming
  {
    id: "competitiveprogramming-1",
    title: "Competitive Programmer's Handbook",
    author: "Antti Laaksonen",
    category: "Competitive Programming",
    language: "General",
    pages: 300,
    year: 2019,
    description: "A modern introduction to competitive programming.",
    downloadLink: "https://github.com/avinash201199/Free-programming-books/blob/ae924b4c662d0a3fef0afda160dc239d11d8598b/competitiveprogramming/CompetitiveProgrammersHandbook_AnttiLaaksonen_2019.pdf",
    level: "Intermediate",
    tags: ["Competitive Programming"]
  },
  {
  id: "dbms-3",
  title: "Learning SQL: Generate, Manipulate, and Retrieve Data",
  author: "Alan Beaulieu",
  category: "DataBase Management",
  language: "General",
  pages: 408,
  year: 2020,
  description: "A comprehensive guide to mastering SQL fundamentals and advanced querying techniques.",
  downloadLink: "https://github.com/avinash201199/Free-programming-books/blob/main/DBMS/Learning SQL Generate, Manipulate,and Retrieve Data by Alan Beaulieu 3rd Edition.pdf",
  level: "Beginner",
  tags: ["SQL", "Database", "DBMS"]
},
  {
    id: "dbms-1",
    title: "DataBase and Management System",
    author: "Ramez Elmasri",
    category: "DataBase Management",
    language: "General",
    pages: 1273,
    year: 2015,
    description: "The ultimate guide to learn DBMS.",
    downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/DBMS",
    level: "Intermediate",
    tags: ["DataBase", "DB", "Web dev"]
  },
  {
  id: "dbms-2",
  title: "Database Management Systems (3rd Edition)",
  author: "Raghu Ramakrishnan, Johannes Gehrke",
  category: "Database Management",
  language: "General",
  pages: 1098,
  year: 2003,
  description: "Comprehensive guide covering database design, storage, and query processing concepts used in modern DBMS systems.",
  downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/DBMS",
  level: "Advanced",
  tags: ["DBMS", "Databases", "SQL", "Data Management"],
  },
   // Operating System
  {
    id: "operating-system-1",
    title: "Operating Systems: Three Easy Pieces",
    author: "Remzi H. Arpaci-Dusseau",
    category: "Operating System",
    language: "General",
    pages: 643,
    year: 2014,
    description: "Comprehensive textbook covering core OS concepts like virtualization, concurrency, and persistence.",
    downloadLink: "https://github.com/avinash201199/Free-programming-books/tree/main/Operating%20Systems",
    level: "All Levels",
    tags: ["Operating Systems"],
    
  },

];

export const categories = [
  "Python Programming",
  "Java Programming",
  "Web Development",
  "Data Structure & Algorithm",
  "Database Management",
  "Machine Learning",
  "Artificial Intelligence",
  "Data Science",
  "C Programming",
  "C++ Programming",
  "Android Development",
  "Cloud Computing",
  "Cyber Security",
  "Computer Networking",
  "Interview Preparation",
  "Competitive Programming",
  "Flutter Development",
  "Operating System",
];

export const languages = [
  "Python",
  "Java",
  "JavaScript",
  "C",
  "C++",
  "Kotlin",
  "HTML/CSS",
  "dart",
  "General"
];

export const levels = ["Beginner", "Intermediate", "Advanced", "All Levels"];
