export const jsQuizz = {
  questions: [
    {
      question: "Which is not a feature of OOP in general definitions?",
      choices: [
        "Efficient Code",
        "Code reusability",
        "Modularity",
        "Duplicate/Redundant data",
      ],
      type: "MCQs",
      correctAnswer: "Duplicate/Redundant data",
    },
    {
      question:
        "Which was the first purely object oriented programming language developed?",
      choices: ["Kotlin", "SmallTalk", "Java", "C++"],
      type: "MCQs",
      correctAnswer: "SmallTalk",
    },
    {
      question: "When OOP concept did first came into picture?",
      choices: ["1980’s", "1995", "1970’s", "1993"],
      type: "MCQs",
      correctAnswer: "1970’s",
    },
    {
      question: "Which feature of OOP indicates code reusability?",
      choices: ["Abstraction", "Polymorphism", "Encapsulation", "Inheritance"],
      type: "MCQs",
      correctAnswer: "Inheritance",
    },
    {
      question: "Which header file is required in C++ to use OOP?",
      choices: [
        "OOP can be used without using any header file",
        "stdlib.h",
        "iostream.h",
        "stdio.h",
      ],
      type: "MCQs",
      correctAnswer: "OOP can be used without using any header file",
    },
    {
      question: "Why Java is Partially OOP language?",
      choices: [
        "It allows code to be written outside classes",
        "It supports usual declaration of primitive data types",
        "It does not support pointers",
        "It doesn’t support all types of inheritance",
      ],
      type: "MCQs",
      correctAnswer: "It supports usual declaration of primitive data types",
    },
    {
      question: "Which among the following doesn’t come under OOP concept?",
      choices: [
        "Data hiding",
        "Message passing",
        "Platform independent",
        "Data binding",
      ],
      type: "MCQs",
      correctAnswer: "Platform independent",
    },
    {
      question: "Which is the correct syntax of inheritance?",
      choices: [
        "class base_classname :access derived_classname{ /*define class body*/ };",
        "class derived_classname : access base_classname{ /*define class body*/ };",
        "class derived_classname : base_classname{ /*define class body*/ };",
        "class base_classname : derived_classname{ /*define class body*/ };",
      ],
      type: "MCQs",
      correctAnswer:
        "class derived_classname : access base_classname{ /*define class body*/ };",
    },
    {
      question:
        "The feature by which one object can interact with another object is _____________",
      choices: [
        "Message reading",
        "Message Passing",
        "Data transfer",
        "Data Binding",
      ],
      type: "MCQs",
      correctAnswer: "Message Passing",
    },
    {
      question: "Which among the following, for a pure OOP language, is true?",
      choices: [
        "The language should follow at least 1 feature of OOP",
        "The language must follow only 3 features of OOP",
        "The language must follow all the rules of OOP",
        "The language should follow 3 or more features of OOP",
      ],
      type: "MCQs",
      correctAnswer: "The language must follow all the rules of OOP",
    },
  ],
};

export const resultInitialState = {
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
};
