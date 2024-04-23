// // // AuthContext.js
// // import React, { createContext, useState, useEffect } from "react";

// // const AuthContext = createContext();

// // export const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null);

// //   useEffect(() => {
// //     // Check if user data exists in localStorage
// //     const storedUser = localStorage.getItem("user");
// //     if (storedUser) {
// //       setUser(JSON.parse(storedUser));
// //     }
// //   }, []);

// //   const login = (userData) => {
// //     // Perform login logic and set user state
// //     setUser(userData);
// //     // Store user data in localStorage
// //     localStorage.setItem("user", JSON.stringify(userData));
// //   };

// //   const logout = () => {
// //     // Perform logout logic and clear user state
// //     setUser(null);
// //     // Clear user data from localStorage
// //     localStorage.removeItem("user");
// //   };

// //   return (
// //     <AuthContext.Provider value={{ user, login, logout }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // export const useAuth = () => React.useContext(AuthContext);

// import React, { createContext, useState, useEffect } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Check if user data exists in localStorage
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     } else {
//       setUser("user");
//     }
//   }, []);

//   const login = async (userData) => {
//     try {
//       // Perform login logic asynchronously
//       // For example, make an API request to authenticate the user
//       const response = await fetch("your_login_endpoint", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(userData),
//       });

//       if (!response.ok) {
//         throw new Error("Login failed");
//       }

//       // Assuming the response contains user data
//       const user = await response.json();

//       // Set user state and store user data in localStorage
//       setUser(user);
//       localStorage.setItem("user", JSON.stringify(user));
//     } catch (error) {
//       console.error("Login error:", error);
//       // Handle login error, such as showing an error message to the user
//     }
//   };

//   const logout = async () => {
//     try {
//       // Perform logout logic asynchronously
//       // For example, make an API request to logout the user
//       await fetch("your_logout_endpoint", {
//         method: "POST",
//         // Add any necessary headers or body for logout
//       });

//       // Clear user state and remove user data from localStorage
//       setUser(null);
//       localStorage.removeItem("user");
//     } catch (error) {
//       console.error("Logout error:", error);
//       // Handle logout error, such as showing an error message to the user
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => React.useContext(AuthContext);
// AuthContext.js
import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user data exists in localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData) => {
    // Perform login logic and set user state
    setUser(userData);
    // Store user data in localStorage
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    // Perform logout logic and clear user state
    setUser(null);
    // Clear user data from localStorage
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
