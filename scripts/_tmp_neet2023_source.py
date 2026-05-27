import json

def q(id, section, text, opts, correct, image="", needs_review=False, issue=""):
    options = []
    for oid, otext, oimg in opts:
        options.append({"id": oid, "text": otext, "image": oimg})
    return {
        "id": id,
        "section": section,
        "text": text,
        "image": image,
        "options": options,
        "correct": correct,
        "needsReview": needs_review,
        "issue": issue
    }

questions = []

# ── PHYSICS ──────────────────────────────────────────────────────────────────
questions += [
q("physics-1","Physics","Let a wire be suspended from the ceiling (rigid support) and stretched by a weight $W$ attached at its free end. The longitudinal stress at any point of cross-sectional area $A$ of the wire is",
  [("A","$2W/A$",""),("B","$W/A$",""),("C","$W/2A$",""),("D","Zero","")],"B"),

q("physics-2","Physics","The ratio of radius of gyration of a solid sphere of mass $M$ and radius $R$ about its own axis to the radius of gyration of the thin hollow sphere of same mass and radius about its axis is",
  [("A","$3:5$",""),("B","$5:3$",""),("C","$2:5$",""),("D","$5:2$","")],"A",needs_review=True,issue="Answer marked 1* (disputed)"),

q("physics-3","Physics","The equivalent capacitance of the system shown in the following circuit is",
  [("A","$2\\ \\mu F$",""),("B","$3\\ \\mu F$",""),("C","$6\\ \\mu F$",""),("D","$9\\ \\mu F$","")],"A",image="assets/exams/neet/physics/q3.png"),

q("physics-4","Physics","A football player is moving southward and suddenly turns eastward with the same speed to avoid an opponent. The force that acts on the player while turning is",
  [("A","Along eastward",""),("B","Along northward",""),("C","Along north-east",""),("D","Along south-west","")],"C"),

q("physics-5","Physics","If $\\oint_S \\vec{E} \\cdot d\\vec{S} = 0$ over a surface, then",
  [("A","The number of flux lines entering the surface must be equal to the number of flux lines leaving it",""),
   ("B","The magnitude of electric field on the surface is constant",""),
   ("C","All the charges must necessarily be inside the surface",""),
   ("D","The electric field inside the surface is necessarily uniform","")],"A"),

q("physics-6","Physics","The potential energy of a long spring when stretched by 2 cm is $U$. If the spring is stretched by 8 cm, potential energy stored in it will be",
  [("A","$2U$",""),("B","$4U$",""),("C","$8U$",""),("D","$16U$","")],"D"),

q("physics-7","Physics","If the galvanometer $G$ does not show any deflection in the circuit shown, the value of $R$ is given by",
  [("A","$200\\ \\Omega$",""),("B","$50\\ \\Omega$",""),("C","$100\\ \\Omega$",""),("D","$400\\ \\Omega$","")],"C",image="assets/exams/neet/physics/q7.png"),

q("physics-8","Physics","A 12 V, 60 W lamp is connected to the secondary of a step-down transformer, whose primary is connected to ac mains of 220 V. Assuming the transformer to be ideal, what is the current in the primary winding?",
  [("A","0.27 A",""),("B","2.7 A",""),("C","3.7 A",""),("D","0.37 A","")],"A"),

q("physics-9","Physics","A full wave rectifier circuit consists of two p-n junction diodes, a centre-tapped transformer, capacitor and a load resistance. Which of these components remove the ac ripple from the rectified output?",
  [("A","A centre-tapped transformer",""),("B","p-n junction diodes",""),("C","Capacitor",""),("D","Load resistance","")],"C"),

q("physics-10","Physics","Light travels a distance $x$ in time $t_1$ in air and $10x$ in time $t_2$ in another denser medium. What is the critical angle for this medium?",
  [("A","$\\sin^{-1}\\!\\left(\\dfrac{t_2}{t_1}\\right)$",""),
   ("B","$\\sin^{-1}\\!\\left(\\dfrac{10t_2}{t_1}\\right)$",""),
   ("C","$\\sin^{-1}\\!\\left(\\dfrac{t_1}{10t_2}\\right)$",""),
   ("D","$\\sin^{-1}\\!\\left(\\dfrac{10t_1}{t_2}\\right)$","")],"D"),

q("physics-11","Physics","Resistance of a carbon resistor determined from colour codes is $(22000 \\pm 5\\%)\\ \\Omega$. The colour of third band must be",
  [("A","Red",""),("B","Green",""),("C","Orange",""),("D","Yellow","")],"C"),

q("physics-12","Physics","Given below are two statements:\n\n**Statement I:** Photovoltaic devices can convert optical radiation into electricity.\n\n**Statement II:** Zener diode is designed to operate under reverse bias in breakdown region.\n\nIn the light of the above statements, choose the **most appropriate** answer from the options given below.",
  [("A","Both Statement I and Statement II are correct",""),
   ("B","Both Statement I and Statement II are incorrect",""),
   ("C","Statement I is correct but Statement II is incorrect",""),
   ("D","Statement I is incorrect but Statement II is correct","")],"A"),

q("physics-13","Physics","The magnetic energy stored in an inductor of inductance $4\\ \\mu H$ carrying a current of 2 A is",
  [("A","$4\\ \\mu J$",""),("B","$4\\ mJ$",""),("C","$8\\ mJ$",""),("D","$8\\ \\mu J$","")],"D"),

q("physics-14","Physics","The angular acceleration of a body, moving along the circumference of a circle, is",
  [("A","Along the radius, away from centre",""),("B","Along the radius towards the centre",""),
   ("C","Along the tangent to its position",""),("D","Along the axis of rotation","")],"D"),

q("physics-15","Physics","A Carnot engine has an efficiency of 50% when its source is at a temperature 327\u00b0C. The temperature of the sink is",
  [("A","27\u00b0C",""),("B","15\u00b0C",""),("C","100\u00b0C",""),("D","200\u00b0C","")],"A"),

q("physics-16","Physics","Two bodies of mass $m$ and $9m$ are placed at a distance $R$. The gravitational potential on the line joining the bodies where the gravitational field equals zero, will be ($G$ = gravitational constant)",
  [("A","$-\\dfrac{8Gm}{R}$",""),("B","$-\\dfrac{12Gm}{R}$",""),("C","$-\\dfrac{16Gm}{R}$",""),("D","$-\\dfrac{20Gm}{R}$","")],"C"),

q("physics-17","Physics","A vehicle travels half the distance with speed $v$ and the remaining distance with speed $2v$. Its average speed is",
  [("A","$\\dfrac{v}{3}$",""),("B","$\\dfrac{2v}{3}$",""),("C","$\\dfrac{4v}{3}$",""),("D","$\\dfrac{3v}{4}$","")],"C"),

q("physics-18","Physics","The amount of energy required to form a soap bubble of radius 2 cm from a soap solution is nearly (surface tension of soap solution $= 0.03\\ \\text{N m}^{-1}$)",
  [("A","$30.16 \\times 10^{-4}$ J",""),("B","$5.06 \\times 10^{-4}$ J",""),
   ("C","$3.01 \\times 10^{-4}$ J",""),("D","$50.1 \\times 10^{-4}$ J","")],"C"),

q("physics-19","Physics","The minimum wavelength of X-rays produced by an electron accelerated through a potential difference of $V$ volts is proportional to",
  [("A","$\\sqrt{V}$",""),("B","$\\dfrac{1}{V}$",""),("C","$\\dfrac{1}{\\sqrt{V}}$",""),("D","$V^2$","")],"B"),

q("physics-20","Physics","The half life of a radioactive substance is 20 minutes. In how much time, the activity of substance drops to $\\left(\\dfrac{1}{16}\\right)^{\\!th}$ of its initial value?",
  [("A","20 minutes",""),("B","40 minutes",""),("C","60 minutes",""),("D","80 minutes","")],"D"),

q("physics-21","Physics","A metal wire has mass $(0.4 \\pm 0.002)$ g, radius $(0.3 \\pm 0.001)$ mm and length $(5 \\pm 0.02)$ cm. The maximum possible percentage error in the measurement of density will nearly be",
  [("A","1.2%",""),("B","1.3%",""),("C","1.6%",""),("D","1.4%","")],"C"),

q("physics-22","Physics","In a plane electromagnetic wave travelling in free space, the electric field component oscillates sinusoidally at a frequency of $2.0 \\times 10^{10}$ Hz and amplitude $48\\ \\text{V m}^{-1}$. Then the amplitude of oscillating magnetic field is (Speed of light in free space $= 3 \\times 10^8\\ \\text{m s}^{-1}$)",
  [("A","$1.6 \\times 10^{-9}$ T",""),("B","$1.6 \\times 10^{-8}$ T",""),
   ("C","$1.6 \\times 10^{-7}$ T",""),("D","$1.6 \\times 10^{-6}$ T","")],"C"),

q("physics-23","Physics","The temperature of a gas is $-50^{\\circ}$C. To what temperature the gas should be heated so that the rms speed is increased by 3 times?",
  [("A","$669^{\\circ}$C",""),("B","$3295^{\\circ}$C",""),("C","3097 K",""),("D","223 K","")],"B"),

q("physics-24","Physics","An ac source is connected to a capacitor $C$. Due to decrease in its operating frequency",
  [("A","Capacitive reactance decreases",""),("B","Displacement current increases",""),
   ("C","Displacement current decreases",""),("D","Capacitive reactance remains constant","")],"C"),

q("physics-25","Physics","For Young's double slit experiment, two statements are given below:\n\n**Statement I:** If screen is moved away from the plane of slits, angular separation of the fringes remains constant.\n\n**Statement II:** If the monochromatic source is replaced by another monochromatic source of larger wavelength, the angular separation of fringes decreases.\n\nIn the light of the above statements, choose the correct answer from the options given below:",
  [("A","Both Statement I and Statement II are true.",""),
   ("B","Both Statement I and Statement II are false.",""),
   ("C","Statement I is true but Statement II is false.",""),
   ("D","Statement I is false but Statement II is true.","")],"C"),

q("physics-26","Physics","In hydrogen spectrum, the shortest wavelength in the Balmer series is $\\lambda$. The shortest wavelength in the Bracket series is",
  [("A","$2\\lambda$",""),("B","$4\\lambda$",""),("C","$9\\lambda$",""),("D","$16\\lambda$","")],"B"),

q("physics-27","Physics","The work functions of Caesium (Cs), Potassium (K) and Sodium (Na) are 2.14 eV, 2.30 eV and 2.75 eV respectively. If incident electromagnetic radiation has an incident energy of 2.20 eV, which of these photosensitive surfaces may emit photoelectrons?",
  [("A","Cs only",""),("B","Both Na and K",""),("C","K only",""),("D","Na only","")],"A"),

q("physics-28","Physics","The errors in the measurement which arise due to unpredictable fluctuations in temperature and voltage supply are",
  [("A","Instrumental errors",""),("B","Personal errors",""),("C","Least count errors",""),("D","Random errors","")],"D"),

q("physics-29","Physics","In a series $LCR$ circuit, the inductance $L$ is 10 mH, capacitance $C$ is $1\\ \\mu F$ and resistance $R$ is $100\\ \\Omega$. The frequency at which resonance occurs is",
  [("A","15.9 rad/s",""),("B","15.9 kHz",""),("C","1.59 rad/s",""),("D","1.59 kHz","")],"D"),

q("physics-30","Physics","The venturi-meter works on",
  [("A","Huygen's principle",""),("B","Bernoulli's principle",""),
   ("C","The principle of parallel axes",""),("D","The principle of perpendicular axes","")],"B"),

q("physics-31","Physics","The ratio of frequencies of fundamental harmonic produced by an open pipe to that of closed pipe having the same length is",
  [("A","$1:2$",""),("B","$2:1$",""),("C","$1:3$",""),("D","$3:1$","")],"B"),

q("physics-32","Physics","An electric dipole is placed at an angle of $30^{\\circ}$ with an electric field of intensity $2 \\times 10^5\\ \\text{N C}^{-1}$. It experiences a torque equal to 4 N m. Calculate the magnitude of charge on the dipole, if the dipole length is 2 cm.",
  [("A","8 mC",""),("B","6 mC",""),("C","4 mC",""),("D","2 mC","")],"D"),

q("physics-33","Physics","The magnitude and direction of the current in the following circuit is",
  [("A","0.2 A from $B$ to $A$ through $E$",""),("B","0.5 A from $A$ to $B$ through $E$",""),
   ("C","$\\dfrac{5}{9}$ A from $A$ to $B$ through $E$",""),("D","1.5 A from $B$ to $A$ through $E$","")],"B",image="assets/exams/neet/physics/q33.png"),

q("physics-34","Physics","The net magnetic flux through any closed surface is",
  [("A","Zero",""),("B","Positive",""),("C","Infinity",""),("D","Negative","")],"A"),

q("physics-35","Physics","A bullet is fired from a gun at the speed of $280\\ \\text{m s}^{-1}$ in the direction $30^{\\circ}$ above the horizontal. The maximum height attained by the bullet is ($g = 9.8\\ \\text{m s}^{-2}$, $\\sin 30^{\\circ} = 0.5$)",
  [("A","2800 m",""),("B","2000 m",""),("C","1000 m",""),("D","3000 m","")],"C"),

q("physics-36","Physics","Two thin lenses are of same focal lengths ($f$), but one is convex and the other one is concave. When they are placed in contact with each other, the equivalent focal length of the combination will be",
  [("A","Zero",""),("B","$\\dfrac{f}{4}$",""),("C","$\\dfrac{f}{2}$",""),("D","Infinite","")],"D"),

q("physics-37","Physics","The net impedance of circuit (as shown in figure) will be",
  [("A","$10\\sqrt{2}\\ \\Omega$",""),("B","$15\\ \\Omega$",""),("C","$5\\sqrt{5}\\ \\Omega$",""),("D","$25\\ \\Omega$","")],"C",image="assets/exams/neet/physics/q37.png"),

q("physics-38","Physics","The $x$-$t$ graph of a particle performing simple harmonic motion is shown in the figure. The acceleration of the particle at $t = 2$ s is",
  [("A","$\\dfrac{\\pi^2}{8}\\ \\text{m s}^{-2}$",""),("B","$-\\dfrac{\\pi^2}{8}\\ \\text{m s}^{-2}$",""),
   ("C","$\\dfrac{\\pi^2}{16}\\ \\text{m s}^{-2}$",""),("D","$-\\dfrac{\\pi^2}{16}\\ \\text{m s}^{-2}$","")],"D",image="assets/exams/neet/physics/q38.png"),

q("physics-39","Physics","An electric dipole is placed as shown in the figure. The electric potential (in $10^2$ V) at point $P$ due to the dipole is ($\\varepsilon_0$ = permittivity of free space and $\\dfrac{1}{4\\pi\\varepsilon_0} = K$)",
  [("A","$\\left(\\dfrac{3}{8}\\right)qK$",""),("B","$\\left(\\dfrac{5}{8}\\right)qK$",""),
   ("C","$\\left(\\dfrac{8}{5}\\right)qK$",""),("D","$\\left(\\dfrac{8}{3}\\right)qK$","")],"A",image="assets/exams/neet/physics/q39.png"),

q("physics-40","Physics","A bullet from a gun is fired on a rectangular wooden block with velocity $u$. When bullet travels 24 cm through the block along its length horizontally, velocity of bullet becomes $\\dfrac{u}{3}$. Then it further penetrates into the block in the same direction before coming to rest exactly at the other end of the block. The total length of the block is",
  [("A","27 cm",""),("B","24 cm",""),("C","28 cm",""),("D","30 cm","")],"A"),

q("physics-41","Physics","In the figure shown here, what is the equivalent focal length of the combination of lenses (Assume that all layers are thin)?",
  [("A","40 cm",""),("B","\u201340 cm",""),("C","\u2013100 cm",""),("D","\u201350 cm","")],"C",image="assets/exams/neet/physics/q41.png"),

q("physics-42","Physics","For the following logic circuit, the truth table is",
  [("A","A B Y: 0 0 1 / 0 1 1 / 1 0 1 / 1 1 0",""),
   ("B","A B Y: 0 0 0 / 0 1 1 / 1 0 1 / 1 1 1",""),
   ("C","A B Y: 0 0 1 / 0 1 0 / 1 0 1 / 1 1 0",""),
   ("D","A B Y: 0 0 0 / 0 1 0 / 1 0 0 / 1 1 1","")],"B",image="assets/exams/neet/physics/q42.png"),

q("physics-43","Physics","A horizontal bridge is built across a river. A student standing on the bridge throws a small ball vertically upwards with a velocity $4\\ \\text{m s}^{-1}$. The ball strikes the water surface after 4 s. The height of bridge above water surface is (Take $g = 10\\ \\text{m s}^{-2}$)",
  [("A","56 m",""),("B","60 m",""),("C","64 m",""),("D","68 m","")],"C"),

q("physics-44","Physics","10 resistors, each of resistance $R$ are connected in series to a battery of emf $E$ and negligible internal resistance. Then those are connected in parallel to the same battery, the current is increased $n$ times. The value of $n$ is",
  [("A","10",""),("B","100",""),("C","1",""),("D","1000","")],"B"),

q("physics-45","Physics","A wire carrying a current $I$ along the positive $x$-axis has length $L$. It is kept in a magnetic field $\\vec{B} = (2\\hat{i} + 3\\hat{j} - 4\\hat{k})$ T. The magnitude of the magnetic force acting on the wire is",
  [("A","$3IL$",""),("B","$\\sqrt{5}\\,IL$",""),("C","$5IL$",""),("D","$\\sqrt{3}\\,IL$","")],"C"),

q("physics-46","Physics","A satellite is orbiting just above the surface of the earth with period $T$. If $d$ is the density of the earth and $G$ is the universal constant of gravitation, the quantity $\\dfrac{3\\pi}{Gd}$ represents",
  [("A","$T$",""),("B","$T^2$",""),("C","$T^3$",""),("D","$\\sqrt{T}$","")],"B"),

q("physics-47","Physics","Calculate the maximum acceleration of a moving car so that a body lying on the floor of the car remains stationary. The coefficient of static friction between the body and the floor is 0.15 ($g = 10\\ \\text{m s}^{-2}$).",
  [("A","$1.2\\ \\text{m s}^{-2}$",""),("B","$150\\ \\text{m s}^{-2}$",""),
   ("C","$1.5\\ \\text{m s}^{-2}$",""),("D","$50\\ \\text{m s}^{-2}$","")],"C"),

q("physics-48","Physics","The resistance of platinum wire at $0^{\\circ}$C is $2\\ \\Omega$ and $6.8\\ \\Omega$ at $80^{\\circ}$C. The temperature coefficient of resistance of the wire is",
  [("A","$3 \\times 10^{-4}\\;^{\\circ}\\text{C}^{-1}$",""),("B","$3 \\times 10^{-3}\\;^{\\circ}\\text{C}^{-1}$",""),
   ("C","$3 \\times 10^{-2}\\;^{\\circ}\\text{C}^{-1}$",""),("D","$3 \\times 10^{-1}\\;^{\\circ}\\text{C}^{-1}$","")],"C"),

q("physics-49","Physics","The radius of inner most orbit of hydrogen atom is $5.3 \\times 10^{-11}$ m. What is the radius of third allowed orbit of hydrogen atom?",
  [("A","0.53 \u00c5",""),("B","1.06 \u00c5",""),("C","1.59 \u00c5",""),("D","4.77 \u00c5","")],"D"),

q("physics-50","Physics","A very long conducting wire is bent in a semi-circular shape from $A$ to $B$ as shown in figure. The magnetic field at point $P$ for steady current configuration is given by",
  [("A","$\\dfrac{\\mu_0 i}{4R}$ pointed into the page",""),
   ("B","$\\dfrac{\\mu_0 i}{4R}$ pointed away from the page",""),
   ("C","$\\dfrac{\\mu_0 i}{4R}\\!\\left[1-\\dfrac{2}{\\pi}\\right]$ pointed away from page",""),
   ("D","$\\dfrac{\\mu_0 i}{4R}\\!\\left[1-\\dfrac{2}{\\pi}\\right]$ pointed into the page","")],"C",image="assets/exams/neet/physics/q50.png"),
]

