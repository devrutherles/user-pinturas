"use client";

export const updateRole = (data, setRole) => {
  setRole(data);
  localStorage.setItem("role", data);
};

export function getRole() {
  alert("oi");
}
