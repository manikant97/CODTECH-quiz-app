import newton from './images/scientists/newton.jpeg'
import albert from './images/scientists/alebert.jpeg'

const SUBJECTS = [
    'maths',
    'physics',
    'chemistry',
]
const QUESTIONS_BY_SUBJECT = {
    'physics' : [
        {
          "id": 1,
          "question": "What is the SI unit of force?",
          "options": ["Newton", "Joule", "Watt", "Volt"],
          "correctAns": "Newton"
        },
        {
            "id" : 2,
            "question" : 'What is the name if the scientist ?',
            "options": ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"],
            "correctAns": "Isaac Newton",
            "supportImage" : newton 
        },
        {
          "id": 3,
          "question": "Which of the following is an example of a scalar quantity?",
          "options": ["Velocity", "Acceleration", "Force", "Temperature"],
          "correctAns": "Temperature",
        },
        {
          "id": 4,
          "question": "An object with mass 2 kg is moving with a velocity of 4 m/s. What is its momentum?",
          "options": ["4 kg m/s", "6 kg m/s", "8 kg m/s", "10 kg m/s"],
          "correctAns": "8 kg m/s"
        },
        {
            "id" : 5,
            "question" : 'What is the name if the scientist ?',
            "options": ["J. J. Thomson", "Albert Einstein", "Galileo Galilei", "Niels Bohr"],
            "correctAns": "Albert Einstein",
            "supportImage" : albert 
        }
      ],
      'maths' : [
        {
          "id": 1,
          "question": "What is the value of π (pi) to two decimal places?",
          "options": ["3.14", "3.16", "3.18", "3.12"],
          "correctAns": "3.14"
        },
        {
          "id": 2,
          "question": "Solve for x: 2x + 5 = 15.",
          "options": ["5", "7", "10", "15"],
          "correctAns": "5"
        },
        {
          "id": 3,
          "question": "What is the square root of 144?",
          "options": ["9", "11", "12", "15"],
          "correctAns": "12"
        },
        {
          "id": 4,
          "question": "What is the result of 5 factorial?",
          "options": ["20", "120", "50", "100"],
          "correctAns": "120"
        },
        {
          "id": 5,
          "question": "If a triangle has angles measuring 45°, 45°, and 90°, what type of triangle is it?",
          "options": ["Equilateral", "Scalene", "Isosceles", "Right-angled"],
          "correctAns": "Right-angled"
        }
      ],
      "chemistry" : [
        {
          "id": 1,
          "question": "Which element has the chemical symbol 'H'?",
          "options": ["Hydrogen", "Helium", "Hassium", "Hafnium"],
          "correctAns": "Hydrogen"
        },
        {
          "id": 2,
          "question": "What is the chemical formula for water?",
          "options": ["H2O2", "HO2", "H2O", "H3O"],
          "correctAns": "H2O"
        },
        {
          "id": 3,
          "question": "Which gas is produced when hydrochloric acid reacts with sodium hydroxide?",
          "options": ["Oxygen", "Carbon Dioxide", "Hydrogen", "None of above"],
          "correctAns": "None of above"
        },
        {
          "id": 4,
          "question": "What is the atomic number of carbon?",
          "options": ["5", "12", "6", "10"],
          "correctAns": "6"
        },
        {
          "id": 5,
          "question": "Which of the following is a noble gas?",
          "options": ["Neon", "Sodium", "Chlorine", "Potassium"],
          "correctAns": "Neon"
        }
      ]
      
        
}

export {
    SUBJECTS,
    QUESTIONS_BY_SUBJECT
}