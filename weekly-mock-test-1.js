(function () {
  window.BUNDLED_EXAMS = window.BUNDLED_EXAMS || { exams: [] };

  var payload = {
    "exams": [
      {
        "id": "weekly-mock-test-01",
        "title": "Weekly Mock Test - 1 (Atomic Structure & Permutations and Combinations)",
        "date": "2026-06-25",
        "durationMinutes": 60,
        "marksPerQuestion": 1,
        "negativeMark": 0,
        "sections": [
          {
            "key": "chemistry",
            "title": "Chemistry (Atomic Structure)",
            "count": 20,
            "start": 1,
            "end": 20
          },
          {
            "key": "maths",
            "title": "Mathematics (Permutations & Combinations)",
            "count": 20,
            "start": 21,
            "end": 40
          }
        ],
        "questions": [
          {
            "id": "w1-chem-1",
            "section": "Chemistry (Atomic Structure)",
            "text": "Which of the following statements regarding cathode rays and canal rays in discharge tube experiments is INCORRECT?",
            "options": [
              { "id": "A", "text": "The charge-to-mass ratio ($e/m$) of cathode rays is independent of the gas present in the discharge tube." },
              { "id": "B", "text": "The charge-to-mass ratio ($e/m$) of canal rays is maximum when hydrogen gas is taken in the discharge tube." },
              { "id": "C", "text": "The charge-to-mass ratio ($e/m$) of canal rays is independent of the nature of the gas inside the tube." },
              { "id": "D", "text": "Cathode rays produce fluorescence when they strike a zinc sulphide screen." }
            ],
            "correct": "C"
          },
          {
            "id": "w1-chem-2",
            "section": "Chemistry (Atomic Structure)",
            "text": "According to Rutherford's $\\alpha$-particle scattering experiment, the radius of an atomic nucleus of mass number $A$ is given by $R = R_0 A^{1/3}$ (where $R_0 = 1.2\\text{ fm}$). What is the ratio of the nuclear density of $^{27}_{13}\\text{Al}$ to that of $^{125}_{52}\\text{Te}$?",
            "options": [
              { "id": "A", "text": "$27 : 125$" },
              { "id": "B", "text": "$3 : 5$" },
              { "id": "C", "text": "$1 : 1$" },
              { "id": "D", "text": "$5 : 3$" }
            ],
            "correct": "C"
          },
          {
            "id": "w1-chem-3",
            "section": "Chemistry (Atomic Structure)",
            "text": "A $100\\text{ W}$ sodium vapor lamp emits yellow light of wavelength $\\lambda = 589.6\\text{ nm}$. If $60\\%$ of the electrical energy is converted into light, calculate the number of photons emitted by the lamp per second. ($h = 6.626 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$, $c = 3.0 \\times 10^8\\text{ m/s}$)",
            "options": [
              { "id": "A", "text": "$1.78 \\times 10^{20}\\text{ photons/s}$" },
              { "id": "B", "text": "$2.97 \\times 10^{20}\\text{ photons/s}$" },
              { "id": "C", "text": "$1.78 \\times 10^{19}\\text{ photons/s}$" },
              { "id": "D", "text": "$3.37 \\times 10^{19}\\text{ photons/s}$" }
            ],
            "correct": "A"
          },
          {
            "id": "w1-chem-4",
            "section": "Chemistry (Atomic Structure)",
            "text": "In a photoelectric effect experiment, when radiation of wavelength $\\lambda$ is incident on a metallic surface, the stopping potential is $4.8\\text{ V}$. When radiation of wavelength $2\\lambda$ is incident on the same surface, the stopping potential decreases to $1.6\\text{ V}$. What is the threshold wavelength $\\lambda_0$ for this metal surface?",
            "options": [
              { "id": "A", "text": "$3\\lambda$" },
              { "id": "B", "text": "$4\\lambda$" },
              { "id": "C", "text": "$5\\lambda$" },
              { "id": "D", "text": "$2.5\\lambda$" }
            ],
            "correct": "B"
          },
          {
            "id": "w1-chem-5",
            "section": "Chemistry (Atomic Structure)",
            "text": "If $r_1$ is the radius of the first Bohr orbit of a hydrogen atom ($Z=1$), what is the radius of the third Bohr orbit ($n=3$) of a $\\text{Li}^{2+}$ ion?",
            "options": [
              { "id": "A", "text": "$9 r_1$" },
              { "id": "B", "text": "$3 r_1$" },
              { "id": "C", "text": "$r_1$" },
              { "id": "D", "text": "$\\frac{1}{3} r_1$" }
            ],
            "correct": "B"
          },
          {
            "id": "w1-chem-6",
            "section": "Chemistry (Atomic Structure)",
            "text": "The ionization energy of a ground-state $\\text{He}^+$ ion is $54.4\\text{ eV}$. What is the energy required to excite an electron in a $\\text{Li}^{2+}$ ion from its first excited state ($n=2$) to its second excited state ($n=3$)?",
            "options": [
              { "id": "A", "text": "$10.2\\text{ eV}$" },
              { "id": "B", "text": "$17.0\\text{ eV}$" },
              { "id": "C", "text": "$30.6\\text{ eV}$" },
              { "id": "D", "text": "$40.8\\text{ eV}$" }
            ],
            "correct": "B"
          },
          {
            "id": "w1-chem-7",
            "section": "Chemistry (Atomic Structure)",
            "text": "In the emission spectrum of atomic hydrogen, what is the ratio of the shortest wavelength (series limit) of the Balmer series to the longest wavelength of the Lyman series?",
            "options": [
              { "id": "A", "text": "$3 : 1$" },
              { "id": "B", "text": "$4 : 3$" },
              { "id": "C", "text": "$1 : 3$" },
              { "id": "D", "text": "$9 : 4$" }
            ],
            "correct": "A"
          },
          {
            "id": "w1-chem-8",
            "section": "Chemistry (Atomic Structure)",
            "text": "An electron in a sample of hydrogen atoms in the ground state is excited by absorbing monochromatic radiation of photon energy $12.75\\text{ eV}$. When these excited atoms de-excite back to the ground state:\n(i) What is the principal quantum number ($n$) of the highest state reached?\n(ii) What is the maximum number of different spectral lines observed in the emission spectrum of the sample?",
            "options": [
              { "id": "A", "text": "$n = 3$, 3 lines" },
              { "id": "B", "text": "$n = 4$, 6 lines" },
              { "id": "C", "text": "$n = 4$, 3 lines" },
              { "id": "D", "text": "$n = 5$, 10 lines" }
            ],
            "correct": "B"
          },
          {
            "id": "w1-chem-9",
            "section": "Chemistry (Atomic Structure)",
            "text": "Consider the following statements regarding the Bohr model and its developments:\nI. Splitting of spectral lines in the presence of an external magnetic field is known as the Zeeman effect.\nII. Splitting of spectral lines in the presence of an external electric field is known as the Stark effect.\nIII. Bohr's model successfully explains the fine spectrum of multi-electron atoms.\nIV. Bohr's concept of fixed circular trajectories with simultaneously defined position and momentum violates Heisenberg's Uncertainty Principle.\n\nWhich of the statements given above are CORRECT?",
            "options": [
              { "id": "A", "text": "I, II, and IV only" },
              { "id": "B", "text": "I, II, and III only" },
              { "id": "C", "text": "II, III, and IV only" },
              { "id": "D", "text": "I and II only" }
            ],
            "correct": "A"
          },
          {
            "id": "w1-chem-10",
            "section": "Chemistry (Atomic Structure)",
            "text": "A proton ($p$) and an $\\alpha$-particle ($\\text{He}^{2+}$) are accelerated from rest through the same electric potential difference $V$. Given that $m_\\alpha \\approx 4 m_p$ and $q_\\alpha = 2 q_p$, what is the ratio of their de Broglie wavelengths $\\frac{\\lambda_p}{\\lambda_\\alpha}$?",
            "options": [
              { "id": "A", "text": "$2\\sqrt{2} : 1$" },
              { "id": "B", "text": "$4 : 1$" },
              { "id": "C", "text": "$1 : 2\\sqrt{2}$" },
              { "id": "D", "text": "$2 : 1$" }
            ],
            "correct": "A"
          },
          {
            "id": "w1-chem-11",
            "section": "Chemistry (Atomic Structure)",
            "text": "According to de Broglie's explanation of Bohr's second postulate of quantization of angular momentum, if the circumference of the 4th Bohr orbit of a hydrogen atom is $C$, the de Broglie wavelength $\\lambda$ of the electron moving in this orbit is:",
            "options": [
              { "id": "A", "text": "$\\frac{C}{2}$" },
              { "id": "B", "text": "$\\frac{C}{4}$" },
              { "id": "C", "text": "$4 C$" },
              { "id": "D", "text": "$2 C$" }
            ],
            "correct": "B"
          },
          {
            "id": "w1-chem-12",
            "section": "Chemistry (Atomic Structure)",
            "text": "A cricket ball of mass $200\\text{ g}$ is moving with a speed of $30\\text{ m/s}$ measured with an uncertainty of $0.001\\%$. The minimum uncertainty in its position ($\\Delta x$) is approximately: ($h = 6.626 \\times 10^{-34}\\text{ kg}\\cdot\\text{m}^2\\text{s}^{-1}$, $\\pi = 3.1416$)",
            "options": [
              { "id": "A", "text": "$8.79 \\times 10^{-31}\\text{ m}$" },
              { "id": "B", "text": "$4.39 \\times 10^{-31}\\text{ m}$" },
              { "id": "C", "text": "$1.76 \\times 10^{-30}\\text{ m}$" },
              { "id": "D", "text": "$8.79 \\times 10^{-28}\\text{ m}$" }
            ],
            "correct": "A"
          },
          {
            "id": "w1-chem-13",
            "section": "Chemistry (Atomic Structure)",
            "text": "Which of the following sets of quantum numbers $(n, l, m_l, m_s)$ represents a permissible state for an electron in a $4d$ subshell, and what is the maximum number of electrons in an atom that can have the quantum numbers $n=4, l=2, m_l=+1$?",
            "options": [
              { "id": "A", "text": "$(4, 2, +1, -\\frac{1}{2})$ and 2 electrons" },
              { "id": "B", "text": "$(4, 3, +1, +\\frac{1}{2})$ and 6 electrons" },
              { "id": "C", "text": "$(4, 2, +3, -\\frac{1}{2})$ and 10 electrons" },
              { "id": "D", "text": "$(4, 1, +1, +\\frac{1}{2})$ and 2 electrons" }
            ],
            "correct": "A"
          },
          {
            "id": "w1-chem-14",
            "section": "Chemistry (Atomic Structure)",
            "text": "For a $5d$ atomic orbital, the number of radial nodes, angular nodes (nodal planes), and total nodes are respectively:",
            "options": [
              { "id": "A", "text": "$2, 2, 4$" },
              { "id": "B", "text": "$3, 1, 4$" },
              { "id": "C", "text": "$2, 3, 5$" },
              { "id": "D", "text": "$1, 2, 3$" }
            ],
            "correct": "A"
          },
          {
            "id": "w1-chem-15",
            "section": "Chemistry (Atomic Structure)",
            "text": "The orbital angular momentum of an electron in a $3p$ orbital is $L$, and the spin-only magnetic moment of a high-spin gaseous $\\text{Fe}^{2+}$ ion ($Z=26$) is $\\mu_s$. The values of $L$ and $\\mu_s$ are respectively:",
            "options": [
              { "id": "A", "text": "$\\sqrt{2}\\frac{h}{2\\pi}$ and $\\sqrt{24}\\text{ BM}$" },
              { "id": "B", "text": "$\\sqrt{6}\\frac{h}{2\\pi}$ and $\\sqrt{35}\\text{ BM}$" },
              { "id": "C", "text": "$\\sqrt{2}\\frac{h}{2\\pi}$ and $\\sqrt{15}\\text{ BM}$" },
              { "id": "D", "text": "$0$ and $\\sqrt{24}\\text{ BM}$" }
            ],
            "correct": "A"
          },
          {
            "id": "w1-chem-16",
            "section": "Chemistry (Atomic Structure)",
            "text": "Match the principle/rule in List I with its correct governing statement in List II:\n\nList I:\n(A) Aufbau Principle\n(B) Pauli's Exclusion Principle\n(C) Hund's Rule of Maximum Multiplicity\n(D) Heisenberg's Uncertainty Principle\n\nList II:\n(I) Pairing of electrons in degenerate orbitals does not take place until each orbital is singly occupied with parallel spins.\n(II) In the ground state of atoms, orbitals are filled in the order of increasing $(n+l)$ energies.\n(III) No two electrons in an isolated atom can have the exact same set of all four quantum numbers.\n(IV) It is impossible to determine simultaneously both the exact position and momentum of a subatomic particle.",
            "options": [
              { "id": "A", "text": "A-II, B-III, C-I, D-IV" },
              { "id": "B", "text": "A-III, B-II, C-I, D-IV" },
              { "id": "C", "text": "A-II, B-I, C-III, D-IV" },
              { "id": "D", "text": "A-IV, B-III, C-I, D-II" }
            ],
            "correct": "A"
          },
          {
            "id": "w1-chem-17",
            "section": "Chemistry (Atomic Structure)",
            "text": "Consider the following orbitals in a multi-electron atom:\n(1) $n=4, l=0$\n(2) $n=3, l=2$\n(3) $n=4, l=1$\n(4) $n=3, l=1$\n\nAccording to the $(n+l)$ rule, arrange these orbitals in the correct order of increasing energy:",
            "options": [
              { "id": "A", "text": "$(4) < (1) < (2) < (3)$" },
              { "id": "B", "text": "$(4) < (2) < (1) < (3)$" },
              { "id": "C", "text": "$(1) < (4) < (2) < (3)$" },
              { "id": "D", "text": "$(4) < (1) < (3) < (2)$" }
            ],
            "correct": "A"
          },
          {
            "id": "w1-chem-18",
            "section": "Chemistry (Atomic Structure)",
            "text": "In the ground state electronic configuration of a neutral Chromium atom ($\\text{Cr}, Z=24$):\n(i) What is the total number of electrons having azimuthal quantum number $l = 1$?\n(ii) What is the total number of unpaired electrons in the atom?",
            "options": [
              { "id": "A", "text": "12 and 6" },
              { "id": "B", "text": "12 and 4" },
              { "id": "C", "text": "6 and 6" },
              { "id": "D", "text": "18 and 6" }
            ],
            "correct": "A"
          },
          {
            "id": "w1-chem-19",
            "section": "Chemistry (Atomic Structure)",
            "text": "The stability of half-filled subshells is significantly enhanced by exchange energy. What is the total number of possible exchange interactions among electrons with parallel spins in the $3d^5$ subshell of a $\\text{Mn}^{2+}$ ion?",
            "options": [
              { "id": "A", "text": "10" },
              { "id": "B", "text": "6" },
              { "id": "C", "text": "15" },
              { "id": "D", "text": "5" }
            ],
            "correct": "A"
          },
          {
            "id": "w1-chem-20",
            "section": "Chemistry (Atomic Structure)",
            "text": "Regarding the quantum mechanical model and radial probability distribution curves $4\\pi r^2 R^2(r)$ versus distance $r$ from the nucleus, which of the following statements is INCORRECT?",
            "options": [
              { "id": "A", "text": "For the $1s$ orbital of hydrogen, the radial probability $4\\pi r^2 R^2(r)$ has its maximum value at $r=0$." },
              { "id": "B", "text": "For the $1s$ orbital of hydrogen, $\\psi^2$ is maximum at $r=0$, but $4\\pi r^2 R^2(r)$ is zero at $r=0$." },
              { "id": "C", "text": "The radius at which $4\\pi r^2 R^2(r)$ is maximum for the $1s$ orbital of hydrogen is equal to the Bohr radius $a_0 = 0.529\\text{ \\AA}$." },
              { "id": "D", "text": "The number of radial probability peaks (maxima) for a $3p$ orbital is 2 ($n-l = 3-1=2$)." }
            ],
            "correct": "A"
          },
          {
            "id": "w1-math-21",
            "section": "Mathematics (Permutations & Combinations)",
            "text": "How many 4-digit numbers strictly greater than $4000$ can be formed using the digits $\\{0, 1, 2, 4, 5, 7, 8\\}$ without repeating any digit in the number?",
            "options": [
              { "id": "A", "text": "$480$" },
              { "id": "B", "text": "$420$" },
              { "id": "C", "text": "$360$" },
              { "id": "D", "text": "$540$" }
            ],
            "correct": "A"
          },
          {
            "id": "w1-math-22",
            "section": "Mathematics (Permutations & Combinations)",
            "text": "In how many different ways can the letters of the word $\\text{TRIANGLE}$ be arranged so that no two vowels are consecutive?",
            "options": [
              { "id": "A", "text": "$14400$" },
              { "id": "B", "text": "$7200$" },
              { "id": "C", "text": "$28800$" },
              { "id": "D", "text": "$1440$" }
            ],
            "correct": "A"
          },
          {
            "id": "w1-math-23",
            "section": "Mathematics (Permutations & Combinations)",
            "text": "If all possible permutations of the letters of the word $\\text{MASTER}$ are listed in dictionary (alphabetical) order, what is the rank of the word $\\text{MASTER}$?",
            "options": [
              { "id": "A", "text": "$257$" },
              { "id": "B", "text": "$256$" },
              { "id": "C", "text": "$312$" },
              { "id": "D", "text": "$241$" }
            ],
            "correct": "A"
          },
          {
            "id": "w1-math-24",
            "section": "Mathematics (Permutations & Combinations)",
            "text": "In how many ways can the letters of the word $\\text{ASSASSINATION}$ be arranged such that all four $\\text{S}$'s occur together as a single block?",
            "options": [
              { "id": "A", "text": "$151200$" },
              { "id": "B", "text": "$50400$" },
              { "id": "C", "text": "$302400$" },
              { "id": "D", "text": "$75600$" }
            ],
            "correct": "A"
          },
          {
            "id": "w1-math-25",
            "section": "Mathematics (Permutations & Combinations)",
            "text": "In how many ways can 7 distinct persons be seated around a circular table such that two particular persons never sit adjacent to each other?",
            "options": [
              { "id": "A", "text": "$480$" },
              { "id": "B", "text": "$240$" },
              { "id": "C", "text": "$360$" },
              { "id": "D", "text": "$600$" }
            ],
            "correct": "A"
          },
          {
            "id": "w1-math-26",
            "section": "Mathematics (Permutations & Combinations)",
            "text": "A decorative garland is to be made using 8 distinct flowers of different colours. In how many different ways can the garland be made?",
            "options": [
              { "id": "A", "text": "$2520$" },
              { "id": "B", "text": "$5040$" },
              { "id": "C", "text": "$1260$" },
              { "id": "D", "text": "$720$" }
            ],
            "correct": "A"
          },
          {
            "id": "w1-math-27",
            "section": "Mathematics (Permutations & Combinations)",
            "text": "In how many ways can 5 boys and 5 girls sit alternately around a round table?",
            "options": [
              { "id": "A", "text": "$2880$" },
              { "id": "B", "text": "$1440$" },
              { "id": "C", "text": "$5760$" },
              { "id": "D", "text": "$120$" }
            ],
            "correct": "A"
          },
          {
            "id": "w1-math-28",
            "section": "Mathematics (Permutations & Combinations)",
            "text": "How many 5-letter arrangements can be formed from 10 distinct letters such that 2 designated letters are always included in every arrangement?",
            "options": [
              { "id": "A", "text": "$6720$" },
              { "id": "B", "text": "$3360$" },
              { "id": "C", "text": "$13440$" },
              { "id": "D", "text": "$2016$" }
            ],
            "correct": "A"
          },
          {
            "id": "w1-math-29",
            "section": "Mathematics (Permutations & Combinations)",
            "text": "A committee of 6 members is to be formed from a group of 7 men and 5 women. In how many ways can this committee be chosen if it must contain at least 2 women and at least 2 men?",
            "options": [
              { "id": "A", "text": "$805$" },
              { "id": "B", "text": "$735$" },
              { "id": "C", "text": "$924$" },
              { "id": "D", "text": "$650$" }
            ],
            "correct": "A"
          },
          {
            "id": "w1-math-30",
            "section": "Mathematics (Permutations & Combinations)",
            "text": "There are 12 points in a plane, out of which 5 points are collinear and no other set of 3 points is collinear.\n(i) How many straight lines can be formed by joining pairs of these points?\n(ii) How many triangles can be formed with these points as vertices?",
            "options": [
              { "id": "A", "text": "57 lines and 210 triangles" },
              { "id": "B", "text": "56 lines and 210 triangles" },
              { "id": "C", "text": "57 lines and 220 triangles" },
              { "id": "D", "text": "66 lines and 200 triangles" }
            ],
            "correct": "A"
          },
          {
            "id": "w1-math-31",
            "section": "Mathematics (Permutations & Combinations)",
            "text": "Match the combinatorial identity in List I with its simplified form in List II:\n\nList I:\n(A) $^{n}C_r + ^{n}C_{r-1}$\n(B) $\\sum_{r=0}^{n} {^nC_r}$\n(C) $\\sum_{r=1}^{n} r \\cdot {^nC_r}$\n(D) $^{n}C_0 + ^{n+1}C_1 + ^{n+2}C_2 + \\dots + ^{n+k}C_k$\n\nList II:\n(I) $2^n$\n(II) $^{n+1}C_r$\n(III) $^{n+k+1}C_k$\n(IV) $n \\cdot 2^{n-1}$",
            "options": [
              { "id": "A", "text": "A-II, B-I, C-IV, D-III" },
              { "id": "B", "text": "A-II, B-IV, C-I, D-III" },
              { "id": "C", "text": "A-III, B-I, C-IV, D-II" },
              { "id": "D", "text": "A-I, B-II, C-III, D-IV" }
            ],
            "correct": "A"
          },
          {
            "id": "w1-math-32",
            "section": "Mathematics (Permutations & Combinations)",
            "text": "A basket contains 4 identical apples, 5 identical mangoes, and 6 distinct oranges. In how many different ways can a person select at least one fruit from the basket?",
            "options": [
              { "id": "A", "text": "$1919$" },
              { "id": "B", "text": "$1920$" },
              { "id": "C", "text": "$1535$" },
              { "id": "D", "text": "$959$" }
            ],
            "correct": "A"
          },
          {
            "id": "w1-math-33",
            "section": "Mathematics (Permutations & Combinations)",
            "text": "Consider the integer $N = 2^4 \\times 3^3 \\times 5^2 \\times 7^1 = 75600$.\n(i) What is the total number of positive divisors of $N$?\n(ii) How many of these divisors are even numbers?\n(iii) How many of these divisors are divisible by $12$?",
            "options": [
              { "id": "A", "text": "Total = 120, Even = 96, Divisible by 12 = 54" },
              { "id": "B", "text": "Total = 120, Even = 96, Divisible by 12 = 60" },
              { "id": "C", "text": "Total = 100, Even = 80, Divisible by 12 = 48" },
              { "id": "D", "text": "Total = 120, Even = 100, Divisible by 12 = 54" }
            ],
            "correct": "A"
          },
          {
            "id": "w1-math-34",
            "section": "Mathematics (Permutations & Combinations)",
            "text": "In how many ways can 12 distinct books be:\n(i) Distributed equally among 3 students?\n(ii) Divided into 3 equal unlabelled packets of 4 books each?",
            "options": [
              { "id": "A", "text": "$\\frac{12!}{(4!)^3}$ and $\\frac{12!}{3!(4!)^3}$" },
              { "id": "B", "text": "$\\frac{12!}{3!(4!)^3}$ and $\\frac{12!}{(4!)^3}$" },
              { "id": "C", "text": "$\\frac{12!}{(3!)^4}$ and $\\frac{12!}{4!(3!)^4}$" },
              { "id": "D", "text": "$\\frac{12!}{(4!)^3}$ and $\\frac{12!}{(4!)^3}$" }
            ],
            "correct": "A"
          },
          {
            "id": "w1-math-35",
            "section": "Mathematics (Permutations & Combinations)",
            "text": "Find the number of non-negative integer solutions to the equation:\n$$x_1 + x_2 + x_3 + x_4 = 15$$\nsubject to the constraints $x_1 \\ge 1$, $x_2 \\ge 2$, $x_3 \\ge 0$, and $x_4 \\ge 0$.",
            "options": [
              { "id": "A", "text": "$455$" },
              { "id": "B", "text": "$816$" },
              { "id": "C", "text": "$364$" },
              { "id": "D", "text": "$560$" }
            ],
            "correct": "A"
          },
          {
            "id": "w1-math-36",
            "section": "Mathematics (Permutations & Combinations)",
            "text": "In how many ways can the letters of the word $\\text{CHANDIGARH}$ be arranged so that the vowels always appear in alphabetical order (i.e. first $\\text{A}$, then $\\text{A}$, then $\\text{I}$)?",
            "options": [
              { "id": "A", "text": "$302400$" },
              { "id": "B", "text": "$453600$" },
              { "id": "C", "text": "$151200$" },
              { "id": "D", "text": "$907200$" }
            ],
            "correct": "A"
          },
          {
            "id": "w1-math-37",
            "section": "Mathematics (Permutations & Combinations)",
            "text": "A person writes 5 letters to 5 different recipients and addresses 5 corresponding envelopes. In how many ways can all 5 letters be placed into envelopes such that no letter goes into its correctly addressed envelope?",
            "options": [
              { "id": "A", "text": "$44$" },
              { "id": "B", "text": "$53$" },
              { "id": "C", "text": "$119$" },
              { "id": "D", "text": "$24$" }
            ],
            "correct": "A"
          },
          {
            "id": "w1-math-38",
            "section": "Mathematics (Permutations & Combinations)",
            "text": "What is the sum of all 4-digit numbers that can be formed using the digits $\\{1, 3, 5, 7\\}$ without repeating any digit?",
            "options": [
              { "id": "A", "text": "$106656$" },
              { "id": "B", "text": "$105556$" },
              { "id": "C", "text": "$53328$" },
              { "id": "D", "text": "$213312$" }
            ],
            "correct": "A"
          },
          {
            "id": "w1-math-39",
            "section": "Mathematics (Permutations & Combinations)",
            "text": "What is the highest exponent of the prime number $3$ that divides $100!$, and what is the number of trailing zeroes at the end of $100!$?",
            "options": [
              { "id": "A", "text": "48 and 24" },
              { "id": "B", "text": "48 and 20" },
              { "id": "C", "text": "45 and 24" },
              { "id": "D", "text": "50 and 25" }
            ],
            "correct": "A"
          },
          {
            "id": "w1-math-40",
            "section": "Mathematics (Permutations & Combinations)",
            "text": "Find the total number of 4-letter words (with or without meaning) that can be formed using the letters of the word $\\text{EXAMINATION}$.",
            "options": [
              { "id": "A", "text": "$2454$" },
              { "id": "B", "text": "$1680$" },
              { "id": "C", "text": "$2254$" },
              { "id": "D", "text": "$2544$" }
            ],
            "correct": "A"
          }
        ]
      }
    ]
  };

  var incoming = Array.isArray(payload) ? payload : (Array.isArray(payload.exams) ? payload.exams : [payload]);
  var existing = Array.isArray(window.BUNDLED_EXAMS.exams) ? window.BUNDLED_EXAMS.exams : [];
  var map = {};

  existing.forEach(function (exam) {
    if (exam && exam.id) map[String(exam.id)] = exam;
  });

  incoming.forEach(function (exam) {
    if (exam && exam.id) map[String(exam.id)] = exam;
  });

  window.BUNDLED_EXAMS.exams = Object.keys(map).map(function (id) {
    return map[id];
  });
})();
