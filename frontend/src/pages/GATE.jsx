import React, { useState } from "react";
import Navbar from "../components/Navbar";

const GATE = () => {
  const [expandedTopic, setExpandedTopic] = useState(0);
  const [selectedModule, setSelectedModule] = useState(0);

  const modules = [
    {
      id: 0,
      name: "Computer Organization & Architecture (COA)",
      icon: "🖥️",
      topics: [
        {
          name: "CPU Organization",
          subtopics: [
            "Register Transfer Language (RTL)",
            "Control Unit Design",
            "Instruction Types (R, I, S Format)",
            "Fetch-Decode-Execute Cycle",
          ],
          notes:
            "The CPU executes instructions in three main stages: Fetch (get instruction), Decode (interpret), and Execute (perform operation). Registers store temporary data, and the Control Unit interprets instructions to direct operations.",
        },
        {
          name: "Memory Organization",
          subtopics: [
            "Hierarchical Memory System",
            "Cache Memory (L1, L2, L3)",
            "Virtual Memory",
            "Segmentation and Paging",
          ],
          notes:
            "Memory is organized in a pyramid: Registers (fastest, smallest) → Cache → RAM → Storage (slowest, largest). Cache stores frequently accessed data, reducing CPU wait time. Virtual memory extends physical RAM using disk storage.",
        },
        {
          name: "ALU (Arithmetic Logic Unit)",
          subtopics: [
            "Binary Operations",
            "Arithmetic Circuits",
            "Logic Circuits",
            "Carry Propagation",
          ],
          notes:
            "ALU performs arithmetic (add, subtract, multiply) and logical (AND, OR, NOT, XOR) operations. Understanding adder designs (Ripple Carry, Carry Lookahead) is crucial for optimization.",
        },
        {
          name: "I/O Systems",
          subtopics: [
            "Synchronous vs Asynchronous I/O",
            "Interrupt Handling",
            "DMA (Direct Memory Access)",
            "Bus Organization",
          ],
          notes:
            "I/O devices communicate with CPU through interrupts or polling. DMA allows I/O to access memory without CPU intervention, improving efficiency.",
        },
      ],
    },
    {
      id: 1,
      name: "GATE Exam Tips & Tricks",
      icon: "💡",
      topics: [
        {
          name: "Time Management",
          subtopics: [
            "Question analysis (1-2 min)",
            "Problem solving (2-4 min)",
            "Review (1-2 min)",
            "Skip difficult questions",
          ],
          notes:
            "GATE has 65 questions in 3 hours. Spend ~2-3 minutes per question. Don't get stuck; mark and move forward. Review all marked questions in the last 15 minutes.",
        },
        {
          name: "Scoring Strategy",
          subtopics: [
            "1-mark questions (faster)",
            "2-mark questions (higher weight)",
            "Negative marking (-1/3 for 1-mark)",
            "Weighted scoring",
          ],
          notes:
            "Prioritize 1-mark questions first (safer). Only attempt 2-mark if confident. Each wrong answer costs: 1-mark question = -1/3, 2-mark question = -2/3.",
        },
        {
          name: "Subject Priority",
          subtopics: [
            "High-priority: DBMS, OS, CN, DAA",
            "Medium-priority: COA, Compiler, TOC",
            "Low-priority: Discrete Math (basics)",
          ],
          notes:
            "GATE heavily focuses on DBMS, Operating Systems, Computer Networks, and Design of Algorithms. Master these first for maximum score improvement.",
        },
        {
          name: "Practice Approach",
          subtopics: [
            "Previous 20 years papers",
            "Topic-wise practice",
            "Full-length mocks (stress test)",
            "Analyze mistakes thoroughly",
          ],
          notes:
            "Solve at least 10-15 previous year papers to understand question patterns. Take full-length mocks under exam conditions to improve speed and accuracy.",
        },
      ],
    },
    {
      id: 2,
      name: "Data Structures & Algorithms",
      icon: "📊",
      topics: [
        {
          name: "Arrays & Strings",
          subtopics: [
            "1D & 2D Arrays",
            "String Manipulation",
            "Searching (Linear, Binary)",
            "Sorting (Bubble, Quick, Merge)",
          ],
          notes:
            "Arrays: O(1) access, O(n) insert/delete. Strings: immutable in Java. Binary Search: O(log n) only on sorted arrays. Merge Sort & Quick Sort: O(n log n) average.",
        },
        {
          name: "Linked Lists",
          subtopics: [
            "Singly/Doubly/Circular Lists",
            "Reversal & Detection",
            "Merge & Split Operations",
            "Stack & Queue using Lists",
          ],
          notes:
            "Linked List: O(n) access, O(1) insert/delete. Use Floyd's cycle detection for loops. Reverse using 3 pointers: prev, curr, next.",
        },
        {
          name: "Trees & Graphs",
          subtopics: [
            "BST, AVL, B-Trees",
            "Traversals (In, Pre, Post, Level)",
            "BFS & DFS",
            "Shortest Path (Dijkstra, BFS)",
          ],
          notes:
            "BST: O(log n) average, O(n) worst. AVL: Self-balancing, all operations O(log n). BFS: FIFO queue, shortest path. DFS: Stack/Recursion, topological sort.",
        },
        {
          name: "Dynamic Programming",
          subtopics: [
            "Fibonacci, LCS, LIS",
            "Knapsack Problem",
            "Matrix Chain Multiplication",
            "Coin Change Problem",
          ],
          notes:
            "DP = Recursion + Memoization. Identify overlapping subproblems. Use 1D → 2D arrays for optimization. Space optimization using rolling arrays.",
        },
      ],
    },
    {
      id: 3,
      name: "Operating Systems",
      icon: "⚙️",
      topics: [
        {
          name: "Process Management",
          subtopics: [
            "Process States & Transitions",
            "Context Switching",
            "Scheduling Algorithms",
            "Inter-process Communication",
          ],
          notes:
            "Process: New → Ready → Running → Waiting → Terminated. Scheduling: FCFS, SJF, SRTF, Round Robin. Shortest Job First minimizes average waiting time.",
        },
        {
          name: "Synchronization & Deadlock",
          subtopics: [
            "Critical Section Problem",
            "Semaphores & Mutex",
            "Deadlock Conditions (Mutual Exclusion, Hold & Wait, etc.)",
            "Avoidance Algorithms (Banker's Algorithm)",
          ],
          notes:
            "Mutual Exclusion: Only one process in CS. Semaphore: wait() & signal(). Deadlock needs 4 conditions → break one to prevent.",
        },
        {
          name: "Memory Management",
          subtopics: [
            "Paging & Segmentation",
            "Page Replacement (FIFO, LRU, Optimal)",
            "Virtual Memory",
            "Fragmentation & Compaction",
          ],
          notes:
            "LRU replacement: optimal in practice. Working Set Model: process uses limited page set. Belady's Anomaly: FIFO may need more frames but have more faults.",
        },
        {
          name: "File & Disk Management",
          subtopics: [
            "File Organization (Sequential, Random, Indexed)",
            "Directory Structures",
            "Disk Scheduling (FCFS, SSTF, SCAN)",
            "Free Space Management",
          ],
          notes:
            "SCAN (elevator) minimizes seek time. Inode in Unix: metadata + pointers. FAT vs NTFS: different allocation methods.",
        },
      ],
    },
    {
      id: 4,
      name: "Database Management Systems",
      icon: "🗄️",
      topics: [
        {
          name: "ER Model & Normalization",
          subtopics: [
            "Entity, Attribute, Relationship",
            "Cardinality & Participation",
            "1NF, 2NF, 3NF, BCNF",
            "Decomposition & Dependency",
          ],
          notes:
            "ER to Relations: Entity → Table, Attributes → Columns. Normalization eliminates redundancy: BCNF is most strict. Functional Dependency: X → Y if Y depends on X.",
        },
        {
          name: "SQL & Queries",
          subtopics: [
            "DDL, DML, DCL Commands",
            "JOINs (Inner, Left, Right, Full)",
            "Subqueries & Aggregations",
            "Indexes & Query Optimization",
          ],
          notes:
            "SELECT with WHERE filter. JOIN combines tables. Index: B+ tree, speeds up search O(log n). GROUP BY aggregate rows, HAVING filter groups.",
        },
        {
          name: "Transaction & Concurrency",
          subtopics: [
            "ACID Properties",
            "Isolation Levels (Read Uncommitted, Committed, Repeatable, Serializable)",
            "Concurrency Control (Locks, 2PL)",
            "Recovery Techniques",
          ],
          notes:
            "ACID ensures reliability. 2PL: Growing phase (acquire locks) → Shrinking phase (release). Dirty read, non-repeatable read, phantom read in isolation.",
        },
        {
          name: "Query Processing & Optimization",
          subtopics: [
            "Query Parsing & Validation",
            "Optimization Techniques",
            "Statistics & Cardinality",
            "Join Ordering & Algorithms",
          ],
          notes:
            "Cost-based optimization: choose plan with minimum cost. Nested Loop, Merge Sort Join, Hash Join. Index usage critical for performance.",
        },
      ],
    },
    {
      id: 5,
      name: "Computer Networks",
      icon: "🌐",
      topics: [
        {
          name: "TCP/IP Model",
          subtopics: [
            "OSI vs TCP/IP",
            "Application Layer (HTTP, HTTPS, FTP, SMTP)",
            "Transport Layer (TCP, UDP)",
            "Network Layer (IP, Routing, ICMP)",
          ],
          notes:
            "TCP: reliable, ordered, slower. UDP: fast, unreliable, used for streaming. IP: connectionless, best-effort delivery. HTTP port 80, HTTPS 443.",
        },
        {
          name: "Routing & Switching",
          subtopics: [
            "Static vs Dynamic Routing",
            "Distance Vector (RIP, BGP)",
            "Link State (OSPF, IS-IS)",
            "VLAN & Switching",
          ],
          notes:
            "RIP: broadcasts every 30s, max 15 hops. OSPF: faster convergence, bandwidth-aware. BGP: inter-domain routing. Dijkstra's algorithm used in OSPF.",
        },
        {
          name: "Network Security",
          subtopics: [
            "Symmetric Encryption (AES, DES)",
            "Asymmetric Encryption (RSA, ECC)",
            "Hashing (MD5, SHA)",
            "SSL/TLS & Digital Certificates",
          ],
          notes:
            "Public key cryptography: PKA = Personal, Private = Secret. SSL/TLS: port 443. Certificate Authority verifies identity. Hash ensures integrity.",
        },
        {
          name: "Physical & Data Link Layer",
          subtopics: [
            "Transmission Media",
            "Error Detection & Correction (CRC, Hamming)",
            "MAC Addressing & ARP",
            "Ethernet & Frame Format",
          ],
          notes:
            "MAC: 48-bit, local network. Hamming code: can correct 1 bit error. Ethernet: CSMA/CD (collision detection). MTU: max transmission unit.",
        },
      ],
    },
    {
      id: 6,
      name: "Compiler Design",
      icon: "⚡",
      topics: [
        {
          name: "Lexical & Syntax Analysis",
          subtopics: [
            "Lexeme vs Token",
            "DFA & NFA for Lexer",
            "Regular Expressions",
            "Context-Free Grammar (CFG)",
          ],
          notes:
            "Lexer: converts source → tokens. Parser: tokens → parse tree. NFA to DFA conversion: subset construction. LL(1), LR(0), SLR, CLR parsers.",
        },
        {
          name: "Semantic Analysis & Code Generation",
          subtopics: [
            "Type Checking",
            "Symbol Tables",
            "Intermediate Code (3-address code)",
            "Register Allocation",
          ],
          notes:
            "Symbol table: stores var names, types, scope. Type checking: ensures operations valid. 3-AC: t = a + b; c = t * d. Register allocation: minimizes memory access.",
        },
        {
          name: "Optimization Techniques",
          subtopics: [
            "Peephole Optimization",
            "Common Subexpression Elimination",
            "Dead Code Elimination",
            "Loop Optimization",
          ],
          notes:
            "Peephole: small sliding window, local optimization. CSE: avoid recomputation, use temp. Dead code: remove unreachable statements. Loop unrolling.",
        },
      ],
    },
    {
      id: 7,
      name: "Theory of Computation",
      icon: "🎯",
      topics: [
        {
          name: "Automata Theory",
          subtopics: [
            "DFA vs NFA",
            "Regular Languages & Expressions",
            "Pumping Lemma",
            "Minimization & Equivalence",
          ],
          notes:
            "DFA: deterministic, one transition per input. NFA: non-deterministic, subset of states. Pumping Lemma: proves language non-regular. Minimize DFA: partition by states.",
        },
        {
          name: "Context-Free Languages",
          subtopics: [
            "CFG & Parse Trees",
            "Ambiguity & Parsing",
            "Pushdown Automata (PDA)",
            "Greibach Normal Form",
          ],
          notes:
            "CFG: Variables, Terminals, Productions, Start. PDA: FSA + Stack. LL vs LR parsing differences. Greibach NF: single terminal on RHS.",
        },
        {
          name: "Turing Machine & Decidability",
          subtopics: [
            "Turing Machine Definition & Acceptance",
            "Recursively Enumerable & Recursive Languages",
            "Halting Problem & Undecidability",
            "Rice's Theorem",
          ],
          notes:
            "Turing: most powerful automaton, any algorithm representable. Halting problem: undecidable (proven by contradiction). RE: TM exists & accepts if yes.",
        },
        {
          name: "Complexity Classes",
          subtopics: [
            "P, NP, NP-Complete, NP-Hard",
            "Time & Space Complexity",
            "Satisfiability (SAT)",
            "Reduction & Cook-Levin Theorem",
          ],
          notes:
            "P: solvable in polynomial time. NP: verifiable in polynomial. NP-Complete: hardest in NP. NP ⊆ NP-Hard, NP-Complete ⊂ NP-Hard.",
        },
      ],
    },
  ];

  const pageStyle = {
    minHeight: "100vh",
    fontFamily: "Poppins, sans-serif",
    color: "#1e293b",
    paddingTop: "100px",
    paddingBottom: "80px",
    background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: "60px",
    paddingTop: "40px",
  };

  const titleStyle = {
    fontSize: "48px",
    fontWeight: "800",
    marginBottom: "15px",
    background: "linear-gradient(90deg, #667eea, #764ba2, #ec4899)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const subtitleStyle = {
    fontSize: "18px",
    color: "#475569",
    marginBottom: "30px",
  };

  const moduleGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginBottom: "50px",
  };

  const moduleCardStyle = {
    padding: "20px",
    borderRadius: "15px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    background:
      selectedModule === modules[expandedTopic]?.id
        ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        : "white",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    border:
      selectedModule === modules[expandedTopic]?.id ? "none" : "1px solid #e5e7eb",
  };

  const topicSectionStyle = {
    background: "white",
    borderRadius: "15px",
    padding: "30px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    marginBottom: "40px",
  };

  const topicHeaderStyle = {
    fontSize: "32px",
    fontWeight: "800",
    marginBottom: "30px",
    display: "flex",
    alignItems: "center",
    gap: "15px",
    background: "linear-gradient(90deg, #667eea, #764ba2)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const topicItemStyle = {
    marginBottom: "20px",
    borderRadius: "10px",
    border: "2px solid #f0f0f0",
    overflow: "hidden",
    transition: "all 0.3s ease",
  };

  const topicItemHeaderStyle = {
    padding: "15px 20px",
    backgroundColor: "#f9fafb",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    transition: "all 0.3s ease",
  };

  const topicContentStyle = {
    padding: "20px",
    backgroundColor: "#f5f7fa",
    display: "none",
  };

  const subtopicListStyle = {
    marginBottom: "15px",
  };

  const subtopicStyle = {
    listStyleType: "none",
    padding: "8px 0 8px 20px",
    borderLeft: "3px solid #667eea",
    paddingLeft: "15px",
  };

  const notesStyle = {
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "8px",
    borderLeft: "4px solid #667eea",
    marginTop: "15px",
    fontStyle: "italic",
    color: "#475569",
  };

  return (
    <>
      <Navbar />
      <div style={pageStyle}>
        <div style={containerStyle}>
          <div style={headerStyle}>
            <h1 style={titleStyle}>🎓 GATE CS & IT Preparation</h1>
            <p style={subtitleStyle}>
              Comprehensive Easy-Crack Notes and Lectures for Computer Science and Information Technology GATE Preparation
            </p>
          </div>

          {/* Module Selection */}
          <div style={moduleGridStyle}>
            {modules.map((module, index) => (
              <div
                key={module.id}
                style={{
                  ...moduleCardStyle,
                  backgroundColor:
                    selectedModule === module.id
                      ? "#667eea"
                      : index === 0
                      ? "linear-gradient(135deg, #667eea, #764ba2)"
                      : "white",
                  color: selectedModule === module.id || index === 0 ? "white" : "#1e293b",
                }}
                onClick={() => {
                  setSelectedModule(module.id);
                  setExpandedTopic(0);
                }}
                onMouseEnter={(e) => {
                  if (selectedModule !== module.id) {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 24px rgba(102, 126, 234, 0.3)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
                }}
              >
                <div style={{ fontSize: "28px", marginBottom: "10px" }}>
                  {module.icon}
                </div>
                <div style={{ fontWeight: "600", textAlign: "center" }}>
                  {module.name}
                </div>
              </div>
            ))}
          </div>

          {/* Topic Content */}
          <div style={topicSectionStyle}>
            <h2 style={topicHeaderStyle}>
              {modules[selectedModule].icon} {modules[selectedModule].name}
            </h2>

            {modules[selectedModule].topics.map((topic, topicIndex) => (
              <div key={topicIndex} style={topicItemStyle}>
                <div
                  style={{
                    ...topicItemHeaderStyle,
                    backgroundColor:
                      expandedTopic === topicIndex ? "#667eea" : "#f9fafb",
                    color: expandedTopic === topicIndex ? "white" : "#1e293b",
                  }}
                  onClick={() =>
                    setExpandedTopic(expandedTopic === topicIndex ? -1 : topicIndex)
                  }
                  onMouseEnter={(e) => {
                    if (expandedTopic !== topicIndex) {
                      e.currentTarget.style.backgroundColor = "#e8eef7";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (expandedTopic !== topicIndex) {
                      e.currentTarget.style.backgroundColor = "#f9fafb";
                    }
                  }}
                >
                  <span>{topic.name}</span>
                  <span>{expandedTopic === topicIndex ? "▼" : "▶"}</span>
                </div>

                {expandedTopic === topicIndex && (
                  <div style={{ ...topicContentStyle, display: "block" }}>
                    <h4 style={{ marginBottom: "10px", color: "#667eea" }}>
                      Key Points:
                    </h4>
                    <ul style={subtopicListStyle}>
                      {topic.subtopics.map((subtopic, idx) => (
                        <li key={idx} style={subtopicStyle}>
                          {subtopic}
                        </li>
                      ))}
                    </ul>
                    <div style={notesStyle}>
                      <strong>📝 Notes:</strong> {topic.notes}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick Reference */}
          <div
            style={{
              background: "white",
              borderRadius: "15px",
              padding: "30px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              marginBottom: "40px",
            }}
          >
            <h2 style={{ ...titleStyle, marginBottom: "20px" }}>
              📚 Study Resources & Tips
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "20px",
              }}
            >
              {[
                {
                  title: "Easy Crack Strategy",
                  tips: [
                    "✅ Complete all previous year GATE papers",
                    "✅ Focus on high-weightage topics first",
                    "✅ Practice 4-5 mocks weekly",
                    "✅ Clear fundamentals before advanced topics",
                  ],
                },
                {
                  title: "Time Management",
                  tips: [
                    "✅ 2-3 hours daily focused study",
                    "✅ Weekend revisions and tests",
                    "✅ 1 month before: full-length mocks",
                    "✅ Last 2 weeks: revise and practice",
                  ],
                },
                {
                  title: "Expected Cutoff",
                  tips: [
                    "✅ General Category: 34-35 marks",
                    "✅ OBC Category: 30-32 marks",
                    "✅ SC/ST Category: 23-25 marks",
                    "✅ Aim for: 50+ marks for good rank",
                  ],
                },
              ].map((section, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: "#f9fafb",
                    padding: "20px",
                    borderRadius: "10px",
                    border: "2px solid #667eea",
                  }}
                >
                  <h3 style={{ color: "#667eea", marginBottom: "15px" }}>
                    {section.title}
                  </h3>
                  {section.tips.map((tip, tipIdx) => (
                    <p key={tipIdx} style={{ margin: "8px 0", fontSize: "14px" }}>
                      {tip}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GATE;