# ── CHEMISTRY ─────────────────────────────────────────────────────────────────
questions += [
q("chemistry-1","Chemistry","Which of the following reactions will NOT give primary amine as the product?",
  [("A","$\\text{CH}_3\\text{CONH}_2 \\xrightarrow{\\text{Br}_2/\\text{KOH}}$ Product",""),
   ("B","$\\text{CH}_3\\text{CN} \\xrightarrow{\\text{(i) LiAlH}_4,\\;\\text{(ii) H}_2\\text{O}^+}$ Product",""),
   ("C","$\\text{CH}_3\\text{NC} \\xrightarrow{\\text{(i) LiAlH}_4,\\;\\text{(ii) H}_2\\text{O}^+}$ Product",""),
   ("D","$\\text{CH}_3\\text{CONH}_2 \\xrightarrow{\\text{(i) LiAlH}_4,\\;\\text{(ii) H}_2\\text{O}^+}$ Product","")],"C"),

q("chemistry-2","Chemistry","Match List-I with List-II.\n\n**List-I:** A. Coke, B. Diamond, C. Fullerene, D. Graphite\n\n**List-II:** I. Carbon atoms are $\\text{sp}^3$ hybridised, II. Used as a dry lubricant, III. Used as a reducing agent, IV. Cage like molecules\n\nChoose the correct answer from the options given below:",
  [("A","A-II, B-IV, C-I, D-III",""),("B","A-IV, B-I, C-II, D-III",""),
   ("C","A-III, B-I, C-IV, D-II",""),("D","A-III, B-IV, C-I, D-II","")],"C"),

q("chemistry-3","Chemistry","Given below are two statements: one is labelled as **Assertion A** and the other is labelled as **Reason R**:\n\n**Assertion A:** Metallic sodium dissolves in liquid ammonia giving a deep blue solution, which is paramagnetic.\n\n**Reason R:** The deep blue solution is due to the formation of amide.\n\nIn the light of the above statements, choose the correct answer from the options given below:",
  [("A","Both **A** and **R** are true and **R** is the correct explanation of **A**",""),
   ("B","Both **A** and **R** are true but **R** is NOT the correct explanation of **A**",""),
   ("C","**A** is true but **R** is false",""),
   ("D","**A** is false but **R** is true","")],"C"),

q("chemistry-4","Chemistry","In Lassaigne's extract of an organic compound, both nitrogen and sulphur are present, which gives blood red colour with $\\text{Fe}^{3+}$ due to the formation of",
  [("A","$\\text{Fe}_4[\\text{Fe}(\\text{CN})_6]_3 \\cdot x\\text{H}_2\\text{O}$",""),
   ("B","NaSCN",""),
   ("C","$[\\text{Fe}(\\text{CN})_5\\text{NOS}]^{4-}$",""),
   ("D","$[\\text{Fe}(\\text{SCN})]^{2+}$","")],"D"),

q("chemistry-5","Chemistry","The conductivity of centimolar solution of KCl at $25^{\\circ}$C is $0.0210\\ \\text{ohm}^{-1}\\text{cm}^{-1}$ and the resistance of the cell containing the solution at $25^{\\circ}$C is 60 ohm. The value of cell constant is",
  [("A","$1.34\\ \\text{cm}^{-1}$",""),("B","$3.28\\ \\text{cm}^{-1}$",""),
   ("C","$1.26\\ \\text{cm}^{-1}$",""),("D","$3.34\\ \\text{cm}^{-1}$","")],"C"),

q("chemistry-6","Chemistry","Given below are two statements: one is labelled as **Assertion A** and the other is labelled as **Reason R**:\n\n**Assertion A:** A reaction can have zero activation energy.\n\n**Reason R:** The minimum extra amount of energy absorbed by reactant molecules so that their energy becomes equal to threshold value, is called activation energy.\n\nIn the light of the above statements, choose the correct answer from the options given below:",
  [("A","Both **A** and **R** are true and **R** is the correct explanation of **A**",""),
   ("B","Both **A** and **R** are true and **R** is NOT the correct explanation of **A**",""),
   ("C","**A** is true but **R** is false",""),
   ("D","**A** is false but **R** is true","")],"B"),

q("chemistry-7","Chemistry","Which one is an example of heterogenous catalysis?",
  [("A","Oxidation of sulphur dioxide into sulphur trioxide in the presence of oxides of nitrogen",""),
   ("B","Hydrolysis of sugar catalysed by $\\text{H}^+$ ions",""),
   ("C","Decomposition of ozone in presence of nitrogen monoxide",""),
   ("D","Combination between dinitrogen and dihydrogen to form ammonia in the presence of finely divided iron","")],"D"),

q("chemistry-8","Chemistry","The given compound is an example of",
  [("A","Benzylic halide",""),("B","Aryl halide",""),("C","Allylic halide",""),("D","Vinylic halide","")],"C",image="assets/exams/neet/chemistry/q8.png"),

q("chemistry-9","Chemistry","Identify the product in the following reaction:",
  [("A","","assets/exams/neet/chemistry/q9-opt-a.png"),
   ("B","","assets/exams/neet/chemistry/q9-opt-b.png"),
   ("C","","assets/exams/neet/chemistry/q9-opt-c.png"),
   ("D","","assets/exams/neet/chemistry/q9-opt-d.png")],"B",image="assets/exams/neet/chemistry/q9.png",issue="Options are structural diagrams"),

q("chemistry-10","Chemistry","Given below are two statements: one is labelled as **Assertion A** and the other is labelled as **Reason R**:\n\n**Assertion A:** Helium is used to dilute oxygen in diving apparatus.\n\n**Reason R:** Helium has high solubility in $\\text{O}_2$.\n\nIn the light of the above statements, choose the correct answer from the options given below:",
  [("A","Both **A** and **R** are true and **R** is the correct explanation of **A**",""),
   ("B","Both **A** and **R** are true and **R** is NOT the correct explanation of **A**",""),
   ("C","**A** is true but **R** is false",""),
   ("D","**A** is false but **R** is true","")],"B"),

q("chemistry-11","Chemistry","A compound is formed by two elements A and B. The element B forms cubic close packed structure and atoms of A occupy $\\dfrac{1}{3}$ of tetrahedral voids. If the formula of the compound is $\\text{A}_x\\text{B}_y$, then the value of $x + y$ is in option",
  [("A","5",""),("B","4",""),("C","3",""),("D","2","")],"A"),

q("chemistry-12","Chemistry","Given below are two statements:\n\n**Statement I:** A unit formed by the attachment of a base to 1' position of sugar is known as nucleoside.\n\n**Statement II:** When nucleoside is linked to phosphorous acid at 5'-position of sugar moiety, we get nucleotide.\n\nIn the light of the above statements, choose the correct answer from the options given below:",
  [("A","Both Statement I and Statement II are true",""),
   ("B","Both Statement I and Statement II are false",""),
   ("C","Statement I is true but Statement II is false",""),
   ("D","Statement I is false but Statement II is true","")],"C"),

q("chemistry-13","Chemistry","The relation between $n_m$ ($n_m$ = the number of permissible values of magnetic quantum number ($m$)) for a given value of azimuthal quantum number ($l$), is",
  [("A","$l = \\dfrac{n_m - 1}{2}$",""),("B","$l = 2n_m + 1$",""),
   ("C","$n_m = 2l^2 + 1$",""),("D","$n_m = l + 2$","")],"A"),

q("chemistry-14","Chemistry","Amongst the following the total number of species NOT having eight electrons around central atom in its outermost shell, is\n\n$\\text{NH}_3,\\ \\text{AlCl}_3,\\ \\text{BeCl}_2,\\ \\text{CCl}_4,\\ \\text{PCl}_5$",
  [("A","3",""),("B","2",""),("C","4",""),("D","1","")],"A"),

q("chemistry-15","Chemistry","The correct order of energies of molecular orbitals of $\\text{N}_2$ molecule, is",
  [("A","$\\sigma 1s < \\sigma^*1s < \\sigma 2s < \\sigma^*2s < (\\pi 2p_x = \\pi 2p_y) < \\sigma 2p_z < (\\pi^*2p_x = \\pi^*2p_y) < \\sigma^*2p_z$",""),
   ("B","$\\sigma 1s < \\sigma^*1s < \\sigma 2s < \\sigma^*2s < \\sigma 2p_z < (\\pi 2p_x = \\pi 2p_y) < (\\pi^*2p_x = \\pi^*2p_y) < \\sigma^*2p_z$",""),
   ("C","$\\sigma 1s < \\sigma^*1s < \\sigma 2s < \\sigma^*2s < \\sigma 2p_z < \\sigma^*2p_z < (\\pi 2p_x = \\pi 2p_y) < (\\pi^*2p_x = \\pi^*2p_y)$",""),
   ("D","$\\sigma 1s < \\sigma^*1s < \\sigma 2s < \\sigma^*2s < (\\pi 2p_x = \\pi 2p_y) < (\\pi^*2p_x = \\pi^*2p_y) < \\sigma 2p_z < \\sigma^*2p_z$","")],"A"),

q("chemistry-16","Chemistry","The number of $\\sigma$ bonds, $\\pi$ bonds and lone pair of electrons in pyridine, respectively are:",
  [("A","11, 2, 0",""),("B","12, 3, 0",""),("C","11, 3, 1",""),("D","12, 2, 1","")],"C"),

q("chemistry-17","Chemistry","Intermolecular forces are forces of attraction and repulsion between interacting particles that will include:\nA. dipole-dipole forces\nB. dipole-induced dipole forces\nC. hydrogen bonding\nD. covalent bonding\nE. dispersion forces\n\nChoose the **most appropriate** answer from the options given below:",
  [("A","B, C, D, E are correct",""),("B","A, B, C, D are correct",""),
   ("C","A, B, C, E are correct",""),("D","A, C, D, E are correct","")],"C"),

q("chemistry-18","Chemistry","Which of the following statements are **NOT** correct?\nA. Hydrogen is used to reduce heavy metal oxides to metals.\nB. Heavy water is used to study reaction mechanism.\nC. Hydrogen is used to make saturated fats from oils.\nD. The H\u2013H bond dissociation enthalpy is lowest as compared to a single bond between two atoms of any elements.\nE. Hydrogen reduces oxides of metals that are more active than iron.\n\nChoose the **most appropriate** answer from the options given below:",
  [("A","B, C, D, E only",""),("B","B, D only",""),("C","D, E only",""),("D","A, B, C only","")],"C"),

q("chemistry-19","Chemistry","Which amongst the following molecules on polymerization produces neoprene?",
  [("A","$\\text{H}_2\\text{C} = \\text{CH} - \\text{CH} = \\text{CH}_2$",""),
   ("B","$\\text{H}_2\\text{C} = \\overset{\\displaystyle\\text{Cl}}{\\text{C}} - \\text{CH} = \\text{CH}_2$",""),
   ("C","$\\text{H}_2\\text{C} = \\text{CH} - \\text{C} \\equiv \\text{CH}$",""),
   ("D","$\\text{H}_2\\text{C} = \\overset{\\displaystyle\\text{CH}_3}{\\text{C}} - \\text{CH} = \\text{CH}_2$","")],"B"),

q("chemistry-20","Chemistry","Some tranquilizers are listed below. Which one from the following belongs to barbiturates?",
  [("A","Chlordiazepoxide",""),("B","Meprobamate",""),("C","Valium",""),("D","Veronal","")],"D"),

q("chemistry-21","Chemistry","The element expected to form largest ion to achieve the nearest noble gas configuration is",
  [("A","O",""),("B","F",""),("C","N",""),("D","Na","")],"C"),

q("chemistry-22","Chemistry","Select the correct statements from the following:\nA. Atoms of all elements are composed of two fundamental particles.\nB. The mass of the electron is $9.10939 \\times 10^{-31}$ kg.\nC. All the isotopes of a given element show same chemical properties.\nD. Protons and electrons are collectively known as nucleons.\nE. Dalton's atomic theory, regarded the atom as an ultimate particles of matter.\n\nChoose the correct answer from the options given below:",
  [("A","A, B and C only",""),("B","C, D and E only",""),("C","A and E only",""),("D","B, C and E only","")],"D"),

q("chemistry-23","Chemistry","Consider the following reaction and identify the product (P).\n\n3-Methylbutan-2-ol $\\xrightarrow{\\text{HBr}}$ Product (P)",
  [("A","","assets/exams/neet/chemistry/q23-opt-a.png"),
   ("B","","assets/exams/neet/chemistry/q23-opt-b.png"),
   ("C","","assets/exams/neet/chemistry/q23-opt-c.png"),
   ("D","","assets/exams/neet/chemistry/q23-opt-d.png")],"A",image="assets/exams/neet/chemistry/q23.png",issue="Options are structural diagrams"),

q("chemistry-24","Chemistry","The stability of $\\text{Cu}^{2+}$ is more than $\\text{Cu}^+$ salts in aqueous solution due to",
  [("A","First ionisation enthalpy",""),("B","Enthalpy of atomization",""),
   ("C","Hydration energy",""),("D","Second ionisation enthalpy","")],"C"),

q("chemistry-25","Chemistry","Which one of the following statements is **correct**?",
  [("A","The daily requirement of Mg and Ca in the human body is estimated to be 0.2-0.3 g",""),
   ("B","All enzymes that utilise ATP in phosphate transfer require Ca as the cofactor",""),
   ("C","The bone in human body is an inert and unchanging substance",""),
   ("D","Mg plays roles in neuromuscular function and interneuronal transmission","")],"A"),

q("chemistry-26","Chemistry","Weight (g) of two moles of the organic compound, which is obtained by heating sodium ethanoate with sodium hydroxide in presence of calcium oxide is:",
  [("A","16",""),("B","32",""),("C","30",""),("D","18","")],"B"),

q("chemistry-27","Chemistry","Amongst the given options which of the following molecules/ion acts as a Lewis acid?",
  [("A","$\\text{NH}_3$",""),("B","$\\text{H}_2\\text{O}$",""),("C","$\\text{BF}_3$",""),("D","$\\text{OH}^-$","")],"C"),

q("chemistry-28","Chemistry","Identify product (A) in the following reaction:",
  [("A","","assets/exams/neet/chemistry/q28-opt-a.png"),
   ("B","","assets/exams/neet/chemistry/q28-opt-b.png"),
   ("C","","assets/exams/neet/chemistry/q28-opt-c.png"),
   ("D","","assets/exams/neet/chemistry/q28-opt-d.png")],"A",image="assets/exams/neet/chemistry/q28.png",issue="Options are structural diagrams"),

q("chemistry-29","Chemistry","Taking stability as the factor, which one of the following represents correct relationship?",
  [("A","$\\text{T}\\ell\\text{Cl}_3 > \\text{T}\\ell\\text{Cl}$",""),
   ("B","$\\text{InI}_3 > \\text{InI}$",""),
   ("C","$\\text{AlCl} > \\text{AlCl}_3$",""),
   ("D","$\\text{T}\\ell\\text{I} > \\text{T}\\ell\\text{I}_3$","")],"D"),

q("chemistry-30","Chemistry","Homoleptic complex from the following complexes is",
  [("A","Potassium trioxalatoaluminate (III)",""),
   ("B","Diamminechloridonitrito-N-platinum (II)",""),
   ("C","Pentaamminecarbonatocobalt (III) chloride",""),
   ("D","Triamminetriaquachromium (III) chloride","")],"A"),

q("chemistry-31","Chemistry","Complete the following reaction:\n\nCyclohexanone $\\xrightarrow{\\text{HCN}}$ [B] $\\xrightarrow{\\text{conc. H}_2\\text{SO}_4,\\;\\Delta}$ [C]\n\n[C] is",
  [("A","","assets/exams/neet/chemistry/q31-opt-a.png"),
   ("B","","assets/exams/neet/chemistry/q31-opt-b.png"),
   ("C","","assets/exams/neet/chemistry/q31-opt-c.png"),
   ("D","","assets/exams/neet/chemistry/q31-opt-d.png")],"D",image="assets/exams/neet/chemistry/q31.png",issue="Options are structural diagrams"),

q("chemistry-32","Chemistry","Which amongst the following options are **correct** graphical representation of Boyle's law?",
  [("A","","assets/exams/neet/chemistry/q32-opt-a.png"),
   ("B","","assets/exams/neet/chemistry/q32-opt-b.png"),
   ("C","","assets/exams/neet/chemistry/q32-opt-c.png"),
   ("D","","assets/exams/neet/chemistry/q32-opt-d.png")],"B",image="assets/exams/neet/chemistry/q32.png",issue="Options are graphical diagrams"),

q("chemistry-33","Chemistry","The right option for the mass of $\\text{CO}_2$ produced by heating 20 g of 20% pure limestone is (Atomic mass of Ca = 40) [$\\text{CaCO}_3 \\xrightarrow{1200\\text{ K}} \\text{CaO} + \\text{CO}_2$]",
  [("A","1.12 g",""),("B","1.76 g",""),("C","2.64 g",""),("D","1.32 g","")],"B"),

q("chemistry-34","Chemistry","For a certain reaction, the rate $= k[\\text{A}]^2[\\text{B}]$, when the initial concentration of A is tripled keeping concentration of B constant, the initial rate would",
  [("A","Decrease by a factor of nine",""),("B","Increase by a factor of six",""),
   ("C","Increase by a factor of nine",""),("D","Increase by a factor of three","")],"C"),

q("chemistry-35","Chemistry","Given below are two statements: one is labelled as **Assertion A** and the other is labelled as **Reason R**:\n\n**Assertion A:** In equation $\\Delta_rG = -nFE_{\\text{cell}}$, value of $\\Delta_rG$ depends on $n$.\n\n**Reason R:** $E_{\\text{cell}}$ is an intensive property and $\\Delta_rG$ is an extensive property.\n\nIn the light of the above statements, choose the correct answer from the options given below:",
  [("A","Both **A** and **R** are true and **R** is the correct explanation of **A**",""),
   ("B","Both **A** and **R** are true and **R** is NOT the correct explanation of **A**",""),
   ("C","**A** is true but **R** is false",""),
   ("D","**A** is false but **R** is true","")],"B"),

q("chemistry-36","Chemistry","Match List-I (Oxoacids of Sulphur) with List-II (Bonds):\n\nA. Peroxodisulphuric acid \u2013 I. Two S\u2013OH, Four S=O, One S\u2013O\u2013S\nB. Sulphuric acid \u2013 II. Two S\u2013OH, One S=O\nC. Pyrosulphuric acid \u2013 III. Two S\u2013OH, Four S=O, One S\u2013O\u2013O\u2013S\nD. Sulphurous acid \u2013 IV. Two S\u2013OH, Two S=O\n\nChoose the correct answer from the options given below.",
  [("A","A\u2013I, B\u2013III, C\u2013II, D\u2013IV",""),("B","A\u2013III, B\u2013IV, C\u2013I, D\u2013II",""),
   ("C","A\u2013I, B\u2013III, C\u2013IV, D\u2013II",""),("D","A\u2013III, B\u2013IV, C\u2013II, D\u2013I","")],"B"),

q("chemistry-37","Chemistry","Which of the following statements are **INCORRECT**?\nA. All the transition metals except scandium form MO oxides which are ionic.\nB. The highest oxidation number corresponding to the group number in transition metal oxides is attained in $\\text{Sc}_2\\text{O}_3$ to $\\text{Mn}_2\\text{O}_7$.\nC. Basic character increases from $\\text{V}_2\\text{O}_3$ to $\\text{V}_2\\text{O}_4$ to $\\text{V}_2\\text{O}_5$.\nD. $\\text{V}_2\\text{O}_4$ dissolves in acids to give $\\text{VO}_4^{3-}$ salts.\nE. CrO is basic but $\\text{Cr}_2\\text{O}_3$ is amphoteric.\n\nChoose the correct answer from the options given below:",
  [("A","A and E only",""),("B","B and D only",""),("C","C and D only",""),("D","B and C only","")],"C"),

q("chemistry-38","Chemistry","Which complex compound is most stable?",
  [("A","$[\\text{Co}(\\text{NH}_3)_4(\\text{H}_2\\text{O})\\text{Br}](\\text{NO}_3)_2$",""),
   ("B","$[\\text{Co}(\\text{NH}_3)_3(\\text{NO}_3)_3]$",""),
   ("C","$[\\text{CoCl}_2(\\text{en})_2]\\text{NO}_3$",""),
   ("D","$[\\text{Co}(\\text{NH}_3)_6]_2(\\text{SO}_4)_3$","")],"C"),

q("chemistry-39","Chemistry","Consider the following compounds/species and determine the number of compounds/species which obey Huckel's rule.",
  [("A","4",""),("B","6",""),("C","2",""),("D","5","")],"A",image="assets/exams/neet/chemistry/q39.png",issue="Structures are diagrams"),

q("chemistry-40","Chemistry","What fraction of one edge centred octahedral void lies in one unit cell of fcc?",
  [("A","$\\dfrac{1}{2}$",""),("B","$\\dfrac{1}{3}$",""),("C","$\\dfrac{1}{4}$",""),("D","$\\dfrac{1}{12}$","")],"C"),

q("chemistry-41","Chemistry","Which amongst the following options is the correct relation between change in enthalpy and change in internal energy?",
  [("A","$\\Delta H = \\Delta U - \\Delta n_g RT$",""),("B","$\\Delta H = \\Delta U + \\Delta n_g RT$",""),
   ("C","$\\Delta H - \\Delta U = -\\Delta nRT$",""),("D","$\\Delta H + \\Delta U = \\Delta nR$","")],"B"),

q("chemistry-42","Chemistry","On balancing the given redox reaction,\n\n$a\\text{Cr}_2\\text{O}_7^{2-} + b\\text{SO}_3^{2-}(aq) + c\\text{H}^+(aq) \\to 2a\\text{Cr}^{3+}(aq) + b\\text{SO}_4^{2-}(aq) + \\dfrac{c}{2}\\text{H}_2\\text{O}(l)$\n\nthe coefficients $a$, $b$ and $c$ are found to be, respectively\u2013",
  [("A","1, 3, 8",""),("B","3, 8, 1",""),("C","1, 8, 3",""),("D","8, 1, 3","")],"A"),

q("chemistry-43","Chemistry","The equilibrium concentrations of the species in the reaction $A + B \\rightleftharpoons C + D$ are 2, 3, 10 and 6 mol $\\text{L}^{-1}$, respectively at 300 K. $\\Delta G^{\\circ}$ for the reaction is ($R = 2\\ \\text{cal/mol K}$)",
  [("A","1372.60 cal",""),("B","\u2013137.26 cal",""),("C","\u20131381.80 cal",""),("D","\u201313.73 cal","")],"C"),

q("chemistry-44","Chemistry","Pumice stone is an example of",
  [("A","Sol",""),("B","Gel",""),("C","Solid sol",""),("D","Foam","")],"C"),

q("chemistry-45","Chemistry","Identify the major product obtained in the following reaction:",
  [("A","","assets/exams/neet/chemistry/q45-opt-a.png"),
   ("B","","assets/exams/neet/chemistry/q45-opt-b.png"),
   ("C","","assets/exams/neet/chemistry/q45-opt-c.png"),
   ("D","","assets/exams/neet/chemistry/q45-opt-d.png")],"C",image="assets/exams/neet/chemistry/q45.png",issue="Options are structural diagrams"),

q("chemistry-46","Chemistry","Identify the final product [D] obtained in the following sequence of reactions.\n\n$\\text{CH}_3\\text{CHO} \\xrightarrow{\\text{(i) LiAlH}_4,\\;\\text{(ii) H}_2\\text{O}^+} [\\text{A}] \\xrightarrow{\\text{H}_2\\text{SO}_4,\\;\\Delta} [\\text{B}] \\xrightarrow{\\text{HBr}} [\\text{C}] \\xrightarrow{\\text{Na/dry ether}} [\\text{D}]$",
  [("A","","assets/exams/neet/chemistry/q46-opt-a.png"),
   ("B","","assets/exams/neet/chemistry/q46-opt-b.png"),
   ("C","$\\text{C}_4\\text{H}_{10}$",""),
   ("D","$\\text{HC} \\equiv \\text{C}^{\\ominus}\\text{Na}^+$","")],"A",image="assets/exams/neet/chemistry/q46.png",issue="Options A and B are structural diagrams"),

q("chemistry-47","Chemistry","Which amongst the following will be most readily dehydrated under acidic conditions?",
  [("A","","assets/exams/neet/chemistry/q47-opt-a.png"),
   ("B","","assets/exams/neet/chemistry/q47-opt-b.png"),
   ("C","","assets/exams/neet/chemistry/q47-opt-c.png"),
   ("D","","assets/exams/neet/chemistry/q47-opt-d.png")],"B",image="assets/exams/neet/chemistry/q47.png",issue="Options are structural diagrams"),

q("chemistry-48","Chemistry","Given below are two statements:\n\n**Statement I:** The nutrient deficient water bodies lead to eutrophication.\n\n**Statement II:** Eutrophication leads to decrease in the level of oxygen in the water bodies.\n\nIn the light of the above statements, choose the correct answer from the options given below:",
  [("A","Both Statement I and Statement II are true",""),
   ("B","Both Statement I and Statement II are false",""),
   ("C","Statement I is correct but Statement II is false",""),
   ("D","Statement I is incorrect but Statement II is true","")],"D"),

q("chemistry-49","Chemistry","Consider the following reaction:\n\n$\\text{Ph}-\\text{CH}_2-\\text{O}-\\text{Ph} \\xrightarrow{\\text{HI},\\;\\Delta} A + B$\n\nIdentify products A and B.",
  [("A","$A = \\text{Ph}-\\text{CH}_3$ and $B = \\text{Ph}-\\text{OH}$",""),
   ("B","$A = \\text{Ph}-\\text{CH}_2\\text{OH}$ and $B = \\text{Ph}-\\text{I}$",""),
   ("C","$A = \\text{Ph}-\\text{CH}_2\\text{I}$ and $B = \\text{Ph}-\\text{OH}$",""),
   ("D","$A = \\text{Ph}-\\text{CH}_3$ and $B = \\text{Ph}-\\text{I}$","")],"C"),

q("chemistry-50","Chemistry","The reaction that does **NOT** take place in a blast furnace between 900 K to 1500 K temperature range during extraction of iron is:",
  [("A","$\\text{Fe}_2\\text{O}_3 + \\text{CO} \\to 2\\text{FeO} + \\text{CO}_2$",""),
   ("B","$\\text{FeO} + \\text{CO} \\to \\text{Fe} + \\text{CO}_2$",""),
   ("C","$\\text{C} + \\text{CO}_2 \\to 2\\text{CO}$",""),
   ("D","$\\text{CaO} + \\text{SiO}_2 \\to \\text{CaSiO}_3$","")],"A"),
]

