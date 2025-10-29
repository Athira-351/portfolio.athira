import React from "react";

const ALU = () => {
  return (
    <div style={{ padding: "3rem" }}>
        {/* overview */}
      <h1 style={{ textAlign: "center" }}>ALU, Data Path and Control Unit</h1>
      <p style={{ textAlign: "right" }}>Last Updated: 11-10-2025</p>
      <div style={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
        <div
          style={{
            border: "1px solid black",
            borderRadius: "1rem",
            padding: "1rem",
            width: "25rem",
          }}
        >
          <h3>Arithmetic & Logic Unit</h3>
          <p>
            Arithmetic and logic unit(ALU) is the part of CPU that performs all
            arithmetic and logical operations
          </p>
        </div>
        <div
          style={{
            border: "1px solid black",
            borderRadius: "1rem",
            padding: "1rem",
            width: "25rem",
          }}
        >
          <h3>Data Path</h3>
          <p>
            Data path is the part of CPU that handles the movement and
            transformation of data during instruction execution. Its like
            highway system inside the processor, connecting all the important
            places where data travels.
          </p>
        </div>
        <div
          style={{
            border: "1px solid black",
            borderRadius: "1rem",
            padding: "1rem",
            width: "25rem",
          }}
        >
          <h3>Control Unit</h3>
          <p>Control Units tells what to do, when to do and how to do it.</p>
        </div>
      </div>
      {/* Arithmetic & Logic Unit (ALU) */}
      <div>
        <h2>Arithmetic & Logic Unit</h2>
        <p>The ALU is the combinational circuit that performs:</p>
        <ol>
          <li>
            <span style={{ fontWeight: "bold" }}>Arithmetic Operations</span>
            <ol>
              <li>Addition</li>
              <li>Subtraction</li>

              <li>Increment</li>
              <li>Decrement</li>
            </ol>
          </li>
          <li>
            <span style={{ fontWeight: "bold" }}>Logical Operations</span>
            <ol>
              <li>AND</li>
              <li>OR</li>
              <li>NOT</li>
              <li>XOR</li>
              <li>Comparison operators</li>
            </ol>
          </li>
        </ol>
      </div>
      <div>
        <h3>i) How ALU performs?</h3>
        <ol>
          <li>Control unit decides the instruction</li>
          <li>Sends the control signals to ALU</li>
          <li>ALU performs operations</li>
          <li>Result is store in a register</li>
          <li>Flags are updated</li>
        </ol>
      </div>
      {/* flags */}
      <div>
        <h3>ii) Hey, Wait!! What's flag you mentioned above?</h3>
        <p>
          Think of them as a status indicators that tells CPU what just happened
          after an operation
        </p>
        <p>
          Flags are single bit register stored in a spacial character called
          Status Register/Flag Register
        </p>
        <p>
          They are updated by the ALU after every arithmetic and logical
          operation.
        </p>
        <p>After each ALU operations, certain flags are set.</p>
        <table border="1">
          <thead>
            <tr>
              <th>Flag</th>
              <th>Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Zero Flag (Z)</td>
              <td>1 if result is zero</td>
            </tr>
            <tr>
              <td>Sign Flag (S)</td>
              <td>1 if result is negative</td>
            </tr>
            <tr>
              <td>Carry Flag (C)</td>
              <td>1 if there is a carry out from the most significant bit</td>
            </tr>
            <tr>
              <td>Overflow Flag (O)</td>
              <td>1 if there is an overflow in signed arithmetic</td>
            </tr>
            <tr>
              <td>Parity Flag (P)</td>
              <td>1 if the number of 1s in the result is even</td>
            </tr>
            <tr>
              <td>Auxiliary Flag (A)</td>
              <td>1 if there is a carry out from the lower nibble (4 bits)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>iii) How these flags are worked?</h3>
      <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
        <p>
          Let's take a look at how these flags are set after an ALU operation.
        <br />
            After an addition operation, the ALU will set the flags based on the
            result.
          </p>
        <div style={{ padding: "1rem", marginBottom: "2rem" }}>
          
          <div style={{ display: "flex", gap: "1rem" }}>
            <div style={{ width: "48%", gap: "2rem" }}>
              <p style={{ fontWeight: "bold" }}>Example 1:</p>
              <p>
                Let <b>R1=5</b> and <b>R2=3</b>; instruction: ADD R1, R2
              </p>
              <p>
                initial flags: <b>Z=0, S=0, C=0, O=0, P=0, A=0</b>
              </p>
              <div
                style={{
                  border: "1px solid gray",
                  borderRadius: "1rem",
                  padding: "1rem",
                  marginTop: "1rem",
                }}
              >
                <p>
                  <b>Step 1: Convert operands to binary</b>
                </p>
                <div
                  style={{
                    marginLeft: "2rem",
                    lineHeight: "0",
                    marginBottom: "2rem",
                  }}
                >
                  <p>R1 = 5 = 00000101</p>
                  <p>R2 = 3 = 00000011</p>
                </div>
                <p>
                  <b>Step 2: Perform the addition</b>
                </p>
                <div
                  style={{
                    marginLeft: "2rem",
                    lineHeight: "0",
                    marginBottom: "2rem",
                  }}
                >
                  <p> 00000101 +</p>
                  <p> 00000011</p>
                  <p>-----------</p>
                  <p> 00001000 =&gt; Result = 8</p>
                </div>
                <p>
                  <b>Step 3: Update the flags based on the result</b>
                </p>
                <div style={{ marginLeft: "2rem", marginBottom: "2rem" }}>
                  <p>Result = 8 = 00001000</p>
                  <ul>
                    <li>Zero Flag (Z): 0 (result is not zero)</li>
                    <li>Sign Flag (S): 0 (result is not negative)</li>
                    <li>Carry Flag (C): 0 (no carry out)</li>
                    <li>Overflow Flag (O): 0 (no overflow)</li>
                    <li>Parity Flag (P): 1 (even number of 1s)</li>
                    <li>Auxiliary Flag (A): 0 (no carry from lower nibble)</li>
                  </ul>
                </div>
                <p>
                  Final flags: <b>Z=0, S=0, C=0, O=0, P=1, A=0</b>
                </p>
              </div>
            </div>
            <div style={{ width: "48%", gap: "2rem" }}>
              <p style={{ fontWeight: "bold" }}>Example 2:</p>
              <p>
                Let <b>R1=9</b> and <b>R2=5</b>; instruction: ADD R1, R2
              </p>
              <p>
                initial flags: <b>Z=0, S=0, C=0, O=0, P=0, A=0</b>
              </p>
            
              <div
                style={{
                  border: "1px solid gray",
                  borderRadius: "1rem",
                  padding: "1rem",
                  marginTop: "1rem",
                }}
              >
                <p>
                  <b>Step 1: Convert operands to binary</b>
                </p>
                <div
                  style={{
                    marginLeft: "2rem",
                    lineHeight: "0",
                    marginBottom: "2rem",
                  }}
                >
                  <p>R1 = 9 = 00001001</p>
                  <p>R2 = 5 = 00000101</p>
                </div>
                <p>
                  <b>Step 2: Perform the addition</b>
                </p>
                <div
                  style={{
                    marginLeft: "2rem",
                    lineHeight: "0",
                    marginBottom: "2rem",
                  }}
                >
                  <p> 00001001 +</p>
                  <p> 00000101</p>
                  <p>-----------</p>
                  <p> 00001100 =&gt; Result = 12</p>
                </div>
                <p>
                  <b>Step 3: Update the flags based on the result</b>
                </p>
                <div style={{ marginLeft: "2rem", marginBottom: "2rem" }}>
                  <p>Result = 12 = 00001100</p>
                  <ul>
                    <li>Zero Flag (Z): 0 (result is not zero)</li>
                    <li>Sign Flag (S): 0 (result is not negative)</li>
                    <li>Carry Flag (C): 0 (no carry out)</li>
                    <li>Overflow Flag (O): 0 (no overflow)</li>
                    <li>Parity Flag (P): 1 (even number of 1s)</li>
                    <li>Auxiliary Flag (A): 1 (carry from lower nibble)</li>
                  </ul>
                </div>
                <p>
                  Final flags: <b>Z=0, S=0, C=0, O=0, P=1, A=1</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Path */}
      <div>
        <h2>Data Path</h2>
        <p>The data path is the route taken by data signals within the ALU during operations.</p>
      </div>
        <div>
          <h4>Data Path Components:</h4>
          <ul>
            <li>Registers: Hold the operands and results</li>
            <li>ALU: Performs the arithmetic and logic operations</li>
            <li>Multiplexer: Selects between different data sources</li>
            <li>Control Unit: Directs the operation of the ALU</li>
          </ul>
        </div>
        <div>
          <h4>Data Path Operation:</h4>
          <ol>
            <li>Fetch: Retrieve the instruction from memory</li>
            <li>Decode: Interpret the instruction and prepare operands</li>
            <li>Execute: Perform the operation using the ALU</li>
            <li>Store: Write the result back to the appropriate register</li>
          </ol>
          </div>
      {/* Control Unit */}
      <div>
        <h4>Control Unit Operation:</h4>
        <ol>
          <li>Instruction Fetch: Retrieve the next instruction from memory</li>
          <li>Instruction Decode: Decode the fetched instruction</li>
          <li>Control Signal Generation: Generate control signals for the ALU and other components</li>
          <li>Execution: Oversee the execution of the instruction</li>
        </ol>
      </div>
    </div>
  );
};

export default ALU;
