(function () {
  window.BUNDLED_EXAMS = window.BUNDLED_EXAMS || { exams: [] };

  var payload = {
    "exams": [
      {
        "id": "weekly-mock-test-02",
        "title": "Weekly Mock Test - 2 (P&C, Probability, Atomic Structure, Periodic Classification)",
        "date": "2026-09-08",
        "durationMinutes": 60,
        "marksPerQuestion": 1,
        "negativeMark": 0,
        "sections": [
          {
            "key": "maths",
            "title": "Mathematics (Permutations, Combinations & Probability)",
            "count": 20,
            "start": 1,
            "end": 20
          },
          {
            "key": "chemistry",
            "title": "Chemistry (Atomic Structure & Periodic Classification)",
            "count": 20,
            "start": 21,
            "end": 40
          }
        ],
        "questions": [
          {
            "id": "w2-math-1",
            "section": "Mathematics (Permutations, Combinations & Probability)",
            "text": "How many 5-digit numbers can be formed using the digits $\\{0, 1, 2, 3, 4, 5\\}$ without repeating any digit in the number such that the formed number is divisible by $6$?",
            "options": [
              { "id": "A", "text": "$96$" },
              { "id": "B", "text": "$108$" },
              { "id": "C", "text": "$120$" },
              { "id": "D", "text": "$132$" }
            ],
            "correct": "B",
            "explanation": "A number is divisible by 6 if it is even and the sum of its digits is divisible by 3. Sum of all 6 given digits $\{0, 1, 2, 3, 4, 5\} = 15$. To form a 5-digit number, we exclude one digit. For the remaining sum to be a multiple of 3, the excluded digit must be 0 or 3.\n- Case 1: Exclude 0. Digits $\{1, 2, 3, 4, 5\}$ (sum = 15). Last digit must be 2 or 4 (2 choices). Remaining 4 digits can be arranged in $4! = 24$ ways $\\implies 2 \\times 24 = 48$ ways.\n- Case 2: Exclude 3. Digits $\{0, 1, 2, 4, 5\}$ (sum = 12). If unit digit is 0: $4! = 24$ ways. If unit digit is 2 or 4 (2 choices): first digit has 3 choices (cannot be 0), remaining 3 in $3! = 6$ ways $\\implies 2 \\times 3 \\times 6 = 36$ ways. Total for Case 2 $= 24 + 36 = 60$.\nTotal 5-digit numbers divisible by $6 = 48 + 60 = 108$."
          },
          {
            "id": "w2-math-2",
            "section": "Mathematics (Permutations, Combinations & Probability)",
            "text": "The letters of the word $\\text{INDEPENDENCE}$ are arranged at random. In how many of these arrangements do all the vowels never occur together as a single block?",
            "options": [
              { "id": "A", "text": "$1646400$" },
              { "id": "B", "text": "$1663200$" },
              { "id": "C", "text": "$1642800$" },
              { "id": "D", "text": "$1651200$" }
            ],
            "correct": "A",
            "explanation": "In the word $\\text{INDEPENDENCE}$, there are 12 letters: $\\text{I}(1), \\text{N}(3), \\text{D}(2), \\text{E}(4), \\text{P}(1), \\text{C}(1)$.\n- Total unrestricted arrangements $= \\frac{12!}{3! \\, 2! \\, 4!} = 1663200$.\n- Vowels are $\\text{I}(1), \\text{E}(4)$ (total 5 vowels). Consonants are $\\text{N}(3), \\text{D}(2), \\text{P}(1), \\text{C}(1)$ (7 consonants).\n- Treat all 5 vowels as a single block: total units to arrange $= 7 + 1 = 8$.\n- Arrangements with vowels together $= \\frac{8!}{3! \\, 2!} \\times \\frac{5!}{4!} = 3360 \\times 5 = 16800$.\n- Arrangements where vowels never occur all together $= 1663200 - 16800 = 1646400$."
          },
          {
            "id": "w2-math-3",
            "section": "Mathematics (Permutations, Combinations & Probability)",
            "text": "In how many ways can 6 boys and 6 girls be seated around a circular table such that all the boys sit together and all the girls sit together?",
            "options": [
              { "id": "A", "text": "$2 \\times (6!)^2$" },
              { "id": "B", "text": "$(6!)^2$" },
              { "id": "C", "text": "$\\frac{1}{2} (6!)^2$" },
              { "id": "D", "text": "$11!$" }
            ],
            "correct": "B",
            "explanation": "Treat all 6 boys as one block $B$ and all 6 girls as another block $G$. Arranging 2 distinct blocks around a circular table can be done in $(2 - 1)! = 1! = 1$ way. Within block $B$, the 6 boys can arrange linearly in $6!$ ways, and within block $G$, the 6 girls can arrange linearly in $6!$ ways. Total arrangements $= 1 \\times 6! \\times 6! = (6!)^2 = 518400$."
          },
          {
            "id": "w2-math-4",
            "section": "Mathematics (Permutations, Combinations & Probability)",
            "text": "If all possible permutations of the letters of the word $\\text{KOTAK}$ are arranged in dictionary (alphabetical) order, what is the rank of the word $\\text{KOTAK}$?",
            "options": [
              { "id": "A", "text": "$31$" },
              { "id": "B", "text": "$25$" },
              { "id": "C", "text": "$29$" },
              { "id": "D", "text": "$33$" }
            ],
            "correct": "C",
            "explanation": "Alphabetical order of letters: $\\text{A}, \\text{K}, \\text{K}, \\text{O}, \\text{T}$ (5 letters, $\\text{K}$ repeats twice).\n- Words starting with $\\text{A}$: $\\frac{4!}{2!} = 12$.\n- Words starting with $\\text{KA}$: $3! = 6$.\n- Words starting with $\\text{KK}$: $3! = 6$.\n- Words starting with $\\text{KOA}$: $2! = 2$.\n- Words starting with $\\text{KOK}$: $2! = 2$.\n- Words starting with $\\text{KOT}$: The very first alphabetical word is $\\text{KOTAK}$ (1st word).\nRank $= 12 + 6 + 6 + 2 + 2 + 1 = 29$."
          },
          {
            "id": "w2-math-5",
            "section": "Mathematics (Permutations, Combinations & Probability)",
            "text": "Consider a regular decagon (a polygon with 10 sides):\n(i) What is the total number of diagonals that can be drawn?\n(ii) Assuming no three diagonals intersect at the same point inside the polygon, what is the number of points of intersection of these diagonals lying strictly inside the polygon?",
            "options": [
              { "id": "A", "text": "Diagonals = 35, Interior intersections = 210" },
              { "id": "B", "text": "Diagonals = 45, Interior intersections = 210" },
              { "id": "C", "text": "Diagonals = 35, Interior intersections = 120" },
              { "id": "D", "text": "Diagonals = 40, Interior intersections = 252" }
            ],
            "correct": "A",
            "explanation": "(i) Number of diagonals in an $n$-sided regular polygon $= \\frac{n(n-3)}{2} = \\frac{10 \\times 7}{2} = 35$.\n(ii) In a convex $n$-gon with no 3 diagonals concurrent inside, every choice of 4 vertices defines a unique convex quadrilateral whose two diagonals intersect at exactly 1 interior point. Hence, number of interior intersection points $= {^{10}C_4} = \\frac{10 \\times 9 \\times 8 \\times 7}{24} = 210$."
          },
          {
            "id": "w2-math-6",
            "section": "Mathematics (Permutations, Combinations & Probability)",
            "text": "Evaluate the value of the combinatorial expression:\n$$S = \\frac{\\sum_{r=0}^{10} {^{20}C_r} \\cdot {^{20}C_{10-r}}}{^{40}C_{10}} + \\sum_{r=1}^{10} r \\cdot \\frac{^{10}C_r}{^{10}C_{r-1}}$$",
            "options": [
              { "id": "A", "text": "$46$" },
              { "id": "B", "text": "$55$" },
              { "id": "C", "text": "$56$" },
              { "id": "D", "text": "$66$" }
            ],
            "correct": "C",
            "explanation": "- By Vandermonde's Convolution Identity, $\\sum_{r=0}^{10} {^{20}C_r}{^{20}C_{10-r}} = {^{40}C_{10}}$, so the first term evaluates to $\\frac{^{40}C_{10}}{^{40}C_{10}} = 1$.\n- For the second term, using $\\frac{^nC_r}{^nC_{r-1}} = \\frac{n-r+1}{r}$:\n$$\\sum_{r=1}^{10} r \\cdot \\frac{^{10}C_r}{^{10}C_{r-1}} = \\sum_{r=1}^{10} (11 - r) = 10 + 9 + \\dots + 1 = \\frac{10 \\times 11}{2} = 55$$\n- Total value $S = 1 + 55 = 56$."
          },
          {
            "id": "w2-math-7",
            "section": "Mathematics (Permutations, Combinations & Probability)",
            "text": "Find the number of non-negative integer solutions to the equation:\n$$x + y + z + w = 20$$\nsubject to the constraints $x \\ge 2$, $y \\ge 3$, $z \\ge 1$, and $0 \\le w \\le 4$.",
            "options": [
              { "id": "A", "text": "$520$" },
              { "id": "B", "text": "$480$" },
              { "id": "C", "text": "$380$" },
              { "id": "D", "text": "$460$" }
            ],
            "correct": "D",
            "explanation": "Let $x' = x-2 \\ge 0$, $y' = y-3 \\ge 0$, $z' = z-1 \\ge 0$, and $w' = w \\ge 0$. The equation becomes $x' + y' + z' + w' = 20 - 6 = 14$, with constraint $w' \\le 4$.\n- Total unrestricted non-negative integer solutions $= {^{14 + 4 - 1}C_{4-1}} = {^{17}C_3} = \\frac{17 \\times 16 \\times 15}{6} = 680$.\n- Solutions violating condition ($w' \\ge 5$): substitute $w'' = w' - 5 \\ge 0 \\implies x' + y' + z' + w'' = 9$. Number of solutions $= {^{9 + 4 - 1}C_3} = {^{12}C_3} = 220$.\n- Valid non-negative solutions $= 680 - 220 = 460$."
          },
          {
            "id": "w2-math-8",
            "section": "Mathematics (Permutations, Combinations & Probability)",
            "text": "A person writes 6 letters to 6 different persons and addresses 6 corresponding envelopes. If the letters are placed randomly into the envelopes, what is the number of ways in which exactly 2 letters are placed into their correctly addressed envelopes?",
            "options": [
              { "id": "A", "text": "$90$" },
              { "id": "B", "text": "$135$" },
              { "id": "C", "text": "$270$" },
              { "id": "D", "text": "$180$" }
            ],
            "correct": "B",
            "explanation": "Number of ways to choose the 2 correctly placed letters $= {^6C_2} = 15$.\nThe remaining $6 - 2 = 4$ letters must all be deranged (none into its correct envelope).\n$$D_4 = 4! \\left(1 - \\frac{1}{1!} + \\frac{1}{2!} - \\frac{1}{3!} + \\frac{1}{4!}\\right) = 24 \\left(\\frac{1}{2} - \\frac{1}{6} + \\frac{1}{24}\\right) = 12 - 4 + 1 = 9$$\nTotal number of ways $= {^6C_2} \\times D_4 = 15 \\times 9 = 135$."
          },
          {
            "id": "w2-math-9",
            "section": "Mathematics (Permutations, Combinations & Probability)",
            "text": "In a municipal election, there are 4 candidates and 5 voters.\n(i) In how many ways can the 5 distinct voters cast their votes if each voter can choose any of the 4 candidates?\n(ii) In how many ways can the total count of 5 votes be distributed among the 4 candidates if we only observe the number of votes received by each candidate (votes are indistinguishable)?",
            "options": [
              { "id": "A", "text": "(i) $625$, (ii) $56$" },
              { "id": "B", "text": "(i) $1024$, (ii) $70$" },
              { "id": "C", "text": "(i) $1024$, (ii) $56$" },
              { "id": "D", "text": "(i) $625$, (ii) $84$" }
            ],
            "correct": "C",
            "explanation": "(i) When voters are distinguishable, each of the 5 voters independently has 4 candidate choices $\\implies 4^5 = 1024$ ways.\n(ii) When only the total vote counts per candidate matter, this is the number of non-negative integer solutions to $v_1 + v_2 + v_3 + v_4 = 5$, which is ${^{5 + 4 - 1}C_{4-1}} = {^8C_3} = \\frac{8 \\times 7 \\times 6}{6} = 56$ ways."
          },
          {
            "id": "w2-math-10",
            "section": "Mathematics (Permutations, Combinations & Probability)",
            "text": "In how many ways can 9 distinct toys be distributed among 3 children such that the youngest child receives 4 toys, and the other two children receive 3 toys and 2 toys respectively?",
            "options": [
              { "id": "A", "text": "$1260$" },
              { "id": "B", "text": "$5040$" },
              { "id": "C", "text": "$7560$" },
              { "id": "D", "text": "$2520$" }
            ],
            "correct": "D",
            "explanation": "The 3 children are distinguishable (Youngest $Y$, and older siblings $A$ and $B$).\n- Selection of 4 toys for $Y$: ${^9C_4} = 126$ ways.\n- Distribution of remaining 5 toys into groups of 3 and 2 for $A$ and $B$:\n  - $A$ gets 3, $B$ gets 2: ${^5C_3} \\times {^2C_2} = 10$\n  - $A$ gets 2, $B$ gets 3: ${^5C_2} \\times {^3C_3} = 10$\n- Total ways $= 126 \\times (10 + 10) = 126 \\times 20 = 2520$."
          },
          {
            "id": "w2-math-11",
            "section": "Mathematics (Permutations, Combinations & Probability)",
            "text": "Three unbiased six-faced dice are thrown simultaneously. What is the probability that the sum of the numbers appearing on the top faces of the three dice is equal to $14$?",
            "options": [
              { "id": "A", "text": "$\\frac{7}{72}$" },
              { "id": "B", "text": "$\\frac{5}{72}$" },
              { "id": "C", "text": "$\\frac{1}{18}$" },
              { "id": "D", "text": "$\\frac{5}{36}$" }
            ],
            "correct": "B",
            "explanation": "Total possible outcomes when throwing 3 dice $= 6^3 = 216$.\nWe find the number of integer solutions to $x_1 + x_2 + x_3 = 14$ with $1 \\le x_i \\le 6$. Letting $y_i = x_i - 1 \\implies y_1 + y_2 + y_3 = 11$ with $0 \\le y_i \\le 5$.\n- Total non-negative solutions $= {^{11 + 3 - 1}C_2} = {^{13}C_2} = 78$.\n- Subtract cases where at least one $y_i \\ge 6$: $3 \\times {^{11 - 6 + 2}C_2} = 3 \\times {^7C_2} = 3 \\times 21 = 63$.\n- Favorable outcomes $= 78 - 63 = 15$.\n- Probability $= \\frac{15}{216} = \\frac{5}{72}$."
          },
          {
            "id": "w2-math-12",
            "section": "Mathematics (Permutations, Combinations & Probability)",
            "text": "For two events $A$ and $B$, it is given that $P(A) = \\frac{3}{8}$, $P(B) = \\frac{1}{2}$, and $P(A \\cup B) = \\frac{5}{8}$. What is the value of the conditional probability $P(A' \\cap B' \\mid A' \\cup B')$?",
            "options": [
              { "id": "A", "text": "$\\frac{1}{4}$" },
              { "id": "B", "text": "$\\frac{3}{8}$" },
              { "id": "C", "text": "$\\frac{1}{2}$" },
              { "id": "D", "text": "$\\frac{2}{3}$" }
            ],
            "correct": "C",
            "explanation": "By the addition theorem of probability:\n$$P(A \\cap B) = P(A) + P(B) - P(A \\cup B) = \\frac{3}{8} + \\frac{1}{2} - \\frac{5}{8} = \\frac{2}{8} = \\frac{1}{4}$$\nUsing De Morgan's laws:\n- $P(A' \\cap B') = P((A \\cup B)') = 1 - P(A \\cup B) = 1 - \\frac{5}{8} = \\frac{3}{8}$.\n- $P(A' \\cup B') = P((A \\cap B)') = 1 - P(A \\cap B) = 1 - \\frac{1}{4} = \\frac{3}{4}$.\nSince $(A' \\cap B') \\subseteq (A' \\cup B')$, the intersection $(A' \\cap B') \\cap (A' \\cup B') = A' \\cap B'$.\n$$P(A' \\cap B' \\mid A' \\cup B') = \\frac{P(A' \\cap B')}{P(A' \\cup B')} = \\frac{3/8}{3/4} = \\frac{1}{2}$$"
          },
          {
            "id": "w2-math-13",
            "section": "Mathematics (Permutations, Combinations & Probability)",
            "text": "Three marksmen $A$, $B$, and $C$ fire at a target independently with probabilities of hitting the target given by $\\frac{1}{2}$, $\\frac{1}{3}$, and $\\frac{1}{4}$ respectively. What is the probability that the target is hit by exactly two of them?",
            "options": [
              { "id": "A", "text": "$\\frac{1}{4}$" },
              { "id": "B", "text": "$\\frac{3}{8}$" },
              { "id": "C", "text": "$\\frac{5}{12}$" },
              { "id": "D", "text": "$\\frac{1}{3}$" }
            ],
            "correct": "A",
            "explanation": "Given $P(A) = 1/2, P(A') = 1/2; \\, P(B) = 1/3, P(B') = 2/3; \\, P(C) = 1/4, P(C') = 3/4$.\nExactly two hit the target:\n- $A$ and $B$ hit, $C$ misses: $P(A \\cap B \\cap C') = \\frac{1}{2} \\times \\frac{1}{3} \\times \\frac{3}{4} = \\frac{3}{24}$\n- $A$ and $C$ hit, $B$ misses: $P(A \\cap B' \\cap C) = \\frac{1}{2} \\times \\frac{2}{3} \\times \\frac{1}{4} = \\frac{2}{24}$\n- $B$ and $C$ hit, $A$ misses: $P(A' \\cap B \\cap C) = \\frac{1}{2} \\times \\frac{1}{3} \\times \\frac{1}{4} = \\frac{1}{24}$\nTotal probability $= \\frac{3 + 2 + 1}{24} = \\frac{6}{24} = \\frac{1}{4}$."
          },
          {
            "id": "w2-math-14",
            "section": "Mathematics (Permutations, Combinations & Probability)",
            "text": "A card is drawn from a well-shuffled standard pack of 52 playing cards. Let event $E_1$ be \"the card drawn is a King or an Ace\" and event $E_2$ be \"the card drawn is a face card (Jack, Queen, or King) or a Spade\". What is the conditional probability $P(E_1 \\mid E_2)$?",
            "options": [
              { "id": "A", "text": "$\\frac{4}{22}$" },
              { "id": "B", "text": "$\\frac{3}{11}$" },
              { "id": "C", "text": "$\\frac{6}{25}$" },
              { "id": "D", "text": "$\\frac{5}{22}$" }
            ],
            "correct": "D",
            "explanation": "Total cards $= 52$.\n- Event $E_2$ (face card or spade): 12 face cards + 13 spades - 3 spade face cards (Jack, Queen, King of Spades) $= 22$ cards.\n- Event $E_1 \\cap E_2$ (cards in $E_1$ that belong to $E_2$): All 4 Kings (since Kings are face cards) + Ace of Spades (an Ace that is a spade) $= 4 + 1 = 5$ cards.\n- $P(E_1 \\mid E_2) = \\frac{n(E_1 \\cap E_2)}{n(E_2)} = \\frac{5}{22}$."
          },
          {
            "id": "w2-math-15",
            "section": "Mathematics (Permutations, Combinations & Probability)",
            "text": "Bag I contains 4 red and 6 black balls. Bag II contains 5 red and 3 black balls. A bag is chosen at random with equal probability and a ball is drawn from it. If the ball drawn is found to be red, what is the probability that it was drawn from Bag I?",
            "options": [
              { "id": "A", "text": "$\\frac{25}{41}$" },
              { "id": "B", "text": "$\\frac{16}{41}$" },
              { "id": "C", "text": "$\\frac{16}{35}$" },
              { "id": "D", "text": "$\\frac{4}{9}$" }
            ],
            "correct": "B",
            "explanation": "Let $B_1$ and $B_2$ be the events of choosing Bag I and Bag II respectively: $P(B_1) = P(B_2) = 1/2$.\n- $P(R \\mid B_1) = \\frac{4}{10} = \\frac{2}{5}, \\quad P(R \\mid B_2) = \\frac{5}{8}$.\nBy Bayes' Theorem:\n$$P(B_1 \\mid R) = \\frac{P(B_1)P(R \\mid B_1)}{P(B_1)P(R \\mid B_1) + P(B_2)P(R \\mid B_2)} = \\frac{\\frac{1}{2} \\times \\frac{2}{5}}{\\frac{1}{2} \\times \\frac{2}{5} + \\frac{1}{2} \\times \\frac{5}{8}} = \\frac{\\frac{2}{5}}{\\frac{2}{5} + \\frac{5}{8}} = \\frac{16/40}{41/40} = \\frac{16}{41}$$"
          },
          {
            "id": "w2-math-16",
            "section": "Mathematics (Permutations, Combinations & Probability)",
            "text": "In a certain population, $0.1\\%$ of the individuals have a rare condition. A medical test designed to diagnose this condition is $99\\%$ accurate for diseased individuals (gives a positive result) and has a $0.5\\%$ false positive rate for healthy individuals. If a randomly selected individual tests positive, what is the probability that the individual actually has the condition?",
            "options": [
              { "id": "A", "text": "$\\frac{99}{100}$" },
              { "id": "B", "text": "$\\frac{11}{120}$" },
              { "id": "C", "text": "$\\frac{22}{133}$" },
              { "id": "D", "text": "$\\frac{44}{155}$" }
            ],
            "correct": "C",
            "explanation": "Let $D$ = disease, $H$ = healthy: $P(D) = 0.001, P(H) = 0.999$.\n- $P(+ \\mid D) = 0.99, \\quad P(+ \\mid H) = 0.005$.\nBy Bayes' Theorem:\n$$P(D \\mid +) = \\frac{P(D)P(+ \\mid D)}{P(D)P(+ \\mid D) + P(H)P(+ \\mid H)} = \\frac{0.001 \\times 0.99}{0.001 \\times 0.99 + 0.999 \\times 0.005} = \\frac{0.00099}{0.00099 + 0.004995} = \\frac{0.00099}{0.005985} = \\frac{990}{5985} = \\frac{22}{133}$$"
          },
          {
            "id": "w2-math-17",
            "section": "Mathematics (Permutations, Combinations & Probability)",
            "text": "Two players $A$ and $B$ play a game by alternately rolling a pair of standard fair dice. $A$ rolls first. The player who first gets a sum of $7$ on the two dice wins the game. What is the probability that player $A$ wins?",
            "options": [
              { "id": "A", "text": "$\\frac{5}{11}$" },
              { "id": "B", "text": "$\\frac{6}{11}$" },
              { "id": "C", "text": "$\\frac{7}{12}$" },
              { "id": "D", "text": "$\\frac{1}{2}$" }
            ],
            "correct": "B",
            "explanation": "Probability of obtaining a sum of 7 with two dice $p = \\frac{6}{36} = \\frac{1}{6}$, and failure probability $q = \\frac{5}{6}$.\nPlayer $A$ throws on turns 1, 3, 5, ... and wins if:\n- $A$ succeeds on turn 1: $p$\n- $A$ fails on 1, $B$ fails on 2, $A$ succeeds on 3: $q^2 p$\n- $A$ succeeds on turn 5: $q^4 p$, etc.\n$$P(A \\text{ wins}) = p + q^2 p + q^4 p + \\dots = \\frac{p}{1 - q^2} = \\frac{1/6}{1 - (25/36)} = \\frac{1/6}{11/36} = \\frac{6}{11}$$"
          },
          {
            "id": "w2-math-18",
            "section": "Mathematics (Permutations, Combinations & Probability)",
            "text": "Five married couples (10 people) are seated at random around a circular dining table. What is the probability that a particular husband and his wife sit adjacent to each other?",
            "options": [
              { "id": "A", "text": "$\\frac{1}{9}$" },
              { "id": "B", "text": "$\\frac{1}{5}$" },
              { "id": "C", "text": "$\\frac{2}{5}$" },
              { "id": "D", "text": "$\\frac{2}{9}$" }
            ],
            "correct": "D",
            "explanation": "Total circular arrangements of 10 people $= (10 - 1)! = 9!$.\nTreat the husband and wife as 1 combined unit. There are now 9 units to seat in a circle in $(9 - 1)! = 8!$ ways. The couple can swap seats internally in $2! = 2$ ways.\nFavorable outcomes $= 2 \\times 8!$.\nProbability $= \\frac{2 \\times 8!}{9!} = \\frac{2}{9}$."
          },
          {
            "id": "w2-math-19",
            "section": "Mathematics (Permutations, Combinations & Probability)",
            "text": "An urn contains 6 white and 4 black balls. Two balls are drawn at random without replacement. Let $X$ be the random variable denoting the number of white balls drawn. What are the expected value $E(X)$ and the probability $P(X \\ge 1)$?",
            "options": [
              { "id": "A", "text": "$E(X) = \\frac{6}{5}$ and $P(X \\ge 1) = \\frac{13}{15}$" },
              { "id": "B", "text": "$E(X) = 1$ and $P(X \\ge 1) = \\frac{4}{5}$" },
              { "id": "C", "text": "$E(X) = \\frac{6}{5}$ and $P(X \\ge 1) = \\frac{11}{15}$" },
              { "id": "D", "text": "$E(X) = \\frac{4}{5}$ and $P(X \\ge 1) = \\frac{13}{15}$" }
            ],
            "correct": "A",
            "explanation": "Total balls $= 10$ (6 white, 4 black). 2 balls drawn without replacement.\n- $P(X=0) = \\frac{^4C_2}{^{10}C_2} = \\frac{6}{45} = \\frac{2}{15} \\implies P(X \\ge 1) = 1 - P(X=0) = 1 - \\frac{2}{15} = \\frac{13}{15}$.\n- $P(X=1) = \\frac{^6C_1 \\times ^4C_1}{45} = \\frac{24}{45} = \\frac{8}{15}$.\n- $P(X=2) = \\frac{^6C_2}{45} = \\frac{15}{45} = \\frac{5}{15}$.\nExpected value $E(X) = 0\\left(\\frac{2}{15}\\right) + 1\\left(\\frac{8}{15}\\right) + 2\\left(\\frac{5}{15}\\right) = \\frac{18}{15} = \\frac{6}{5}$."
          },
          {
            "id": "w2-math-20",
            "section": "Mathematics (Permutations, Combinations & Probability)",
            "text": "Match the probability theorem/relation in List I with its exact mathematical representation in List II:\n\nList I:\n(A) Multiplication rule for independent events $A$ and $B$\n(B) Total Probability Theorem for a partition $\\{E_1, E_2\\}$\n(C) Conditional Probability $P(A \\mid B)$\n(D) General Addition Theorem for two events $A$ and $B$\n\nList II:\n(I) $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$\n(II) $P(A) = P(E_1)P(A \\mid E_1) + P(E_2)P(A \\mid E_2)$\n(III) $P(A \\cap B) = P(A) \\cdot P(B)$\n(IV) $\\frac{P(A \\cap B)}{P(B)}$ (where $P(B) > 0$)",
            "options": [
              { "id": "A", "text": "A-III, B-II, C-IV, D-I" },
              { "id": "B", "text": "A-III, B-I, C-IV, D-II" },
              { "id": "C", "text": "A-II, B-III, C-IV, D-I" },
              { "id": "D", "text": "A-IV, B-II, C-III, D-I" }
            ],
            "correct": "A",
            "explanation": "- Multiplication rule for independent events: $P(A \\cap B) = P(A) \\cdot P(B) \\implies \\text{A-III}$.\n- Total Probability Theorem: $P(A) = P(E_1)P(A \\mid E_1) + P(E_2)P(A \\mid E_2) \\implies \\text{B-II}$.\n- Conditional probability formula: $P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)} \\implies \\text{C-IV}$.\n- Addition theorem for events: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B) \\implies \\text{D-I}$."
          },
          {
            "id": "w2-chem-21",
            "section": "Chemistry (Atomic Structure & Periodic Classification)",
            "text": "In a Rutherford $\\alpha$-particle scattering experiment, an $\\alpha$-particle ($q_\\alpha = 2e$) with kinetic energy $K$ approaches a heavy gold nucleus ($Z = 79$) in a head-on collision. The distance of closest approach is $r_0$. If the kinetic energy of the incident $\\alpha$-particle is doubled to $2K$, what is the new distance of closest approach?",
            "options": [
              { "id": "A", "text": "$2 r_0$" },
              { "id": "B", "text": "$\\frac{r_0}{2}$" },
              { "id": "C", "text": "$\\frac{r_0}{4}$" },
              { "id": "D", "text": "$\\sqrt{2} r_0$" }
            ],
            "correct": "B",
            "explanation": "At the distance of closest approach $r_0$, the initial kinetic energy $K$ of the $\\alpha$-particle equals the electrostatic potential energy:\n$$K = \\frac{1}{4\\pi \\varepsilon_0} \\frac{(2e)(Ze)}{r_0} \\implies r_0 = \\frac{2Ze^2}{4\\pi \\varepsilon_0 K} \\propto \\frac{1}{K}$$\nWhen kinetic energy is doubled to $2K$, the distance of closest approach becomes $r_0' = \\frac{r_0}{2}$."
          },
          {
            "id": "w2-chem-22",
            "section": "Chemistry (Atomic Structure & Periodic Classification)",
            "text": "When ultraviolet radiation of wavelength $\\lambda_1 = 200\\text{ nm}$ is incident on a clean metallic surface, the maximum kinetic energy of the emitted photoelectrons is $2.82\\text{ eV}$. When radiation of wavelength $\\lambda_2 = 300\\text{ nm}$ strikes the same metal surface, the maximum kinetic energy is $0.75\\text{ eV}$. What is the work function ($\\Phi_0$) of this metal? ($hc = 1240\\text{ eV}\\cdot\\text{nm}$)",
            "options": [
              { "id": "A", "text": "$2.40\\text{ eV}$" },
              { "id": "B", "text": "$4.13\\text{ eV}$" },
              { "id": "C", "text": "$3.38\\text{ eV}$" },
              { "id": "D", "text": "$1.85\\text{ eV}$" }
            ],
            "correct": "C",
            "explanation": "By Einstein's photoelectric equation, $KE_{\\max} = \\frac{hc}{\\lambda} - \\Phi_0$.\n- For $\\lambda_1 = 200\\text{ nm}$: $E_1 = \\frac{1240\\text{ eV}\\cdot\\text{nm}}{200\\text{ nm}} = 6.20\\text{ eV}$.\n  $$KE_{\\max, 1} = 6.20 - \\Phi_0 = 2.82\\text{ eV} \\implies \\Phi_0 = 6.20 - 2.82 = 3.38\\text{ eV}$$\n- Verification with $\\lambda_2 = 300\\text{ nm}$: $E_2 = \\frac{1240}{300} = 4.133\\text{ eV} \\implies KE_{\\max, 2} = 4.133 - 3.38 = 0.753\\text{ eV} \\approx 0.75\\text{ eV}$."
          },
          {
            "id": "w2-chem-23",
            "section": "Chemistry (Atomic Structure & Periodic Classification)",
            "text": "According to Bohr's model for a hydrogen-like species with atomic number $Z$, if $v_n$ is the orbital velocity of the electron in the $n$-th stationary orbit and $T_n$ is the time period of revolution in that orbit, which of the following relationships is CORRECT?",
            "options": [
              { "id": "A", "text": "$v_n \\propto \\frac{1}{n}$ and $T_n \\propto n^3$" },
              { "id": "B", "text": "$v_n \\propto n$ and $T_n \\propto n^2$" },
              { "id": "C", "text": "$r_n \\propto n$ and total energy $E_n \\propto \\frac{1}{n}$" },
              { "id": "D", "text": "$v_n \\propto \\frac{1}{n^2}$ and $T_n \\propto n^3$" }
            ],
            "correct": "A",
            "explanation": "In Bohr's atomic model:\n- Velocity $v_n = \\frac{2\\pi k Z e^2}{n h} \\propto \\frac{1}{n}$.\n- Radius $r_n = \\frac{n^2 h^2}{4\\pi^2 m k Z e^2} \\propto n^2$.\n- Time period $T_n = \\frac{2\\pi r_n}{v_n} \\propto \\frac{n^2}{1/n} \\propto n^3$."
          },
          {
            "id": "w2-chem-24",
            "section": "Chemistry (Atomic Structure & Periodic Classification)",
            "text": "In the emission spectrum of atomic hydrogen:\n(i) What is the wave number ($\\bar{\\nu}$) of the second line of the Balmer series ($H_\\beta$) in terms of the Rydberg constant $R_{\\text{H}}$?\n(ii) In which electromagnetic spectral region does the Paschen series lie?",
            "options": [
              { "id": "A", "text": "$\\bar{\\nu} = \\frac{5}{36} R_{\\text{H}}$, Visible region" },
              { "id": "B", "text": "$\\bar{\\nu} = \\frac{3}{16} R_{\\text{H}}$, Ultraviolet region" },
              { "id": "C", "text": "$\\bar{\\nu} = \\frac{1}{4} R_{\\text{H}}$, Infrared region" },
              { "id": "D", "text": "$\\bar{\\nu} = \\frac{3}{16} R_{\\text{H}}$, Infrared region" }
            ],
            "correct": "D",
            "explanation": "(i) For Balmer series, $n_1 = 2$. The second line ($H_\\beta$) corresponds to $n_2 = 4 \\to n_1 = 2$:\n$$\\bar{\\nu} = R_{\\text{H}} \\left(\\frac{1}{2^2} - \\frac{1}{4^2}\\right) = R_{\\text{H}} \\left(\\frac{1}{4} - \\frac{1}{16}\\right) = \\frac{3}{16} R_{\\text{H}}$$\n(ii) Spectral regions: Lyman $\\to$ UV, Balmer $\\to$ Visible, Paschen $\\to$ Infrared (IR)."
          },
          {
            "id": "w2-chem-25",
            "section": "Chemistry (Atomic Structure & Periodic Classification)",
            "text": "An electron of mass $m_e$ and a proton of mass $m_p$ possess the same kinetic energy $K$. If $\\lambda_e$ and $\\lambda_p$ represent their respective de Broglie wavelengths, then the ratio $\\frac{\\lambda_e}{\\lambda_p}$ is equal to:",
            "options": [
              { "id": "A", "text": "$\\sqrt{\\frac{m_p}{m_e}}$" },
              { "id": "B", "text": "$\\frac{m_p}{m_e}$" },
              { "id": "C", "text": "$\\sqrt{\\frac{m_e}{m_p}}$" },
              { "id": "D", "text": "$1$" }
            ],
            "correct": "A",
            "explanation": "The de Broglie wavelength is $\\lambda = \\frac{h}{p} = \\frac{h}{\\sqrt{2mK}}$.\nFor particles having identical kinetic energy $K$, $\\lambda \\propto \\frac{1}{\\sqrt{m}}$.\nTherefore, $\\frac{\\lambda_e}{\\lambda_p} = \\sqrt{\\frac{m_p}{m_e}}$."
          },
          {
            "id": "w2-chem-26",
            "section": "Chemistry (Atomic Structure & Periodic Classification)",
            "text": "An electron ($m = 9.1 \\times 10^{-31}\\text{ kg}$) is confined within an atomic dimension of uncertainty in position $\\Delta x = 1.0 \\times 10^{-10}\\text{ m}$. According to Heisenberg's Uncertainty Principle ($\\Delta x \\cdot \\Delta v \\ge \\frac{h}{4\\pi m}$), the minimum uncertainty in its velocity $\\Delta v$ is approximately: ($h = 6.626 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$, $\\pi = 3.14$)",
            "options": [
              { "id": "A", "text": "$5.8 \\times 10^2\\text{ m/s}$" },
              { "id": "B", "text": "$5.8 \\times 10^5\\text{ m/s}$" },
              { "id": "C", "text": "$3.0 \\times 10^8\\text{ m/s}$" },
              { "id": "D", "text": "$1.2 \\times 10^4\\text{ m/s}$" }
            ],
            "correct": "B",
            "explanation": "Heisenberg's Uncertainty Principle states $\\Delta x \\cdot m \\Delta v \\ge \\frac{h}{4\\pi}$.\n$$\\Delta v \\ge \\frac{h}{4\\pi m \\Delta x} = \\frac{6.626 \\times 10^{-34}}{4 \\times 3.14 \\times (9.1 \\times 10^{-31}) \\times (1.0 \\times 10^{-10})} = \\frac{6.626 \\times 10^{-34}}{1.143 \\times 10^{-39}} \\approx 5.8 \\times 10^5\\text{ m/s}$$"
          },
          {
            "id": "w2-chem-27",
            "section": "Chemistry (Atomic Structure & Periodic Classification)",
            "text": "Which of the following statements regarding atomic orbitals and quantum numbers is INCORRECT?",
            "options": [
              { "id": "A", "text": "The orbital angular momentum of an electron in any $s$-orbital ($l=0$) is strictly zero." },
              { "id": "B", "text": "The maximum number of electrons accommodated in a subshell of azimuthal quantum number $l$ is $2(2l+1)$." },
              { "id": "C", "text": "For a principal energy level $n$, the total number of designated orbitals is $n^2$." },
              { "id": "D", "text": "For an orbital with azimuthal quantum number $l=2$, the magnetic quantum number $m_l$ can take the value of $+3$." }
            ],
            "correct": "D",
            "explanation": "Statement (D) is incorrect because for any azimuthal quantum number $l$, the magnetic quantum number $m_l$ can only take integer values $-l \\le m_l \\le +l$. For $l=2$ ($d$-subshell), $m_l \\in \\{-2, -1, 0, +1, +2\\}$. A value of $+3$ is not permitted."
          },
          {
            "id": "w2-chem-28",
            "section": "Chemistry (Atomic Structure & Periodic Classification)",
            "text": "Consider the spatial characteristics of atomic orbitals:\n(i) What is the number of radial nodes in a $4p$ orbital?\n(ii) What is the geometric shape of the nodal surface in a $3d_{z^2}$ orbital?",
            "options": [
              { "id": "A", "text": "3 radial nodes; two planar nodal surfaces" },
              { "id": "B", "text": "2 radial nodes; spherical nodal surface" },
              { "id": "C", "text": "2 radial nodes; two conical nodal surfaces" },
              { "id": "D", "text": "1 radial node; two conical nodal surfaces" }
            ],
            "correct": "C",
            "explanation": "(i) Number of radial nodes $= n - l - 1 = 4 - 1 - 1 = 2$.\n(ii) The $d_{z^2}$ orbital consists of a central torus ('doughnut') around a dumbbell along the $z$-axis, resulting in **two conical nodal surfaces** at an angle of $\\approx 54.7^\\circ$ relative to the $z$-axis."
          },
          {
            "id": "w2-chem-29",
            "section": "Chemistry (Atomic Structure & Periodic Classification)",
            "text": "The ground-state electronic configuration of neutral Gadolinium ($\\text{Gd}, Z=64$) is $[\\text{Xe}] 4f^7 5d^1 6s^2$ instead of $[\\text{Xe}] 4f^8 6s^2$. What is the primary reason for this configuration?",
            "options": [
              { "id": "A", "text": "Extra stability associated with the half-filled $4f^7$ subshell due to higher exchange energy and symmetrical charge distribution" },
              { "id": "B", "text": "The $5d$ orbital inherently has a lower energy than the $4f$ orbital across all lanthanoids" },
              { "id": "C", "text": "Pauli's exclusion principle forbids more than 7 electrons from residing in the $4f$ subshell" },
              { "id": "D", "text": "Aufbau principle strictly requires the $5d$ orbital to be filled before any electrons enter $4f$" }
            ],
            "correct": "A",
            "explanation": "Gadolinium ($Z=64$) has the ground-state configuration $[\\text{Xe}] 4f^7 5d^1 6s^2$. The half-filled $4f^7$ subshell has extra thermodynamic stability due to symmetrical distribution of electron density and maximum quantum mechanical exchange energy among electrons with parallel spins."
          },
          {
            "id": "w2-chem-30",
            "section": "Chemistry (Atomic Structure & Periodic Classification)",
            "text": "What is the ground-state electronic configuration and the spin-only magnetic moment ($\\mu_s$) of an isolated gaseous $\\text{Cu}^{2+}$ ion ($Z=29$)?",
            "options": [
              { "id": "A", "text": "$[\\text{Ar}] 3d^8 4s^1$ and $\\sqrt{8}\\text{ BM}$ ($2.83\\text{ BM}$)" },
              { "id": "B", "text": "$[\\text{Ar}] 3d^9$ and $\\sqrt{3}\\text{ BM}$ ($1.73\\text{ BM}$)" },
              { "id": "C", "text": "$[\\text{Ar}] 3d^{10}$ and $0\\text{ BM}$ (diamagnetic)" },
              { "id": "D", "text": "$[\\text{Ar}] 3d^9$ and $\\sqrt{15}\\text{ BM}$ ($3.87\\text{ BM}$)" }
            ],
            "correct": "B",
            "explanation": "Neutral $\\text{Cu} (Z=29): [\\text{Ar}] 3d^{10} 4s^1$. Upon losing 2 electrons to form $\\text{Cu}^{2+}$, one $4s$ and one $3d$ electron are removed, yielding $[\\text{Ar}] 3d^9$. In $3d^9$, there is $n=1$ unpaired electron. Spin-only magnetic moment $\\mu_s = \\sqrt{n(n+2)} = \\sqrt{1(3)} = \\sqrt{3}\\text{ BM} \\approx 1.73\\text{ BM}$."
          },
          {
            "id": "w2-chem-31",
            "section": "Chemistry (Atomic Structure & Periodic Classification)",
            "text": "Moseley's pioneering experiment on the characteristic X-ray spectra of elements established that $\\sqrt{\\nu} = a(Z - b)$, where $\\nu$ is the X-ray frequency and $Z$ is the atomic number. This experimental finding definitively proved that:",
            "options": [
              { "id": "A", "text": "Atomic mass ($A$) is directly proportional to the characteristic X-ray frequency of elements." },
              { "id": "B", "text": "Isotopes of the same element must occupy different positions in the periodic table." },
              { "id": "C", "text": "Atomic number ($Z$) is a more fundamental property of an element than its atomic mass ($A$)." },
              { "id": "D", "text": "Elements in the same group necessarily have the same number of neutrons." }
            ],
            "correct": "C",
            "explanation": "Moseley showed that the square root of characteristic X-ray frequencies ($\\sqrt{\\nu}$) of elements is directly proportional to their atomic number $Z$ (nuclear charge), proving that atomic number is the fundamental property governing periodic chemical behavior."
          },
          {
            "id": "w2-chem-32",
            "section": "Chemistry (Atomic Structure & Periodic Classification)",
            "text": "What are the systematic IUPAC name and symbol for the transactinide element with atomic number $Z = 118$, and to which group and period of the modern periodic table does it belong?",
            "options": [
              { "id": "A", "text": "Ununoctium (Uuo), Period 7, Group 18" },
              { "id": "B", "text": "Ununseptium (Uus), Period 7, Group 17" },
              { "id": "C", "text": "Ununhexium (Uuh), Period 6, Group 16" },
              { "id": "D", "text": "Ununoctium (Uuo), Period 6, Group 18" }
            ],
            "correct": "A",
            "explanation": "For $Z = 118$: roots are un (1) + un (1) + oct (8) + ium $\\implies$ **Ununoctium** (Symbol: **Uuo**). Its electronic configuration is $[\\text{Rn}] 5f^{14} 6d^{10} 7s^2 7p^6$, which places it in **Period 7, Group 18** (Noble gas group)."
          },
          {
            "id": "w2-chem-33",
            "section": "Chemistry (Atomic Structure & Periodic Classification)",
            "text": "An element in its ground state has the outer electronic configuration $[\\text{Kr}] 4d^{10} 5s^2 5p^3$. The period, group number, and block of this element in the modern periodic table are respectively:",
            "options": [
              { "id": "A", "text": "Period 4, Group 15, $p$-block" },
              { "id": "B", "text": "Period 5, Group 5, $d$-block" },
              { "id": "C", "text": "Period 5, Group 13, $p$-block" },
              { "id": "D", "text": "Period 5, Group 15, $p$-block" }
            ],
            "correct": "D",
            "explanation": "Given valence configuration $[\\text{Kr}] 4d^{10} 5s^2 5p^3$ ($Z=51$, Antimony):\n- Highest principal quantum number $n = 5 \\implies$ Period 5.\n- The differentiating electron enters the $p$-subshell $\\implies p$-block.\n- Group number $= 10 + \\text{valence electrons} = 10 + (2 + 3) = 15$."
          },
          {
            "id": "w2-chem-34",
            "section": "Chemistry (Atomic Structure & Periodic Classification)",
            "text": "Arrange the following isoelectronic species in the correct order of increasing ionic radius:\n$$\\text{Al}^{3+}, \\text{Mg}^{2+}, \\text{Na}^+, \\text{F}^-, \\text{O}^{2-}, \\text{N}^{3-}$$",
            "options": [
              { "id": "A", "text": "$\\text{Al}^{3+} < \\text{Mg}^{2+} < \\text{Na}^+ < \\text{F}^- < \\text{O}^{2-} < \\text{N}^{3-}$" },
              { "id": "B", "text": "$\\text{N}^{3-} < \\text{O}^{2-} < \\text{F}^- < \\text{Na}^+ < \\text{Mg}^{2+} < \\text{Al}^{3+}$" },
              { "id": "C", "text": "$\\text{Na}^+ < \\text{Mg}^{2+} < \\text{Al}^{3+} < \\text{F}^- < \\text{O}^{2-} < \\text{N}^{3-}$" },
              { "id": "D", "text": "$\\text{Al}^{3+} < \\text{Na}^+ < \\text{Mg}^{2+} < \\text{N}^{3-} < \\text{O}^{2-} < \\text{F}^-$" }
            ],
            "correct": "A",
            "explanation": "All listed ions ($\\text{Al}^{3+}, \\text{Mg}^{2+}, \\text{Na}^+, \\text{F}^-, \\text{O}^{2-}, \\text{N}^{3-}$) are isoelectronic with 10 electrons ($1s^2 2s^2 2p^6$). As nuclear charge $Z$ increases, effective nuclear charge $Z_{\\text{eff}}$ increases and draws the electron cloud closer, shrinking the radius. Radius order: $\\text{Al}^{3+} (Z=13) < \\text{Mg}^{2+} (Z=12) < \\text{Na}^+ (Z=11) < \\text{F}^- (Z=9) < \\text{O}^{2-} (Z=8) < \\text{N}^{3-} (Z=7)$."
          },
          {
            "id": "w2-chem-35",
            "section": "Chemistry (Atomic Structure & Periodic Classification)",
            "text": "Zirconium ($\\text{Zr}, Z=40$) and Hafnium ($\\text{Hf}, Z=72$) have nearly identical atomic radii ($160\\text{ pm}$ and $159\\text{ pm}$ respectively) and exhibit remarkably similar chemical behaviors. This phenomenon is primarily a consequence of:",
            "options": [
              { "id": "A", "text": "Diagonal relationship between group 4 and group 5 transition elements" },
              { "id": "B", "text": "Lanthanoid contraction caused by the poor shielding effect of intervening $4f$ electrons" },
              { "id": "C", "text": "Actinoid contraction resulting from the diffuse nature of $5f$ orbitals" },
              { "id": "D", "text": "Identical number of valence electrons present in both elements" }
            ],
            "correct": "B",
            "explanation": "Hafnium ($\\text{Hf}, Z=72$) follows the 14 lanthanoid elements ($_{58}\\text{Ce}$ to $_{71}\\text{Lu}$). Due to the poor screening ability of the diffuse $4f$ electrons, the nuclear attraction on outer electrons increases significantly, causing the phenomenon of **Lanthanoid Contraction**, making the atomic radius of $\\text{Hf} (159\\text{ pm})$ almost identical to $\\text{Zr} (160\\text{ pm})$."
          },
          {
            "id": "w2-chem-36",
            "section": "Chemistry (Atomic Structure & Periodic Classification)",
            "text": "Which of the following sequences represents the CORRECT order of first ionization enthalpy ($\\text{IE}_1$) for the second-period elements?",
            "options": [
              { "id": "A", "text": "$\\text{Li} < \\text{Be} < \\text{B} < \\text{C} < \\text{N} < \\text{O} < \\text{F} < \\text{Ne}$" },
              { "id": "B", "text": "$\\text{Li} < \\text{B} < \\text{Be} < \\text{C} < \\text{N} < \\text{O} < \\text{F} < \\text{Ne}$" },
              { "id": "C", "text": "$\\text{Li} < \\text{B} < \\text{Be} < \\text{C} < \\text{O} < \\text{N} < \\text{F} < \\text{Ne}$" },
              { "id": "D", "text": "$\\text{B} < \\text{Li} < \\text{Be} < \\text{C} < \\text{O} < \\text{N} < \\text{F} < \\text{Ne}$" }
            ],
            "correct": "C",
            "explanation": "Across the 2nd period, $\\text{IE}_1$ increases with increasing $Z_{\\text{eff}}$, with two well-known exceptions:\n1. $\\text{Be} (1s^2 2s^2) > \\text{B} (1s^2 2s^2 2p^1)$: $\\text{Be}$ has a stable fully-filled $2s$ subshell and higher penetration.\n2. $\\text{N} (1s^2 2s^2 2p^3) > \\text{O} (1s^2 2s^2 2p^4)$: $\\text{N}$ has a stable half-filled $2p$ subshell and $\\text{O}$ experiences electron pairing repulsion in $2p_x^2$.\nCorrect order: $\\text{Li} < \\text{B} < \\text{Be} < \\text{C} < \\text{O} < \\text{N} < \\text{F} < \\text{Ne}$."
          },
          {
            "id": "w2-chem-37",
            "section": "Chemistry (Atomic Structure & Periodic Classification)",
            "text": "Regarding the electron gain enthalpies ($\\Delta_{\\text{eg}}H$) of group 16 and group 17 elements, which of the following statements is INCORRECT?",
            "options": [
              { "id": "A", "text": "Chlorine has a more negative electron gain enthalpy than fluorine due to weaker interelectronic repulsions in its $3p$ subshell." },
              { "id": "B", "text": "Sulfur has a more negative electron gain enthalpy than oxygen." },
              { "id": "C", "text": "Noble gases have large positive values of electron gain enthalpy." },
              { "id": "D", "text": "Fluorine has the most negative electron gain enthalpy among all elements in the periodic table." }
            ],
            "correct": "D",
            "explanation": "Statement (D) is incorrect because **Chlorine** ($\\Delta_{\\text{eg}}H = -349\\text{ kJ/mol}$) has the most negative electron gain enthalpy in the entire periodic table (more negative than Fluorine, which is $-328\\text{ kJ/mol}$, due to the high electron-electron repulsion in Fluorine's small and compact $2p$ subshell)."
          },
          {
            "id": "w2-chem-38",
            "section": "Chemistry (Atomic Structure & Periodic Classification)",
            "text": "According to Pauling's scale of electronegativity, which of the following sequences represents the correct order of decreasing electronegativity?",
            "options": [
              { "id": "A", "text": "$\\text{F} > \\text{O} > \\text{Cl} > \\text{N} > \\text{Br} > \\text{C} > \\text{H}$" },
              { "id": "B", "text": "$\\text{F} > \\text{Cl} > \\text{O} > \\text{N} > \\text{Br} > \\text{H} > \\text{C}$" },
              { "id": "C", "text": "$\\text{O} > \\text{F} > \\text{N} > \\text{Cl} > \\text{C} > \\text{Br} > \\text{H}$" },
              { "id": "D", "text": "$\\text{F} > \\text{O} > \\text{N} > \\text{C} > \\text{Cl} > \\text{Br} > \\text{H}$" }
            ],
            "correct": "A",
            "explanation": "On Pauling's scale of electronegativity: $\\text{F} (4.0) > \\text{O} (3.5) > \\text{Cl} (3.16) > \\text{N} (3.04) > \\text{Br} (2.8) > \\text{C} (2.55) > \\text{H} (2.20)$. Thus, $\\text{F} > \\text{O} > \\text{Cl} > \\text{N} > \\text{Br} > \\text{C} > \\text{H}$."
          },
          {
            "id": "w2-chem-39",
            "section": "Chemistry (Atomic Structure & Periodic Classification)",
            "text": "Match the oxide listed in List I with its characteristic acid-base behavior in List II:\n\nList I:\n(A) $\\text{Al}_2\\text{O}_3$\n(B) $\\text{Cl}_2\\text{O}_7$\n(C) $\\text{Na}_2\\text{O}$\n(D) $\\text{CO}$\n\nList II:\n(I) Strongly basic oxide\n(II) Amphoteric oxide\n(III) Neutral oxide\n(IV) Strongly acidic oxide",
            "options": [
              { "id": "A", "text": "A-II, B-I, C-IV, D-III" },
              { "id": "B", "text": "A-II, B-IV, C-I, D-III" },
              { "id": "C", "text": "A-IV, B-II, C-I, D-III" },
              { "id": "D", "text": "A-III, B-IV, C-I, D-II" }
            ],
            "correct": "B",
            "explanation": "- $\\text{Al}_2\\text{O}_3$: Amphoteric oxide (reacts with both acids and bases) $\\implies \\text{A-II}$\n- $\\text{Cl}_2\\text{O}_7$: Strongly acidic oxide (forms $\\text{HClO}_4$) $\\implies \\text{B-IV}$\n- $\\text{Na}_2\\text{O}$: Strongly basic oxide (forms $\\text{NaOH}$) $\\implies \\text{C-I}$\n- $\\text{CO}$: Neutral oxide (does not form salts with acid/base) $\\implies \\text{D-III}$."
          },
          {
            "id": "w2-chem-40",
            "section": "Chemistry (Atomic Structure & Periodic Classification)",
            "text": "Beryllium ($\\text{Be}$) and Aluminium ($\\text{Al}$) exhibit a diagonal relationship due to similar charge-to-radius ratio. Which of the following properties is NOT shared by both $\\text{Be}$ and $\\text{Al}$?",
            "options": [
              { "id": "A", "text": "Both metals are rendered passive by concentrated $\\text{HNO}_3$ due to the formation of a protective oxide film." },
              { "id": "B", "text": "Oxides and hydroxides of both elements are amphoteric in nature and dissolve in excess alkali." },
              { "id": "C", "text": "Both elements can expand their maximum covalency to 6 in coordination complexes such as $[\\text{MF}_6]^{3-}$." },
              { "id": "D", "text": "Carbides of both metals ($\\text{Be}_2\\text{C}$ and $\\text{Al}_4\\text{C}_3$) yield methane gas ($\\text{CH}_4$) upon hydrolysis with water." }
            ],
            "correct": "C",
            "explanation": "Statement (C) is NOT shared because Beryllium is in period 2 and possesses only $2s$ and $2p$ valence orbitals (no available $d$-orbitals), restricting its maximum covalency strictly to **4** ($[\\text{BeF}_4]^{2-}$). Aluminium is in period 3 and has vacant $3d$ orbitals, allowing it to expand its covalency to **6** ($[\\text{AlF}_6]^{3-}$)."
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