# ── BOTANY ────────────────────────────────────────────────────────────────────
questions += [
q("botany-1","Botany","Given below are two statements: One labelled as **Assertion A** and the other labelled as **Reason R**:\n\n**Assertion A:** The first stage of gametophyte in the life cycle of moss is protonema stage.\n\n**Reason R:** Protonema develops directly from spores produced in capsule.\n\nIn the light of the above statements, choose the **most appropriate** answer from options given below:",
  [("A","Both **A** and **R** are correct and **R** is the correct explanation of **A**",""),
   ("B","Both **A** and **R** are correct but **R** is NOT the correct explanation of **A**",""),
   ("C","**A** is correct but **R** is not correct",""),
   ("D","**A** is not correct but **R** is correct","")],"A"),

q("botany-2","Botany","In angiosperm, the haploid, diploid and triploid structures of a fertilized embryo sac sequentially are:",
  [("A","Synergids, Primary endosperm nucleus and zygote",""),
   ("B","Antipodals, synergids, and primary endosperm nucleus",""),
   ("C","Synergids, Zygote and Primary endosperm nucleus",""),
   ("D","Synergids, antipodals and Polar nuclei","")],"C"),

q("botany-3","Botany","Movement and accumulation of ions across a membrane against their concentration gradient can be explained by",
  [("A","Osmosis",""),("B","Facilitated Diffusion",""),("C","Passive Transport",""),("D","Active Transport","")],"D"),

q("botany-4","Botany","Large, colourful, fragrant flowers with nectar are seen in",
  [("A","Insect pollinated plants",""),("B","Bird pollinated plants",""),
   ("C","Bat pollinated plants",""),("D","Wind pollinated plants","")],"A"),

q("botany-5","Botany","The phenomenon of pleiotropism refers to",
  [("A","Presence of several alleles of a single gene controlling a single crossover",""),
   ("B","Presence of two alleles, each of the two genes controlling a single trait",""),
   ("C","A single gene affecting multiple phenotypic expression",""),
   ("D","More than two genes affecting a single character","")],"C"),

q("botany-6","Botany","Which hormone promotes internode/petiole elongation in deep water rice?",
  [("A","$\\text{GA}_3$",""),("B","Kinetin",""),("C","Ethylene",""),("D","2, 4-D","")],"C"),

q("botany-7","Botany","Among \u2018The Evil Quartet\u2019, which one is considered the most important cause driving extinction of species?",
  [("A","Habitat loss and fragmentation",""),("B","Over exploitation for economic gain",""),
   ("C","Alien species invasions",""),("D","Co-extinctions","")],"A"),

q("botany-8","Botany","Upon exposure to UV radiation, DNA stained with ethidium bromide will show",
  [("A","Bright red colour",""),("B","Bright blue colour",""),
   ("C","Bright yellow colour",""),("D","Bright orange colour","")],"D"),

q("botany-9","Botany","Which micronutrient is required for splitting of water molecule during photosynthesis?",
  [("A","Manganese",""),("B","Molybdenum",""),("C","Magnesium",""),("D","Copper","")],"A"),

q("botany-10","Botany","Axile placentation is observed in",
  [("A","Mustard, Cucumber and Primrose",""),("B","China rose, Beans and Lupin",""),
   ("C","Tomato, Dianthus and Pea",""),("D","China rose, Petunia and Lemon","")],"D"),

q("botany-11","Botany","The process of appearance of recombination nodules occurs at which sub stage of prophase I in meiosis?",
  [("A","Zygotene",""),("B","Pachytene",""),("C","Diplotene",""),("D","Diakinesis","")],"B"),

q("botany-12","Botany","The reaction centre in PS II has an absorption maxima at",
  [("A","680 nm",""),("B","700 nm",""),("C","660 nm",""),("D","780 nm","")],"A"),

q("botany-13","Botany","Unequivocal proof that DNA is the genetic material was first proposed by",
  [("A","Frederick Griffith",""),("B","Alfred Hershey and Martha Chase",""),
   ("C","Avery, Macleod and McCarthy",""),("D","Wilkins and Franklin","")],"B"),

q("botany-14","Botany","Among eukaryotes, replication of DNA takes place in:",
  [("A","M phase",""),("B","S phase",""),("C","$G_1$ phase",""),("D","$G_2$ phase","")],"B"),

q("botany-15","Botany","In tissue culture experiments, leaf mesophyll cells are put in a culture medium to form callus. This phenomenon may be called as",
  [("A","Differentiation",""),("B","Dedifferentiation",""),("C","Development",""),("D","Senescence","")],"B"),

q("botany-16","Botany","Cellulose does not form blue colour with Iodine because",
  [("A","It is a disaccharide",""),("B","It is a helical molecule",""),
   ("C","It does not contain complex helices and hence cannot hold iodine molecules",""),
   ("D","It breaks down when iodine reacts with it","")],"C"),

q("botany-17","Botany","Spraying of which of the following phytohormone on juvenile conifers helps hastening the maturity period, that leads early seed production?",
  [("A","Indole-3-butyric Acid",""),("B","Gibberellic Acid",""),("C","Zeatin",""),("D","Abscisic Acid","")],"B"),

q("botany-18","Botany","Given below are two statements:\n\n**Statement I:** The forces generated transpiration can lift a xylem-sized column of water over 130 meters height.\n\n**Statement II:** Transpiration cools leaf surfaces sometimes 10 to 15 degrees evaporative cooling.\n\nIn the light of the above statements, choose the **most appropriate** answer from the options given below:",
  [("A","Both Statement I and Statement II are correct",""),
   ("B","Both Statement I and Statement II are incorrect",""),
   ("C","Statement I is correct but Statement II is incorrect",""),
   ("D","Statement I is incorrect but Statement II is correct","")],"A"),

q("botany-19","Botany","Family Fabaceae differs from Solanaceae and Liliaceae. With respect to the stamens, pick out the characteristics specific to family Fabaceae but not found in Solanaceae or Liliaceae.",
  [("A","Diadelphous and Dithecous anthers",""),("B","Polyadelphous and epipetalous stamens",""),
   ("C","Monoadelphous and Monothecous anthers",""),("D","Epiphyllous and Dithecous anthers","")],"A"),

q("botany-20","Botany","Expressed Sequence Tags (ESTs) refers to",
  [("A","All genes that are expressed as RNA.",""),("B","All genes that are expressed as proteins.",""),
   ("C","All genes whether expressed or unexpressed.",""),("D","Certain important expressed genes.","")],"A"),

q("botany-21","Botany","Identify the **correct** statements:\nA. Detrivores perform fragmentation.\nB. The humus is further degraded by some microbes during mineralization.\nC. Water soluble inorganic nutrients go down into the soil and get precipitated by a process called leaching.\nD. The detritus food chain begins with living organisms.\nE. Earthworms break down detritus into smaller particles by a process called catabolism.\n\nChoose the **correct** answer from the options given below:",
  [("A","A, B, C only",""),("B","B, C, D only",""),("C","C, D, E only",""),("D","D, E, A only","")],"A"),

q("botany-22","Botany","The thickness of ozone in a column of air in the atmosphere is measured in terms of:",
  [("A","Dobson units",""),("B","Decibels",""),("C","Decameter",""),("D","Kilobase","")],"A"),

q("botany-23","Botany","Given below are two statements: One is labelled as **Assertion A** and the other is labelled as **Reason R**:\n\n**Assertion A:** Late wood has fewer xylary elements with narrow vessels.\n\n**Reason R:** Cambium is less active in winters.\n\nIn the light of the above statements, choose the **correct** answer from the options given below:",
  [("A","Both **A** and **R** are true and **R** is the correct explanation of **A**",""),
   ("B","Both **A** and **R** are true but **R** is NOT the correct explanation of **A**",""),
   ("C","**A** is true but **R** is false",""),
   ("D","**A** is false but **R** is true","")],"A"),

q("botany-24","Botany","Which of the following stages of meiosis involves division of centromere?",
  [("A","Metaphase I",""),("B","Metaphase II",""),("C","Anaphase II",""),("D","Telophase","")],"C"),

q("botany-25","Botany","The historic Convention on Biological Diversity, \u2018The Earth Summit\u2019 was held in Rio de Janeiro in the year",
  [("A","1985",""),("B","1992",""),("C","1986",""),("D","2002","")],"B"),

q("botany-26","Botany","How many ATP and $\\text{NADPH}_2$ are required for the synthesis of one molecule of Glucose during Calvin cycle?",
  [("A","12 ATP and 12 $\\text{NADPH}_2$",""),("B","18 ATP and 12 $\\text{NADPH}_2$",""),
   ("C","12 ATP and 16 $\\text{NADPH}_2$",""),("D","18 ATP and 16 $\\text{NADPH}_2$","")],"B"),

q("botany-27","Botany","In the equation $\\text{GPP} - R = \\text{NPP}$\n\nGPP is Gross Primary Productivity\nNPP is Net Primary Productivity\nR here is",
  [("A","Photosynthetically active radiation",""),("B","Respiratory quotient",""),
   ("C","Respiratory loss",""),("D","Reproductive allocation","")],"C"),

q("botany-28","Botany","During the purification process for recombinant DNA technology, addition of chilled ethanol precipitates out",
  [("A","RNA",""),("B","DNA",""),("C","Histones",""),("D","Polysaccharides","")],"B"),

q("botany-29","Botany","What is the role of RNA polymerase III in the process of transcription in Eukaryotes?",
  [("A","Transcription of rRNAs (28S, 18S and 5.8S)",""),
   ("B","Transcription of tRNA, 5S rRNA and snRNA",""),
   ("C","Transcription of precursor of mRNA",""),
   ("D","Transcription of only snRNAs","")],"B"),

q("botany-30","Botany","What is the function of tassels in the corn cob?",
  [("A","To attract insects",""),("B","To trap pollen grains",""),
   ("C","To disperse pollen grains",""),("D","To protect seeds","")],"B"),

q("botany-31","Botany","Identify the pair of heterosporous pteridophytes among the following:",
  [("A","Lycopodium and Selaginella",""),("B","Selaginella and Salvinia",""),
   ("C","Psilotum and Salvinia",""),("D","Equisetum and Salvinia","")],"B"),

q("botany-32","Botany","In gene gun method used to introduce alien DNA into host cells, microparticles of ________ metal are used.",
  [("A","Copper",""),("B","Zinc",""),("C","Tungsten or gold",""),("D","Silver","")],"C"),

q("botany-33","Botany","Given below are two statements:\n\n**Statement I:** Endarch and exarch are the terms often used for describing the position of secondary xylem in the plant body.\n\n**Statement II:** Exarch condition is the most common feature of the root system.\n\nIn the light of the above statements, choose the **correct** answer from the options given below:",
  [("A","Both Statement I and Statement II are true",""),
   ("B","Both Statement I and Statement II are false",""),
   ("C","Statement I is correct but Statement II is false",""),
   ("D","Statement I is incorrect but Statement II is true","")],"D"),

q("botany-34","Botany","Frequency of recombination between gene pairs on same chromosome as a measure of the distance between genes to map their position on chromosome, was used for the first time by",
  [("A","Thomas Hunt Morgan",""),("B","Sutton and Boveri",""),
   ("C","Alfred Sturtevant",""),("D","Henking","")],"C"),

q("botany-35","Botany","Given below are two statements: One is labelled as **Assertion A** and the other is labelled as **Reason R**:\n\n**Assertion A:** ATP is used at two steps in glycolysis.\n\n**Reason R:** First ATP is used in converting glucose into glucose-6-phosphate and second ATP is used in conversion of fructose-6-phosphate into fructose-1, 6-diphosphate.\n\nIn the light of the above statements, choose the **correct** answer from the options given below:",
  [("A","Both **A** and **R** are true and **R** is the correct explanation of **A**.",""),
   ("B","Both **A** and **R** are true but **R** is NOT the correct explanation of **A**.",""),
   ("C","**A** is true but **R** is false.",""),
   ("D","**A** is false but **R** is true.","")],"A"),

q("botany-36","Botany","Which one of the following statements is **NOT** correct?",
  [("A","The micro-organisms involved in biodegradation of organic matter in a sewage polluted water body consume a lot of oxygen causing the death of aquatic organisms",""),
   ("B","Algal blooms caused by excess of organic matter in water improve water quality and promote fisheries",""),
   ("C","Water hyacinth grows abundantly in eutrophic water bodies and leads to an imbalance in the ecosystem dynamics of the water body",""),
   ("D","The amount of some toxic substances of industrial waste water increases in the organisms at successive trophic levels","")],"B"),

q("botany-37","Botany","How many different proteins does the ribosome consist of?",
  [("A","80",""),("B","60",""),("C","40",""),("D","20","")],"A"),

q("botany-38","Botany","Which of the following statements are correct about Klinefelter\u2019s Syndrome?\nA. This disorder was first described by Langdon Down (1866).\nB. Such an individual has overall masculine development. However, the feminine development is also expressed.\nC. The affected individual is short statured.\nD. Physical, psychomotor and mental development is retarded.\nE. Such individuals are sterile.\n\nChoose the **correct** answer from the options given below:",
  [("A","A and B only",""),("B","C and D only",""),("C","B and E only",""),("D","A and E only","")],"C"),

q("botany-39","Botany","Match List I with List II:\n\n**List I:** A. Oxidative decarboxylation, B. Glycolysis, C. Oxidative phosphorylation, D. Tricarboxylic acid cycle\n\n**List II:** I. Citrate synthase, II. Pyruvate dehydrogenase, III. Electron transport system, IV. EMP pathway\n\nChoose the correct answer from the options given below:",
  [("A","A\u2013III, B\u2013IV, C\u2013II, D\u2013I",""),("B","A\u2013II, B\u2013IV, C\u2013I, D\u2013III",""),
   ("C","A\u2013III, B\u2013I, C\u2013II, D\u2013IV",""),("D","A\u2013II, B\u2013IV, C\u2013III, D\u2013I","")],"D"),

q("botany-40","Botany","Given below are two statements: One is labelled as **Assertion A** and the other is labelled as **Reason R**:\n\n**Assertion A:** A flower is defined as modified shoot wherein the shoot apical meristem changes to floral meristem.\n\n**Reason R:** Internode of the shoot gets condensed to produce different floral appendages laterally at successive node instead of leaves.\n\nIn the light of the above statements, choose the **correct** answer from the options given below:",
  [("A","Both **A** and **R** are true and **R** is the correct explanation of **A**",""),
   ("B","Both **A** and **R** are true but **R** is NOT the correct explanation of **A**",""),
   ("C","**A** is true but **R** is false",""),
   ("D","**A** is false but **R** is true","")],"A"),

q("botany-41","Botany","Given below are two statements: One labelled as **Assertion A** and the other is labelled as **Reason R**:\n\n**Assertion A:** In gymnosperms the pollen grains are released from the microsporangium and carried by air currents.\n\n**Reason R:** Air currents carry the pollen grains to the mouth of the archegonia where the male gametes are discharged and pollen tube is not formed.\n\nIn the light of the above statements, choose the **correct** answer from the options given below:",
  [("A","Both **A** and **R** are true and **R** is the correct explanation of **A**",""),
   ("B","Both **A** and **R** are true but **R** is NOT the correct explanation of **A**",""),
   ("C","**A** is true but **R** is false",""),
   ("D","**A** is false but **R** is true","")],"C"),

q("botany-42","Botany","Match List I with List II:\n\n**List I:** A. Cohesion, B. Adhesion, C. Surface tension, D. Guttation\n\n**List II:** I. More attraction in liquid phase, II. Mutual attraction among water molecules, III. Water loss in liquid phase, IV. Attraction towards polar surfaces\n\nChoose the correct answer from the options given below:",
  [("A","A\u2013II, B\u2013IV, C\u2013I, D\u2013III",""),("B","A\u2013IV, B\u2013III, C\u2013II, D\u2013I",""),
   ("C","A\u2013III, B\u2013I, C\u2013IV, D\u2013II",""),("D","A\u2013II, B\u2013I, C\u2013IV, D\u2013III","")],"A"),

q("botany-43","Botany","Which of the following combinations is required for chemiosmosis?",
  [("A","Membrane, proton pump, proton gradient, ATP synthase",""),
   ("B","Membrane, proton pump, proton gradient, NADP synthase",""),
   ("C","Proton pump, electron gradient, ATP synthase",""),
   ("D","Proton pump, electron gradient, NADP synthase","")],"A"),

q("botany-44","Botany","Melonate inhibits the growth of pathogenic bacteria by inhibiting the activity of",
  [("A","Succinic dehydrogenase",""),("B","Amylase",""),("C","Lipase",""),("D","Dinitrogenase","")],"A"),

q("botany-45","Botany","Identify the **correct** statements:\nA. Lenticels are the lens-shaped openings permitting the exchange of gases.\nB. Bark formed early in the season is called hard bark.\nC. Bark is a technical term that refers to all tissues exterior to vascular cambium.\nD. Bark refers to periderm and secondary phloem.\nE. Phellogen is single-layered in thickness.\n\nChoose the correct answer from the options given below:",
  [("A","B, C and E only",""),("B","A and D only",""),
   ("C","A, B and D only",""),("D","B and C only","")],"B"),

q("botany-46","Botany","Match List I with List II:\n\n**List I:** A. M Phase, B. $G_2$ Phase, C. Quiescent stage, D. $G_1$ Phase\n\n**List II:** I. Proteins are synthesized, II. Inactive phase, III. Interval between mitosis and initiation of DNA replication, IV. Equational division\n\nChoose the correct answer from the options given below:",
  [("A","A-III, B-II, C-IV, D-I",""),("B","A-IV, B-II, C-I, D-III",""),
   ("C","A-IV, B-I, C-II, D-III",""),("D","A-II, B-IV, C-I, D-III","")],"C"),

q("botany-47","Botany","Match List I with List II:\n\n**List I (Interaction):** A. Mutualism, B. Commensalism, C. Amensalism, D. Parasitism\n\n**List II (Species A and B):** I. +(A), 0(B), II. \u2013(A), 0(B), III. +(A), \u2013(B), IV. +(A), +(B)\n\nChoose the **correct** answer from the options given below:",
  [("A","A-IV, B-II, C-I, D-III",""),("B","A-IV, B-I, C-II, D-III",""),
   ("C","A-IV, B-III, C-I, D-II",""),("D","A-III, B-I, C-IV, D-II","")],"B"),

q("botany-48","Botany","Given below are two statements:\n\n**Statement I:** Gause\u2019s \u2018Competitive Exclusion Principle\u2019 states that two closely related species competing for the same resources cannot co-exist indefinitely and competitively inferior one will be eliminated eventually.\n\n**Statement II:** In general, carnivores are more adversely affected by competition than herbivores.\n\nIn the light of the above statements, choose the **correct** answer from the options given below:",
  [("A","Both Statement I and Statement II are true.",""),
   ("B","Both Statement I and Statement II are false.",""),
   ("C","Statement I is correct but Statement II is false.",""),
   ("D","Statement I is incorrect but Statement II is true.","")],"C"),

q("botany-49","Botany","Match List I with List II:\n\n**List I:** A. Iron, B. Zinc, C. Boron, D. Molybdenum\n\n**List II:** I. Synthesis of auxin, II. Component of nitrate reductase, III. Activator of catalase, IV. Cell elongation and differentiation\n\nChoose the correct answer from the options given below:",
  [("A","A-III, B-II, C-I, D-IV",""),("B","A-II, B-III, C-IV, D-I",""),
   ("C","A-III, B-I, C-IV, D-II",""),("D","A-II, B-IV, C-I, D-III","")],"C"),

q("botany-50","Botany","Main steps in the formation of Recombinant DNA are given below. Arrange these steps in a correct sequence.\nA. Insertion of recombinant DNA into the host cell\nB. Cutting of DNA at specific location by restriction enzyme\nC. Isolation of desired DNA fragment\nD. Amplification of gene of interest using PCR\n\nChoose the correct answer from the options given below:",
  [("A","B, C, D, A",""),("B","C, A, B, D",""),("C","C, B, D, A",""),("D","B, D, A, C","")],"A"),
]

# ── ZOOLOGY ───────────────────────────────────────────────────────────────────
questions += [
q("zoology-1","Zoology","Match List I with List II.\n\n**List I:** A. Vasectomy, B. Coitus interruptus, C. Cervical caps, D. Saheli\n\n**List II:** I. Oral method, II. Barrier method, III. Surgical method, IV. Natural method\n\nChoose the **correct** answer from the options given below:",
  [("A","A-III, B-I, C-IV, D-II",""),("B","A-III, B-IV, C-II, D-I",""),
   ("C","A-II, B-III, C-I, D-IV",""),("D","A-IV, B-II, C-I, D-III","")],"B"),

q("zoology-2","Zoology","Given below are two statements:\n\n**Statement I:** Vas deferens receives a duct from seminal vesicle and opens into urethra as the ejaculatory duct.\n\n**Statement II:** The cavity of the cervix is called cervical canal which along with vagina forms birth canal.\n\nIn the light of the above statements, choose the correct answer from the options given below:",
  [("A","Both Statement I and Statement II are true.",""),
   ("B","Both Statement I and Statement II are false.",""),
   ("C","Statement I is correct but Statement II is false.",""),
   ("D","Statement I is incorrect but Statement II is true.","")],"A"),

q("zoology-3","Zoology","Which of the following statements is correct?",
  [("A","Eutrophication refers to increase in domestic sewage and waste water in lakes.",""),
   ("B","Biomagnification refers to increase in concentration of the toxicant at successive trophic levels.",""),
   ("C","Presence of large amount of nutrients in water restricts \u2018Algal Bloom\u2019",""),
   ("D","Algal Bloom decreases fish mortality","")],"B"),

q("zoology-4","Zoology","Which one of the following symbols represents mating between relatives in human pedigree analysis?",
  [("A","","assets/exams/neet/zoology/q4-opt-a.png"),
   ("B","","assets/exams/neet/zoology/q4-opt-b.png"),
   ("C","","assets/exams/neet/zoology/q4-opt-c.png"),
   ("D","","assets/exams/neet/zoology/q4-opt-d.png")],"B",image="assets/exams/neet/zoology/q4.png",issue="Options are pedigree diagram symbols"),

q("zoology-5","Zoology","Which one of the following common sexually transmitted diseases is completely curable when detected early and treated properly?",
  [("A","Genital herpes",""),("B","Gonorrhoea",""),("C","Hepatitis-B",""),("D","HIV Infection","")],"B"),

q("zoology-6","Zoology","Match List I with List II.\n\n**List I:** A. Heroin, B. Marijuana, C. Cocaine, D. Morphine\n\n**List II:** I. Effect on cardiovascular system, II. Slow down body function, III. Painkiller, IV. Interfere with transport of dopamine\n\nChoose the **correct** answer from the options given below:",
  [("A","A-II, B-I, C-IV, D-III",""),("B","A-I, B-II, C-III, D-IV",""),
   ("C","A-IV, B-III, C-II, D-I",""),("D","A-III, B-IV, C-I, D-II","")],"A"),

q("zoology-7","Zoology","Match List I with List II.\n\n**List I (Type of Joint):** A. Cartilaginous Joint, B. Ball and Socket Joint, C. Fibrous Joint, D. Saddle Joint\n\n**List II (Found between):** I. Between flat skull bones, II. Between adjacent vertebrae in vertebral column, III. Between carpal and metacarpal of thumb, IV. Between Humerus and Pectoral girdle\n\nChoose the **correct** answer from the options given below:",
  [("A","A-III, B-I, C-II, D-IV",""),("B","A-II, B-IV, C-I, D-III",""),
   ("C","A-I, B-IV, C-III, D-II",""),("D","A-II, B-IV, C-III, D-I","")],"B"),

q("zoology-8","Zoology","Given below are two statements:\n\n**Statement I:** A protein is imagined as a line, the left end represented by first amino acid (C-terminal) and the right end represented by last amino acid (N-terminal).\n\n**Statement II:** Adult human haemoglobin, consists of 4 subunits (two subunits of $\\alpha$ type and two subunits of $\\beta$ type.)\n\nIn the light of the above statements, choose the **correct** answer from the options given below:",
  [("A","Both Statement I and Statement II are true",""),
   ("B","Both Statement I and Statement II are false.",""),
   ("C","Statement I is true but Statement II is false.",""),
   ("D","Statement I is false but Statement II is true.","")],"D"),

q("zoology-9","Zoology","Which of the following are NOT considered as the part of endomembrane system?\nA. Mitochondria\nB. Endoplasmic reticulum\nC. Chloroplasts\nD. Golgi complex\nE. Peroxisomes\n\nChoose the **most appropriate** answer from the options given below:",
  [("A","B and D only",""),("B","A, C and E only",""),("C","A and D only",""),("D","A, D and E only","")],"B"),

q("zoology-10","Zoology","Given below are two statements:\n\n**Statement I:** RNA mutates at a faster rate.\n\n**Statement II:** Viruses having RNA genome and shorter life span mutate and evolve faster.\n\nIn the light of the above statements, choose the **correct** answer from the options given below:",
  [("A","Both Statement I and Statement II are true.",""),
   ("B","Both Statement I and Statement II are false.",""),
   ("C","Statement I is true but Statement II is false.",""),
   ("D","Statement I is false but Statement II is true.","")],"A"),

q("zoology-11","Zoology","Match List I with List II.\n\n**List I:** A. CCK, B. GIP, C. ANF, D. ADH\n\n**List II:** I. Kidney, II. Heart, III. Gastric gland, IV. Pancreas\n\nChoose the **correct** answer from the options given below:",
  [("A","A-IV, B-III, C-II, D-I",""),("B","A-III, B-II, C-IV, D-I",""),
   ("C","A-II, B-IV, C-I, D-III",""),("D","A-IV, B-II, C-III, D-I","")],"A"),

q("zoology-12","Zoology","Given below are two statements: one is labelled as **Assertion A** and the other is labelled as **Reason R**.\n\n**Assertion A:** Endometrium is necessary for implantation of blastocyst.\n\n**Reason R:** In the absence of fertilization, the corpus luteum degenerates that causes disintegration of endometrium.\n\nIn the light of the above statements, choose the **correct** answer from the options given below:",
  [("A","Both **A** and **R** are true and **R** is the correct explanation of **A**.",""),
   ("B","Both **A** and **R** are true but **R** is NOT the correct explanation of **A**.",""),
   ("C","**A** is true but **R** is false.",""),
   ("D","**A** is false but **R** is true.","")],"B"),

q("zoology-13","Zoology","Match List I with List II.\n\n**List I:** A. Ringworm, B. Filariasis, C. Malaria, D. Pneumonia\n\n**List II:** I. Haemophilus influenzae, II. Trichophyton, III. Wuchereria bancrofti, IV. Plasmodium vivax\n\nChoose the **correct** answer from the options given below:",
  [("A","A-II, B-III, C-IV, D-I",""),("B","A-II, B-III, C-I, D-IV",""),
   ("C","A-III, B-II, C-I, D-IV",""),("D","A-III, B-II, C-IV, D-I","")],"A"),

q("zoology-14","Zoology","Given below are two statements:\n\n**Statement I:** Low temperature preserves the enzyme in a temporarily inactive state whereas high temperature destroys enzymatic activity because proteins are denatured by heat.\n\n**Statement II:** When the inhibitor closely resembles the substrate in its molecular structure and inhibits the activity of the enzyme, it is known as competitive inhibitor.\n\nIn the light of the above statements, choose the correct answer from the options given below:",
  [("A","Both Statement I and Statement II are true.",""),
   ("B","Both Statement I and Statement II are false.",""),
   ("C","Statement I is true but Statement II is false.",""),
   ("D","Statement I is false but Statement II is true.","")],"A"),

q("zoology-15","Zoology","Match List I with List II.\n\n**List I:** A. Taenia, B. Paramoecium, C. Periplaneta, D. Pheretima\n\n**List II:** I. Nephridia, II. Contractile vacuole, III. Flame cells, IV. Urecose gland\n\nChoose the **correct** answer from the options given below:",
  [("A","A-I, B-II, C-III, D-IV",""),("B","A-I, B-II, C-IV, D-III",""),
   ("C","A-III, B-II, C-IV, D-I",""),("D","A-II, B-I, C-IV, D-III","")],"C"),

q("zoology-16","Zoology","Which one of the following techniques does not serve the purpose of early diagnosis of a disease for its early treatment?",
  [("A","Recombinant DNA Technology",""),("B","Serum and Urine analysis",""),
   ("C","Polymerase Chain Reaction (PCR) technique",""),
   ("D","Enzyme Linked Immuno-Sorbent Assay (ELISA) technique","")],"B"),

q("zoology-17","Zoology","Match List I with List II.\n\n**List I (Interacting species):** A. A Leopard and a Lion in a forest/grassland, B. A Cuckoo laying egg in a Crow\u2019s nest, C. Fungi and root of a higher plant in Mycorrhizae, D. A cattle egret and a Cattle in a field\n\n**List II (Name of interaction):** I. Competition, II. Brood parasitism, III. Mutualism, IV. Commensalism\n\nChoose the **correct** answer from the options given below.",
  [("A","A-I, B-II, C-III, D-IV",""),("B","A-I, B-II, C-IV, D-III",""),
   ("C","A-III, B-IV, C-I, D-II",""),("D","A-II, B-III, C-I, D-IV","")],"A"),

q("zoology-18","Zoology","Given below are two statements:\n\n**Statement I:** Ligaments are dense irregular tissue.\n\n**Statement II:** Cartilage is dense regular tissue.\n\nIn the light of the above statements, choose the **correct** answer from the options given below:",
  [("A","Both Statement I and Statement II are true",""),
   ("B","Both Statement I and Statement II are false",""),
   ("C","Statement I is true but Statement II is false",""),
   ("D","Statement I is false but Statement II is true","")],"B"),

q("zoology-19","Zoology","Given below are two statements:\n\n**Statement I:** In prokaryotes, the positively charged DNA is held with some negatively charged proteins in a region called nucleoid.\n\n**Statement II:** In eukaryotes, the negatively charged DNA is wrapped around the positively charged histone octamer to form nucleosome.\n\nIn the light of the above statements, choose the **correct** answer from the options given below:",
  [("A","Both Statement I and Statement II are true.",""),
   ("B","Both Statement I and Statement II are false.",""),
   ("C","Statement I is correct but Statement II is false.",""),
   ("D","Statement I is incorrect but Statement II is true.","")],"D"),

q("zoology-20","Zoology","Match List I with List II with respect to human eye.\n\n**List I:** A. Fovea, B. Iris, C. Blind spot, D. Sclera\n\n**List II:** I. Visible coloured portion of eye that regulates diameter of pupil, II. External layer of eye formed of dense connective tissue, III. Point of greatest visual acuity or resolution, IV. Point where optic nerve leaves the eyeball and photoreceptor cells are absent.\n\nChoose the **correct** answer from the options given below:",
  [("A","A-III, B-I, C-IV, D-II",""),("B","A-IV, B-III, C-II, D-I",""),
   ("C","A-I, B-IV, C-III, D-II",""),("D","A-II, B-I, C-III, D-IV","")],"A"),

q("zoology-21","Zoology","Select the correct group/set of Australian Marsupials exhibiting adaptive radiation.",
  [("A","Tasmanian wolf, Bobcat, Marsupial mole",""),("B","Numbat, Spotted cuscus, Flying phalanger",""),
   ("C","Mole, Flying squirrel, Tasmanian tiger cat",""),("D","Lemur, Anteater, Wolf","")],"B"),

q("zoology-22","Zoology","Which of the following statements are correct regarding female reproductive cycle?\nA. In non-primate mammals cyclical changes during reproduction are called oestrus cycle.\nB. First menstrual cycle begins at puberty and is called menopause.\nC. Lack of menstruation may be indicative of pregnancy.\nD. Cyclic menstruation extends between menarche and menopause.\n\nChoose the **most appropriate** answer from the options given below.",
  [("A","A and D only",""),("B","A and B only",""),("C","A, B and C only",""),("D","A, C and D only","")],"D"),

q("zoology-23","Zoology","Vital capacity of lung is __________.",
  [("A","IRV + ERV",""),("B","IRV + ERV + TV + RV",""),("C","IRV + ERV + TV \u2013 RV",""),("D","IRV + ERV + TV","")],"D"),

q("zoology-24","Zoology","Match List I with List II.\n\n**List I:** A. P-wave, B. Q-wave, C. QRS complex, D. T-wave\n\n**List II:** I. Beginning of systole, II. Repolarisation of ventricles, III. Depolarisation of atria, IV. Depolarisation of ventricles\n\nChoose the **correct** answer from the options given below:",
  [("A","A-III, B-I, C-IV, D-II",""),("B","A-IV, B-III, C-II, D-I",""),
   ("C","A-II, B-IV, C-I, D-III",""),("D","A-I, B-II, C-III, D-IV","")],"A"),

q("zoology-25","Zoology","Given below are two statements: one is labelled as **Assertion A** and other is labelled as **Reason R**.\n\n**Assertion A:** Amniocentesis for sex determination is one of the strategies of Reproductive and Child Health Care Programme.\n\n**Reason R:** Ban on amniocentesis checks increasing menace of female foeticide.\n\nIn the light of the above statements, choose the **correct** answer from the options given below.",
  [("A","Both **A** and **R** are true and **R** is the correct explanation of **A**.",""),
   ("B","Both **A** and **R** are true and **R** is NOT the correct explanation of **A**.",""),
   ("C","**A** is true but **R** is false.",""),
   ("D","**A** is false but **R** is true.","")],"D"),

q("zoology-26","Zoology","Once the undigested and unabsorbed substances enter the caecum, their backflow is prevented by",
  [("A","Sphincter of Oddi",""),("B","Ileo-caecal valve",""),
   ("C","Gastro-oesophageal sphincter",""),("D","Pyloric sphincter","")],"B"),

q("zoology-27","Zoology","Match List I with List II.\n\n**List I:** A. Gene \u2018a\u2019, B. Gene \u2018y\u2019, C. Gene \u2018i\u2019, D. Gene \u2018z\u2019\n\n**List II:** I. $\\beta$-galactosidase, II. Transacetylase, III. Permease, IV. Repressor protein\n\nChoose the **correct** answer from the options given below:",
  [("A","A-II, B-I, C-IV, D-III",""),("B","A-II, B-III, C-IV, D-I",""),
   ("C","A-III, B-IV, C-I, D-II",""),("D","A-III, B-I, C-IV, D-II","")],"B"),

q("zoology-28","Zoology","Match List I with List II.\n\n**List I (Cells):** A. Peptic cells, B. Goblet cells, C. Oxyntic cells, D. Hepatic cells\n\n**List II (Secretion):** I. Mucus, II. Bile juice, III. Proenzyme pepsinogen, IV. HCl and intrinsic factor for absorption of vitamin $\\text{B}_{12}$\n\nChoose the **correct** answer from the options given below:",
  [("A","A-IV, B-III, C-II, D-I",""),("B","A-II, B-I, C-III, D-IV",""),
   ("C","A-III, B-I, C-IV, D-II",""),("D","A-II, B-IV, C-I, D-III","")],"C"),

q("zoology-29","Zoology","Which of the following functions is carried out by cytoskeleton in a cell?",
  [("A","Nuclear division",""),("B","Protein synthesis",""),("C","Motility",""),("D","Transportation","")],"C"),

q("zoology-30","Zoology","Given below are two statements: one is labelled as **Assertion A** and the other is labelled as **Reason R**.\n\n**Assertion A:** Nephrons are of two types: Cortical & Juxta medullary, based on their relative position in cortex and medulla.\n\n**Reason R:** Juxta medullary nephrons have short loop of Henle whereas, cortical nephrons have longer loop of Henle.\n\nIn the light of the above statements, choose the **correct** answer from the options given below:",
  [("A","Both **A** and **R** are true and **R** is the correct explanation of **A**.",""),
   ("B","Both **A** and **R** are true but **R** is NOT the correct explanation of **A**.",""),
   ("C","**A** is true but **R** is false.",""),
   ("D","**A** is false but **R** is true.","")],"C"),

q("zoology-31","Zoology","Given below are two statements:\n\n**Statement I:** Electrostatic precipitator is most widely used in thermal power plant.\n\n**Statement II:** Electrostatic precipitator in thermal power plant removes ionising radiations.\n\nIn the light of the above statements, choose the **most appropriate** answer from the options given below:",
  [("A","Both Statement I and Statement II are correct.",""),
   ("B","Both Statement I and Statement II are incorrect.",""),
   ("C","Statement I is correct but Statement II is incorrect.",""),
   ("D","Statement I is incorrect but Statement II is correct.","")],"C"),

q("zoology-32","Zoology","Broad palm with single palm crease is visible in a person suffering from\u2013",
  [("A","Down\u2019s syndrome",""),("B","Turner\u2019s syndrome",""),
   ("C","Klinefelter\u2019s syndrome",""),("D","Thalassemia","")],"A"),

q("zoology-33","Zoology","Radial symmetry is NOT found in adults of phylum ________.",
  [("A","Ctenophora",""),("B","Hemichordata",""),("C","Coelenterata",""),("D","Echinodermata","")],"B"),

q("zoology-34","Zoology","In which blood corpuscles, the HIV undergoes replication and produces progeny viruses?",
  [("A","$T_H$ cells",""),("B","B-lymphocytes",""),("C","Basophils",""),("D","Eosinophils","")],"A"),

q("zoology-35","Zoology","Which of the following is not a cloning vector?",
  [("A","BAC",""),("B","YAC",""),("C","pBR322",""),("D","Probe","")],"D"),

q("zoology-36","Zoology","Match List I with List II.\n\n**List I:** A. Logistic growth, B. Exponential growth, C. Expanding age pyramid, D. Stable age pyramid\n\n**List II:** I. Unlimited resource availability condition, II. Limited resource availability condition, III. The percent individuals of pre-reproductive age is largest followed by reproductive and post reproductive age groups, IV. The percent individuals of pre-reproductives and reproductive age group are same\n\nChoose the **correct** answer from the options given below:",
  [("A","A-II, B-I, C-III, D-IV",""),("B","A-II, B-III, C-I, D-IV",""),
   ("C","A-II, B-IV, C-I, D-III",""),("D","A-II, B-IV, C-III, D-I","")],"A"),

q("zoology-37","Zoology","Select the correct statements with reference to chordates.\nA. Presence of a mid-dorsal, solid and double nerve cord.\nB. Presence of closed circulatory system.\nC. Presence of paired pharyngeal gill slits.\nD. Presence of dorsal heart.\nE. Triploblastic pseudocoelomate animals.\n\nChoose the **correct** answer from the options given below:",
  [("A","A, C and D only",""),("B","B and C only",""),("C","B, D and E only",""),("D","C, D and E only","")],"B"),

q("zoology-38","Zoology","The parts of human brain that helps in regulation of sexual behaviour, expression of excitement, pleasure, rage, fear etc. are:",
  [("A","Limbic system and hypothalamus",""),("B","Corpora quadrigemina and hippocampus",""),
   ("C","Brain stem and epithalamus",""),("D","Corpus callosum and thalamus","")],"A"),

q("zoology-39","Zoology","The unique mammalian characteristics are:",
  [("A","hairs, tympanic membrane and mammary glands",""),("B","hairs, pinna and mammary glands",""),
   ("C","hairs, pinna and indirect development",""),("D","pinna, monocondylic skull and mammary glands","")],"B"),

q("zoology-40","Zoology","Which of the following are NOT under the control of thyroid hormone?\nA. Maintenance of water and electrolyte balance\nB. Regulation of basal metabolic rate\nC. Normal rhythm of sleep-wake cycle\nD. Development of immune system\nE. Support the process of RBCs formation\n\nChoose the **correct** answer from the options given below:",
  [("A","A and D only",""),("B","B and C only",""),("C","C and D only",""),("D","D and E only","")],"C"),

q("zoology-41","Zoology","Select the correct statements.\nA. Tetrad formation is seen during Leptotene.\nB. During Anaphase, the centromeres split and chromatids separate.\nC. Terminalization takes place during Pachytene.\nD. Nucleolus, Golgi complex and ER are reformed during Telophase.\nE. Crossing over takes place between sister chromatids of homologous chromosome.\n\nChoose the **correct** answer from the options given below:",
  [("A","A and C only",""),("B","B and D only",""),("C","A, C and E only",""),("D","B and E only","")],"B"),

q("zoology-42","Zoology","Match List I with List II.\n\n**List I:** A. Mast cells, B. Inner surface of bronchiole, C. Blood, D. Tubular parts of nephron\n\n**List II:** I. Ciliated epithelium, II. Areolar connective tissue, III. Cuboidal epithelium, IV. Specialised connective tissue\n\nChoose the **correct** answer from the options give below:",
  [("A","A-I, B-II, C-IV, D-III",""),("B","A-II, B-III, C-I, D-IV",""),
   ("C","A-II, B-I, C-IV, D-III",""),("D","A-III, B-IV, C-II, D-I","")],"C"),

q("zoology-43","Zoology","Which of the following is characteristic feature of cockroach regarding sexual dimorphism?",
  [("A","Dark brown body colour and anal cerci",""),("B","Presence of anal styles",""),
   ("C","Presence of sclerites",""),("D","Presence of anal cerci","")],"B"),

q("zoology-44","Zoology","Which one of the following is the sequence on corresponding coding strand, if the sequence on mRNA formed is as follows 5\u2019AUCGAUCGAUCGAUCGAUCGAUCG 3\u2019?",
  [("A","5\u2019 UAGCUAGCUAGCUAGCUAGCUAGC 3\u2019",""),
   ("B","3\u2019 UAGCUAGCUAGCUAGCUAGCUAGC 5\u2019",""),
   ("C","5\u2019 ATCGATCGATCGATCGATCGATCG 3\u2019",""),
   ("D","3\u2019 ATCGATCGATCGATCGATCGATCG 5\u2019","")],"C"),

q("zoology-45","Zoology","In cockroach, excretion is brought about by\u2013\nA. Phallic gland\nB. Urecose gland\nC. Nephrocytes\nD. Fat body\nE. Collaterial glands\n\nChoose the correct answer from the options given below:",
  [("A","A and E only",""),("B","A, B and E only",""),("C","B, C and D only",""),("D","B and D only","")],"C"),

q("zoology-46","Zoology","Given below are two statements:\n\n**Statement I:** During $G_0$ phase of cell cycle, the cell is metabolically inactive.\n\n**Statement II:** The centrosome undergoes duplication during S phase of interphase.\n\nIn the light of the above statements, choose the **most appropriate** answer from the options given below:",
  [("A","Both Statement I and Statement II are correct.",""),
   ("B","Both Statement I and Statement II are incorrect.",""),
   ("C","Statement I is correct but Statement II is incorrect.",""),
   ("D","Statement I is incorrect but Statement II is correct.","")],"D"),

q("zoology-47","Zoology","Which one of the following is NOT an advantage of inbreeding?",
  [("A","It decreases homozygosity.",""),
   ("B","It exposes harmful recessive genes but are eliminated by selection.",""),
   ("C","Elimination of less desirable genes and accumulation of superior genes takes place due to it.",""),
   ("D","It decreases the productivity of inbred population, after continuous inbreeding.","")],"D"),

q("zoology-48","Zoology","Which of the following statements are correct?\nA. An excessive loss of body fluid from the body switches off osmoreceptors.\nB. ADH facilitates water reabsorption to prevent diuresis.\nC. ANF causes vasodilation.\nD. ADH causes increase in blood pressure.\nE. ADH is responsible for decrease in GFR.\n\nChoose the **correct** answer from the options given below:",
  [("A","A and B only",""),("B","B, C and D only",""),("C","A, B and E only",""),("D","C, D and E only","")],"B"),

q("zoology-49","Zoology","Which of the following statements are correct regarding skeletal muscle?\nA. Muscle bundles are held together by collagenous connective tissue layer called fascicle.\nB. Sarcoplasmic reticulum of muscle fibre is a store house of calcium ions.\nC. Striated appearance of skeletal muscle fibre is due to distribution pattern of actin and myosin proteins.\nD. M line is considered as functional unit of contraction called sarcomere.\n\nChoose the **most appropriate** answer from the options given below:",
  [("A","A, B and C only",""),("B","B and C only",""),("C","A, C and D only",""),("D","C and D only","")],"B"),

q("zoology-50","Zoology","Which of the following statements are correct?\nA. Basophils are most abundant cells of the total WBCs\nB. Basophils secrete histamine, serotonin and heparin\nC. Basophils are involved in inflammatory response\nD. Basophils have kidney shaped nucleus\nE. Basophils are agranulocytes\n\nChoose the **correct** answer from the options given below:",
  [("A","D and E only",""),("B","C and E only",""),("C","B and C only",""),("D","A and B only","")],"C"),
]

assert len(questions) == 200, f"Got {len(questions)} questions"

output = {
    "exams": [{
        "id": "neet-pyq",
        "title": "NEET Previous Year Paper",
        "date": "2023-05-07",
        "durationMinutes": 200,
        "marksPerQuestion": 4,
        "negativeMark": 1,
        "sections": [
            {"key": "physics",   "title": "Physics",   "count": 50, "start": 1,   "end": 50},
            {"key": "chemistry", "title": "Chemistry", "count": 50, "start": 51,  "end": 100},
            {"key": "botany",    "title": "Botany",    "count": 50, "start": 101, "end": 150},
            {"key": "zoology",   "title": "Zoology",   "count": 50, "start": 151, "end": 200}
        ],
        "questions": questions
    }]
}

with open(r"C:\Users\User\Documents\GitHub\Eapcet1\scripts\_tmp_neet2023_source.json", "w", encoding="utf-8") as f:
    json.dump(output, f, separators=(',', ':'), ensure_ascii=False)

print("Done.", len(questions), "questions")